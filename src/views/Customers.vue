<template>
    <div class="mt-5">
        <div class="card">
            <div class="card-body">
                <h5>Customer Table</h5>
            </div>
        </div>
        <br>
        <div class="card">
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
                        <td></td>
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
            customers:[]
        }
    },
    methods:{
        getAllCustomers(){
            Api.get('/admin/customers')
                .then(response =>{
                    this.customers = response.data.data
                })
        }
    }
}
</script>

<style scoped>

</style>