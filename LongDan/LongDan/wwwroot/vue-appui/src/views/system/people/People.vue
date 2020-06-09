<template>
  <div class="container">
    <p>This is an example of HTTP request made with Axios.</p>
    <div class="row">
      <div class="col-6 col-md-3" v-if="people" v-for="user in people">
        <person-card
          :url="'#/system/profile'"
          :name="`${user.name} ${user.surname}`"
          :avatar="user.photo"
          :location="`${user.region}, ${user.age}`">
          <div slot="footer">
            {{ user.email }}<br>
            {{ user.phone }}<br>
            {{ user.credit_card.number }}
          </div>
        </person-card>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from '@/components/person-card/PersonCard'

import axios from 'axios'

export default {
  data () {
    return {
      people: null
    }
  },
  components: {
    PersonCard
  },
  methods: {
    // DEMO: Request with Axios
    xhr () {
      let peopleArr = []
      for (let i = 0; i < 12; i++) {
        axios.get('https://uinames.com/api/?ext')
        .then(response => {
          if (response.status === 200) {
            peopleArr.push(response.data)
          }
        })
      }
      this.people = peopleArr
    }
  },
  mounted () {
    this.xhr()
  }
}
</script>
