<template>
  <b-menu>
    <div v-for="(item, index) in appMenus" :key="index">
      <b-menu-list :label="item.name">
        <div v-for="(fv, fk) in item.children" :key="fk">
          <router-link :to="fv.path">
            <b-menu-item :label="fv.name" :icon="fv.meta.ico" :active="isActive(fv.path)" expanded></b-menu-item>
          </router-link>
        </div>
      </b-menu-list>
    </div>
  </b-menu>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('menus')
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    isActive(path) {
      return path == this.currentRoute
    },
    ...mapActions(['getMenus'])
  },
  computed: {
    currentRoute() {
      return this.$route.path
    },
    ...mapGetters(['appMenus', 'appName', 'appSS'])
  }
}
</script>

<style></style>
