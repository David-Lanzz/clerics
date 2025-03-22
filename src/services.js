import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

export const getClericById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/cleric/getOne/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createCleric = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/cleric/create`, body)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateCleric = async (body) => {
    try {
        console.log(body)
        const response = await axios.patch(`${baseUrl}/cleric/edit/${body.id}`, body.payload)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getAllClerics = async () => {
    try {
        const response = await axios.get(`${baseUrl}/cleric/getAll`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const uploadImage = async (formData) => {
    try {
        const cloudName = 'dgkduqgye';
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error uploading image:', error);
    }
};

export const getAllBookings = async () => {
    try {
        const response = await axios.get(`${baseUrl}/booking/getAll`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getUserBookings = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/booking/getUserBookings/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getClericBookings = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/booking/getClericBookings/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createBooking = async (payload) => {
    try {
        const response = await axios.post(`${baseUrl}/booking/create/${payload?.userId}`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

export const editBooking = async (payload) => {
    try {
        const response = await axios.patch(`${baseUrl}/booking/edit/${payload?.id}`, payload?.body)
        return response.data
    } catch (error) {
        throw error
    }
}