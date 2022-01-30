<template>
    <div>
        <div class="alert alert-primary" role="alert">
            <h6>
                Order id : {{ order.id }}
                <br>
                Rewarded: {{ order.point_rewarded }} points
            </h6>
        </div>
        <div class="card mb-3" style="max-width: 740px;">
            <div v-if="!loading" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div v-else class="row g-0">
                <div class="col-md-4">
                    <img :src="`https://picsum.photos/id/${order.id+110}/350/300`" class="img-fluid rounded-start"
                         alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ order.product.title }}</h5>
                        <p class="card-text">{{ order.product.description }}</p>
                        <p class="card-text"><strong>Product Price: {{ order.price }}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Api from "../api/Api";

export default {
    name: "OrderDetails",
    mounted() {
        this.getOrderDetails()
    },
    data() {
        return {
            order: {},
            loading:false
        }
    },
    methods: {
        getOrderDetails() {
            Api.get(`/orders/${this.$route.params.id}`)
                .then(response => {
                    this.order = response.data.data
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