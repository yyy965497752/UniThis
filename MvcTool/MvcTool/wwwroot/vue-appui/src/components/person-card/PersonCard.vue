<!-- TODO: Add option for horizontal / vertical layout -->
<template>
  <div class="person-card card">
    <a class="person-card__link" :href="url">
      <div class="person-card__header">
        <img class="person-card__image avatar" :src="avatar" :alt="name">
        <h4 class="person-card__title">{{ name }}</h4>
        <p class="person-card__subtitle">{{ location }}</p>
      </div>

      <div class="person-card__footer card-footer">
        <slot name="description"></slot>
        <slot name="footer"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    },
    name: {
      type: [String, Object]
    },
    location: {
      type: [String, Object]
    },
    avatar: {
      type: String
    }
  }
}
</script>
