<template>
  <div class="about">
  <One />
  <Two />
  </div>
</template>
<script>
import One from '../components/zujian/One'
import Two from '../components/zujian/Two'
export default {
  components: { One,Two },
  data(){
    return {
      msg:{ }
    }
  }
}
</script>
