<template>
    <div class="row justify-content-center">
        <div class="col-md-5 col-lg-5 mt-5">
            <form @submit.prevent="register()">
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" v-model="userInfo.name" >
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="userInfo.email">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="userInfo.password" >
                </div>
                <div class="form-text">If you already have Account, <router-link to="/login">login</router-link> here</div>
                <div class="text-center mt-4">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",
    mounted() {
        //
    },
    data(){
        return{
            userInfo:{
                name:'',
                email:'',
                password:'',
            },
        }
    },
    methods:{
        register(){
            axios.post('/auth/register',this.userInfo).then((data)=>{
            
            }).catch(error => {
            });
        },
    }
}
</script>

<style scoped>

</style>