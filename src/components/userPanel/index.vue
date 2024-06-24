<script setup lang='ts'>
const props = defineProps({
  isPerson: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="user">
    <VanIcon color="#EEEEEE" size="80" name="user-circle-o" />
    <div class="info">
      <span>SIIUN</span>
      <template v-if="!props.isPerson">
        <span>154 5487 4874</span>
        <span>推荐人：张三</span>
      </template>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.user {
    display: flex;
    padding: 20px 16px;
    align-items: center;

    .info {
      display: flex;
      color: #FFFFFF;
      margin-left: 11px;
      flex-direction: column;

      &>span:first-child {
        font-size: 19px;
        font-weight: bold;
      }

      &>span {
        font-size: 13px;
        margin-bottom: 2px;
      }
    }

  }
</style>
