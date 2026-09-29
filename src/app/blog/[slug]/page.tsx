import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/wordpress';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-10">
      <h1 
        className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
      />
      
      <p className="text-gray-500 text-sm mb-8 border-b pb-4">
        Publicado el {new Date(post.date).toLocaleDateString('es-ES', { dateStyle: 'long' })}
      </p>

      {/* Renderizamos el HTML devuelto por la API de WordPress */}
      <div 
        className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
      />
    </article>
  );
}