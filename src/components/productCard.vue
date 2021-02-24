<template>
  <div class="col">
    <div class="card h-100" id="depan">
      <img :src="product.image_url" class="card-img-top" style="width: auto; max-height:250px">
      <div class="card-body cardBody">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">$. {{ currency(product.price) }}</p>
        <p class="card-text">Stock: {{ product.stock }}</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-danger" style="width: 100%" @click.prevent="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart () {
      const ProductId = this.product.id
      // console.log(ProductId)
      this.$store.dispatch('addCart', ProductId)
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Added to Cart',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    currency (value) {
      return value.toLocaleString('en-GB')
    }
  }
}
</script>

<style>
#depan{
background-color: transparent;
 border-radius: 25px;
  box-shadow: 5px 28px 80px #db8ad2, 0px 0px 30px #81007c;
}
.cardBody{
  color: rgb(253, 253, 253);
  text-shadow: 2px 2px #000000;
  font-weight: bolder;
}
</style>
