<template>
  <div>
    <profile-hero
      :avatarImage="'/static/images/avatar_003.jpg'"
      :bannerImage="'/static/images/photo_004.jpg'">
      <div class="flex">
        <strong>John Doe</strong>
        <div class="small text-muted">user@email.com</div>
      </div>
      <a class="btn btn-success" tabindex="-1">Follow</a>
    </profile-hero>

    <div class="container">
      <div class="row">
        <div class="col-md-6 push-md-3">
          <div class="card card-body">
            <h3 class="h5 card-title">Stream</h3>
            <comment-list
              :comments="sampleApiStream">            
            </comment-list>
          </div>
        </div>

        <div class="col-md-3 push-md-3">
          <div class="card card-body">
            <h3 class="h5 card-title">Statistics</h3>
             <scorecard
              class="mb-2"
              :label="'Followers'"
              :value="14700 | round">
             </scorecard>
             <scorecard
              :label="'Posts in last 30 days'"
              :value="89 | round">
             </scorecard>
          </div>

          <div class="card card-body">
            <h3 class="h5 card-title">Followers</h3>
            <div class="avatar-list">
              <a class="avatar-list__item" href="#/system/profile">
                <img class="avatar avatar--small" src="/static/images/avatar_001.jpg" alt="">
              </a>
              <a class="avatar-list__item" href="#/system/profile">
                <img class="avatar avatar--small" src="/static/images/avatar_002.jpg" alt="">
              </a>
              <a class="avatar-list__item" href="#/system/profile">
                <img class="avatar avatar--small" src="/static/images/avatar_003.jpg" alt="">
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-3 pull-md-9">
          <div class="card card-body">
            <h3 class="h5 card-title">About</h3>
            <p>JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language.</p>
          </div>

          <div class="card-link-list mb-3">
            © 2017 Company

            <a href="#">About</a>
            <a href="#">Help</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Ads </a>

            <a href="#">Info</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Advertise</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from '@/components/comment-list/CommentList'
import ProfileCard from '@/components/profile-card/ProfileCard'
import ProfileHero from './ProfileHero'
import Scorecard from '@/components/scorecard/Scorecard'

import sampleApiStream from './sample-api-stream'

export default {
  data () {
    return {
      sampleApiStream
    }
  },
  components: {
    CommentList,
    ProfileCard,
    ProfileHero,
    Scorecard
  }
}
</script>
