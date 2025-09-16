import { defineStore } from 'pinia'

export const storeSetting = defineStore('setting', {
    state: () => {
        return {
            settingMenus: [],    // 从服务端获取的菜单数据
            currentMenuIndex: 0  // 当前选中菜单索引
        }
    },
    getters: {
        menus: (state) => {
            return state.settingMenus;
        }
    },
    actions: {
        setMenus(menus) {
            this.settingMenus = menus;
        },
        changeCurrentMenuIndex(index) {
            this.currentMenuIndex = index
        }
    }
});