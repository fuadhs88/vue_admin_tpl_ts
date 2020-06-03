<template>
  <div>
    <button @click="test">ttt</button>
    Home - {{aaa}}-{{appName}}
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
