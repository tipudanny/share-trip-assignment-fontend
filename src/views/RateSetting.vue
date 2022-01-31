<template>
    <div class="mt-4">
        <div class="card">
            <div class="card-body">
                <div class="alert alert-primary" role="alert">
                    <h6>Reward Point Rate Setting
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
                        <p> Title : </p>
                        <strong> {{settingInfo.title}} </strong>
                    </div>
                    <div class="d-flex">
                        <p> Rate : </p>
                        <strong> {{ settingInfo.rate }} </strong>
                    </div>
                    <div class="form-text">Customer will convert every point to  <strong> {{ settingInfo.rate }}</strong> tk/-.</div>
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
                    <span class="input-group-text">Point Rate</span>
                    <input type="number" v-model="settingInfo.rate" min="0" class="form-control" placeholder="Point Price" required>
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
    name: "RateSetting",
    mounted() {
        this.getSettingInfo();
    },
    data() {
        return {
            showEditSetting: false,
            settingInfo: {
                rate: 0,
            },
            loading:false,
            isUpdate:false,
            isError:false,
        }
    },
    methods: {
        getSettingInfo() {
            Api.get(`/admin/reward-point-rate`)
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
            Api.patch(`/admin/reward-point-rate/${this.settingInfo.id}`,this.settingInfo)
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