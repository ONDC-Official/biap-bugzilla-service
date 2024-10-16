import axiosInstance from './AxiosInstance'
import { TRUDESK } from '../utils/constant'

/**
 * Used to communicate with server
 */
class HttpRequest {
  /**
   * @param {*} baseUrl Base URL(domain url)
   * @param {*} url Resource URL
   * @param {*} method HTTP method(GET | POST | PUT | PATCH | DELETE)
   * @param {*} headers HTTP request headers
   * @param {*} data HTTP request data (If applicable)
   * @param {*} options other params
   */

  private url: string
  private method = 'get'
  private data: any
  private headers: any

  constructor({ url, method = 'get', data, headers }: { url: string; method?: string; data?: any; headers?: any }) {
    this.url = url
    this.method = method
    this.data = data
    this.headers = headers
  }

  /**
   * Send http request to server to write data to / read data from server
   * axios library provides promise implementation to send request to server
   * Here we are using axios library for requesting a resource
   */
  async send() {
    try {
      let headers = {
        ...this.headers,
        ...(this.method.toLowerCase() != 'get' && { 'Content-Type': 'application/json' }),
      }

      let result

      if (this.method.toLowerCase() == 'get') {
        if (process.env.SELECTED_ISSUE_CRM === TRUDESK) {
          result = await axiosInstance({
            baseURL: process.env.TRUDESK_BASE_URI,
            url: this.url,
            method: 'get',
            headers: headers,
            timeout: 180000, // If the request takes longer than `timeout`, the request will be aborted.
          })
        } else {
          result = await axiosInstance({
            baseURL: process.env.BUGZILLA_BASE_URI,
            url: this.url,
            method: 'get',
            headers: headers,
            timeout: 180000, // If the request takes longer than `timeout`, the request will be aborted.
          })
        }
      } else {
        // Make server request using axios
        if (process.env.SELECTED_ISSUE_CRM === TRUDESK) {
          result = await axiosInstance({
            baseURL: process.env.TRUDESK_BASE_URI,
            url: this.url,
            method: 'post',
            headers: headers,
            timeout: 180000, // If the request takes longer than `timeout`, the request will be aborted.
            data: JSON.stringify(this.data),
          })
        } else {
          result = await axiosInstance({
            baseURL: process.env.BUGZILLA_BASE_URI,
            url: this.url,
            method: 'post',
            // headers: headers,
            timeout: 180000, // If the request takes longer than `timeout`, the request will be aborted.
            data: JSON.stringify(this.data),
          })
        }
      }
      return result
    } catch (err: any) {
      console.log(err)
      if (err.response) {
        // The client was given an error response (5xx, 4xx)
        console.log('Error response nishtha ===============', err?.response?.data)
      } else if (err.request) {
        //` The client never received a response, and the request was never left
        console.log('Error request nishtha ===============', err?.request)
      } else {
        // Anything else
        console.log('Error message nishtha ===============', err?.message)
      }

      throw err?.response?.data?.message
    }
  }
}

export default HttpRequest
