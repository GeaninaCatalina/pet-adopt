<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NewComp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewComp from '@/components/NewComp.vue'

export default {
  name: 'Home',
  components: {
    NewComp
  }
}
</script>
