import API from "../axios"; // it uses baseURL: http://localhost:8080/api

export const uploadProduct = async (product, imageFile, token) => {

  const formData = new FormData();

  formData.append("imageFile", imageFile);
  formData.append(
    "product",
    new Blob([JSON.stringify(product)], {
      type: "application/json",
    })
  );

  try {
    console.log(token)
    const response = await API.post("/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
