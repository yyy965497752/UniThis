<template>
  <div class="split-view split-view--horizontal">
    <div class="split-view-panel split-view-panel--secondary">
      <div class="split-view-panel__content">
        <slot name="secondary"></slot>
      </div>
    </div>

    <div class="split-view-panel split-view-panel--primary">
      <div class="split-view-panel__content">
        <slot name="primary"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
