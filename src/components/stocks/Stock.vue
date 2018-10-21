<template>
  <div class="column is-half">
    <nav class="panel">
      <p class="panel-heading has-background-info">
        {{ stock.name }} <small class="is-size-7">(Price: {{ stock.price }})</small>
      </p>
      <div class="panel-block">
        <div class="field has-addons">
          <p class="control">
            <input
              type="number"
              class="input"
              placeholder="Quantity"
              v-model.number="quantity"
              :class="{ 'is-danger': insufficientFunds }">
          </p>
          <p class="control">
            <button
              class="button is-info"
              @click="buyStock"
              :disabled="insufficientFunds || (quantity < 1) || (!Number.isInteger(quantity))">
              {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
            </button>
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['stock'],

  data() {
    return {
      quantity: 0
    }
  },

  computed: {
    funds() {
      return this.$store.getters.funds
    },

    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds
    }
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>
