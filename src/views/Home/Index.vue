<template>
  <div class="">
    <div class="columns" id="chart">
      <div class="column">
        <chart />
      </div>
      <div class="column">
        <bchart />
      </div>
    </div>
    <button @click="test">ttt</button>
    Home - {{ aaa }}-{{ appName }}
  </div>
</template>
<style lang="stylus" scoped></style>
<script>
import { createNamespacedHelpers } from 'vuex'
import { mapGetters } from 'vuex'
import bchart from '@/views/Home/b-chart'
import chart from '@/views/Home/chart'
const { mapActions } = createNamespacedHelpers('app')
export default {
  components: {
    chart,
    bchart
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
