<template>
  <div class="comment">
    <img class="comment__image avatar" :src="author.avatar">
    <div class="comment__content">
      <div class="comment__heading">
        <div class="comment__author">{{ author.name }}</div>
        <div class="comment__timestamp">{{ datePublished }}</div>
      </div>
      <div class="comment__description">
        {{ description }}
      </div>
      <div class="comment__actions">
        <button class="btn btn-light btn-sm" type="button">
          <i class="btn__icon material-icons">reply</i>Reply
        </button>
        <button class="btn btn-light btn-sm" type="button">
          <i class="btn__icon material-icons">favorite</i>Like
        </button>
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
    author: {
      type: Object
    },
    description: {
      type: [String, Object]
    },
    datePublished: {
      type: [String, Number]
    }
  }
}
</script>
