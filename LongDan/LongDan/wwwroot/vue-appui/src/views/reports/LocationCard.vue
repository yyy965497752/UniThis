<template>
  <div class="card card-body">
    <h3 class="h5 card-title">Location</h3>
    <datamaps
      :defaultfill="hexToRgb(colors.PRIMARY, .5)"
      :highlightfillcolor="hexToRgb(colors.PRIMARY, .9)"
      :highlightbordercolor="hexToRgb(colors.PRIMARY)"
    ></datamaps>
    <div class="grid-subheader grid-subheader--small">Country/Region</div>
    <chartjs-horizontal-bar
      :scalesdisplay="false"
      :datalabel="'Sessions'"
      :labels="['United States', 'Japan', 'Canada', 'United Kingdom', 'India', 'Germany', 'France', 'Australia', 'Taiwan', 'Argentina']"
      :data="[18000, 1100, 810, 570, 595, 479, 204, 348, 150, 145]"
      :backgroundcolor="null"
      :hoverbackgroundcolor="null"
      :bordercolor="null">
    </chartjs-horizontal-bar>
  </div>
</template>

<script>
import Datamaps from '@/components/datamaps/Datamaps'

import { colors, hexToRgb } from '@/theme.conf'

export default {
  data () {
    return {
      colors
    }
  },
  components: {
    Datamaps
  },
  methods: {
    hexToRgb
  }
}
</script>
