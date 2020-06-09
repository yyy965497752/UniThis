<template>
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-3" v-for="widget in sampleApiMetricsSparklines">
        <div class="card card-body">
          <div class="row">
            <div class="col-5">
              <metric-table
                :label="widget.metricData.label"
                :value="widget.metricData.value | round"
                :delta="widget.metricData.delta"
                :deltaClass="widget.metricData.deltaClass">
              </metric-table>
            </div>

            <div class="col-7 hidden-xs-down">
              <!-- Sparkline chart -->
              <chartjs-line
                :labels="widget.chartLabels"
                :datasets="widget.chartDatasets"
                :option="widget.chartOptions"
                :scalesdisplay="false"
                :bordercolor="null"
                :pointbordercolor="null"
                :pointhoverbackgroundcolor="null"
                :pointhoverbordercolor="null"
                :showscales="false">
              </chartjs-line>
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
        <div class="grid-subheader">Customers (Data Grid)</div>
        <div class="card card-body card-with-inset-table">
          <v-client-table
            :data="sampleApiCustomers.rows"
            :columns="sampleApiCustomers.columns"
            :options="sampleApiCustomers.options">
            <!-- You can write specific template slot for any column
              see https://github.com/matfish2/vue-tables-2#templates -->
            <template slot="name" slot-scope="props">
              <a class="avatar-with-name" :href="props.row.url" :title="props.row.name">
                <img class="avatar" :src="props.row.avatar" :alt="props.row.name" role="presentation">
                <div class="name hidden-sm-down">{{ props.row.name }}</div>
              </a>
            </template>     

            <template slot="action" slot-scope="props">
              <a class="btn btn-light btn-sm" tabindex="-1" @click="alertRowInfo(props.row.id, props.row.name)">
                Alert
              </a>
            </template>
          </v-client-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import MetricTable from '@/components/metric-table/MetricTable'

import DemographicsCard from '../DemographicsCard'
import LocationCard from '../LocationCard'

import sampleApiMetricsSparklines from './sample-api-metrics-sparklines'
import sampleApiCustomers from '../analytics//sample-api-customers'

var state = {
  date1: new Date()
}

export default {
  data: function () {
    return {
      sampleApiMetricsSparklines,
      sampleApiCustomers,
      format: 'd MMMM yyyy',
      disabled: {},
      eventMsg: null,
      state: state,
      // Sample data for Chart.js
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      dataset: [65, 59, 80, 81, 56, 55, 40]
    }
  },
  methods: {
    // DEMO: Alert Clicked VueTables Row Info
    alertRowInfo (id, name) {
      window.alert(`\\u020BD You clicked a row with id: ${id} and name: ${name}`)
    }
  },
  components: {
    Datepicker,
    DemographicsCard,
    LocationCard,
    MetricTable
  }
}
</script>
