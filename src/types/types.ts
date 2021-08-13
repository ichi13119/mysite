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
