<template>
  <div>
    <notifications></notifications>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
      <side-bar
        :background-color="sidebarBackground"
        short-title="Argon"
        title="Argon"
      >
        <template slot="links">
          <sidebar-item
            :link="{
              name: 'Dashboard',
              icon: 'fa fa-home text-primary',
              path: '/',
            }"
          />

          <sidebar-item
            :link="{
              name: 'Icons',
              icon: 'ni ni-planet text-blue',
              path: '/Icons',
            }"
          />
          <sidebar-item
            :link="{
              name: 'User Profile',
              icon: 'ni ni-single-02 text-yellow',
              path: '/UserProfile',
            }"
          />
          <sidebar-item
            :link="{
              name: 'Tables',
              icon: 'ni ni-bullet-list-67 text-red',
              path: '/Tables',
            }"
          />
          <sidebar-item
            :link="{
              name: 'Login',
              icon: 'ni ni-key-25 text-info',
              path: '/Login',
            }"
          />
          <sidebar-item
            :link="{
              name: 'Register',
              icon: 'ni ni-circle-08 text-pink',
              path: '/Register',
            }"
          />
        </template>
      </side-bar>
      <div class="main-content" :data="sidebarBackground">
        <dashboard-navbar></dashboard-navbar>

        <div @click="toggleSidebar">
          <fade-transition :duration="200" origin="center top" mode="out-in">
            <!-- your content here -->
            <Nuxt />
          </fade-transition>
          <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FadeTransition } from 'vue2-transitions'
import DashboardNavbar from './DashboardNavbar.vue'
import ContentFooter from './ContentFooter.vue'

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition,
  },
  data() {
    return {
      sidebarBackground: 'vue', // vue|blue|orange|green|red|primary
    }
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
  },
}
</script>
<style lang="scss"></style>
