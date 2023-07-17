// apiService.js
const BASE_URL = 'https://alumniproject.azurewebsites.net/admin/api/schools/status';

export const updateRequestStatus = async (data) => {
    // const {id, requestStatus} = data
    console.log(data);
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, requestStatus }),
    });

    if (!response.ok) {
      throw new Error('Failed to update request status');
    }

    // Optionally, return the updated response if needed
    const updatedData = await response.json();
    return updatedData;
  } catch (error) {
    console.error('Error updating request status:', error);
    throw error;
  }
};
