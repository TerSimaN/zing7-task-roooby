'use server';

export async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
    let data = (await response.json()) as JsonPlaceholder.Post[];
    return data;
}

export async function getPostById(postId: number) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    let data = (await response.json()) as JsonPlaceholder.Post;
    return data;
}