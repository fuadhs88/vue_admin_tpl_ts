<template>
  <div>
    <div class="columns" id="chart">
      <div class="column">
        <chart />
      </div>
      <div class="column">
        <bchart />
      </div>
    </div>
    <table-demo />
  </div>
</template>
<style lang="stylus" scoped>
.column{
  border: 0.5px solid #AAAA;
  border-radius:10px;
  margin :2px;
}
</style>
<script>
import { createNamespacedHelpers } from 'vuex'
import { mapGetters } from 'vuex'
import bchart from '@/views/Home/Bchart'
import chart from '@/views/Home/Chart'
import tableDemo from '@/views/Home/Table'
const { mapActions } = createNamespacedHelpers('app')
export default {
  components: {
    chart,
    bchart,
    tableDemo
  },
  data: () => {
    return {
      aaa: 'test'
    }
  },
  methods: {
    test() {
      console.log(this.appMenus)
      this.setName('new Name').then(() => console.log(this.appName))
    },
    ...mapActions(['setName'])
  },
  computed: {
    ...mapGetters(['appName'])
  }
}
</script>
