'use server';

import { json_placeholder_api_url } from "@/config/constants";

export async function getPosts() {
    let response = await fetch(`${json_placeholder_api_url}/posts?_limit=50`);
    let data = (await response.json()) as JsonPlaceholder.Post[];
    return data;
}

export async function getPostById(postId: number) {
    let response = await fetch(`${json_placeholder_api_url}/posts/${postId}`);
    let data = (await response.json()) as JsonPlaceholder.Post;
    return data;
}