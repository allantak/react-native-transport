async function storeImg(photo: any): Promise<any> {
    let result:any
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "transport");
    data.append("cloud_name", "djbamugc2");
    await fetch("https://api.cloudinary.com/v1_1/djbamugc2/upload", {
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
