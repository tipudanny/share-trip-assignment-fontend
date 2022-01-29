<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <Header/>
                <router-view></router-view>
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>

import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
    name: "Layouts",
    components: {
        Footer,
        Header
    }
}
</script>

<style scoped>

</style>