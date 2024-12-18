import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchPosts } from "../api";
import { Post } from "../../types/post";
import { deletePost } from "../api/deletePost"; // Importe a função de deleção
import "react-toastify/dist/ReactToastify.css"; // Estilos do Toastify
import { ToastContainer, toast } from "react-toastify";

interface PostDetailProps {
    post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
    const router = useRouter(); // Usar router para redirecionamento
    const handleDeleteWithToast = async () => {
        const result = await deletePost(post.id); // `deletePost` agora retorna sucesso ou falha

        if (result.success) {
            toast.success("Post deletado com sucesso!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                router.push("/posts"); // Redireciona para a página de posts após a exclusão
            }, 3000); // Atraso para mostrar o toast antes de redirecionar
        } else {
            toast.error(result.message || "Erro ao deletar o post.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center bg-[url('/images/image3.jpg')] bg-cover bg-center bg-fixed"
        >
            <div className="min-h-screen flex flex-col items-center py-12">
                <div className="container mx-auto px-4 sm:px-6 sm:mx-4 md:px-12 lg:px-24 bg-white rounded-lg shadow-lg max-w-sm sm:max-w-sm md:max-w-lg lg:max-w-4xl">
                    {/* Título do Post */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-4 mt-6 sm:mt-10">
                        {post.title}
                    </h1>

                    <hr className="border-t-2 border-gray-300 mb-6" />

                    {/* Conteúdo do Post */}
                    <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
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

                    {/* Tags */}
                    <div className="text-center mb-6 text-sm text-gray-500">
                        {post.tags && post.tags.length > 0 ? (
                            <div className="flex flex-wrap justify-center gap-2">
                                {post.tags.map((tag: string, index: number) => (
                                    <span key={index} className="text-white color-2 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p>No tags available</p>
                        )}
                    </div>

                    {/* Botões de Ação */}
                    <div>
                        <div className="flex justify-center mt-8 space-x-4 mb-10">
                            <a
                                href="/posts"
                                className="color-1 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold"
                            >
                                Back to posts
                            </a>
                            <button
                                onClick={handleDeleteWithToast} // Chama a função de deletar com toast
                                className="color-2 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-color-pur-to-red"
                            >
                                Delete Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer /> {/* Necessário para exibir os toasts */}
        </div>
    );
};

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

export default PostDetail;
