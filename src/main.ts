import Vue from "vue";
import App from "./App.vue";
import store from './store'
import DataItem from "./model/DataItem";
import Category from "./model/CateEnum";
import DataAction from './store/DataAction'

Vue.config.productionTip = false;

new Vue({
	store,
  render: (h) => h(App),
}).$mount("#app");

let newItem = new DataItem(1, Category.Study, "学习", "天天练习敲代码", 1215);
let a = new DataAction();
a.addData(newItem);
console.log(a.readData());

