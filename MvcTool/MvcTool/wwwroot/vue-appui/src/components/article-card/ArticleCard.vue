<template>
  <!-- TODO: Add option for horizontal / vertical layout -->
  <div class="card article-card">
    <div v-if="image" class="article-card__image-wrapper">
      <img class="card-img-top article-card__image" src="/static/images/placeholder.jpg" :alt="title">
    </div>
    <div class="card-body article-card__content">
      <a v-if="eyebrow.url" class="article-card__eyebrow" :href="eyebrow.url">{{ eyebrow.name }}</a>
      <div v-else class="article-card__eyebrow">{{ eyebrow }}</div>
      <a class="card-title article-card__title" :href="url">{{ name }}</a>
      <div class="article-card__description">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    url: {
      type: String
    },
    eyebrow: {
      type: [String, Object]
    },
    image: {
      type: String
    }
  }
}
</script>
