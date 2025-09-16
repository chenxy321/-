<template>
  <div class="armor-page">
    <div :style="{width: width + '%'}">
      <template v-for="(item, index) in armor.menus" :key="index">
        <div
          style="display: inline-block;width:120px;height: 100px;
                 background-color: lightblue;margin-right: 20px;margin-bottom: 20px;
                 cursor: pointer;position: relative;"
          :title="item.name"
        >
          <img :src="item.imgUrl" style=" position: absolute;left:0px;top:0px;width:100%;height:100%;"/>
          <div
            style="position: absolute;bottom: 0px;width:100%;height: 0px;border:solid 1px;"
            :style="{borderColor: item.color}"
          ></div>
        </div>
        <br v-if="index === 2" />
      </template>
    </div>
    <div>
      <img style="width:100%;height:80%;" src="imgs/wukong.png" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const width = ref(60);
    const armor = ref({
      menus: [
        {
          name: "武器",
          imgUrl: "imgs/armor-1.png",
          color: '#476c57'
        },
        {
          name: "",
          imgUrl: "imgs/armor-2.png",
          color: '#520303'
        },
        {
          name: "",
          imgUrl: "imgs/armor-3.png",
          color: '#c500ff'
        },
        {
          name: "面具",
          imgUrl: "imgs/armor-4.png",
          color: '#88ff00'
        },
        {
          name: "服装",
          imgUrl: "imgs/armor-5.png",
          color: '#fd3606'
        },
        {
          name: "护具",
          imgUrl: "imgs/armor-6.png",
          color: '#476c57'
        },
        {
          name: "",
          imgUrl: "imgs/armor-7.png",
          color: '#476c57'
        }
      ]
    });

    return {
      width,
      armor
    };
  }
};
</script>

<style scoped>
.armor-page {
  display: flex;
  justify-content: space-between;
}
</style>