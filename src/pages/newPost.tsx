import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const NewPostPage = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulário enviado');
        console.log('Dados atuais:', { userId, title, tags, content });
        try {
            // Envia o novo post para a API
            await axios.post('/api/posts', { userId, title, tags, content });

            // Redireciona para a página de posts
            router.push('/posts');
        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    };

    return (
        <div className=" bg-color-purple min-h-screen flex items-center justify-center">
            <div className="bg-opacity-50 bg-black p-8 rounded-lg shadow-xl w-full max-w-3xl">
                <h1 className="title-text-yellow mb-6 text-center">
                    Create New Post
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="id"
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
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewPostPage;
