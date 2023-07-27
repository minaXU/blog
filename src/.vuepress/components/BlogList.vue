
<template>
  <div class="message-list">
    <div class="nav-button">
      <button v-for="tag in tags" :key="tag" @click="selected = tag">
        {{ tag }}
      </button>
    </div>
    <message-cell
      v-for="item in showData"
      :key="item.title"
      :data="item"
    ></message-cell>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, computed } from "vue";
import { BLOGS, TAGS, Tag } from "../../blogs";

type TagAndAll = Tag | "all";
// => 列表数据
let selected: TagAndAll = "all";
let tags: TagAndAll[] = [ "all", ...TAGS];

const showData = computed(() => {
  const list = BLOGS;
  return selected == "all"
    ? list
    : list.filter((item) => item.tags.includes(selected as Tag));
});
</script>

<style scoped>
.message-list {
  border-radius: 8px;
  overflow: hidden;
  margin: 0 0 100px;
  background: #f7f7f7;
}
.nav-button {
  padding: 20px 20px 0;
}
</style>
