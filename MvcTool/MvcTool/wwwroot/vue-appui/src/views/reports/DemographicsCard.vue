<template>
  <div class="card card-body">
    <h3 class="h5 card-title">Demographics</h3>
    <div class="grid-subheader grid-subheader--small">Gender</div>
    <div class="row mb-4">
      <div class="col-8 d-flex flex-column align-self-center">
        <chartjs-bar
          :data="[1200, 1100]"
          :labels="['Female', 'Male']"
          :backgroundcolor="null"
          :hoverbackgroundcolor="null"
          :bordercolor="null">
        </chartjs-bar>
      </div>

      <div class="col-4 d-flex flex-column align-self-center">
        <metric-table class="mb-2"
          :label="'Female'"
          :value="'55.8%'"
          :delta="'+26.7%'"
          :deltaClass="'success'">
        </metric-table>

        <metric-table
          :label="'Male'"
          :value="'44.2%'"
          :delta="'+27.5%'"
          :deltaClass="'success'">
        </metric-table>
      </div>
    </div>

    <div class="grid-subheader grid-subheader--small">Age</div>
    <chartjs-horizontal-bar
      :scalesdisplay="false"
      :datalabel="'Sessions'"
      :labels="['18-24', '25-34', '35-44', '45-54', '55-64', '65+']"
      :data="[454, 606, 468, 395, 261, 158]"
      :backgroundcolor="null"
      :hoverbackgroundcolor="null"
      :bordercolor="null">
    </chartjs-horizontal-bar>
  </div>
</template>

<script>
import MetricTable from '@/components/metric-table/MetricTable'

export default {
  components: {
    MetricTable
  }
}
</script>
