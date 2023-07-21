// apiService.js
const BASE_URL = 'https://alumniproject.azurewebsites.net/admin/api/schools/status';
const token =
"bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlJZCI6IjEzIiwic2Nob29sSWQiOiItMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiZXhwIjoxNjkwMDMzNjQwfQ.f43qb-ppzTh1gIAvq22AzwTTlAbaOJ2-5CAYNjF2mWzqq_fkdjXLFKFYFLDTh_LPLwBha5Yig3iixsZv2iuFJQ";

export const updateRequestStatus = async (data) => {
    const {id, requestStatus} = data
    console.log(data);
  try {
    const headers = new Headers();
    headers.append("Authorization", `${token}`);
    headers.append("Content-Type", 'application/json')
    const response = await fetch(`${BASE_URL}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ id, requestStatus }),
    });

    if (!response.ok) {
      throw new Error('Failed to update request status');
    } else {
      window.location.reload(false);
      console.log(response);
    }

    // Optionally, return the updated response if needed
    const updatedData = await response.json();
    return updatedData;
  } catch (error) {
    console.error('Error updating request status:', error);
    throw error;
  }
};
