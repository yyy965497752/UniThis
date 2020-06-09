<template>
  <div class="profile-hero">
    <div class="profile-hero__background" :style="{ backgroundImage: `url(${bannerImage})` }"></div>
    <div class="profile-hero__foreground">
      <div class="container layout-row">
        <div class="profile-hero__avatar-wrapper">
          <img class="profile-hero__avatar avatar" :src="avatarImage" :alt="name">
        </div>
        <div class="profile-hero__content layout-row flex align-items-center">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarImage: {
      type: String
    },
    bannerImage: {
      type: String
    },
    name: {
      type: String
    }
  }
}
</script>
