<template>
  <div class="metric-table">
    <div class="metric-table__label">{{ label }}</div>
    <div class="metric-table__value">{{ value }}</div>
    <div v-if="delta" class="metric-table__delta" :class="`metric-table__delta--${deltaClass}`">{{ delta }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    value: {
      type: [String, Number]
    },
    delta: {
      type: [String, Number]
    },
    deltaClass: {
      type: String,
      default: 'success'
    }
  }
}
</script>
