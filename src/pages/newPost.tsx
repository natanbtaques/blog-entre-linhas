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
        <div
            className="min-h-screen flex items-center justify-center bg-[url('/images/image3.jpg')] bg-cover bg-center bg-fixed"
        >
            <div className="w-full max-w-2xl p-4 sm:p-8">
                <div className="dark-blog p-4 sm:p-8 rounded-lg shadow-xl w-full">
                    <h1 className="title-text mb-4 sm:mb-6 text-center text-lg sm:text-2xl">Create New Post</h1>
                    {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 dark-text-blog" data-testid="new-post-form">
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
                            {loading ? 'Enviando...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewPostPage;
