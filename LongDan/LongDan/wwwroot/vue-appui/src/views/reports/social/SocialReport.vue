<template>
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-3" v-for="metric in sampleApiMetrics">
        <div class="card card-body">
          <div class="row">
            <div class="col-4">
              <img class="avatar" :src="`/static/images/logo_${metric.name}.svg`" alt="">
            </div>

            <div class="col-8">
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
      <div class="col-md-4">
        <profile-card
          :name="'Diana Ross'"
          :url="'#/system/profile'"
          avatarImage="/static/images/avatar_004.jpg"
          bannerImage="/static/images/photo_006.jpg">
          <div class="mdc-list mdc-list--two-line mdc-list--dense" slot="description">
            <div class="mdc-list-item">
              <i class="mdc-list-item__start-detail material-icons">email</i>
              <div class="mdc-list-item__text">
                mann.cooper@hotmail.com
                <span class="mdc-list-item__text__secondary">Email</span>
              </div>
            </div>

            <div class="mdc-list-item">
              <i class="mdc-list-item__start-detail material-icons">phone</i>
              <div class="mdc-list-item__text">
                +32(1)2290814290
                <span class="mdc-list-item__text__secondary">Phone</span>
              </div>
            </div>

            <div class="mdc-list-item">
              <i class="mdc-list-item__start-detail material-icons">place</i>
              <div class="mdc-list-item__text">
                www.awesomesite.com
                <span class="mdc-list-item__text__secondary">Website</span>
              </div>
            </div>
          </div>
        </profile-card>
      </div>

      <div class="col-md-4">
        <profile-card
          :name="'Hilbert Maccoy'"
          :url="'#/system/profile'"
          :avatarImage="'/static/images/avatar_003.jpg'"
          :bannerImage="'/static/images/photo_004.jpg'">
          <div class="mdc-list mdc-list--two-line mdc-list--dense" slot="description">
            <div class="mdc-list-item">
              <i class="mdc-list-item__start-detail material-icons">email</i>
              <div class="mdc-list-item__text">
                mann.cooper@hotmail.com
                <span class="mdc-list-item__text__secondary">Email</span>
              </div>
            </div>

            <div class="mdc-list-item">
              <i class="mdc-list-item__start-detail material-icons">phone</i>
              <div class="mdc-list-item__text">
                +32(1)2290814290
                <span class="mdc-list-item__text__secondary">Phone</span>
              </div>
            </div>

            <div class="mdc-list-item">
              <i class="mdc-list-item__start-detail material-icons">place</i>
              <div class="mdc-list-item__text">
                www.awesomesite.com
                <span class="mdc-list-item__text__secondary">Website</span>
              </div>
            </div>
          </div>
        </profile-card>
      </div>

      <div class="col-md-4">
        <datepicker :inline="true"></datepicker>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card card-body card-with-inset-table">
          <h3 class="h5 card-title">Tasks to complete (Draggable)</h3>
          <table class="table table-responsive table-inset">
            <colgroup>
              <col width="20"></col>
              <col width="20"></col>
              <col width="30"></col>
              <col></col>
              <col width="20"></col>
            </colgroup>
            <thead>
              <tr>
                <th colspan="2">Task</th>
                <th>Status</th>
                <th>Progress</th>
                <th>End time</th>
              </tr>
            </thead>

            <tbody is="draggable"
              element="tbody"
              v-model="taskList"
              :options="dragOptions"
              :move="onMove"
              @start="isDragging=true"
              @end="isDragging=false">
                <tr v-for="task in taskList" :key="task.order">
                  <td>
                     <i class="material-icons cursor-move">drag_handle</i>
                  </td>
                  <td>
                    <a href="#/reports/social">
                     {{ task.item.name }}
                    </a>
                  </td>
                  <td>
                    <span class="badge" :class="`badge-${task.item.status.class}`">
                      {{ task.item.status.name }}
                    </span>
                  </td>
                  <td class="hidden-sm-down">
                    <div class="progress">
                      <div class="progress-bar" :class="`bg-${task.item.status.class}`"
                       role="progressbar"
                        :style="{width: `${task.item.progress}%`}"
                        :aria-valuenow="task.item.progress"
                        aria-valuemin="0"
                        aria-valuemax="100">
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ task.item.endTime }}
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <h3 class="h5 card-header">Contacts</h3>
          <div class="list-group-flush">
            <a class="list-group-item list-group-item-action" v-for="user in sampleApiPeople" :href="user.url">
              <img class="list-group-item__start-detail avatar" :src="user.image">
              <div class="list-group-item__text">
                <h4 class="list-group-item__title">{{ user.name }}</h4>
                <p class="list-group-item__subtitle">{{ user.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import Draggable from 'vuedraggable'
import MetricTable from '@/components/metric-table/MetricTable'
import ProfileCard from '@/components/profile-card/ProfileCard'

import sampleApiMetrics from './sample-api-metrics'
import sampleApiPeople from './sample-api-people'
import sampleApiTasks from './sample-api-tasks'

let nowDate = new Date()

export default {
  data () {
    return {
      taskList: sampleApiTasks.map(
        (item, index) => {
          return {
            item,
            order: index + 1
          }
        }
      ),
      date: {
        time: `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`
      },
      sampleApiMetrics,
      sampleApiPeople
    }
  },
  components: {
    Datepicker,
    Draggable,
    MetricTable,
    ProfileCard
  }
}
</script>
