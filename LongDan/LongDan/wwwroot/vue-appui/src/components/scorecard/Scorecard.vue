<template>
  <div class="scorecard">
    <div class="scorecard__value">{{ value }}</div>
    <div class="scorecard__label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: [String, Object]
    },
    value: {
      type: [String, Number]
    }
  }
}
</script>
