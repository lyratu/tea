<script setup lang="ts">
</script>

<template>
  <router-view />
  <van-tabbar route active-color="#C53032" inactive-color="#BAB9C5" placeholder>
    <van-tabbar-item replace to="/main/home" icon="wap-home">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/main/orderList" icon="balance-list">
      全部订单
    </van-tabbar-item>
    <van-tabbar-item replace to="/main/distribution" icon="cluster-o">
      分销中心
    </van-tabbar-item>
    <van-tabbar-item replace to="/main/person" icon="contact">
      个人中心
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss">

</style>
