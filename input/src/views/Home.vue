<template>
  <div class="home">
    <button @click="getshow">切换</button>
    <input
      class="input_control"
      v-model="inputVal"
      type="text"
      ref="getFocus"
      v-show="asd"
    />

    <div>
      <p @click="addd(obj)">{{ obj.d }}</p>
      <p @click="adde(obj)">{{ obj.e }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      inputVal: "",
      asd: false,
      obj: {},
      main: { name: "", age: 18 },
      main1: '',
    };
  },
  created() {
    this.isEmpty(this.main);
    this.isEmpty1(this.main1);
  },
  mounted() {
    this.obj = { d: 0 };
    // this.obj.e = 0;
    this.$set(this.obj, "e", 0);
    console.log("after--", this.obj);
  },
  methods: {
    getshow() {
      this.asd = !this.asd;
      // this.$refs.editTask.onfocus();  data改变后vue是异步响应的
      this.$nextTick(() => this.$refs.getFocus.focus());
    },
    addd(item) {
      item.d = item.d + 1;
      console.log("item--", item);
    },
    adde(item) {
      item.e = item.e + 1;
      console.log("item--", item);
    },

    isEmpty(obj) {
      if ("name" in obj) {
        console.log("man对象中含有name属性");
      } else {
        console.log("没");
      }
    },

    isEmpty1(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
