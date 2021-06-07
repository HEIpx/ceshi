<template>
  <div class="Left">
    我是Left{{tit1}}
  </div>
</template>

<script>
export default {
  props: ["tit1"],
  created() {
    this.getXg();
  },
  methods: {
    getXg() {
        this.tit1.a = 2;
    },
  },
};
</script>

<style></style>
