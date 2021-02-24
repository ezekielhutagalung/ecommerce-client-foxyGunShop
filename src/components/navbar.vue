<template>
<div>
 <nav class="navbar navbar-expand-lg navbar-light" id="navbaratas">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       <button class="btn btn-outline-light" id="nav1" style="margin-left:20px"  @click.prevent="goToCart">Cart</button>
      </li>
      <li class="nav-item">
       <button class="btn btn-outline-light" id="nav2" style="margin-left:20px" @click.prevent="goToHome">Home</button>
      </li>
      <li class="nav-item dropdown">
        <button class="btn btn-outline-light" id="nav3" style="margin-left:20px" @click.prevent="goSignOut" v-if="logStatus === true">Sign Out</button>
          <a>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
     <a class="navbar-brand" style="color: white; font-size: 25px margin-right:29px" id="nav-logo"><img src="./fox-logo-png-1658.png" style="width:100px; height:50px"></a>
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
background-color: transparent;
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
