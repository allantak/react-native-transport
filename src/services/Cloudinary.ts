import {cloudName, uploadPreset, urlCloudinary} from '../constant/index'
async function storeImg(photo: any): Promise<any> {
    let result:any
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);
    await fetch(urlCloudinary, {
        method: "POST",
        body: data,
        headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
    }).then((res) => res.json())
    .then((data) => { result = data})
    return result
}

export const cloudinaryApi = { storeImg }
