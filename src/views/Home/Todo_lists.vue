<template>
  <div>
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
import tableDemo from '@/views/Home/Table'
const { mapActions } = createNamespacedHelpers('app')
export default {
  components: {
    tableDemo
  },
  data: () => {
    return {}
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
