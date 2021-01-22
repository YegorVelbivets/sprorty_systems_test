<template>
    <div>
        <h1>Vue Router Demo App</h1>
        <nav>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'about' }">About</router-link> |
            <router-link :to="{ name: 'protected' }">Protected</router-link> |
            <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        computed : {
            isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        }
    }
</script>

<style scoped>
    .router-link-exact-active {
        font-weight: bold;
    }
</style>
