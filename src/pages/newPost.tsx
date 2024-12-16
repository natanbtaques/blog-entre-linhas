import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Estilos do Toastify
import { handlePosts } from "./api/handlePost";

const NewPostPage = () => {
    const {
        userId,
        setUserId,
        title,
        setTitle,
        tags,
        setTags,
        content,
        setContent,
        loading,
        error,
        handleSubmit,
    } = handlePosts();

    const handleSubmitWithToast = async (e: React.FormEvent) => {
        const result = await handleSubmit(e); // `handleSubmit` agora retorna sucesso ou falha.

        if (result.success) {
            toast.success("Post criado com sucesso!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error(result.message || "Erro ao criar o post.", {
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
            className="min-h-screen flex items-center justify-center bg-[url('/images/image3.jpg')] bg-cover bg-center bg-fixed"
        >
            {/* Componente ToastContainer - Necessário para exibir notificações */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="w-full max-w-2xl p-4 sm:p-8">
                <div className="dark-blog p-4 sm:p-8 rounded-lg shadow-xl w-full">
                    <h1 className="title-text mb-4 sm:mb-6 text-center text-lg sm:text-2xl">Create New Post</h1>

                    {/* Fallback para mensagens de erro */}
                    {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

                    <form
                        onSubmit={handleSubmitWithToast}
                        className="space-y-4 sm:space-y-6 dark-text-blog"
                        data-testid="new-post-form"
                    >
                        <div>
                            <input
                                type="number"
                                placeholder="User ID"
                                className="border p-2 sm:p-3 rounded-lg w-full input-style"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Title"
                                className="border p-2 sm:p-3 rounded-lg w-full input-style"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Tags"
                                className="border p-2 sm:p-3 rounded-lg w-full input-style"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Content"
                                className="border p-2 sm:p-3 rounded-lg w-full h-32 sm:h-40 input-style"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full color-2 white-text-blog p-2 sm:p-3 rounded-lg transition-colors duration-300"
                            disabled={loading}
                        >
                            {loading ? "Enviando..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewPostPage;
