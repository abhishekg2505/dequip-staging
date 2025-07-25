export type PodcastAttributes = {
  title: string;
  videoLink: string;
  alt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date: string;
  cover: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        caption: string | null;
        width: number;
        height: number;
        formats: object;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: object | null;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type PodcastData = {
  id: number;
  attributes: PodcastAttributes;
};
