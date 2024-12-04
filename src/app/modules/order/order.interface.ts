export type Order = {
  email: string;
  product: string;
  quantity: number;
  totalprice: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
};
