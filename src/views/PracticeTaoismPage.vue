<template>
  <div class="pratice-taoism-page">
    <table style="width: 100%;" border="0">
      <tr>
        <td class="verse">
          <p class="title">本事</p>
          <p>求仙问卜，不如自己做主。</p>
          <p>送佛念经，不如本身在身。</p>
        </td>
        <td rowspan="2" style="position: relative;">
          <img src="imgs/reiki.png" />
          <div class="reiki-style">{{reiki}}</div>
        </td>
        <td class="verse">
          <p class="title">神通</p>
          <p>大之则量与宇宙，小则摄于毫毛。</p>
          <p>变化无端，隐显莫测。</p>
        </td>
      </tr>
      <tr>
        <td><img src="imgs/m-1.png" /></td>
        <td><img src="imgs/m-2.png" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const reiki = ref(0);

    return {
      reiki
    };
  }
};
</script>

<style scoped>
.pratice-taoism-page {
  color: #ccc;
}

.pratice-taoism-page img {
  width: 100%;
  height: 100%;
}

.pratice-taoism-page .reiki-style {
  position: absolute;
  top: 41%;
  right: 7px;
  width: 100%;
  text-align: center;
  color: white;
}

.pratice-taoism-page .verse {
  text-align: center;
  line-height: 35px;
}

.pratice-taoism-page .verse .title {
  font-size: 20px;
}
</style>