import React from "react";

export type TypeHeaderProps = {
  isMenuClose: boolean;
  setIsMenuClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TypeMenuProps = {
  isMenuClose: boolean;
};

export type TypeMenuConfigResponse = {
  title: string;
  subMenuItems: {
    title: string;
    dropdown?: { title: string }[];
  }[];
}[];

export type TypeBaseResponse<T> = {
  success: boolean;
  result: {
    response: T;
    message: string;
  };
};

export type TypeProduct = {
  id: string;
  storeId: string;
  name: string;
  slu: string;
  sku: string;
  description: string;
  quantity: string; // Assuming quantity is stored as a string, change to number if it's actually numeric
  price: number;
  unit: string;
  imageUrls: string[]; // Array of image URLs
  categoryId: string;
  brandId: string;
  manufacturedDate: string;
  expiryDate: string;
};

export type TypeProductListResponse = {
  id: string;
  storeId: string;
  name: string;
  slu: string;
  sku: string;
  description: string;
  quantity: string; // Assuming quantity is stored as a string, change to number if it's actually numeric
  price: number;
  unit: string;
  imageUrls: string[]; // Array of image URLs
  categoryId: string;
  brandId: string;
  manufacturedDate: string;
  expiryDate: string;
};

export type TypeProductTableProps = {
  isLoading: boolean;
  productList: TypeProduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns?: any;
};

export type TableColumn = {
  title: string;
  dataIndex: string;
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (_: any) => React.ReactNode;
};

export type TypeResponsiveTableProps = {
  columns: TableColumn[];
  mobileWidth: string;
};

type TypeFilterItem = {
  title: string;
  key: string;
  options: string[];
  type: string;
};

type TypeSearchItem = {
  title: string;
  key: string;
};

export type TypeFilterProps = TypeFilterItem[];
export type TypeSearchProps = TypeSearchItem[];


export type TypeSearchFilterProps = {
  filterProps: TypeFilterProps;
  searchProps: TypeSearchProps;
};

export type TypeListTableProps = {
  filterProps:TypeFilterProps;
    searchProps: TypeSearchProps;
    columns: TableColumn[]
    mobileWidth: string;
}

export type TypeListTableHeaderAction = {
  title: string;
  fn?: () => void;
  icon: React.ReactElement;
  color?: string;
}

export type TypeListTableHeaderProps = {
  title: string;
  subtitle: string;
  actions?: TypeListTableHeaderAction[];
}
