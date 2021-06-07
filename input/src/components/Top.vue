<template>
  <div class="Top">我是Top{{ tit1 }} {{tit2}}</div>
</template>

<script>
export default {
  props: ["tit1", "tit2"],
  created() {
    this.getXg();
  },
  methods: {
    getXg() {
        this.tit1.a = 3;
    },
  },
};
</script>

<style></style>
