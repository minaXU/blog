
<template>
  <div class="message-cell">
    <p class="title">{{ data.title }}</p>
    <div class="foot">
      <span class="date">{{ data.date }}</span>
      <span v-if="data.tags && data.tags.length">标签：</span>
      <span class="tag-span" v-for="tag in data.tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { Blog } from "../../blogs";

const { data } = defineProps<{
  data: Blog;
}>(); // => 列表数据

</script>

<style scoped>
* {
  margin: 0;
  font-size: 14px;
}
.title {
  font-size: 16px;
  font-weight: 500;
  color: black;
}
.message-cell {
  position: relative;
  padding: 20px 20px 10px 20px;
  background: #f7f7f7;
}
.message-cell::after {
  left: 20px;
  right: 20px;
  bottom: 0;
  display: block;
  content: " ";
  position: absolute;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  transform: scaleY(0.5);
}
.date {
  margin-right: 20px;
  float: left;
}
.pagetag {
  margin: 0 10px;
}
.foot {
  text-align: right;
  min-height: 20px;
}
.tag-span+.tag-span {
  margin-left: 10px;
}
</style>


