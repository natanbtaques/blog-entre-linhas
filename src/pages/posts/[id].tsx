import { GetStaticPaths, GetStaticProps } from "next";
import { fetchPosts } from "../api";
import { Post } from "../../types/post";


interface PostDetailProps {
    post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
    return (
        <div className="min-h-screen flex flex-col items-center bg-color-pur-to-red py-12">
            <div className="container mx-auto px-6 sm:px-12 md:px-24 bg-white rounded-lg shadow-lg max-w-3xl">
                {/* Título do Post */}
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4 mt-10">{post.title}</h1>

                <hr className="border-t-2 border-gray-300 mb-6" />

                {/* Conteúdo do Post */}
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>{post.body}</p>
                </div>
                <div className="flex justify-center space-x-8 my-6">
                    <div className="text-center text-sm text-gray-500">
                        <span>{post.views} visualizações</span>
                    </div>
                    <div className="text-center text-sm text-gray-500">
                        <span>User Id: {post.id}</span>
                    </div>
                </div>

                <div className="text-center mb-6 text-sm text-gray-500">

                    {post.tags && post.tags.length > 0 ? (
                        <div className="flex flex-wrap justify-center space-x-2">
                            {post.tags.map((tag: string, index: number) => (
                                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p>No tags available</p>
                    )}
                </div>

                {/* Botão de Voltar */}
                <div className="flex justify-center mt-8">
                    <a
                        href="/posts"
                        className="bg-color-purple mb-10 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all"
                    >
                        Back to posts
                    </a>
                </div>
            </div>
        </div >
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await fetchPosts();
    const paths = posts.map((post: Post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const posts = await fetchPosts();
    const post = posts.find((p: Post) => p.id.toString() === params?.id);

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post,
        },
    };
};
