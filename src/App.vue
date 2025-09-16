<template>
  <div class="top-panel">
    <ul class="menu-panel">
      <li class="key">A</li>
      <template v-for="(item, index) in menus" :key="index">
        <li
          v-if="activeMenuIndex === index"
          class="menu"
          :style="{
            cursor: 'pointer',
            color: 'black',
            backgroundImage: 'url(imgs/menu-bg.png)'
          }"
        >
          {{ item.name }}
        </li>
        <li
          v-else
          class="menu"
          @mouseenter="menuEnter(index)"
        >
          {{ item.name }}
        </li>
      </template>
      <li class="key">D</li>
    </ul>
    <div>
      <img class="icon" src="imgs/icon1.png" />
      <span class="icon-num">{{ aura }}</span>
      <img class="icon" src="imgs/icon2.png" />
      <span class="icon-num">{{ reiki }}</span>
    </div>
  </div>
  <div class="content-panel">
    <router-view /> <!-- 用于渲染页面的组件 -->
  </div>
</template>

<script>
import router from './router';

export default {
  data() {
    return {
      menus: [
        { name: "修行", url: "/practice-taoism-page" },
        { name: "披挂", url: "/armor-page" },
        { name: "行囊", url: "/travelling-bag-page" },
        { name: "游记", url: "/travel-notes-page" },
        { name: "设置", url: "/settings-page" }
      ],
      activeMenuIndex: 0,
      aura: 0, // 灵气
      reiki: 0, // 灵光点
      timer: null // 定时器
    };
  },
  mounted() {
    const item = this.menus[this.activeMenuIndex];
    router.replace(`${item.url}?name=${item.name}&url=${item.url}`);

    // 启动定时器，每 2 秒增加一次 aura 和 reiki 的值
    this.timer = setInterval(() => {
      this.aura += 7;
      this.reiki += 3;
    }, 2000);

    // 监听键盘事件
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    // 组件销毁前清除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
    // 移除键盘事件监听
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    menuEnter(index) {
      this.activeMenuIndex = index;
      const item = this.menus[this.activeMenuIndex];
      router.replace(`${item.url}?name=${item.name}&url=${item.url}`);
    },
    handleKeyDown(event) {
      if (event.key === 'a' || event.key === 'A') {
        // 按下 A 键，向左切换
        this.activeMenuIndex = (this.activeMenuIndex - 1 + this.menus.length) % this.menus.length;
      } else if (event.key === 'd' || event.key === 'D') {
        // 按下 D 键，向右切换
        this.activeMenuIndex = (this.activeMenuIndex + 1) % this.menus.length;
      }
      const item = this.menus[this.activeMenuIndex];
      router.replace(`${item.url}?name=${item.name}&url=${item.url}`);
    }
  }
};
</script>

<style>
html, body {
  background-image: url(/public/imgs/BG.gif);
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  overflow: hidden;
  padding: 30px;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 90%;
}

.top-panel {
  display: flex;
  justify-content: space-between;
}

.icon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
}

.icon-num {
  margin-left: 5px;
  margin-right: 20px;
  display: inline-block;
  height: 50px;
  line-height: 50px;
}

.menu-panel {
  list-style: none;
  display: flex;
  align-items: center;
}

.key {
  background-color: beige;
  color: black;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}

.menu {
  list-style: none;
  width: 130px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}

.menu a {
  color: black;
  text-decoration: none;
}

.content-panel {
  height: 100%;
  padding: 50px;
  color: red;
}
</style>