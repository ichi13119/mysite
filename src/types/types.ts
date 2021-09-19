interface ThumbnailData {
  url: string;
  width: number;
  height: number;
}

export interface Post {
  id: string;
  title: string;
  body: CMSContents[];
  createdAt: string;
  updatedAt: string;
  thumbnail?: ThumbnailData;
}

type CMSContents = {
  fieldId: string;
  content: string;
}

export interface FetchFromCMS {
  contents: Post[];
  limit: number;
  offset: number;
  totalCount: number;
}

type ContactEvent = {
  action: "submit_form";
  category: "contact";
  label: string;
};

type ClickEvent = {
  action: "click";
  category: "other";
  label: string;
};

export type Event = ContactEvent | ClickEvent;

declare global {
  interface Window {
    prerenderReady: boolean;
    adsbygoogle: { [key: string]: unknown }[];
  }
}
