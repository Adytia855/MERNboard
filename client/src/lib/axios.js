import axios from 'axios'

/**
 * @constant api
 * @description An Axios instance configured with a base URL.
 * The base URL is retrieved from the environment variable `VITE_REACT_APP_BACKEND_BASEURL`
 * using `import.meta.env`. This instance can be used throughout the application
 * to make HTTP requests to the backend API without needing to specify the
 * base URL for each request.
 *
 * @type {import('axios').AxiosInstance}
 * @example
 * // To use this API instance in another file:
 * import api from './path/to/this/file';
 *
 * // Example GET request
 * async function fetchData() {
 *   try {
 *     const response = await api.get('/some-endpoint');
 *     console.log(response.data);
 *   } catch (error) {
 *     console.error("Error fetching data:", error);
 *   }
 * }
 *
 * // Example POST request
 * async function postData(data) {
 *   try {
 *     const response = await api.post('/another-endpoint', data);
 *     console.log(response.data);
 *   } catch (error) {
 *     console.error("Error posting data:", error);
 *   }
 * }
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
});

export default api
