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

    return (
        <div className="bg-color-purple min-h-screen flex items-center justify-center">
            <div className="bg-opacity-50 bg-black p-8 rounded-lg shadow-xl w-full max-w-3xl">
                <h1 className="title-text-yellow mb-6 text-center">Create New Post</h1>
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="new-post-form">
                    <div>
                        <input
                            type="number"
                            placeholder="User ID"
                            className="border p-3 rounded-lg w-full input-style"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            className="border p-3 rounded-lg w-full input-style"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Tags"
                            className="border p-3 rounded-lg w-full input-style"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Content"
                            className="border p-3 rounded-lg w-full h-40 input-style"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-to-pink text-white p-3 rounded-lg hover:from-purple-500 hover:to-pink-600 transition-colors duration-300"
                        disabled={loading} // Desabilita o botão enquanto está carregando
                    >
                        {loading ? 'Enviando...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewPostPage;
