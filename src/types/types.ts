export type UserMessage = {
  role: "user";
  content: {
    text: string | null;
    currentDisplayedProductIds: number[];
    cart: CartItem[];
    currentPageInfo: PageInfo;
  };
};

export type AssistantMessage = {
  role: "assistant";
  content: {
    text: string | null;
    actions: Action[];
  };
};

export type SystemMessage = {
  role: "system";
  content: string;
};

export type ModelUserMessage = {
  role: "user";
  content: string;
};

export type ModelAssistantMessage = {
  role: "assistant";
  content: string;
};

export type ModelSystemMessage = {
  role: "system";
  content: string;
};

export type Conversation = (UserMessage | AssistantMessage | SystemMessage)[];

export type Manufacturer = {
  id: number;
  displayName: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type Color = {
  id: number;
  major: string;
  sub: string;
  createdAt: string;
  deletedAt: string | null;
};

export type Image = {
  id: number;
  url: string;
  description: string;
  createdAt: string;
  deletedAt: string | null;
};

export type Material = {
  id: number;
  name: string;
  createdAt: string;
  deletedAt: string | null;
};

export type Product = {
  id: number;
  displayName: string;
  description: string;
  manufacturer: Manufacturer;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  type: string;
  colors: Color[];
  size: string;
  weightRange: string;
  season: string;
  materials: Material[];
  instructions: string;
  images: Image[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type CartItem = {
  productId: number;
  quantity: number;
};

export type HomePageInfo = {
  type: "home";
};

export type ConversationPageInfo = {
  type: "conversation";
};

export type ProductListPageInfo = {
  type: "product-list";
};

export type ProductDetailsPageInfo = {
  type: "product-details";
  productId: number;
};

export type CartPageInfo = {
  type: "cart";
};

export type PageInfo = HomePageInfo | ConversationPageInfo | ProductListPageInfo | ProductDetailsPageInfo | CartPageInfo;

export type ShowProductsAction = {
  type: "show-products";
  productIds: number[];
};

export type AddCartAction = {
  type: "add-cart";
  productId: number;
  quantity: number;
};

export type UpdateCartAction = {
  type: "update-cart";
  productId: number;
  quantity: number;
};

export type RemoveCartAction = {
  type: "remove-cart";
  productId: number;
};

export type ClearCartAction = {
  type: "clear-cart";
};

export type MovePageAction = {
  type: "move-page";
  page: PageInfo;
};

export type Action = ShowProductsAction | AddCartAction | UpdateCartAction | RemoveCartAction | ClearCartAction | MovePageAction;

export type AssistantResponse = {
  text: string | null;
  audio: string | null;
  actions: Action[];
};
