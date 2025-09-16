<template>
  <div class="travel-notes-page">
    <div style='display:flex;justify-content: left;color:#c0c0c0;'>
      <div>
        <template v-for="(item, index) in items" :key="index">
          <div v-if="item.selected" style='height:250px;width:455px;margin-top:10px'>
            <img :src="updateImgPath(item.pimg)" style='width:100%;height:100%' />
          </div>
          <div v-if="!item.selected" @click="clickItem(index)"
               style='position:relative;height:80px;line-height:80px;width:455px; margin-top:10px;cursor:pointer;'>
            <img :src="updateImgPath(item.simg)" style='width:100%;height:100%' />
            <div style='position:absolute;left:30px;top:0;right:0;bottom:0;'>
              {{item.name}}
            </div>
          </div>
        </template>
      </div>
      <div style='margin-left:80px'>
        <div style='font-size:24px'>
          <img :src="updateImgPath('img/arraw-left.png')" />
          <span>{{items[selectedIndex].name}}</span>
        </div>
        <div>
          <!-- 显示小图片 -->
          <img v-for="img in items[selectedIndex].subItems" :src="updateImgPath(img)" :key="img" style='width:350px;height:85px;margin-top:10px;margin-left:10px' />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const selectedIndex = ref(0);
const items = reactive([
  {
    name: '影神图',
    simg: 'imgs/travel-s1.png',
    pimg: 'imgs/travel-1.png',
    selected: true,
    subItems: [
      'imgs/travel-s1-01.png',
      'imgs/travel-s1-02.png',
      'imgs/travel-s1-03.png',
      'imgs/travel-s1-04.png',
    ]
  },
  {
    name: '打坐蒲团',
    simg: 'imgs/travel-s2.png',
    pimg: 'imgs/travel-2.png',
    selected: false,
    subItems: [
      'imgs/travel-s2-01.png',
    ]
  },
  {
    name: '妙诀',
    simg: 'imgs/travel-s3.png',
    pimg: 'imgs/travel-3.png',
    selected: false,
    subItems: [
      'imgs/travel-s3-01.png',
      'imgs/travel-s3-02.png',
    ]
  },
]);

const updateImgPath = (path) => {
  return path.replace('img/', 'imgs/');
};

const clickItem = (index) => {
  for (let i = 0; i < items.length; i++) {
    if (i === index) {
      items[i].selected = true;
    } else {
      items[i].selected = false;
    }
  }
  selectedIndex.value = index;
};
</script>

<style scoped>
</style>