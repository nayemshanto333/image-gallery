export interface TImage  {
    id: number;
    name: string;
    url: string;
    likes: number;
    shares: number;
    category: 'photo' | 'vector';
};
