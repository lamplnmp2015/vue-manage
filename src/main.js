import Vue from 'vue'
import axios from 'axios'
// import Vuex from 'vuex'
import router from './router'
import store from './store'
import App from './App.vue'
import 'assets/css/base.css';
import '../api/mock'
import {
  Button,
  Progress,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  MessageBox,
  Message,
  Row,
  Card,
  Col,
  Tag,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Progress);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Aside);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Card);
Vue.use(Col);
Vue.use(Tag);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(router);
// Vue.use(Vuex);
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$axios = axios
// Vue.prototype.$message = Message.message 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
