<template>
    <div class="column is-10 has-text-centered authPage">
        <form @submit.prevent="invokeAuth">

            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-large" type="text" placeholder="Username" v-model="this.username">
                    <span class="icon is-large is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-large is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input is-large" type="password" placeholder="Password" v-model="this.password">
                    <span class="icon is-large is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <input class="button is-large is-success" type="submit" value="➟" >
                    
                </p>
            </div>
        </form>
    </div>
</template>

<style scoped>
.authPage{
    padding-top: 10rem;
}
</style>

<script>
export default {
  data() {
    return { username:"", password:"", authState: false }
  },
  methods: {
    invokeAuth() {
      if(this.username=='admin' && this.password=='1234'){
          this.$router.push('admin')
      }
    }
  },
}
</script>
