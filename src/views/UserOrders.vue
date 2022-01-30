<template>
    <div class="mt-5">
        <div class="alert alert-primary" role="alert">
            <h5>Your Orders</h5>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <div v-if="!loading" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                
                <table v-else class="table">
                    <thead>
                    <tr>
                        <th >SL#</th>
                        <th width="15%">Order id</th>
                        <th width="25%">Title</th>
                        <th >Description</th>
                        <th>Price</th>
                        <th>Reward Point</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="orders.length > 0" v-for="(order,index) in orders" :key="index">
                        <td >{{ index+1}}</td>
                        <td>{{order.id}}</td>
                        <td>{{order.product.title}}</td>
                        <td v-if="order.product.description.length > 30">{{order.product.description.substring(0,30)+"..."}}</td>
                        <td v-else>{{order.product.description}}</td>
                        <td>{{order.price}}</td>
                        <td>{{order.point_rewarded}}</td>
                        <td> <router-link class="btn btn-sm btn-warning" :to="`/order/${order.id}`"> View</router-link></td>
                    </tr>
                    <tr v-else>
                        <td colspan="7" class="text-center p-3"> <strong>No Order Yet.</strong></td>
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
    name: "UserOrders",
    mounted() {
        this.getAllOrders()
    },
    data(){
        return{
            orders:[],
            loading:false
        }
    },
    methods:{
        getAllOrders(){
            Api.get('/orders')
                .then(response =>{
                    this.loading=true
                    this.orders = response.data.data
                })
        }
    }
}
</script>

<style scoped>

</style>