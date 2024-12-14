import { GetStaticProps } from 'next';
import { fetchPosts } from './api'
import { Post } from '../types/post';

interface PostsPageProps {
  posts: Post[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 to-purple-700 text-white">
      {/* Container principal */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 tracking-wide">
          All Posts from <span className="text-yellow-400">Ink & Ideas</span>
        </h1>

        <hr className="w-24 border-t-2 border-yellow-400 mb-8 mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-opacity-50 bg-black  p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
              onClick={() => (window.location.href = `/posts/${post.id}`)}
            >
              <h2 className="title-text-posts">{post.title}</h2>
              <p className="text-sm text-white mb-4">{post.body.slice(0, 100)}...</p> {/* Exibe somente os primeiros 100 caracteres */}
              <p className="text-xs text-white">{post.views} visualizações</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalida a página a cada 60 segundos
  };
};

