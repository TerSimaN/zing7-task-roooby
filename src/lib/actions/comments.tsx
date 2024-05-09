'use server';

export async function getCommentByPostId(postId: number) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    let data = (await response.json()) as JsonPlaceholder.Comment[];
    return data;
}