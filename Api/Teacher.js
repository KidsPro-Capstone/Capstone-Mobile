import axios from 'axios';
import { getApiHeaders } from '../Api/Headers';
import { BASE_URL } from '../Api/Api'
export const getTeacher = async () => {
    try {
        const headers = await getApiHeaders();
        const response = await axios.get(`${BASE_URL}/parents/teachers`, { headers });
        if (typeof response.data === 'object' && response.data !== null) {
            return response.data;
        } else {
            console.error("Invalid data received from the server:", response.data);
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};