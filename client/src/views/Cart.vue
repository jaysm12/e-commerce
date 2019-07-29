<template>
  <div id="cart-container">
    <CartTable />
  </div>
</template>

<script>
import CartTable from '@/components/CartTable.vue'
export default {
  name: 'cart',
  data() {
    return {

    }
  },
  created() {

  },
  components: {
    CartTable
  }
}
</script>

<style scoped>

</style>
