<template>
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-3" v-for="metric in metricData">
        <div class="card card-body">
          <div class="row">
            <div class="col-7">
            <metric-table
              :label="metric.label"
              :value="metric.value | round"
              :delta="metric.delta"
              :deltaClass="metric.deltaClass">
            </metric-table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <location-card></location-card>
      </div>

      <div class="col-md-6">
        <demographics-card></demographics-card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card card-body">
          <v-client-table
            :data="sampleApiCustomers.rows"
            :columns="sampleApiCustomers.columns"
            :options="sampleApiCustomers.options">
          </v-client-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricTable from '@/components/metric-table/MetricTable'

import DemographicsCard from '../DemographicsCard'
import LocationCard from '../LocationCard'

import sampleApiAnalytics from '../analytics/sample-api-analytics'
import sampleApiCustomers from './sample-api-customers'

export default {
  data () {
    return {
      sampleApiAnalytics,
      sampleApiCustomers
    }
  },
  components: {
    DemographicsCard,
    LocationCard,
    MetricTable
  }
}
</script>
