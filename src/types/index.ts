import { Tables } from "./database.types";

export type Channel = {
  id: string;
  name: string;
  lastMessage?: Message;
  avatar: string;
};

export type Message = {
  id: string;
  createdAt: string;
  content: string;
  sender?: User;
  image?: string;
};

export type User = Tables<"users">;
