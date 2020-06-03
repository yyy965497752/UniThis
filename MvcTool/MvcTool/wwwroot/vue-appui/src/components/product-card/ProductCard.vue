<!-- TODO: Revision markup and props -->
<!-- TODO: Add option for horizontal / vertical layout -->
<template>
  <div class="card product-card">
    <div v-if="image" class="product-card__image-wrapper">
      <img class="card-img-top product-card__image" src="/static/images/placeholder.jpg" :alt="name">
    </div>
    <div class="card-body product-card__content">
      <div class="product-card__eyebrow">{{ eyebrow }}</div>
      <div class="card-title product-card__title">{{ name }}</div>
      <div class="product-card__price">{{ offers.priceCurrency, offers.price | displayPrice }}</div>
      <div class="product-card__description">{{ description }}</div>
      <review-stars v-if="aggregateRating"
        :aggregateRating="aggregateRating">
      </review-stars>
    </div>
  </div>
</template>

<script>
import ReviewStars from '../review-stars/ReviewStars'

export default {
  props: {
    name: {
      type: String
    },
    image: {
      type: [String, Object]
    },
    description: {
      type: String
    },
    eyebrow: {
    },
    aggregateRating: {
      type: Object
    },
    offers: {
      type: Object
    }
  },
  components: {
    ReviewStars
  }
}
</script>
