<script setup lang='ts'>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isBack: {
    type: Boolean,
    default: false,
  },
})
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
</script>

<template>
  <div class="header">
    <van-nav-bar :title="props.title" :border="false" :left-arrow="isBack" @click-left="onClickLeft" />
    <slot />
  </div>
</template>

<style scoped lang='scss'>
.header {
  --van-nav-bar-icon-color: #FFFFFF;
  --van-nav-bar-title-text-color: #FFFFFF;
  --van-nav-bar-background: transparent;
  height: 208px;
  background: url(@/assets/cover/blackCover.png) no-repeat;
  background-size: cover;
}
</style>
