import axios from 'axios';
const accessToken = localStorage.getItem ('accessToken');
const baseUrl = 'https://api-ecommerce-dev.devtomaster.com/v1/';
const axiosInstance = axios.create ({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
});

axiosInstance.interceptors.request.use (request => {
  // const accessToken = localStorage.getItem ('password');

  return request;
});
axiosInstance.interceptors.response.use (
  response => {
    // consoleResponseTime(response);
    // added custom config to remove loader from some api
    // response.data.noLoader = _.get(response, "config.noLoader", false);
    return response.data;
  },
  error => {
    console.log (error);
    const errorObject = {
      code: 500,
      message: 'Server not responding not found',
      customCode: 500,
    };
    if (error.response) {
      // consoleResponseTime(error.response);
      errorObject.code = error.response.status;
      // errorObject.message = _.get(error, "response.data.message");
      // errorObject.customCode = _.get(error, "response.data.code");
    } else if (error.request) {
    } else {
      errorObject.message = 'Something went wrong';
    }
    if (
      errorObject.code === 401 ||
      errorObject.code === 4006 ||
      errorObject.code === 408
    ) {
      // clearLocalStorageOnlogout();
      // removeUserIdCookie()
      console.log ('checking request data');
      // window.location.href = `/`;
      return {data: {}};
    }
    return Promise.reject (errorObject);
  }
);

export default axiosInstance;
