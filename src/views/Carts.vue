<template>
  <div>
  <navbar/>
  <div class="row d-flex justify-content-center" >
    <!--Grid column-->
    <div class="col-lg-8">
      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4 wish-list">
          <h5 class="mb-4 cart">Your Cart:</h5>
          <div class="row mb-4">
            <div class="col-md-7 col-lg-9 col-xl-9">
              <cart-body
              v-for="cart in carts"
              :key="cart.id"
              :cart="cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/navbar'
import CartBody from '../components/Cartbody'
import { mapState } from 'vuex'
export default {
  name: 'Cart',
  components: {
    Navbar,
    CartBody
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchCart()
  },
  computed: {
    ...mapState([
      'carts'
    ])
  }
}
</script>

<style>
.cart{
  background-image:linear-gradient(45deg, #ff00c4, #8000ff);
  color:white;
  border-radius: 25px;
  box-shadow: 0px 0px 10px #81007c, 0px 0px 30px #81007c;
}
</style>
