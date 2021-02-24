<template>
  <div class="home bg">
    <Navbar/>
    <div class="container-fluid mt-5">
      <div class="row ml-5">
        <div class="col-md">
          <div class="container-fluid">
            <h3 id="btn3">We Give You Only the Best</h3>
            <div class="row row-cols-1 row-cols-md-5 g-4 pt-4">
              <product-card
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/navbar'
import ProductCard from '../components/productCard'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>
#btn3{
  background-image:linear-gradient(45deg, #ff00c4, #8000ff);
  color:white;
  border-radius: 25px;
  box-shadow: 5px 5px 50px #81007c, 0px 0px 30px #81007c;
}
</style>
