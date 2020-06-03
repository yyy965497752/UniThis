# Comment List

Comment List is a helper component that can be used in blog, shop and social app views for discussion between users.

## HTML

Structurally Comment List is a tree (`comment-list`) with tree nodes (`comment-list-item`). Every tree node MUST have comment (`comment`) and CAN have nested comment list (`child-comment-list`) with the same structure as described above.

```html
<div class="comment-list">
  <!-- First comment -->
  <div class="comment-list-item">
    <div class="comment">
      ...
    </div>
    <!-- Responses to first comment -->
    <div class="child-comment-list">
      <div class="comment-list-item">
        <div class="comment">
          ...
        </div>
      </div>

      <div class="comment-list-item">
        <div class="comment">
          ...
        </div>
      </div>
    </div>
  </div>

  <!-- Second comment -->
  <div class="comment-list-item">
    <div class="comment">
      ...
    </div>
  </div>
</div>
```

## Usage

Currently:

```javascript
<comment-list
  :comment-list="comments">
</comment-list>
```

In future:

```javascript
<comment
  :author="'Comment author'"
  :description="'Comment text'"
  :datePublished="'Publish date'">
</comment>

<div class="child-comment-list" role="group" v-if="comment.children">
  <div class="comment-list-item" v-for="comment in comment.children">
    <comment
      :author="comment.author"
      :description="comment.description"
      :datePublished="comment.datePublished">
    </comment>
  </div>
</div>
```
