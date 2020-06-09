<!-- TODO: Add dynamic preview form -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card card-body">
          <h3 class="h5 card-title">Article details</h3>
          <form>
            <div class="form-group">
              <label for="article__title">Title</label>
              <input class="form-control" id="article__title" type="text" placeholder="Awesome article name...">
            </div>

            <div class="form-group mb-0">
              <label for="article__content">Content</label>
              <!-- Quill-editor -->
              <quill-editor ref="myTextEditor"
                v-model="content"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
              </quill-editor>
            </div>
          </form>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <h3 class="h5 card-title flex">Search engine listing preview</h3>
              <b-btn v-b-toggle.collapse1 size="sm">Edit SEO</b-btn>
            </div>

            <div class="google-preview">
              <span class="google__title"></span>
              <div class="google__url">
                https://awesome-website.com/
              </div>
              <div class="google__description"></div>
            </div>

            <p class="card-text">Add a title and description to see how this page might appear in a search engine listing.</p>
          </div>

          <b-collapse id="collapse1">
            <div class="card-body">
              <div class="form-group">
                <label for="seo-title-tag">Page title</label>
                <span class="text-muted">0 of 70 characters used</span>
                <input class="form-control" id="seo-title-tag" size="30" name="page[metafields_global_title_tag]" type="text">
              </div>

              <div class="form-group">
                <label for="seo-description-tag">Meta description</label>
                <span class="text-muted">0 of 160 characters used</span>
                <textarea class="form-control" id="seo-description-tag" name="page[metafields_global_description_tag]"></textarea>
              </div>

              <div class="form-group mb-0">
                <label for="object-handle">URL and handle</label>
                <input class="form-control" id="object-handle" size="30" name="page[handle]" type="text">
              </div>
            </div>
          </b-collapse>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card card-body">
          <h3 class="h5 card-title">Additional info</h3>

          <!-- TODO: Populate with API data -->
          <dl class="dl-horizontal">
            <dt>Status</dt>
            <dd>Published</dd>

            <dt>Visibility</dt>
            <dd>Public</dd>

            <dt>Created at</dt>
            <dd><time datetime="2017-05-05T08:00:00+08:00" title="5 May 2017, 00:00 GMT+5">5 May, 2017</time></dd>

            <dt>Published at</dt>
            <dd><time datetime="2017-05-05T08:00:00+08:00" title="5 May 2017, 00:00 GMT+5">5 May, 2017</time></dd>

            <dt>Updated at</dt>
            <dd class="mb-0"><time datetime="2017-05-06T08:00:00+08:00" title="6 May 2017, 00:00 GMT+5">6 May, 2017</time></dd>
          </dl>
        </div>

        <div class="card card-body">
          <h3 class="h5 card-title">Image</h3>
          <div class="layout-column text-center p-5" style="background-color: #f1f4f7;">
            <i class="material-icons text-muted mb-3" style="font-size: 48px;">insert_photo</i>
            <div class="layout-row">
              <input class="sr-only" id="file-1" name="file-1[]" type="file" data-multiple-caption="{count} files selected" multiple>
              <label class="btn btn-primary mx-auto" for="file-1">
                <i class="material-icons"></i>
                <span>Upload image</span>
              </label>
            </div>
          </div>
        </div>

        <div class="card card-body">
          <h3 class="h5 card-title">Category</h3>
          <select class="form-control">
            <option value="-1">Select a category</option>
            <option value="">Technology</option>
            <option value="">Security</option>
          </select>
        </div>

        <div class="card card-body">
          <h3 class="h5 card-title">Tags</h3>
          <div class="form-group">
            <input class="form-control" type="text">
          </div>
          <div class="chip-list">
            <div class="chip">Life</div>
            <div class="chip">Modern</div>
            <div class="chip">Beautiful</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  data () {
    return {
      name: 'base-example',
      content: 'Type description here...',
      editorOption: {
        modules: {
          toolbar: [
            [{'size': ['small', false, 'large']}],
            ['bold', 'italic'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link', 'image']
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          }
        }
      }
    }
  },
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  components: {
    quillEditor
  }
}
</script>

<style>
.box__dragndrop,
.box__uploading,
.box__success,
.box__error {
  display: none;
}
</style>
