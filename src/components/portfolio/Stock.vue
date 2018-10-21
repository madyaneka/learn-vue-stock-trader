<template>
  <div class="column is-half">
    <nav class="panel">
      <p class="panel-heading has-background-info">
        {{ stock.name }} <small class="is-size-7">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
      </p>
      <div class="panel-block">
        <div class="field has-addons">
          <p class="control">
            <input
              type="number"
              class="input"
              placeholder="Quantity"
              v-model.number="quantity"
              :class="{ 'is-danger': insufficientQuantity }">
          </p>
          <p class="control">
            <button
              class="button is-info"
              @click="sellStock"
              :disabled="insufficientQuantity || (quantity < 1) || (!Number.isInteger(quantity))">
              {{ insufficientQuantity ? 'Not Enough' : 'Sell' }}
            </button>
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],

  data() {
    return {
      quantity: 0
    }
  },

  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },

  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellOrder(order)
      this.quantity = 0
    }
  }
}
</script>
