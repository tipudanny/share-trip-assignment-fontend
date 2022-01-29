<template>
    <div>
        <nav class="navbar navbar-light navbar-expand-lg bg-light">
            <div class="container">
                <router-link to="/" class="navbar-brand" href="#">Reward System</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                     aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Reward System</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <router-link to="/customers" class="nav-link">Customers</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/products" class="nav-link">Products</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/slab" class="nav-link">Slab</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="settingDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="settingDropdown">
                                    <li @click="$router.replace('/point-setting')" style="cursor:pointer;">
                                        <a class="dropdown-item ">Point Setting</a>
                                    </li>
                                    <li @click="$router.replace('/rate-setting')" style="cursor:pointer;">
                                        <a class="dropdown-item ">Rate Setting</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    User
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                                    <li @click="$router.replace('/profile')" style="cursor:pointer;">
                                        <a class="dropdown-item ">Profile</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li @click="logout"><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        logout() {
            this.$store.commit('logout');
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

</style>