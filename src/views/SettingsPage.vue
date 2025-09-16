<template>
  <div v-if="store !== null" class="page">
    <ul class="menus">
      <template v-for="(item, index) in store.menus" :key="index">
        <li 
          v-if="store.currentMenuIndex === index" 
          class="menus-item"
          :style="{color:'black', backgroundImage:'url(imgs/setting/menu-bg.png)'}"
          @mouseenter="menuEnter(index)">
          <img :src="item.icon" class="menus-icon" />
          <span>{{ item.name }}</span>
        </li>
        <li v-else class="menus-item" @mouseenter="menuEnter(index)">
          <img :src="item.icon" class="menus-icon" />
          <span>{{ item.name }}</span>
        </li>
      </template>
    </ul>
    <div class="menu-page">
      <img src="imgs/setting/key-panel.png"/>
    </div>
  </div>
</template>

<style>
.page {
  display: flex;
  justify-content: left; 
}
.menus {
  width: 295px; /* 修正拼写错误 */
  list-style: none;
}
.menus-icon {
  width: 30px; /* 修正单位 */
  height: 30px;
  vertical-align: middle;
  margin-right: 10px; /* 修正数值 */
}
.menus-item {
  height: 55px;
  line-height: 55px; /* 修正数值 */
  padding-left: 20px; /* 修正拼写 */
  color: white;
  cursor:pointer
}
.menu-page {
  padding-left: 100px;
}
</style>

<script>
import { storeSetting } from '@/storePinia/storeSetting.js'

export default {
  data() {
    return {
      store: null
    }
  },
  mounted() {
    this.store = storeSetting()
    this.$axios.get('/settings.json').then((res) => {
      this.store.setMenus(res.data)
    }).catch(function(e){
      console.log('请求远程数据出现错误:', e);
      console.log(e)
    });
  },
  methods: {
    menuEnter(index) {
      this.store.changeCurrentMenuIndex(index)
    }
  }
}
</script>

