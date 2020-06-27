<template>
  <div class="layout_main">
    <!-- left -->
    <div class="left is-hidden-mobile">
      <nav class="box account-info nav">
        Admin Info
      </nav>
      <div class="box section menus ">
        <Menu></Menu>
      </div>
    </div>
    <!-- right -->
    <div class="right">
      <nav class="box level header is-mobile nav">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <b-button @click="clickMe" class=" is-success">
              <b-icon icon="format-list-bulleted" size="is-small"> </b-icon>
            </b-button>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <span class="tag is-black">Home</span>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right is-hidden-mobile">
          <p class="level-item"><strong>Action</strong></p>
          <p class="level-item"><a>X</a></p>
          <p class="level-item"><a>X</a></p>
          <p class="level-item"><a>X</a></p>
          <p class="level-item"><a class="button is-small is-success">登出</a></p>
        </div>
      </nav>
      <div class="box contents">
        <router-view :key="key" />
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.box:not(:last-child){
  margin-bottom: 0.5rem;
}
.left {
  width: 25vw;
  height: 100vh;
  padding: 5px;
  background-color: #484147;
}
.account-info {
  height: 4rem;
}
.menus {
  overflow: scroll;
  height: calc(100% - 4.5rem);
}
.right {
  width: 100%;
  height: 100vh;
  padding: 5px;
  background-color: #dadada;
}
.header {
  height: 3rem;
}
.contents {
  overflow: scroll;
  height: calc(100% - 3.5rem);
}
.layout_main {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 100%;
}
.box {
  border: 2px solid #ffdd57;
}
</style>
<script>
import menu from '@/views/layouts/menu'
export default {
  data() {
    return {
      expandOnHover: true,
      mobile: 'reduce',
      reduce: false
    }
  },
  components: {
    Menu: menu
  },
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!')
    }
  }
}
</script>
