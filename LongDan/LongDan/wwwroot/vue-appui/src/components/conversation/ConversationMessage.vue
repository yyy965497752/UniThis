<template>
  <div class="conversation__message" :class="align">
    <!-- TODO: Consider make avatar an optional component -->
    <img class="conversation__avatar avatar" :src="authorimage" :alt="authorname">
    <div class="conversation__bubble bubble">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authorname: {
      type: String
    },
    authorimage: {
      type: String
    },
    align: {
      type: String
    }
  }
}
</script>
