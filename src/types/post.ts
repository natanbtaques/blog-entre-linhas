export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    date?: string;
    views?: number; 
    tags?: string[]; 
  }
