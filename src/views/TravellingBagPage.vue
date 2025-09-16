<template>
  <div class="travelling-bag-page">
    <div class="travelling-bag-list">
      <!-- 展示行囊物品类型 -->
      <ul class="bag-types">
        <li class="key">Z</li>
        <template v-for="(bag, index) in bags" :key="index">
          <li v-if="bagsIndex == index" class="bag-type" :style="{border:'solid 1px gray'}"
              @click="onClickBagType(index)"><img :src="bag.icon" /></li>
          <li v-else class="bag-type" @click="onClickBagType(index)"><img :src="bag.icon" /></li>
        </template>
        <li class="key">C</li>
      </ul>
      <!--物品列表-->
      <template v-for="(bag, index) in bags" :key="index">
        <div v-show="bagsIndex == index">
          <div class="bag-name">
            <span class="add-goods" @click="addGoods(index)">+</span>
            {{bag.name}} （{{bagGoodsCount}}）
          </div>
          <ul v-if="bag.goods==null || bag.goods.length <= 0" class="bag-goods">
            <template v-for="index in 12" :key="index">
              <li class="goods-item"></li>
            </template>
          </ul>
          <transition-group name="list" tag="ul" v-if="bag.goods != null && bag.goods.length >0" class="bag-goods">
            <template v-for="(goodsItem,index) in bag.goods" :key="index">
              <li class="goods-item" @mouseenter="onBagGoodsItem(index)">
                <img :src="goodsItem.image" />
              </li>
            </template>
          </transition-group>
        </div>
      </template>
    </div>
    <!-- 物品详细信息展示 -->
    <div v-if="bags[bagsIndex].goods != null" class="goods-detail">
      <div v-if="activeGoodsIndex < bags[bagsIndex].goods.length" class="detail-info">
        <div class="goods-level">{{bags[bagsIndex].goods[activeGoodsIndex].level}}</div>
        <div class="goods-name">{{bags[bagsIndex].goods[activeGoodsIndex].name}}</div>
        <div class="goods-desc">{{bags[bagsIndex].goods[activeGoodsIndex].desc}}</div>
        <div class="goods-amount">{{bags[bagsIndex].goods[activeGoodsIndex].amount}}</div>
        <div class="goods-summay">{{bags[bagsIndex].goods[activeGoodsIndex].summary}}</div>
      </div>
      <div class="goods-item">
        <img :src="bags[bagsIndex].goods[activeGoodsIndex].image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const bags = ref([
      {
        name: '用品',
        icon: 'imgs/bag-icon-1.png',
        goods: [
          {
            name: '缩地表符',
            desc: '用品',
            level: '仙品',
            summary: '就地使个缩地法，解尸肉身，出了元神，在上一个土地庙还魂复生',
            amount: 1,
            image: 'imgs/goods-1.png'
          },
          {
            name: '倍力丸',
            desc: '攻杀丹药',
            level: '上品',
            summary: '服用后较长时间内，少许增加暴击率',
            amount: 1,
            image: 'imgs/goods-2.png'
          },
          {
            name: '倍力丸',
            desc: '攻杀丹药',
            level: '上品',
            summary: '服用后较长时间内，少许增加暴击率',
            amount: 1,
            image: 'imgs/goods-3.png'
          },
          {
            name: '避凶药',
            desc: '消灭丹药',
            level: '良品',
            summary: '服用后较长时间内，获得少许伤害减免',
            amount: 1,
            image: 'imgs/goods-4.png'
          },
        ]
      },
      { name: '材料', icon: 'imgs/bag-icon-2.png' },
      { name: '葫中物', icon: 'imgs/bag-icon-3.png' },
      { name: '药材', icon: 'imgs/bag-icon-4.png' },
      { name: '要紧事要', icon: 'imgs/bag-icon-5.png' },
    ]);
    const bagsIndex = ref(0); // 记录被选中的物品类型
    const activeGoodsIndex = ref(0); // 记录被选中的物品序号

    const bagGoodsCount = computed(() => {
      if (bags.value[bagsIndex.value].goods != null) {
        let total = 0;
        for (let i = 0; i < bags.value[bagsIndex.value].goods.length; i++) {
          total += bags.value[bagsIndex.value].goods[i].amount;
        }
        return total;
      }
      return 0;
    });

    const onClickBagType = (index) => {
      bagsIndex.value = index;
    };

    const onBagGoodsItem = (index) => {
      activeGoodsIndex.value = index;
    };

    const addGoods = (index) => {
      const item = {
        name: '缩地表符',
        desc: '用品',
        level: '仙品',
        summary: '就地使个缩地法，解尸肉身，出了元神，在上一个土地庙还魂复生',
        amount: 1,
        image: 'imgs/goods-1.png'
      };
      if (bags.value[index].goods == null) {
        bags.value[index].goods = [item];
      } else {
        bags.value[index].goods.push(item);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'z' || event.key === 'Z') {
        // 按下 Z 键，向左切换
        bagsIndex.value = (bagsIndex.value - 1 + bags.value.length) % bags.value.length;
      } else if (event.key === 'c' || event.key === 'C') {
        // 按下 C 键，向右切换
        bagsIndex.value = (bagsIndex.value + 1) % bags.value.length;
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });

    return {
      bags,
      bagsIndex,
      activeGoodsIndex,
      bagGoodsCount,
      onClickBagType,
      onBagGoodsItem,
      addGoods
    };
  }
};
</script>

<style>
/* 设置全局字体颜色为白色 */
.travelling-bag-page {
  color: white;
  display: flex;
}

.travelling-bag-page .travelling-bag-list {
  width: 40%;
}

.travelling-bag-page .travelling-bag-list .bag-types {
  display: flex;
  justify-content: left;
  /* 去掉列表项目符号 */
  list-style-type: none; 
}

.travelling-bag-page .travelling-bag-list .bag-types .key {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: gray;
  color: black;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
}

.travelling-bag-page .travelling-bag-list .bag-types .bag-type {
  width: 25px;
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}

.travelling-bag-page .travelling-bag-list .bag-types .bag-type img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.travelling-bag-page .travelling-bag-list .bag-name {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
}

.travelling-bag-page .travelling-bag-list .bag-goods {
  display: flex;
  flex-wrap: wrap;
  /* 去掉列表项目符号 */
  list-style-type: none; 
}

.travelling-bag-page .travelling-bag-list .bag-goods .goods-item {
  width: 100px;
  height: 100px;
  border: solid 1px gray;
  background-color: black;
  margin: 10px;
}

.travelling-bag-page .travelling-bag-list .bag-goods .goods-item:hover {
  border: solid 1px hotpink;
}

.travelling-bag-page .travelling-bag-list .bag-goods .goods-item img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.travelling-bag-page .travelling-bag-list .add-goods {
  display: inline-block;
  border: solid 1px white;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
}

.travelling-bag-page .goods-detail {
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 30px;
}

.travelling-bag-page .goods-detail .info {
  color: #cccccc;
  width: 30%;
}

.travelling-bag-page .goods-detail .info .goods-level {
  font-size: 18px;
  color: #b5862e;
}

.travelling-bag-page .goods-detail .info .goods-name {
  font-size: 22px;
  margin-top: 20px;
  border-bottom: solid 1px #818181;
}

.travelling-bag-page .goods-detail .info .goods-desc {
  font-size: 16px;
  margin-top: 10px;
}

.travelling-bag-page .goods-detail .info .goods-amount {
  margin-top: 40px;
}

.travelling-bag-page .goods-detail .info .goods-summay {
  margin-top: 30px;
  line-height: 35px;
}

.travelling-bag-page .goods-detail .goods-img {
  margin-top: 300px;
  margin-right: 100px;
}
</style>