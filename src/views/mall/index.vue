<script setup lang="ts">
import cover from '@/assets/cover/cover.png'
const router = useRouter()

const onClickLeft = () => {
  router.go(-1)
}
const toBooking = () => {
  router.push('/booking')
}
const toGoods = (goods: goodsProps) => {
  if (!goods.isSell_out)
    router.push(`/goods?${goods.number}`)
}

interface goodsProps {
  cover: string
  name: string
  number: string
  price: number
  isSell_out: boolean
  originalPrice: number
}
const goodsList: goodsProps[] = [
  { cover, isSell_out: false, name: '马到成功摆件C2222', number: '002384', price: 1, originalPrice: 1 },
  { cover, isSell_out: true, name: '马到成功摆件C2222', number: '002385', price: 1, originalPrice: 1 },
  { cover, isSell_out: false, name: '马到成功摆件C2222', number: '002386', price: 1, originalPrice: 1 },
  { cover, isSell_out: false, name: '马到成功摆件C2222', number: '002387', price: 1, originalPrice: 1 },
]
</script>

<template>
  <div id="mall">
    <van-nav-bar title="商城" left-arrow @click-left="onClickLeft" />
    <div class="status">
      <van-tag color="#C53032">
        营业中
      </van-tag>
      <span>2022/02/25 16:22:12 星期一</span>
    </div>
    <div class="tips">
      <span>营业时间 周一至周五 14:00-18:30</span>
      <VanButton plain text="预约" size="mini" color="#C53032" @click="toBooking" />
    </div>
    <div class="goodsList">
      <div v-for="goods in goodsList" :key="goods.number" class="goods" @click="toGoods(goods)">
        <VanImage :src="goods.cover" width="100%" height="180" fit="cover" :class="{ sell_out: goods.isSell_out }" />
        <div class="body">
          <div class="name">
            {{ goods.name }}
          </div>
          <div class="number">
            编号：{{ goods.number }}
          </div>
          <div class="price">
            <span><span class="￥">￥</span>9800</span>
            <span>￥10800</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#mall {
  .status {
    display: flex;
    font-size: 13px;
    padding: 10px 18px;
    background-color: #FFFFFF;
    justify-content: space-between;
  }

  .tips {
    --van-button-mini-padding: 12px;
    font-size: 13px;
    color: #C53032;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .goodsList {
    padding: 0 11px;
    display: flex;
    flex-wrap: wrap;

    .goods {
      margin: 0 5px;
      margin-bottom: 11px;
      width: calc(50% - 10px);
      background-color: #FFFFFF;
      border-radius: 0px 0px 4px 4px;

      .sell_out {
        position: relative;

        &::before {
          top: 0;
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: rgba($color: #FFFFFF, $alpha: .5);
        }

        &::after {
          top: 50%;
          left: 50%;
          width: 90px;
          height: 90px;
          font-size: 24px;
          line-height: 90px;
          color: #FFFFFF;
          content: '已售完';
          text-align: center;
          border-radius: 50%;
          position: absolute;
          background-color: rgba($color: #000000, $alpha: .6);
          transform: translate(-50%, -50%);
        }
      }

      :deep(.van-image__img) {
        border-radius: 4px 4px 0px 0px !important;
      }

      .body {
        padding: 0 8px 8px 8px;

        .name {
          font-size: 15px;
          color: #13171A;
        }

        .number {
          font-size: 11px;
          color: #999999;
        }

        .price {
          &>span:nth-child(1) {
            font-weight: bold;
            color: #FF0000;
            font-size: 18px;

            .￥ {
              font-size: 12px;
            }
          }

          &>span:nth-child(2) {
            font-size: 13px;
            color: #999999;
            margin-left: 8px;
            text-decoration: line-through;
          }
        }
      }

    }
  }
}
</style>
