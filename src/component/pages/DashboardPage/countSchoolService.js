import axios from 'axios';

const BASE_URL = 'https://alumniproject.azurewebsites.net/admin/api/schools/count?from=2023-01-01&to=2023-12-31'; // Replace this with your actual backend URL

export const getSchoolCount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.count; // Assuming the API returns an object with a 'count' property representing the school count
  } catch (error) {
    console.error('Error fetching school count:', error);
    return null;
  }
};