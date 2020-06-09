<template>
  <div class="container">
    <b-button-toolbar class="mb-3">
      <b-button-group class="flex">
        <b-dropdown class="m-0" text="Add filter">
          <b-dropdown-header>This is a heading</b-dropdown-header>
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
        </b-dropdown>
      </b-button-group>

      <b-button-group>
        <b-button variant="'light">Yesterday</b-button>
        <b-button variant="'light">7 days</b-button>
        <b-button variant="'light">14 days</b-button>
        <b-button variant="'light">30 days</b-button>
      </b-button-group>
    </b-button-toolbar>

    <div class="row">
      <div class="col-md-8">
        <div class="card card-body">
          <!-- Comparison chart -->
          <chartjs-line
            :labels="sampleApiAnalytics.labels"
            :datasets="sampleApiAnalytics.datasets"
            :bordercolor="null"
            :pointbordercolor="null"
            :pointhoverbackgroundcolor="null"
            :pointhoverbordercolor="null">
          </chartjs-line>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card card-body">
          <chartjs-polar-area
            :backgroundcolor="null"
            :bordercolor="null"
            :hoverbackgroundcolor="null">
          </chartjs-polar-area>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card card-body">
          <chartjs-bar class="mb-3"
            :labels="['Pageviews', 'Sessions']"
            :data="dataset"
            :bind="true" 
            :backgroundcolor="null"
            :hoverbackgroundcolor="null"
            :bordercolor="null">
          </chartjs-bar>

          <chartjs-bar
            :labels="['Users', 'Return visits', 'New visits']"
            :data="dataset"
            :bind="true" 
            :backgroundcolor="null"
            :hoverbackgroundcolor="null"
            :bordercolor="null">
          </chartjs-bar>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card card-body">
          <chartjs-radar
            :backgroundcolor="null"
            :bordercolor="null"
            :pointbordercolor="null"
            :pointhoverbackgroundcolor="null"
            :pointhoverbordercolor="null">
          </chartjs-radar>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card card-body">
          <chartjs-bar class="mb-3"
            :labels="['Pageviews', 'Sessions']"
            :data="dataset"
            :bind="true" 
            :backgroundcolor="null"
            :hoverbackgroundcolor="null"
            :bordercolor="null">
          </chartjs-bar>

          <chartjs-bar
            :labels="['Users', 'Return visits', 'New visits']"
            :data="dataset"
            :bind="true" 
            :backgroundcolor="null"
            :hoverbackgroundcolor="null"
            :bordercolor="null">
          </chartjs-bar>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="card card-body card-with-inset-table">
          <h3 class="h5 card-title">Ad performance</h3>
          <div class="row mb-3">
            <div class="col-6">
              <metric-table
                :label="'Impressions'"
                :value="443000 | round"
                :delta="'-35.5%'"
                :deltaClass="'danger'">
              </metric-table>

              <!-- Sparkline chart -->
              <chartjs-line
                :datasets="sampleApiAnalytics.sparklineCharts.datasets"
                :option="sampleApiAnalytics.sparklineCharts.options"
                :bordercolor="null"
                :pointbordercolor="null"
                :pointhoverbackgroundcolor="null"
                :pointhoverbordercolor="null">
              </chartjs-line>
            </div>

            <div class="col-6">
              <metric-table
                :label="'Clicks'"
                :value="1000 | round"
                :delta="'-33.6%'"
                :deltaClass="'danger'">
              </metric-table>

              <!-- Sparkline chart -->
              <chartjs-line
                :labels="sampleApiAnalytics.sparklineCharts.labels"
                :datasets="sampleApiAnalytics.sparklineCharts.datasets"
                :option="sampleApiAnalytics.sparklineCharts.options"
                :scalesdisplay="false"
                :bordercolor="null"
                :pointbordercolor="null"
                :pointhoverbackgroundcolor="null"
                :pointhoverbordercolor="null">
              </chartjs-line>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <v-client-table
                :data="sampleApiCustomers.rows"
                :columns="sampleApiCustomers.columns"
                :options="sampleApiCustomers.options">
              </v-client-table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card card-body card-with-inset-table">
          <h3 class="h5 card-title">In-app purchases</h3>
          <div class="row mb-5">
            <div class="col-4">
              <metric-table
                label="Users"
                :value="14"
                delta="-33.3%"
                deltaClass="danger">
              </metric-table>

              <!-- Sparkline chart -->
              <chartjs-line
                :labels="sampleApiAnalytics.sparklineCharts.labels"
                :datasets="sampleApiAnalytics.sparklineCharts.datasets"
                :option="sampleApiAnalytics.sparklineCharts.options"
                :scalesdisplay="false"
                :bordercolor="null"
                :pointbordercolor="null"
                :pointhoverbackgroundcolor="null"
                :pointhoverbordercolor="null">
              </chartjs-line>
            </div>

            <div class="col-4">
              <metric-table
                :label="'Event count'"
                :value="16"
                :delta="'-48.4%'"
                :deltaClass="'danger'">
              </metric-table>

              <!-- Sparkline chart -->
              <chartjs-line
                :labels="sampleApiAnalytics.sparklineCharts.labels"
                :datasets="sampleApiAnalytics.sparklineCharts.datasets"
                :option="sampleApiAnalytics.sparklineCharts.options"
                :scalesdisplay="false"
                :bordercolor="null"
                :pointbordercolor="null"
                :pointhoverbackgroundcolor="null"
                :pointhoverbordercolor="null">
              </chartjs-line>
            </div>

            <div class="col-4">
              <metric-table
                label="Revenue"
                :value="'$26.13'"
                delta="-53.9% "
                deltaClass="danger">
              </metric-table>

              <!-- Sparkline chart -->
              <chartjs-line
                :labels="sampleApiAnalytics.sparklineCharts.labels"
                :datasets="sampleApiAnalytics.sparklineCharts.datasets"
                :option="sampleApiAnalytics.sparklineCharts.options"
                :bordercolor="null"
                :pointbordercolor="null"
                :pointhoverbackgroundcolor="null"
                :pointhoverbordercolor="null">
              </chartjs-line>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <v-client-table
                :data="sampleApiCustomers.rows"
                :columns="sampleApiCustomers.columns"
                :options="sampleApiCustomers.options">
              </v-client-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricTable from '@/components/metric-table/MetricTable'

import sampleApiAnalytics from './sample-api-analytics'
import sampleApiCustomers from './sample-api-customers'

export default {
  data () {
    return {
      name: '',
      names: [],
      sampleApiAnalytics,
      sampleApiCustomers
    }
  },
  components: {
    MetricTable
  },
  methods: {
    clearName () {
      this.name = ''
    },
    submit (evt) {
      if (!this.name) {
        window.alert('Please enter your name')
        return evt.cancel()
      }

      this.names.push(this.name)
      this.name = ''
    }
  }
}
</script>
