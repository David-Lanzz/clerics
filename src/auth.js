import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL

export const authorizeAdmin = async (passcode) => {
    try {
        const response = await axios.post(`${baseUrl}/admin/login`, { passcode: passcode })
        return response.data
    } catch (error) {
        throw error
    }
}

export const signup = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/user/signup`, body)
        return response.data
    } catch (error) {
        throw error
    }
}

export const verify = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/user/verify/${body?.email}`, body?.codes)
        return response.data
    } catch (error) {
        throw error
    }
}

export const login = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/user/login/`, body)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getUser = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/user/getOne/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateAvailability = async (body) => {
  try {
    const response = await axios.put(
      `${baseUrl}/admin/updateAvailability/${body?.id}`,
      { availability: body?.availability } // ✅ wrap inside an "availability" key
    );
    return response.data;
  } catch (error) {
    console.error("Error updating availability:", error.response?.data || error);
    throw error;
  }
};

export const getAdmin = async () => {
    const response = await axios.get(`${baseUrl}/admin`)
    return response.data
}