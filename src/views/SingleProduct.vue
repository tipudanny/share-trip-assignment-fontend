<template>
    <div class="mt-5">
        <div class="card mb-3" style="max-width: 740px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="`https://picsum.photos/id/${product.id+110}/350/300`" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{product.title}}</h5>
                        <p class="card-text">{{product.description}}</p>
                        <p class="card-text"><strong>Product Price: {{product.price}}</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <button
            class="btn btn-primary rounded-0 mt-3"
            style="width: 100%;"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            Order Now</button>
        
<!--        Order Confirmation Modal    -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Product Details</h5>
                        <button ref="Close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card mb-3" style="max-width: 740px;">
                            <div class="row g-0 justify-content-center">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4 class="card-title"> {{product.title}}</h4>
                                        <p class="card-text"><strong>Description:</strong> {{product.description}}</p>
                                        <p class="card-text"><strong>Product Price: {{product.price}}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button
                            @click="orderNow(product.id)"
                            type="button"
                            class="btn btn-success"
                            :disabled="btnLoading"
                        >Confirm Order
                        </button>
                        <div v-if="btnLoading" class="text-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "../api/Api";

export default {
    name: "SingleProduct",
    mounted() {
        this.getProductDetails()
    },
    data(){
        return{
            product:{},
            btnLoading:false,
            modalHidden:false
        }
    },
    methods:{
        getProductDetails(){
            Api.get(`/products/${this.$route.params.id}`)
            .then(response=>{
                this.product = response.data.data
            })
            .catch(errors=>{})
        },
        orderNow(id){
            this.btnLoading = true
            Api.post('/orders',{"product_id":id,"price":parseFloat(this.product.price)})
            .then(response=>{
                if (response.status === 201){
                    this.$refs.Close.click();
                    this.$router.push(`/order/${response.data.order.id}`)
                }
            })
            .catch(error =>{
                //
            })
            .finally(()=>{
                this.btnLoading = false
            })
        }
    }
}
</script>

<style scoped>

</style>