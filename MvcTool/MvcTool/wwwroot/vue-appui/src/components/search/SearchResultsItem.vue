<template>
  <div class="MJF62LC-e-G sr sr-a card card-body MJF62LC-ob-g mb-2" role="listitem">
    <div class="sr-content-container">
      <a class="sr-graphic d-block MJF62LC-hb-b" :href="url">
        <img class="avatar" :src="image" :alt="name" role="presentation">
      </a>

      <div class="sr-item__content sr-content-text">
        <!-- sr-heading -->        <div class="sr-content">
          <h2 class="sr-title-container">
            <a class="sr-title text" :href="url" itemprop="url" :title="name">
              <span itemprop="name title">{{ name }}</span>
            </a>
          </h2>

          <div class="sr-item__subtitle summary">
            <span class="location text-muted" :title="location">{{ url }}</span>
          </div>
        </div>
        <!-- End sr-heading -->

        <div class="sr-item__description sr-desc">
          <span class="MJF62LC-ob-c" v-if="featured">Featured</span>
          <span class="text text-muted">{{ datePublished }}</span>
          <span class="text" itemprop="description">{{ description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    },
    name: {
      type: String
    },
    image: {
      type: [String, Object]
    },
    description: {
      type: String
    },
    datePublished: {
      type: [String, Object]
    }
  }
}
</script>
