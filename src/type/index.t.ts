export type Tcategory ="photo" | "vector";
export interface TImage  {
    id: number | string;
    name: string;
    url: string;
    likes: number;
    shares: number;
    category: Tcategory;
};
