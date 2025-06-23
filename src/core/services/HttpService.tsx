/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import qs from 'qs';
import _ from 'lodash';

const HttpService = (function () {

  const setHeaders = (headers: any) => {
    // Default Headers
    const _HEADERS: any = {
      'Content-Type': 'application/json'
    };

    // Timestamp
    const timestamp = new Date().toUTCString();
    _HEADERS['X-Ifp-Timestamp'] = encodeURI(timestamp);

    // Add Headers
    _.each(_HEADERS, (val: any, key: any) => {
      if (headers[key] === undefined) {
        headers[key] = val;
      }
    });
    return headers;
  }

  const transformRequest = (data: any, headers: any) => {

    if (data == null || data === undefined) return data;

    headers = setHeaders(headers);
    const contentType = headers['Content-Type'];

    if (contentType === 'application/json') {
      return JSON.stringify(data);
    }
    if (contentType === 'application/x-www-form-urlencoded') {
      return qs.stringify(data);
    }
    if (contentType === 'multipart/form-data') {
      if (data instanceof FormData) return data;
      const frmData = new FormData();
      for (const key in data) {
        if (data[key] instanceof Array && data[key].length) {
          for (const k in data[key]) {
            frmData.append(key, data[key][k]);
          }
        } else {
          frmData.append(key, data[key]);
        }
      }

      return frmData;
    }

    return data;
  }

  const transformResponse = (data: any, headers: any) => {
    return JSON.parse(data);
  }

  const handleResponse = (response: any) => {
    return response.data;
    // return response;
  }

  const handleError = (errors: any) => {
    throw errors;
  }

  const _CONFIG: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 0,
    transformRequest: transformRequest,
    // transformResponse: transformResponse,
  }

  class HttpService {

    private config: AxiosRequestConfig = _CONFIG;

    constructor(config = {}) {
      this.config = _.merge(_CONFIG, config);
    }

    private get instance(): AxiosInstance {
      return axios.create(this.config);
    }

    get(url: string, config = {}): Promise<any> {
      return this.instance.get(url, config)
        .then(handleResponse)
        .catch(handleError);
    }

    post(url: string, body = {}, config = {}): Promise<any> {
      return this.instance.post(url, body, config)
        .then(handleResponse)
        .catch(handleError);
    }

    put(url: string, body = {}, config = {}): Promise<any> {
      return this.instance.put(url, body, config)
        .then(handleResponse)
        .catch(handleError);
    }

    delete(url: string, config = {}): Promise<any> {
      return this.instance.delete(url, config)
        .then(handleResponse)
        .catch(handleError);
    }

  }

  return HttpService;
})();

export const Http = new HttpService();

export default HttpService;
