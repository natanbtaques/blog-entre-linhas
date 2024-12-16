import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const handlePosts = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação simples
        if (!userId || !title || !tags || !content) {
            setError('Por favor, preencha todos os campos.');
            return { success: false, message: 'Campos obrigatórios faltando.' };
        }

        if (isNaN(Number(userId)) || Number(userId) <= 0) {
            setError('O ID do usuário deve ser um número positivo.');
            return { success: false, message: 'ID do usuário inválido.' };
        }

        setError('');
        setLoading(true);

        try {
            // Envia os dados para a API
            await axios.post('/api', {
                userId: parseInt(userId),
                title,
                tags,
                content,
            });

            return { success: true };
            
        } catch (err) {
            console.error('Erro ao criar o post:', err);
            setError('Ocorreu um erro ao criar o post.');
            return { success: false, message: 'Erro ao criar o post.' };
        } finally {
            router.push('/posts');
            setLoading(false);
        }
    };

    return {
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
    };
};
