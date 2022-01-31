<template>
    <div>
        <div v-if="loading" class="alert alert-primary" role="alert">
            <h5>Rewarded: {{ profile.reward_points  ? profile.reward_points.points : 0 }} points</h5>
            <h6 class="text-dark"> Your Slab : <span class="text-danger"> {{ profile.hasOwnProperty('slab') ? profile.slab.toUpperCase() : '--' }} </span> </h6>
        </div>
        <div class="card mb-3" style="max-width: 740px;">
            <div v-if="!loading" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div v-else class="row g-0">
                <div class="col-md-4">
                    <img :src="`https://picsum.photos/id/${profile.id+110}/350/300`" class="img-fluid rounded-start"
                         alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ profile.name }}</h5>
                        <p class="card-text">{{ profile.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Api from "../api/Api";

export default {
    name: "Profile",
    mounted() {
        this.getProfileDetails()
    },
    data() {
        return {
            profile: {},
            loading:false
        }
    },
    methods: {
        getProfileDetails() {
            Api.get(`/auth/me`)
                .then(response => {
                    this.profile = response.data
                })
                .catch(errors => {
                })
                .finally(()=>{
                    this.loading = true
                })
        }
    }
}
</script>


<style scoped>

</style>