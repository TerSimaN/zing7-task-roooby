'use server';

export async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = (await response.json()) as JsonPlaceholder.User[];
    return data;
}

export async function getUserByPostId(postId: number) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}`);
    let data = (await response.json()) as JsonPlaceholder.User;
    return data;
}