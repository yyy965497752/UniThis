<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-3">
        <ul class="nav nav-bordered nav-stacked mb-3">
          <li class="nav-item active">
            <a class="nav-link" href="#/system/mail">Inbox</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/system/mail">Starred</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/system/mail">Sent Mail</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/system/mail">Drafts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/system/mail">Spam</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/system/mail">Trash</a>
          </li>
        </ul>
      </div>

      <div class="col-sm-8 col-md-9">
        <b-button-toolbar class="mb-3">
          <b-button-group class="flex">
            <b-button :variant="'light'">
              <i class="btn__icon material-icons">archive</i>
              Archive
            </b-button>
            <b-button :variant="'light'">
              <i class="btn__icon material-icons">star</i>
              Star
            </b-button>
            <b-button :variant="'light'">
              <i class="btn__icon material-icons">delete</i>
              Delete
            </b-button>
          </b-button-group>

          <b-button-group>
            <b-button :variant="'light'">
              <i class="material-icons align-middle">chevron_left</i>
            </b-button>
            <b-button :variant="'light'">
              <i class="material-icons align-middle">chevron_right</i>
            </b-button>
            <b-button :variant="'light'">
              <i class="material-icons align-middle">settings</i>
            </b-button>
          </b-button-group>
        </b-button-toolbar>

        <div class="list-group">
          <div class="list-group-item list-group-item-action"
            v-for="message in sampleApiMessages"
            :key="message.id"
            @click="openMessageDialog(message)">
            <div class="list-group-item__start-detail">
              <img class="avatar avatar--small" :src="message.sender.avatar" :alt="message.sender.avatar">
            </div>
            <div class="subject flex px-3">
              {{ message.subject }}

              <ul class="iK eZ" role="toolbar">
                <li class="action actionIcon" title="Pin to the inbox" role="button">
                  <i class="material-icons">star_outline</i>
                </li>
                <li class="action actionIcon" title="Snooze until…" role="button">
                  <i class="material-icons">snooze</i>
                </li>
                <li class="action actionIcon" title="Delete" role="button">
                  <i class="material-icons">delete</i>
                </li>
                <li class="dU action actionIcon" role="button" title="Mark done">
                  <i class="material-icons">done</i>
                </li>
                <li class="action actionIcon" title="Move to…" role="button">
                  <i class="material-icons">more_vert</i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Email message modal -->
        <b-modal id="emailMessageModal" :title="activeMessage.subject">
          <div class="" role="dialog" tabindex="0" aria-describedby="dwrFZd0">
            <div class="workspace_wrap uk-panel">
              <div class="adress">
                <div class="adress-inner-div">
                  <table class="vmail_cc_address">
                    <tr>
                      <td class="address_label">
                        <span>From:</span>
                      </td>
                      <td class="input_emails">
                        <span class="emails" v-if="activeMessage.sender">
                          {{ activeMessage.sender.name }}
                        </span>
                      </td>
                    </tr>
                  </table>

                  <table class="vmail_to_address">
                    <tr>
                      <td class="address_label">
                        <span>To:</span>
                      </td>
                      <td class="input_emails">
                        <span class="emails" v-if="activeMessage.recipient">
                          {{ activeMessage.recipient.name }}
                        </span>
                        <span id="to_address" class="single-line" contenteditable="true"></span>
                      </td>
                    </tr>
                  </table>

                  <table class="vmail_subject mb-3">
                    <tr>
                      <td class="address_label">
                        <span>Subject:</span>
                      </td>
                      <td class="input_emails subject-warp">
                        <span id="subject" contenteditable="true">
                          {{ activeMessage.subject }}
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="workspace">
                <p class="editable front" contenteditable="true" v-if="activeMessage.recipient">
                  Hello, {{ activeMessage.recipient.name }}!
                </p>
                <p id="div_b" class="editable back">
                  {{ activeMessage.description }}
                </p>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/mdc-checkbox/Checkbox'
import CheckboxLabel from '@/components/mdc-checkbox/CheckboxLabel'
import SplitView from '@/components/split-view/SplitView'

import sampleApiMessages from './sample-api-emails'

let activeMessage = ''

export default {
  data () {
    return {
      sampleApiMessages,
      activeMessage,
      checked: false
    }
  },
  components: {
    Checkbox,
    CheckboxLabel,
    SplitView
  },
  methods: {
    openMessageDialog (message) {
      this.activeMessage = message
      this.$root.$emit('show::modal', 'emailMessageModal')
    }
  }
}
</script>

<style>
.address_label {
  padding-right: .5rem;
}
</style>
