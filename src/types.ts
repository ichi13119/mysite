export interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  thumb?: string;
}

export interface fetchFromCMS {
  contents: Post[];
  limit: number;
  offset: number;
  totalCount: number;
}
