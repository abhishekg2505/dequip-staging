export type SpotlightAttributes = {
  date: string;
  title: string;
  link: string | null;
  target: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: {
    id: number;
    attributes: {
      name: string;
      bio: string | null;
      avatar: {
        data: {
          id: number;
          attributes: {
            url: string;
            alternativeText: string;
          };
        };
      };
    };
  };
  image: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
};

export type SpotlightData = {
  id: number;
  attributes: SpotlightAttributes;
};
