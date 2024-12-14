import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export const handlePosts = () => {
const [userId, setUserId] = useState('');
const [title, setTitle] = useState('');
const [tags, setTags] = useState('');
const [content, setContent] = useState('');
const [loading, setLoading] = useState(false); // Para controle de carregamento
const [error, setError] = useState(''); // Para mostrar erro, se houver
const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!userId || !title || !tags || !content) {
        setError('Por favor, preencha todos os campos.');
        return;
    }

    setError(''); // Limpa qualquer erro anterior
    setLoading(true); // Inicia o carregamento

    try {
        // Envia o novo post para a API
        await axios.post('/api', { userId: parseInt(userId), title, tags, content });
        console.log('Post criado com sucesso!', { userId, title, tags, content });
        // Redireciona para a página de posts após a criação
        router.push('/posts');
    } catch (error) {
        console.error('Erro ao criar o post:', error);
        setError('Ocorreu um erro ao criar o post. Tente novamente mais tarde.');
    } finally {
        setLoading(false); // Finaliza o carregamento
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
}


