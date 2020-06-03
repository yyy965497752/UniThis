<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-sm-6" v-for="article in sampleApiArticles">
            <article-card
              :name="article.name"
              :url="article.url"
              :eyebrow="article.category"
              :image="article.image">
              {{ article.description }}
            </article-card>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <blog-sidebar></blog-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/article-card/ArticleCard'
import BlogSidebar from './BlogSidebar'

import sampleApiArticles from './sample-api-articles'

export default {
  data () {
    return {
      sampleApiArticles
    }
  },
  components: {
    ArticleCard,
    BlogSidebar
  }
}
</script>
