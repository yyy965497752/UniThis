<!-- TODO: Add option for horizontal / vertical layout -->
<template>
  <div class="profile-card card">
    <div v-if="bannerImage" class="profile-card__banner card-img-top" :style="{ backgroundImage: 'url(' + bannerImage + ')' }"></div>
    <div class="profile-card__content card-body">
      <a class="profile-card__avatar-wrapper text-center" :href="url">
        <img class="profile-card__avatar avatar" :src="avatarImage" :alt="name">
      </a>

      <h5 class="profile-card__title card-title text-center">
        <a href="profile.html">{{ name }}</a>
      </h5>

      <div class="profile-card__description">
        <slot name="description"></slot>
      </div>

      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Object]
    },
    avatarImage: {
      type: String
    },
    bannerImage: {
      type: String
    }
  }
}
</script>
