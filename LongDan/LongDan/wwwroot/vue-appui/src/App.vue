<template>
  <div class="app-shell layout-column flex">
    <div class="layout-column flex-none">
      <!-- Global message -->
      <b-alert class="global-alert" variant="info" dismissible :show="showGlobalMessage" @dismissed="dismissGlobalMessage()">
        This is an alert. You can dismiss it for current browser tab session.
      </b-alert>
    </div>

    <div class="app-layout layout-column">
      <div class="layout-row flex-none">
        <!-- Header Toolbar -->
        <header class="app-toolbar mdc-toolbar mdc-elevation--z3 theme--dark" role="banner">
          <div class="app-toolbar__row mdc-toolbar__row layout-row">
            <section class="app-toolbar__start mdc-toolbar__section mdc-toolbar__section--align-start">
              <button class="app-toolbar__drawer-toggle mdc-toolbar__menu-icon material-icons" @click="$refs.drawer.open()">menu</button>
              <span class="app-toolbar__title mdc-toolbar__title">AppUI Vue</span>
            </section>

            <section class="app-toolbar__middle flex hidden-md-down">
              <form>
                <input class="form-control" type="search" placeholder="Search...">
              </form>
            </section>

            <section class="app-toolbar__end mdc-toolbar__section mdc-toolbar__section--align-end align-items-center" role="toolbar">
              <a class="app-toolbar__btn btn btn-info btn-sm" @click="toggleRTL" aria-label="Toggle RTL" alt="Toggle RTL">Toggle RTL</a>
              <a class="app-toolbar__btn material-icons hidden-sm-down" @click="$root.$emit('show::modal', 'settingsModal')" aria-label="Settings" alt="Settings">settings</a>
              <a class="app-toolbar__btn material-icons hidden-sm-down" @click="$root.$emit('show::modal', 'notificationsModal')" aria-label="Notifications" alt="Notifications">notifications</a>
              <a class="avatar-with-name flex-row-reverse" href="#/system/profile" title="Account: John Doe">
                <img class="avatar avatar--small" src="/static/images/avatar_003.jpg" alt="Account: John Doe" role="presentation" aria-hidden="true">
                <span class="avatar__name hidden-md-down">John Doe</span>
              </a>
            </section>
          </div>
        </header>
      </div>

      <div class="layout-row flex">
        <!-- Sidenav -->
        <div class="app-navigation-panel">
          <temporary-drawer class="app-sidenav layout-column" ref="drawer" style="z-index: 20;">
            <nav class="mdc-list-group">
              <div class="list-subheader" role="heading">Reports</div>
              <div class="mdc-list" role="group">
                <router-link to="/" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">dashboard</i>Dashboard
                </router-link>
                <router-link to="/reports/analytics" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">insert_chart</i>Analytics
                </router-link>
                <router-link to="/reports/audience" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">insert_chart</i>Audience
                </router-link>
                <router-link to="/reports/social" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">insert_chart</i>Social
                </router-link>
              </div>

              <div class="list-subheader" role="heading">System</div>
              <div class="mdc-list" role="group">
                <router-link to="/system/mail" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">email</i>Mail
                </router-link>
                <router-link to="/system/messaging" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">message</i>Messaging
                </router-link>
                <router-link to="/system/people" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">people</i>People
                </router-link>
                <router-link to="/system/profile" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">person</i>Profile
                </router-link>
                <router-link to="/system/search" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">search</i>Search
                </router-link>
              </div>

              <div class="mdc-list">
                <div class="list-subheader">Onboarding</div>
                <router-link to="/onboarding/signin" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">exit_to_app</i>Sign In
                </router-link>
                <router-link to="/onboarding/signup" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">exit_to_app</i>Sign Up
                </router-link>
              </div>

              <div class="mdc-list">
                <div class="list-subheader">Blog</div>
                <router-link to="/blog" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">view_module</i>Blog
                </router-link>
                <router-link to="/blog/article" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">archive</i>Article
                </router-link>
                <router-link to="/blog/article/edit" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">create</i>Edit Article
                </router-link>
                <router-link to="/blog/articles" class="mdc-list-item">
                  <i class="material-icons mdc-list-item__start-detail">view_list</i>Articles (Data Grid)
                </router-link>
              </div>
            </nav>

            <div class="app-sidenav__footer">
              <p class="app-sidenav__copyright mb-0">AppUI Vue ©</p>
              <a href="https://themehunt.com/item/1525731/?ref=rustheme"
                rel="nofollow"
                @click="gaSendEvent('Sidenav Footer', 'Purchase Template Click')">
                Purchase template
              </a>
            </div>
          </temporary-drawer>
        </div>

        <!-- Content -->
        <div class="app-content-panel layout-column flex">
          <div class="actionbar" v-if="['Profile'].indexOf($route.name) === -1">
            <div class="actionbar__main">
              <div class="actionbar__title-lockup actionbar__space-consumer">
                <div class="actionbar__title">{{ routeName }}</div>
              </div>
              <div class="actionbar__help-container">
                <a class="btn btn-success hidden-xs-down"
                  href="https://themehunt.com/item/1525731/?ref=rustheme"
                  @click="gaSendEvent('Actionbar', 'Purchase Template Click')">
                  Purchase template
                </a>
                <b-popover
                  :placement="'left'"
                  :triggers="'click'"
                  content="AppUI is a premium Bootstrap template available on ShapeBootstrap marketplace.">
                  <b-btn class="btn btn-link md-icon-button actionbar__help-button md-button md-ink-ripple md-dark-theme" variant="link">
                    <i class="material-icons">help</i>
                  </b-btn>
                </b-popover>
              </div>
            </div>
          </div>

          <!-- Display views -->
          <router-view class="view"></router-view>
        </div>
      </div>
    </div>
    <!-- .app-layout -->

    <!-- Settings Modal -->
    <b-modal id="settingsModal" title="Settings">
      <div class="settings">
        <div class="settings__title" role="heading" aria-level="2">Settings section</div>
        <div class="settings__row">
          <div class="settings__text">
            Lorem ipsum dolor sit amet, est id postea comprehensam.
            Show geo location by default.
            <a href="#" rel="nofollow" target="_blank">
              LEARN MORE
            </a>
          </div>

          <div class="settings__end-detail">
            <div class="uPYeDb" data-settingname="media_gplus_geo_location" data-initvalue="false">
              <checkbox v-model="checkedSettings[0]"></checkbox>
            </div>
          </div>
        </div>

        <div class="settings__row">
          <div class="settings__text">
            An eum commune delectus contentiones, quem sale liberavisse quo et.
            Allow viewers to download my photos and videos.
            <a href="#" rel="nofollow" target="_blank">LEARN MORE</a>
          </div>
          <div class="settings__end-detail">
            <checkbox v-model="checkedSettings[1]"></checkbox>
          </div>
        </div>

        <div class="settings__row">
          <div class="settings__text">
            Mel libris causae eu, quo ea ipsum laudem.
            <a href="#" rel="nofollow" target="_blank">LEARN MORE</a>
          </div>
          <div class="settings__end-detail">
            <checkbox v-model="checkedSettings[2]"></checkbox>
          </div>
        </div>
      </div>
    </b-modal>

    <!-- Notifications Modal -->
    <b-modal id="notificationsModal" title="Notifications">
      <b-alert variant="success" :show="true" dismissible>
        Something is good.
      </b-alert>
      <b-alert variant="info" :show="true" dismissible>
        Something is ok.
      </b-alert>
      <b-alert class="mb-0" variant="danger" :show="true" dismissible>
        Something is wrong.
      </b-alert>
    </b-modal>
  </div>
</template>

<script>
import Checkbox from '@/components/mdc-checkbox/Checkbox'
import TemporaryDrawer from '@/components/mdc-drawer/TemporaryDrawer'

export default {
  data () {
    return {
      // It's important to declare every settings check value
      checkedSettings: [false, false, false],
      routeName: this.$router.currentRoute.name,
      showGlobalMessage: this.showGlobalMessage()
    }
  },
  components: {
    Checkbox,
    TemporaryDrawer
  },
  watch: {
    // Update route name when route view changes
    '$route': function (newRoute, oldRoute) {
      this.routeName = newRoute.name
    }
  },
  mounted () {
    this.routeName = this.$router.currentRoute.name.bind(this)
  },
  methods: {
    dismissGlobalMessage () {
      window.sessionStorage.setItem('globalMessageClosed', true)
    },
    // Helper function for sending Google Analytics events on click
    gaSendEvent (eventCategory, eventAction, eventLabel, eventValue) {
      this.$ga.event(eventCategory, eventAction, eventLabel, eventValue)
    },
    // DEMO: Check if global message visible
    showGlobalMessage () {
      if (!window.sessionStorage.getItem('globalMessageClosed')) {
        return true
      } else {
        return false
      }
    },
    // DEMO: Toggle RTL
    toggleRTL () {
      let body = document.documentElement
      if (body.getAttribute('dir') !== 'rtl') {
        body.setAttribute('dir', 'rtl')
      } else {
        body.setAttribute('dir', 'ltr')
      }
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/functions';
@import './scss/variables/theme';

$mdc-theme-primary: #358ed7;
$mdc-theme-accent: #7dc855;
$mdc-theme-background: #f1f4f7;

@import '@material/ripple/mdc-ripple';
@import '@material/elevation/mdc-elevation';
@import '@material/list/mdc-list';
@import '@material/theme/mdc-theme';
@import '@material/toolbar/mdc-toolbar';
</style>
