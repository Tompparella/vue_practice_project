import type { Tag } from "@/types";

export type LoginData = {
  email: string;
  password: string;
};

export type PostContentRequest = {
  title: string;
  tags: Tag[];
  image: File;
};
