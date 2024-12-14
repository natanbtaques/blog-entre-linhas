// services/postService.ts
export async function deletePost(postId: number): Promise<boolean> {
    try {
        const response = await fetch(`/api/?id=${postId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error deleting post:', errorData.message);
            return false;
        }

        return true; // Retorna sucesso
    } catch (error) {
        console.error('An error occurred while deleting the post:', error);
        return false; // Retorna falha
    }
}
