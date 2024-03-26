import api from './apiService';

export const saveAgency = async (agency) => {
  try {
    const response = await api.post(`/xbs-agency/agency/save-agency`, agency);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};


export const saveAgencyAddress = async (agency) => {
  try {
    const response = await api.post(`/xbs-agency/agency-address`, agency);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};