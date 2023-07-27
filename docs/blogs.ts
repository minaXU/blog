class Blog {
  title: string;
  date: string;
  path?: string;
  tags: Tag[];
}

type Tag = "java" | "uniapp" | "vue" | "other";

const TAGS: Tag[] = ["java", "uniapp", "vue", "other"];

const BLOGS: Blog[] = [
  {
    title: "uniapp",
    date: "2022-10-18 14:54",
    tags: ["uniapp"],
  },
  {
    title: "java",
    date: "2022-09-16 13:00",
    tags: ["java"],
  },
  {
    title: "vue",
    date: "2022-09-14 13:01",
    tags: ["vue"],
  },
  {
    title: "使用Github搭建个人博客",
    path: "/other/github_blog",
    date: "2023-07-27",
    tags: ["other"],
  },
];

export { Blog, BLOGS, TAGS, Tag };
