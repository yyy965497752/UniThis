<template>
  <div class="container">
    <div class="grid-subheader">Products</div>
    <div class="card card-body card-with-inset-table">
      <v-client-table class="table-responsive"
        :data="sampleApiProducts"
        :columns="['name', 'inventory', 'price', 'brand', 'action']"
        :options="{ skin: '', sortable: ['name', 'inventory', 'brand'] }">
        <template slot="name" slot-scope="props">
          <a class="avatar-with-name" :href="props.row.url" :title="props.row.name">
            <img class="avatar" :src="props.row.image" :alt="props.row.name" role="presentation">
            <div class="name">{{ props.row.name }}</div>
          </a>
        </template>

        <template slot="price" slot-scope="props">
          {{ props.row.offers.price }}
        </template>

        <template slot="action" slot-scope="props">
          <div>
            <a class="btn btn-light btn-sm" tabindex="-1" @click="alertRowInfo(props.row.id, props.row.name)">Alert</a>
          </div>
        </template>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import sampleApiProducts from './sample-api-products'

export default {
  data () {
    return {
      sampleApiProducts
    }
  }
}
</script>

<style>
.aspect-ratio {
  position: relative;
  display: block;
  background-color: var(--gray-lightest);
  padding: 0;
}

.aspect-ratio--square {
  width: 100%;
  padding-bottom: 100%;
}

.aspect-ratio--square--50 {
  width: 50px;
  padding-bottom: 50px;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.aspect-ratio--square {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.aspect-ratio::before {
  z-index: 1;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(195, 207, 216, 0.3);
}

.aspect-ratio__content {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
