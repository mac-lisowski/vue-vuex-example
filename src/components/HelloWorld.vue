<template>
  <div>
    Counter: <strong class="counter">{{ appCounter }}</strong>

    <div>
      <button type="button" @click="increaseAppCounter()">Increase by 1</button> 
      <button type="button" @click="decreaseAppCounter()">Decrease by 1</button> 
    </div>
  </div>
</template>

<script>
import { ACTION_APP_INCREMENT, ACTION_APP_DECREMENT } from './../store/app.store'

export default {
  name: 'HelloWorld',
  computed: {
    appCounter: function() {
      return this.$store.getters.getCounter
    }
  },
  methods: {
    increaseAppCounter: function() {
      this.$store.dispatch(ACTION_APP_INCREMENT)
    },
    decreaseAppCounter: function() {
      this.$store.dispatch(ACTION_APP_DECREMENT)
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  color: #42b983;
}
</style>
