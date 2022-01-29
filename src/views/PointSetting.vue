<template>
    <div class="mt-4">
        <div class="card">
            <div class="card-body">
                <h5>Point Setting</h5>
                <br>
                <div class="d-flex">
                    <p> Spend Amount : </p>
                    <strong> 100 </strong>
                </div>
                <div class="d-flex">
                    <p> Point rewarded :  </p>
                    <strong> 1 </strong>
                </div>
                <div class="form-text">Customer will earn 1 point to every 100 tk purchases.</div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-6">
                <div class="input-group mb-3">
                    <span class="input-group-text">Spend Amount</span>
                    <input type="number" class="form-control" placeholder="Spend Amount">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" >Point rewarded</span>
                    <input type="number" class="form-control" placeholder="Point rewarded">
                </div>
                <div class="text-end">
                    <button class="btn btn-primary"> Update</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "PointSetting"
}
</script>

<style scoped>

</style>