<template>
  <div class="container">
    <search-box class="mb-3"></search-box>

    <b-button-toolbar class="mb-3">
      <b-button-group class="flex">
        <b-dropdown class="m-0" text="Sort by">
          <b-dropdown-header>This is a heading</b-dropdown-header>
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
        </b-dropdown>

        <b-dropdown class="m-0 hidden-sm-down" text="Order by">
          <b-dropdown-header>This is a heading</b-dropdown-header>
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
        </b-dropdown>

        <b-dropdown class="m-0 hidden-sm-down" text="Another dropdown">
          <b-dropdown-header>This is a heading</b-dropdown-header>
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
        </b-dropdown>
      </b-button-group>

      <!-- TODO: Add toggle grid / list view interactivity -->
      <b-button-group>
        <b-button variant="'light">
          <i class="material-icons align-middle">view_module</i>
        </b-button>
        <b-button variant="'light">
          <i class="material-icons align-middle">view_list</i>
        </b-button>
      </b-button-group>
    </b-button-toolbar>

    <search-results-item v-for="sr in sampleApiSearchResults" :key="sr.id"
      :url="sr.url"
      :name="sr.name"
      :image="sr.image"
      :description="sr.description"
      :datePublished="sr.datePublished">
    </search-results-item>
  </div>
</template>

<script>
import SearchBox from '@/components/search/SearchBox'
import SearchResultsItem from '@/components/search/SearchResultsItem'

import sampleApiSearchResults from './sample-api-search-results'

export default {
  data () {
    return {
      sampleApiSearchResults
    }
  },
  components: {
    SearchBox,
    SearchResultsItem
  }
}
</script>
