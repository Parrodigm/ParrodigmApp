export type UserMessage = {
  role: "user";
  content: string;
};

export type AssistantMessage = {
  role: "assistant";
  content: string;
};

export type SystemMessage = {
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

export type ConversationResponse =
  | {
      type: "response";
      text: string;
      audio: string;
    }
  | {
      type: "products";
      query: string;
      products: Product[];
    };

export type CartItem = {
  product: Product;
  quantity: number;
};
