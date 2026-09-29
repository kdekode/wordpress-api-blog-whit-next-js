import Link from 'next/link';
import {getPosts} from '@/lib/wordpress';


export default async function Home() {

  const posts = await getPosts();

  return (
    <>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-white-900"> Blog de Wordpress</h1>

          <div className="grid gap-6 md:grid-cols-4">
            {posts.map((post) => (

              <article
                key={post.id}
                className="p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                
                <h2
                  className="text-xl font-semibold mb-2 text-black hover:text-blue-800"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered}}
                ></h2>

                <div
                  className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}
                >
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:underline font-medium text-sm"
                >
                  Leer entrada completa
                </Link>
              </article>
            ))}
          </div>

        </main>
    </>
  );
}
