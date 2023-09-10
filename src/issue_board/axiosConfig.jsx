import axios from 'axios';
import { host } from '../GlobalContext';



const getAxiosInstance = () => {
  let axiosInstance = null;
  const authToken = localStorage.getItem('authToken');
  console.log(`Token: ${localStorage.getItem('authToken')}`)
  // Configuración de encabezados
  const headers = {
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
  };

  // Configuración de Axios con encabezados
  axiosInstance = axios.create({
  baseURL: `http://${host}:5000`,
  headers: headers
  });
  return axiosInstance;
};

export default getAxiosInstance;