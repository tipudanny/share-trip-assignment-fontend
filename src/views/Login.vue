<template>
    <div class="row justify-content-center">
        <div class="col-md-5 col-lg-5 mt-5">
            <form @submit.prevent="login()">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="userInfo.email">
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="userInfo.password">
                </div>
                <div class="form-text">If you don't have Account, <router-link to="/registration">sign up</router-link> here</div>
                <div class="form-text text-danger">Your Email/Password has been wrong.</div>
                <div class="text-center mt-4">
                    <button type="submit" class="btn btn-primary" :disabled="btnDisabled">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    mounted() {
        //
    },
    data(){
        return{
            userInfo:{
                email:'',
                password:'',
            },
            btnDisabled:false
        }
    },
    methods:{
        login(){
            this.btnDisabled = true;
            this.$store.dispatch("login", {vm: this, fields: this.userInfo})
                .then(response => {
                    this.$router.push('/home')
                })
                .catch(errors => {
                
                })
                .finally(() => {
                    this.btnDisabled = false;
                })
        },
    }
}
</script>

<style scoped>

</style>