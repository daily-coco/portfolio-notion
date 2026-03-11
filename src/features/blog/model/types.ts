export type BlogPost = {
  thumbnail?: string;
  title: string;
  url: string;
  date: string;
  category: string;
  recently?: boolean;
  summary?: string;
};

export type BlogPostsResponse = {
  items: BlogPost[];
};
