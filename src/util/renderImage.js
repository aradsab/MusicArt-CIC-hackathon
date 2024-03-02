import { stableApi } from './apiCalls.mjs'; // Adjust the import path as needed

export const getBase64Image = async (prompt) => {
    try {
        const base64Image = await stableApi(prompt);
        return base64Image;
    } catch (error) {
        console.error('Error fetching base64 image:', error);
        return null;
    }
};