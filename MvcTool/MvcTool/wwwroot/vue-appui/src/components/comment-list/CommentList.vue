<!-- TODO: Rethink component's structure -->
<template>
  <div class="comment-list" role="tree">            
    <div class="comment-list-item" role="treeitem" v-for="comment in comments">
      <comment
        :author="comment.author"
        :description="comment.description"
        :datePublished="comment.datePublished">
      </comment>

      <div class="child-comment-list" v-if="comment.children" role="group">
        <div class="comment-list-item" v-for="comment in comment.children">
          <comment
            :author="comment.author"
            :description="comment.description"
            :datePublished="comment.datePublished">
          </comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from './Comment'

export default {
  props: {
    comments: {
      type: Array
    }
  },
  components: {
    Comment
  }
}
</script>
