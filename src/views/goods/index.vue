<script setup lang='ts'>
import goodsDesc from '@/assets/cover/goodsDesc.png'

const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const toOrderDetail = () => {
  router.push('/orderDetail')
}
const images: string[] = [
  'https://img0.baidu.com/it/u=4084527245,4107923695&fm=253&fmt=auto&app=138&f=JPEG?w=521&h=500',
  'https://img0.baidu.com/it/u=524802906,1054969451&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1258',
  'https://img1.baidu.com/it/u=3279571526,875230767&fm=253&fmt=auto&app=138&f=JPEG?w=590&h=500',
]
</script>

<template>
  <div id="goods">
    <van-nav-bar title="商品" left-arrow @click-left="onClickLeft" />
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <VanImage :src="image" width="100%" height="100%" fit="cover" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          {{ active + 1 }}/{{ total }}
        </div>
      </template>
    </van-swipe>
    <div class="goods">
      <span class="name">马到成功摆件C2222</span>
      <div>
        <span>藏品编号</span>
        <span>002384</span>
      </div>
      <div>
        <span>快递</span>
        <span>包邮</span>
      </div>
      <div>
        <span>藏品出价</span>
        <span class="price">￥9800</span>
      </div>
    </div>
    <div class="goodsDesc">
      <div class="title">
        商品详情
      </div>
      <VanImage :src="goodsDesc" />
    </div>

    <div class="bottom_Btn">
      <VanButton round color="#C53032" @click="toOrderDetail">
        立即预约
      </VanButton>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#goods {
  margin-bottom: 64px;

  .van-swipe {
    height: 375px;

    .custom-indicator {
      color: #FFFFFF;
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 8px;
      font-size: 12px;
      border-radius: 9px;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .goods {
    padding: 16px;
    background-color: #FFFFFF;

    .name {
      font-weight: bold;
      font-size: 20px;
    }

    >div {
      color: #242424;
      font-size: 13px;
      font-weight: bold;

      .price {
        color: #FF0000 !important;
      }

      >span {
        width: 80px;
        margin-top: 6px;
        display: inline-block;
      }

      >span:last-child {
        color: #999999;
      }
    }
  }

  .goodsDesc {
    margin-top: 12px;
    background-color: #FFFFFF;

    .title {
      font-weight: bold;
      padding: 12px 16px;
      border-bottom: 1px solid #F5F5F5;
    }
  }

  .bottom_Btn {
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    padding: 10px 16px;
    background-color: #FFFFFF;

    .van-button {
      width: 100%;
      height: 44px;
    }
  }

}
</style>
