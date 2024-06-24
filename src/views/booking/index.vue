<script setup lang="ts">
const active = ref(0)
const checkIndex = ref(0)
const router = useRouter()

interface bookingsProps {
  name: string
  teamName?: string
  phone?: number
  time: string
  scope: string
  status: string
}
const onClickLeft = () => {
  router.go(-1)
}
const changeScope = (index: number) => {
  checkIndex.value = index
}
const priceScope: string[] = ['2000-3000', '3001-8000', '8001以上']

const myBookings: bookingsProps[] = [
  { name: '张三的小店', time: '2022/02/25 16:22:12', scope: '2000-3000', status: '已预约' },
  { name: '张三的小店', time: '2022/02/25 16:22:12', scope: '2000-3000', status: '已预约' },
]

const teamBookings: bookingsProps[] = [
  { name: '张三的小店', teamName: '张团队', phone: 13254644515, time: '2022/02/25 16:22:12', scope: '2000-3000', status: '已预约' },
  { name: '张三的小店', teamName: '张团队', phone: 13254644515, time: '2022/02/25 16:22:12', scope: '2000-3000', status: '已预约' },
]
</script>

<template>
  <div id="booking">
    <van-nav-bar title="预约" left-arrow :border="false" @click-left="onClickLeft" />
    <van-tabs v-model:active="active" border swipeable animated title-active-color="#C53032" color="#C53032">
      <van-tab title="我要预约">
        <van-cell-group :border="false">
          <van-cell title="预约画室" value="张三小店" />
          <van-cell title="画室状态" value="营业中" />
          <van-cell title="营业时间" value="周一至周五 13:00-18:00" />
          <van-cell title="价格范围">
            <div v-for="(scope, index) in priceScope" :key="index" class="radio">
              <label :for="scope + index">预约2000-3000</label>
              <input
                :id="scope + index" type="radio" name="type" :checked="checkIndex === index"
                @input="changeScope(index)"
              >
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>

      <van-tab title="我的预约" class="mine">
        <van-cell v-for="booking in myBookings" :key="booking.name" :title="booking.name" :border="false">
          <template #label>
            <span class="block">预约时间：{{ booking.time }}</span>
            <span class="block">价格范围：{{ booking.scope }}</span>
          </template>
          <template #value>
            {{ booking.status }}
          </template>
        </van-cell>
      </van-tab>

      <van-tab title="团队预约" class="mine">
        <van-cell v-for="booking in teamBookings" :key="booking.name" :title="booking.name" :border="false">
          <template #label>
            <span class="block">名称：{{ booking.teamName }}</span>
            <span class="block">联系电话：{{ booking.phone }}</span>
            <span class="block">预约时间：{{ booking.time }}</span>
            <span class="block">价格范围：{{ booking.scope }}</span>
          </template>
          <template #value>
            {{ booking.status }}
          </template>
        </van-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
#booking {
  .radio {
    font-size: 15px;
    margin-bottom: 12px;

    label {
      margin-right: 16px;
    }
  }

  .mine {
    :deep(.van-cell__label) {
      width: 300px !important;
    }

    .van-cell {
      margin-bottom: 12px;
    }

    .block {
      display: block;
    }
  }

}
</style>
