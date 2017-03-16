<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index"></span>
    </div>
</template>

<script type="text/ecmascript-6">
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';

export default {
    props: {
        size: {
            type: Number
        },
        score: {
            type: Number
        }
    },
    computed: {
        starType() {
            return 'star-' + this.size;
        },
        itemClasses() {
            let result = [];
            let score = Math.floor(this.score * 2) / 2;
            let integer = Math.floor(score);
            let hasDecimal = score % 1 !== 0;

            for (let i = 0; i < integer; i++) {
                result.push(CLS_ON);
            }
            if (hasDecimal) {
                result.push(CLS_HALF);
            }
            while (result.length < LENGTH) {
                result.push(CLS_OFF);
            }

            return result;
        }
    }
};
</script>

<style lang="less" rel="stylesheet/less">
@import "../../common/less/mixin.less";

.star {
    font-size: 0;
}

.star-item {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
}

.star-48 .star-item {
    width: 20px;
    height: 20px;

    + .star-item {
        margin-left: 22px;
    }

    &.on {
      .bg-image('star/star48_on')
    }

    &.off {
     .bg-image('star/star48_off')
    }

    &.half {
     .bg-image('star/star48_half')
    }
}

.star-36 .star-item {
    width: 15px;
    height: 15px;

     + .star-item {
        margin-left: 6px;
    }

    &.on {
     .bg-image('star/star36_on')
     }

    &.off {
     .bg-image('star/star36_off')
     }

    &.half {
     .bg-image('star/star36_half')
     }
}

.star-24 .star-item {
    width: 10px;
    height: 10px;

    + .star-item {
        margin-left: 3px;
    }

    &.on {
     .bg-image('star/star24_on')
     }

    &.off {
     .bg-image('star/star24_off')
     }

    &.half {
     .bg-image('star/star24_half')
     }
}

</style>
