<template>
    <div class="mt-4">
        <div class="card">
            <div class="card-body">
                <h5>Rate Setting</h5>
                <br>
                <div class="d-flex">
                    <p> Point =  </p>
                    <strong> 1  </strong>
                </div>
                <div class="d-flex">
                    <p> Price = </p>
                    <strong> 1 </strong>
                </div>
                <div class="form-text">Customer will convert every 1 point to  1 tk/-.</div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-6">
                <div class="input-group mb-3">
                    <span class="input-group-text">Point</span>
                    <input type="number" class="form-control" placeholder="Point">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" >Point Price</span>
                    <input type="number" class="form-control" placeholder="Point Price">
                </div>
                <div class="text-end">
                    <button class="btn btn-primary"> Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "../api/Api";

export default {
    name: "RateSetting",
}
</script>

<style scoped>

</style>