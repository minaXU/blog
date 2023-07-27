
<template>
  <div class="page_blog_list">
    <div class="button_view">
      <button
        class="nav_button"
        :class="tag == selected ? 'active' : ''"
        v-for="tag in tags"
        :key="tag"
        @click="selected = tag"
      >
        {{ tag }}
      </button>
    </div>
    <div class="blog_list">
      <BlogCell
        v-for="item in showData"
        :key="item.title"
        :data="item"
      ></BlogCell>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, computed, ref, Ref } from "vue";
import { BLOGS, TAGS, Tag } from "../../blogs";

type TagAndAll = Tag | "全部";
let selected: Ref<TagAndAll> = ref("全部");
let tags: TagAndAll[] = ["全部", ...TAGS];

const showData = computed(() => {
  const list = BLOGS;
  return selected.value == "全部"
    ? list
    : list.filter((item) => item.tags.includes(selected.value as Tag));
});
</script>

<style scoped>
.page_blog_list {
  padding: 40px 0;
}
.blog_list {
  border-radius: 8px;
  overflow: hidden;
  margin: 0 0 100px;
  background: #f7f7f7;
}

.blog_list {
  margin: 40px 0;
}
.nav_button {
  border-radius: 20px;
  border: none;
  padding: 6px 20px;
  cursor: pointer;
}
.nav_button.active {
  /* background: #409eff; */
  /* color: white; */
  padding: 8px 24px;
  font-size: 18px;
  font-weight: bold;
}
.nav_button + .nav_button {
  margin-left: 10px;
}
</style>
