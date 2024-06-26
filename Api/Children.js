import axios from 'axios';
import { getApiHeaders } from '../Api/Headers';
import { BASE_URL } from '../Api/Api'
export const getStudent = async () => {
    try {
        const headers = await getApiHeaders();
        const response = await axios.get(`${BASE_URL}/students`, { headers });
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
export const getStudentByClassId = async (classCourseId) => {
    try {
        const headers = await getApiHeaders();
        const response = await axios.get(`${BASE_URL}/students?classId=${classCourseId}`, { headers });
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
}

export const getStudentDetail = async (id) => {
    try {
        const headers = await getApiHeaders();
        const response = await axios.get(`${BASE_URL}/students/detail/${id}`, { headers });
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
}

export const addChildren = async (name, dob, selected) => {
    try {
        const headers = await getApiHeaders();
        const response = await axios.post(`${BASE_URL}/parents/student`, {
            fullName: name,
            birthday: dob,
            gender: selected
        }, { headers });
        if (response.status === 200) {
            return true;
        }
        return false;
    } catch (error) {
        console.error("Error adding new child:", error);
        return false;
    }
};
export const getStudentCourse = async () => {
    try {
        const headers = await getApiHeaders();
        const response = await axios.get(`${BASE_URL}/Classes/teacher-or-student`, { headers });
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