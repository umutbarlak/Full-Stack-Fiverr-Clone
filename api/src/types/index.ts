export type ExtendedFiles = {
  coverImage: { path: string }[];
  images: { path: string }[];
};

export type Query = {
  category?: string;
  search?: string;
  userID?: string;
  min?: number;
  max?: number;
};

export type Filters = {
  user?: string;
  category?: string;
  package_price?: {
    $gte?: number;
    $lte?: number;
  };
  title?: {
    $regex: string;
    $options: string;
  };
};
