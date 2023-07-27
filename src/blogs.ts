class Blog {
  title: string;
  date: string;
  tags: Tag[];
}

type Tag = "web" | "uniapp" | "vscode";

const TAGS: Tag[] = ["web", "uniapp", "vscode"];

const BLOGS: Blog[] = [
  {
    title: "新增vscode教程",
    date: "2022-10-18 14:54",
    tags: ["web", "uniapp", "vscode"],
  },
  {
    title: "示例1-标签",
    date: "2022-09-16 13:00",
    tags: ["web", "uniapp"],
  },
  {
    title: "示例2",
    date: "2022-09-14 13:01",
    tags: ["web", "uniapp", "vscode"],
  },
  {
    title: "示例3-重要",
    date: "2022-09-14 13:01",
    tags: ["web", "uniapp", "vscode"],
  },
];

export { Blog, BLOGS, TAGS, Tag };
