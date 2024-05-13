'use server';

import { json_placeholder_api_url } from "@/config/constants";

export async function getCommentByPostId(postId: number) {
    let response = await fetch(`${json_placeholder_api_url}/posts/${postId}/comments`);
    let data = (await response.json()) as JsonPlaceholder.Comment[];
    return data;
}