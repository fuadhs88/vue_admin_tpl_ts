<template>
  <div class="layout_main is-paddingless is-marginless">
    <!-- left -->
    <div class="left is-hidden-mobile">
      <nav class="box account-info ">
        Admin Info
      </nav>
      <div class="box section menus ">
        <Menu></Menu>
      </div>
    </div>
    <!-- right -->
    <div class="right is-size-1-mobile">
      <nav class="box level header is-mobile">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <b-button @click="clickMe" class=" is-success">
              <b-icon icon="format-list-bulleted" size="is-small"> </b-icon>
            </b-button>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <b-field>
                  <b-input placeholder="Search" type="Search"></b-input>
                </b-field>
              </p>
              <p class="control">
                <button class="button">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right is-hidden-mobile">
          <p class="level-item"><strong>X</strong></p>
          <p class="level-item"><a>X</a></p>
          <p class="level-item"><a>X</a></p>
          <p class="level-item"><a>X</a></p>
          <p class="level-item"><a class="button is-small is-success">LogOut</a></p>
        </div>
      </nav>
      <div class="box contents">
        <router-view :key="key" />
      </div>
    </div>
  </div>
</template>
<style>
.left {
  width: 21vw;
  padding: 5px;
  height: 100vh;
  /* border: 1px sandybrown solid; */
}
.account-info {
  height: 4rem;
}
.menus {
  margin-top: 0;
  height: 100%;
  overflow: scroll;
}
.right {
  width: 100%;
  padding: 5px;
  height: 100vh;
  /* border: 1px sandybrown solid; */
}
.header {
  height: 4rem;
  /* border: 1px greenyellow solid; */
}
.contents {
  height: 100%;
  overflow: scroll;
  /* border: 1px red solid; */
}
.layout_main {
  /* border: 1px black solid; */
  display: flex;
  float: left;
  height: 100%;
  width: 100%;
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
