<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile is-parent notification is-danger">
        Header
      </div>
      <div class="tile is-parent">
        <div class="tile is-child notification is-3 has-background-white-b">
          left
          <button @click="test">TEst</button>
        </div>
        <div class="tile is-child notification box">
          right <p> {{appName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { mapGetters } from "vuex";
const { mapActions } = createNamespacedHelpers("app");
export default {
  components: {},
  data: () => {
    return {
      aaa: "fffffff"
    };
  },
  created: () => {
    console.log("created");
  },
  mounted: () => {
    console.log("mounted");
  },
  methods: {
    test() {
      this.setName("new Name").then(() => console.log(this.appName));
    },
    ...mapActions(["setName"])
  },
  computed: {
    ...mapGetters(["appName"])
  }
};
</script>
