<template>
  <div>
    <div class="card">
      <h3 class="h5 card-header">Latest posts</h3>
      <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action" v-for="article in sampleApiArticles" :href="article.url">
          <img class="list-group-item__start-detail avatar" :src="article.image" :alt="article.name">
          <div class="list-group-item__text">
            <h4 class="list-group-item__title">{{ article.name }}</h4>
            <p class="list-group-item__subtitle">{{ article.datePublished }}</p>
          </div>
        </a>
      </div>
    </div>

    <div class="card">
      <h3 class="h5 card-header">Categories</h3>
      <div class="list-group-flush">
        <a class="list-group-item" v-for="category in articleCategories" v-if="category.url" :href="category.url">{{ category.name }}</a>
        <div class="list-group-item" v-for="category in articleCategories" v-if="category.url === undefined">{{ category }}</div>
      </div>
    </div>

    <div class="card card-body">
      <h3 class="h5 card-title">Tags</h3>
      <div class="chip-list">
        <a class="chip" v-for="tag in articleCategories" v-if="tag.url" :href="tag.url">{{ tag.name }}</a>
        <div class="chip" v-for="tag in articleCategories" v-if="tag.url === undefined">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import sampleApiArticles from './sample-api-articles'

export default {
  data () {
    return {
      articleCategories: null,
      sampleApiArticles
    }
  },
  methods: {
    extractCategories (arr) {
      let newArr = []
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].category)
      }
      this.articleCategories = newArr
    }
  },
  mounted () {
    this.extractCategories(sampleApiArticles)
  }
}
</script>
