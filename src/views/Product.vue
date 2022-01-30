<template>
    <div class="mt-5">
        <div class="alert alert-primary" role="alert">
            <h5>All Products</h5>
        </div>
        <br>
        <div v-if="!loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else class="row row-cols-1 row-cols-md-2 g-4">
            <div v-for="(product,index) in products" :key="index">
                <div class="col">
                    <div class="card h-100">
                        <img :src="`https://picsum.photos/id/${index+110}/100/50`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{product.title}}</h5>
                            <p class="card-text">{{product.description}}</p>
                        </div>
                        <ul class="list-group list-group-flush border-bottom-0">
                            <li class="list-group-item rounded-0  border-bottom-0">Price : {{product.price}}</li>
                        </ul>
                        <router-link :to="`/product/${product.id}`" class="btn btn-primary rounded-0">Buy Now</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "../api/Api";

export default {
    name: "Product",
    mounted() {
        this.getAllProducts();
    },
    data(){
        return{
            products:[],
            loading:false
        }
    },
    methods:{
        getAllProducts(){
            Api.get('/auth/products')
            .then(response=>{
                this.products = response.data.data
            })
            .catch(errors=>{})
            .finally(()=>{
                this.loading = true
            })
        }
    }
}
</script>

<style scoped>

</style>