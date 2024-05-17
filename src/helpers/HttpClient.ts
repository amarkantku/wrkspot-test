import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios';

const BASE_URL = 'https://api.sampleapis.com';

class HttpClient {
  private static instance: HttpClient;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        console.log('Request Interceptor:', config);
        return config;
      },
      (error: AxiosError) => {
        console.error('Request Error Interceptor:', error);
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('Response Interceptor:', response);
        return response;
      },
      (error: AxiosError) => {
        console.error('Response Error Interceptor:', error);
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  public async get<T>(url: string): Promise<T> {
    console.log(url);
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url);
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  private handleError(error: AxiosError): Error {
    if (error.response) {
      return new Error(`Request failed with status ${error.response.status}`);
    } else if (error.request) {
      return new Error('No response received from server');
    } else {
      return new Error('Error setting up request');
    }
  }
}

export default HttpClient.getInstance();
