'use server';

import { json_placeholder_api_url } from "@/config/constants";

export async function getPhotos() {
    let response = await fetch(`${json_placeholder_api_url}/photos?_limit=50`);
    let data = (await response.json()) as JsonPlaceholder.Photo[];
    return data;
}

export async function getPhotoById(photoId: number) {
    let response = await fetch(`${json_placeholder_api_url}/photos/${photoId}`);
    let data = (await response.json()) as JsonPlaceholder.Photo;
    return data;
}