<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="list-group mb-3" id="contact-list">          
          <a class="list-group-item list-group-item-action" v-for="chat in chats"
            :key="chat.id"
            href="#"
            @click="addActiveClass">
            <img class="list-group-item__start-detail avatar" v-if="chat.user" :src="chat.user.avatar">
            <div class="list-group-item__text">
              <h4 class="list-group-item__title" v-if="chat.user">{{ chat.user.name }}</h4>
              <p class="list-group-item__subtitle">{{ chat.lastMessage }}</p>
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-8">
        <conversation-message v-for="message in messages"
          :key="message.id"
          :authorname="message.sender.name"
          :authorimage="message.sender.avatar"
          :align="alignChatMessage(message.align, 'conversation__message--align-start', 'conversation__message--align-end')">
          {{ message.body }}
        </conversation-message>
        <conversation-form></conversation-form>
      </div>
    </div>
  </div>
</template>

<script>
import ConversationForm from '@/components/conversation/ConversationForm'
import ConversationMessage from '@/components/conversation/ConversationMessage'

import { chats, messages } from './sample-api-chat'
import sampleApiPeople from '../sample-api-people'

export default {
  data () {
    return {
      chats,
      messages,
      sampleApiPeople
    }
  },
  components: {
    ConversationForm,
    ConversationMessage
  },
  methods: {
    addActiveClass (evt) {
      evt.preventDefault()
      let self = evt.currentTarget
      let elems = document.querySelectorAll('#contact-list .list-group-item')
      if (!self.classList.contains('active')) {
        elems.forEach(function (elem) {
          elem.classList.remove('active')
        })
        self.classList.add('active')
      }
    },
    alignChatMessage (align, alignStartClass, alignEndClass) {
      if (align === 'start') {
        return alignStartClass
      } else {
        return alignEndClass
      }
    }
  }
}
</script>
