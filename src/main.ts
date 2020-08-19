import Vue from "vue";
import App from "./App.vue";
import DataItem from "./model/DataItem";
import Category from "./model/CateEnum";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

let newItem = new DataItem(1, Category.Study, "学习", "天天练习敲代码", 1215);
console.log(newItem);
