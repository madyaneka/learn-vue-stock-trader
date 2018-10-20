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
              v-model.number="quantity">
          </p>
          <p class="control">
            <button
              class="button is-info"
              @click="buyStock"
              :disabled="(quantity < 1) || (!Number.isInteger(quantity))">Buy</button>
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

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.quantity = 0
    }
  }
}
</script>
