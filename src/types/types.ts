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
};

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

export interface Contact {
  name: string;
  email: string;
  body: string;
}

export const FORM_STATE = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  SUCCESS: "Success",
  FAILED: "Failed",
};

export type FORM_STATE = typeof FORM_STATE[keyof typeof FORM_STATE];

declare global {
  interface Window {
    prerenderReady: boolean;
    adsbygoogle: { [key: string]: unknown }[];
  }
}
