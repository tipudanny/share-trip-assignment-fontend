<template>
    <div class="mt-5">
        <div class="alert alert-primary" role="alert">
            <h5>All Customers</h5>
        </div>
        <br>
        <div v-if="!loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else class="card">
            <div class="card-body">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Points</th>
                        <th scope="col">Slab</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(customer,index) in customers" :key="index">
                        <th scope="row">{{ index+1}}</th>
                        <td>{{customer.name}}</td>
                        <td>{{customer.email}}</td>
                        <td v-if="customer.reward_points">{{customer.reward_points.points}}</td>
                        <td v-else>0.00</td>
                        <td v-if="customer.hasOwnProperty('slab')"> {{ customer.slab}}</td>
                        <td v-else>--</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "../api/Api";

export default {
    name: "Customers",
    mounted() {
        this.getAllCustomers()
    },
    data(){
        return{
            customers:[],
            loading:false
        }
    },
    methods:{
        getAllCustomers(){
            Api.get('/admin/customers')
                .then(response =>{
                    this.loading = true
                    this.customers = response.data.data
                })
        }
    }
}
</script>

<style scoped>

</style>