import axios from 'axios';

const IMGUR_API_URL = 'https://api.imgur.com/3/image';
const CLIENT_ID = 'dc5e67ed4c84aff';

const uploadImage = async (imageFile, retries = 3, delay = 1000) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post(IMGUR_API_URL, formData, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    const imageUrl = response.data.data.link;
    console.log('Generated Imgur URL:', imageUrl);
    return imageUrl;
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      console.warn(`Rate limit exceeded. Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return uploadImage(imageFile, retries - 1, delay * 2);
    } else {
      console.error('Error uploading image to Imgur:', error);
      throw error;
    }
  }
};

export { uploadImage };