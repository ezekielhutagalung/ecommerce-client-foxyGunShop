<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-custom" id="navbaratas">
    <div class="container-fluid">
      <a class="navbar-brand" style="color: white; font-size: 25px" id="nav-logo"><img src="./fox-logo-png-1658.png" style="width:100px; height:50px"></a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <button class="btn btn-outline-light" id="nav1" @click.prevent="goToCart">Cart</button>
         <button class="btn btn-outline-light" id="nav2" style="margin-left:20px" @click.prevent="goToHome">Home</button>
        <button class="btn btn-outline-light" id="nav3" style="margin-left:20px" @click.prevent="goSignOut" v-if="logStatus === true">Sign Out</button>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goSignOut () {
      localStorage.clear()
      this.isLoggedIn()
      this.$router.push('/')
    },
    isLoggedIn () {
      this.$store.commit('loggedIn')
    },
    goToCart () {
      this.$router.push('/cart')
    },
    goToHome () {
      this.$router.push('/Home')
    }
  },
  created () {
    this.isLoggedIn()
  },
  computed: {
    logStatus () {
      return this.$store.state.loggedIn
    }
  }
}
</script>

<style>
#navbaratas{
border-radius: 25px;
box-shadow: 0px 0px 10px #81007c, 0px 0px 30px #81007c;
}

#nav1{
   background-image:linear-gradient(45deg, #ff00c4, #8000ff);
}

#nav2{
   background-image:linear-gradient(45deg, #ff00c4, #8000ff);
}

#nav3{
   background-image:linear-gradient(45deg, #ff00c4, #8000ff);
}
</style>
