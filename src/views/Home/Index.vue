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
    <testtable />
    <button @click="test">ttt</button>
    Home - {{ aaa }}-{{ appName }}
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
import bchart from '@/views/Home/b-chart'
import chart from '@/views/Home/chart'
import testtable from '@/views/Home/table'
const { mapActions } = createNamespacedHelpers('app')
export default {
  components: {
    chart,
    bchart,
    testtable
  },
  data: () => {
    return {
      aaa: 'test'
    }
  },
  created: () => {
    console.log('created')
  },
  mounted: () => {
    console.log('mounted')
  },
  methods: {
    test() {
      this.setName('new Name').then(() => console.log(this.appName))
    },
    ...mapActions(['setName'])
  },
  computed: {
    ...mapGetters(['appName'])
  }
}
</script>
