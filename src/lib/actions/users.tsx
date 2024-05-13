'use server';

import { json_placeholder_api_url } from "@/config/constants";

export async function getUsers() {
    let response = await fetch(`${json_placeholder_api_url}/users`);
    let data = (await response.json()) as JsonPlaceholder.User[];
    return data;
}

export async function getUserByPostId(postId: number) {
    let response = await fetch(`${json_placeholder_api_url}/users/${postId}`);
    let data = (await response.json()) as JsonPlaceholder.User;
    return data;
}