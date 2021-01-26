<template>
    <div>
        <h4>Register</h4>
        <form @submit.prevent="register">
            <label for="name">Name</label>
            <div>
                <input id="name" type="text" v-model="name" required autofocus>

            </div>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required>
            </div>
            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
                <div v-if="errors['password']">
                    <ul v-for="error in errors['password']">
                        <li> {{ error }} </li>
                    </ul>
                </div>
            </div>
            <label for="password-confirm">Confirm Password</label>
            <div>
                <input id="password-confirm" type="password" v-model="password_confirmation" required>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name : "",
            email : "",
            password : "",
            password_confirmation : "",
        }
    },
    methods: {
        register: function () {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }
            this.$store.dispatch('register', data)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err))
        }
    },
    computed: {
      errors() {
          return this.$store.getters.errors;
      }
    }
}
</script>

<style scoped>

</style>
