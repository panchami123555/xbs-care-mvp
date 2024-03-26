import api from './apiService';

const COMMON_SERVICE_BASE_URL = process.env.REACT_APP_COMMON_SERVICE_BASE_URL;

export const saveAgency = async (agency) => {
  try {
    const response = await api.post(COMMON_SERVICE_BASE_URL + `/xbs-agency/agency/save-agency`, agency);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};


export const saveAgencyAddress = async (agency) => {
  try {
    const response = await api.post(COMMON_SERVICE_BASE_URL + `/xbs-agency/agency-address`, agency);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};

export const fetchAgencyDetails = async () => {
  try {
    const bodyData = {
      pageNumber: 0,
      size: 10,
      filterList: [
        {
          field: "name",
          value: "test",
          mode: "CONTAINS"
        }
      ]
    };

    const response = await api.post(COMMON_SERVICE_BASE_URL + '/xbs-agency/agency/all', bodyData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch agency details:', error);
    throw error;
  }
};
export const inviteAgency = async (data) => {
  try {
    const response = await api.post(COMMON_SERVICE_BASE_URL + '/xbs-agency/agency/save-agency', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to Invite agency:', error);
    throw error;
  }
};
