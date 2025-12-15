export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          avatar_url: string | null;
          role: "user" | "admin";
          interests: string[] | null;
          hobbies: string[] | null;
        };
        Insert: {
          id: string;
          username: string;
          avatar_url?: string | null;
          role?: "user" | "admin";
          interests?: string[] | null;
          hobbies?: string[] | null;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      hobbies: {
        Row: { id: number; name: string };
        Insert: { id?: number; name: string };
        Update: Partial<Database["public"]["Tables"]["hobbies"]["Insert"]>;
      };
      interests: {
        Row: { id: number; name: string };
        Insert: { id?: number; name: string };
        Update: Partial<Database["public"]["Tables"]["interests"]["Insert"]>;
      };
      gifts: {
        Row: {
          id: number;
          title: string;
          price: number;
          description: string | null;
          image_url: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          title: string;
          price: number;
          description?: string | null;
          image_url?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["gifts"]["Insert"]>;
      };
      gifts_hobbies: {
        Row: { gift_id: number; hobby_id: number };
        Insert: { gift_id: number; hobby_id: number };
        Update: Partial<Database["public"]["Tables"]["gifts_hobbies"]["Insert"]>;
      };
      gifts_interests: {
        Row: { gift_id: number; interest_id: number };
        Insert: { gift_id: number; interest_id: number };
        Update: Partial<Database["public"]["Tables"]["gifts_interests"]["Insert"]>;
      };
      wishlist_items: {
        Row: {
          id: number;
          user_id: string;
          gift_id: number;
          quantity: number;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          user_id: string;
          gift_id: number;
          quantity?: number;
        };
        Update: Partial<Database["public"]["Tables"]["wishlist_items"]["Insert"]>;
      };
      friends: {
        Row: {
          user_id: string;
          friend_id: string;
          created_at: string | null;
        };
        Insert: {
          user_id: string;
          friend_id: string;
        };
        Update: Partial<Database["public"]["Tables"]["friends"]["Insert"]>;
      };
      generated_ideas: {
        Row: {
          id: number;
          user_id: string;
          gift_id: number | null;
          url: string | null;
          text: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          user_id: string;
          gift_id?: number | null;
          url?: string | null;
          text?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["generated_ideas"]["Insert"]>;
      };
    };
    Functions: {
      get_recommended_gifts: {
        Args: {
          p_interests: string[];
          p_hobbies: string[];
        };
        Returns: Database["public"]["Tables"]["gifts"]["Row"][];
      };
    };
  };
}
