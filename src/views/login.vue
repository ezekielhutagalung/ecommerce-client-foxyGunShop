<template>
<div>
<br><br>
<div class="container-fluid bg">
<h1 class="head">WELCOME TO FOXY GUN SHOP</h1>
<div>
<br><br><br>
<input type="radio" id="chk1" name="a1" style="display: none">
  <input type="radio" id="chk2" name="a1" style="display: none">
  <div class="box tai">
    <div class="a">
    </div>
    <div class="b">
      <form @submit.prevent="registerSubmit" class="frm">
        <h6 class="title">Sign up</h6>
         <input type="text" placeholder="enter your name" v-model="payload2.name">
        <input type="text" placeholder="enter your email" v-model="payload2.email">
        <input type="password" placeholder="enter your password" v-model="payload2.password">
        <br><br>
       <button  type="submit" class="btn btn-primary" value="Login" id="btn1">Sign Up</button>
        <label for="chk1" id="btm">already have an account? just login</label>
      </form>
    </div>
    <div class="c">
      <form @submit.prevent="loginSubmit" class="frm">
        <h6 class="title">Login</h6>
        <input type="text" placeholder="enter your email" v-model="payload.email">
        <input type="password" placeholder="enter your password" v-model="payload.password">
        <br>
        <br>
        <button  type="submit" class="btn btn-primary" value="Login" id="btn">login</button>
        <label for="chk2" id="btm">if u dont have an account click Here</label>
      </form>
    </div>
    <div class="d"></div>
    <div class="e"></div>
  </div>
</div>
</div>
</div>

</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Login',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      },
      payload2: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginSubmit () {
      if (!this.payload.email || !this.payload.password) {
        Swal.fire({
          text: 'Email/Password is required'
        })
      } else {
        this.$store.dispatch('loginSubmit', this.payload)
          .then(({ data }) => {
            localStorage.access_token = data.access_token
            this.$router.push('/Home')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              text: 'Email/Password is wrong'
            })
            console.log(err)
          })
      }
    },
    registerSubmit () {
      if (!this.payload2.email || !this.payload2.password || !this.payload2.name) {
        Swal.fire({
          text: 'Email/Password is required'
        })
      } else {
        this.$store.dispatch('registerSubmit', this.payload2)
          .then(data => {
            Swal.fire({
              title: 'Yeaaay REGISTER SUCCESS',
              text: 'happy shopping fellas'
            })
          })
          .catch(err => {
            Swal.fire({
              text: 'Email is already used'
            })
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

</style>
