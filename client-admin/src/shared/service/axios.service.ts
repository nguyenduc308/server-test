// import Axios from 'axios-observable';
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { Observable, defer } from 'rxjs';
import { map } from 'rxjs/operators';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:5000/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(config);

class AxiosService {
  private axios: AxiosInstance;
  private axiosDefault: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axios = this._interceptors(axiosInstance);
    this.axiosDefault = axiosInstance;
  }

  public registerToken(token: string) {
    this.axios = this._interceptors(this.axiosDefault, token);
  }

  private _interceptors(
    axiosInstance: AxiosInstance,
    token?: string,
  ): AxiosInstance {
    axiosInstance.interceptors.request.use(
      async (req) => {
        if (token) {
          req.headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return req;
      },

      (error) => {
        return Promise.reject(error);
      },
    );

    axiosInstance.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    return axiosInstance;
  }

  public get<T>(endpoint: string, queryParams?: object): Observable<T> {
    return defer(() =>
      this.axios.get<T>(endpoint, { params: queryParams }),
    ).pipe(map((response: AxiosResponse) => response.data));
  }

  public post<T>(
    enpoint: string,
    data: object,
    queryParams?: object,
  ): Observable<T | void> {
    return defer(() => this.axios.post<T>(enpoint, data, queryParams)).pipe(
      map((response: AxiosResponse) => response.data),
    );
  }

  public put<T>(
    enpoint: string,
    data: object,
    queryParams?: object,
  ): Observable<T | void> {
    return defer(() => this.axios.put<T>(enpoint, data, queryParams)).pipe(
      map((response: AxiosResponse) => response.data),
    );
  }

  public patch<T>(
    enpoint: string,
    data: object,
    queryParams?: object,
  ): Observable<T | void> {
    return defer(() => this.axios.patch<T>(enpoint, data, queryParams)).pipe(
      map((response: AxiosResponse) => response.data),
    );
  }
}

export default new AxiosService(axiosInstance);
