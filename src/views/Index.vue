<template>
  <div class="index">
      <MyHomePage>hi</MyHomePage>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHomePage from '@/components/MyHomePage.vue'

export default {
  name: 'Index',
  components: {
    MyHomePage
  }
}
</script>
<style scoped>
</style>
