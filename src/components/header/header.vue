<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span><span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img width="100%" height="100%" :src="seller.avatar">
    </div>
    <transition name="detail-fade">
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <div class="name">{{seller.name}}</div>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import star from 'components/star/star';

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    star
  }
};
</script>

<style lang="less" rel="stylesheet/less">
@import "../../common/less/mixin";

.header {
  position: relative;
  color: #fff;
  background-color: rgba(7,17,27,.5);
}

.content-wrapper {
  position: relative;
  padding: 24px 12px 18px 24px;
  font-size: 0;

  .avatar {
    display: inline-block;
    vertical-align: top;
  }

  .content {
    display: inline-block;
    margin-left: 16px;
    font-size: 14px;
  }

  .title {
    .brand {
      display: inline-block;
      width: 30px;
      height: 18px;
      vertical-align: top;
    .bg-image('header/brand');
      background-size: cover;
      background-repeat: no-repeat;
    }

    .name {
      margin-left: 6px;
      vertical-align: top;
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
    }
  }

  .description {
    margin-top: 8px;
    font-size: 12px;
    line-height: 12px;
  }

  .support {
    margin-top: 10px;

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 4px;
      background-size: cover;
      background-repeat: no-repeat;
      vertical-align: top;

      &.decrease {
       .bg-image('header/decrease_1');
      }
      &.discount {
       .bg-image('header/discount_1');
       }
      &.special {
       .bg-image('header/special_1');
       }
      &.invoice {
       .bg-image('header/invoice_1');
       }
      &.guarantee {
       .bg-image('header/guarantee_1');
       }
    }

    .text {
      line-height: 12px;
      font-size: 10px;
      vertical-align: top;
    }
  }

  .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background-color: rgba(0,0,0,.2);
    border-radius: 14px;

    .count {
      font-size: 10px;
      vertical-align: top;
    }

    .icon-keyboard_arrow_right {
      margin-left: 2px;
      line-height: 24px;
      font-size: 10px;
    }
  }
}

.bulletin-wrapper {
  position: relative;
  height: 28px;
  padding-left: 12px;
  padding-right: 22px;
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgba(7,17,27,.2);

  .bulletin-title {
    display: inline-block;
    width: 22px;
    height: 12px;
    .bg-image('header/bulletin');
    background-size: cover;
    background-repeat: no-repeat;
    vertical-align: top;
    margin-top: 8px;
  }

  .bulletin-text {
    margin: 0 4px;
    font-size: 12px;
    vertical-align: top;
  }

  .icon-keyboard_arrow_right {
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 9px;
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}

.detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7,17,27,.8);
  //filter: blur(10px);
  z-index: 100;
  backdrop-filter: blur(10px);
}

.detail-fade-enter, .detail-fade-leave-active {
  opacity: 0;
}

.detail-fade-enter-active, .detail-fade-leave-active {
  transition: all .3s;
}

.detail-wrapper {
  min-height: 100%;
}

.detail-main {
  padding-top: 64px;
  padding-bottom: 64px;

  .name {
    line-height: 16px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  .star-wrapper {
    margin-top: 16px;
    text-align: center;
  }

  .title {
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;

    .line {
      flex: 1;
      position: relative;
      bottom: 8px;
      border-bottom: 1px solid rgba(255,255,255,.2);
    }

    .text {
      font-size: 14px;
      padding: 0 12px;
    }
  }

  .supports {
    width: 80%;
    margin: 0 auto;
    padding: 0 12px;
    line-height: 0;

    .support-item {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
       }
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 6px;
      background-repeat: no-repeat;
      background-size: cover;
      vertical-align: top;

      &.decrease {
       .bg-image('header/decrease_2');
       }
      &.discount {
       .bg-image('header/discount_2');
       }
      &.special {
       .bg-image('header/special_2');
       }
      &.invoice {
       .bg-image('header/invoice_2');
       }
      &.guarantee {
       .bg-image('header/guarantee_2');
       }
    }

    .text {
      font-size: 12px;
      line-height: 16px;
    }
  }

  .bulletin {
    width: 80%;
    margin: 0 auto;

    .content {
      font-size: 12px;
      line-height: 24px;
    }
  }
}

.detail-close {
  margin-top: -64px;
  height: 64px;
  font-size: 32px;
  text-align: center;
  color: rgba(255,255,255,.5);
}
</style>
