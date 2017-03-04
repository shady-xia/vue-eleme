<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <router-link to="/goods" class="tab-item">商品</router-link>
        <router-link to="/ratings" class="tab-item">评价</router-link>
        <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
     <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header';

const ERR_OK = 0;

export default {
    data() {
        return {
            seller: {}
        };
    },
    created() {
        this.$http.get('/api/seller').then((response) => {
            response = response.body;
            if (response.error === ERR_OK) {
                this.seller = response.data;
            }
        });
    },
    components: {
        'v-header': header
    }
};
</script>

<style lang="less" rel="stylesheet/less">
@import "./common/less/mixin.less";

.tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    width: 100%;
    .border-1px(rgba(7,17,27,.1));
}

.tab-item {
    flex: 1;
    text-align: center;
    color: rgb(77,85,93);
    font-size: 14px;

    &.active {
         color: rgb(240,20,20);
    }
}
</style>
