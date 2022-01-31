<template>
    <div class="mt-4">
        <div class="card">
            <div class="card-body">
                <div class="alert alert-primary" role="alert">
                    <h6>Rewarded Point in Every Purchases
                        <button
                            @click="showEditSetting = !showEditSetting"
                            class="btn btn-sm btn-danger ms-2"
                        > {{ showEditSetting ? 'close' : 'Edit'}}
                        </button>
                    </h6>
                </div>
                <br>
                <div v-if="loading">
                    <div class="d-flex">
                        <p> Spend Amount : </p>
                        <strong> {{settingInfo.amount}} </strong>
                    </div>
                    <div class="d-flex">
                        <p> Point rewarded : </p>
                        <strong> {{ settingInfo.points}} </strong>
                    </div>
                    <div class="form-text">Customer will earn 1 point to every 100 tk purchases.</div>
                </div>
            </div>
        </div>
        <br>
        <div v-if="!loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-if="isUpdate" class="alert alert-success" role="alert">
            Update Successfully.
        </div>
        <div v-if="isError" class="alert alert-danger" role="alert">
            Update Failed, Try again...!!
        </div>
        <div v-if="showEditSetting" class="row">
            <div class="col-6">
                <div class="input-group mb-3">
                    <span class="input-group-text">Spend Amount</span>
                    <input type="number" v-model="settingInfo.amount" min="0" class="form-control" placeholder="Spend Amount" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Point rewarded</span>
                    <input type="number" v-model="settingInfo.points" min="0" class="form-control" placeholder="Point rewarded" required>
                </div>
                <div class="text-end">
                    <button @click="updateSetting" class="btn btn-primary"> Update</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import Api from "../api/Api";

export default {
    name: "PointSetting",
    mounted() {
        this.getSettingInfo();
    },
    data() {
        return {
            showEditSetting: false,
            settingInfo: {
                points: 0,
                amount: 0,
            },
            loading:false,
            isUpdate:false,
            isError:false,
        }
    },
    methods: {
        getSettingInfo() {
            Api.get(`/admin/reward-point-setting`)
                .then(response => {
                    this.settingInfo = response.data.data
                    this.loading = true
                })
                .catch(errors => {
                })
                .finally(() => {
                })
        },
        updateSetting(id) {
            Api.patch(`/admin/reward-point-setting/${this.settingInfo.id}`,this.settingInfo)
                .then(response => {
                    this.isUpdate = true
                    this.showEditSetting = false
                    this.getSettingInfo();
                })
                .catch(errors => {
                    this.isError = true
                })
                .finally(() => {
                })
        }
    }
}
</script>

<style scoped>

</style>