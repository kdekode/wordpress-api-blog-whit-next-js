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

    const res = await fetch(`${API_URL}/posts?_embed`, {
        next: {revalidate: 60},
    });

    if(!res.ok){
        throw new Error('Error al consultar los posts');
    }

    return res.json();

}

export async function getPostBySlug(slug: string) : Promise<Post | null> {

    const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
        next: {revalidate: 60},
    });

    if(!res.ok) return null;

    const posts: Post[] = await res.json();
    return posts.length > 0 ? posts[0] : null;

}