'use server';

export async function getPhotos() {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50");
    let data = (await response.json()) as JsonPlaceholder.Photo[];
    return data;
}

export async function getPhotoById(photoId: number) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
    let data = (await response.json()) as JsonPlaceholder.Photo;
    return data;
}