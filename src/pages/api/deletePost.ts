// services/postService.ts
export async function deletePost(postId: number): Promise<{ success: boolean, message?: string }> {
    try {
        const response = await fetch(`/api/?id=${postId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error deleting post:', errorData.message);
            return { success: false, message: errorData.message || 'Erro ao excluir o post.' };
        }

        return { success: true };
    } catch (error) {
        console.error('An error occurred while deleting the post:', error);
        return { success: false, message: 'Erro ao tentar excluir o post. Tente novamente mais tarde.' };
    }
}
