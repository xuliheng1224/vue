<template>
  <div class="demo">
    <el-Button @click="add(100)">加钱</el-Button>
    <input type="text" v-model="wages">
    <el-Button @click="clear">清零</el-Button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  name: 'demo',
  components: {
    // HelloWorld
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    // console.log(222, this.user);
    next()
  },
  methods: {
    clear () {
      this.add(0)
      this.$router.push('/home')
    },
    ...mapActions('demo', ['add'])
  },
  mounted(){

  },
  computed: {
    ...mapState(['user']),
    ...mapState('demo', ['wages'])
  }
}
</script>
