import type { NextApiRequest, NextApiResponse } from 'next';
// Here we are going to fetch the posts from the API
export async function fetchPosts() {
    const res = await fetch("https://dummyjson.com/posts/");
    const data = await res.json();
    return data.posts; // Retorna os posts
  }
  
  async function addPost(newPost: { title: string; body: string; userId: number }) {
    const res = await fetch("https://dummyjson.com/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  
    const data = await res.json();
    return data; // Retorna o post adicionado
  }
  
  // Handler para a rota /api/posts
  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      // Adiciona um novo post
      const newPost = req.body; // Obtém o corpo do POST
      const addedPost = await addPost(newPost);
      // Retorna o novo post
      return res.status(201).json(addedPost);
      
    } else if (req.method === 'GET') {
      
      const posts = await fetchPosts();
  
      // Retorna os posts existentes
      return res.status(200).json(posts);
    } else {
      // Se o método não for nem GET nem POST, retorna um erro
      return res.status(405).json({ message: 'Método não permitido' });
    }
  }
