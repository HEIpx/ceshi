<template>
  <div class="one">
    我是组件one{{ this.$store.state.msg }}<br>{{this.$store.getters.doubleGet1}}
    <button @click="changeData">改变数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    changeData() {
      // 通过dispatch 触发 action 并传参
      this.$store.dispatch("changeDataAct", 100); //此时data就变成100啦，并且组件1和组件2是同步的
      console.log(this.$store.getters.doubleGet2 * 2);
      console.log(this.$store.getters.doubleGet1);
    },
  },
};
</script>

<style></style>
