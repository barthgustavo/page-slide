import { post } from "../adapters/xhr";

export default function upload(file: any) {
    const formData = new FormData();
    formData.append('file', file);

    return post('/upload', formData);
};