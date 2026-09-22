const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Post {
    id: number;
    slug: string;
    title: {rendered: string};
    content: {rendered: string};
    excerpt : {rendered: string};
    date : string;
}

export async function getPosts(): Promise<Post[]>  {

    

}