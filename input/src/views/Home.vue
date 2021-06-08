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

    <Top :tit1='data' :tit2='all' />
    <Left :tit1='data' />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Top from "@/components/Top.vue";
import Left from "@/components/Left.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Top,
    Left,
  },
  data() {
    return {
      inputVal: "",
      asd: false,
      obj: {},
      main: { name: "", age: 18 },
      main1: "",
      // 数据 供子组件使用
      all: {
        a: 1,
        b: 2,
      },
    };
  },
  created() {
    this.isEmpty(this.main);
    this.isEmpty1(this.main1);
    this.abc();
    
  },
  mounted() {
    this.obj = { d: 0 };
    // this.obj.e = 0; //视图不会更新
    this.$set(this.obj, "e", 0);  //向原有数据添加新的属性 视图会更新
    console.log("after--", this.obj);
  },
  computed: {
    // 解决多个子组件使用根组件数据,造成混乱
    data: function() {
      var obj = {};
      // JSON.parse 转化为js对象   JSON.stringify 转化为字符串
      obj = JSON.parse(JSON.stringify(this.all));
      // console.log(JSON.stringify(this.all));
      // console.log(obj);
      return obj;
    },
    
  },
  methods: {
    
    //   实现显示input框 并且输入框获取焦点
    getshow() {
      this.asd = !this.asd;
      // this.$refs.getFocus.focus();  //data改变后vue是异步响应的
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
    abc() {
      // 根组件传递给子组件的数组
      console.log(this.data);
      // 根组件 数据
      console.log(this.all);
    },
  },
};
</script>
