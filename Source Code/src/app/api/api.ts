import { ajax } from "rxjs/ajax";
import queryString from "query-string";
import env from "../helpers/env";
import store from "../redux";
// import { $CombinedState } from "redux";

const { API_URL } = env;

export class Api {
  private static getFullUrl(url: string, query?: { [key: string]: any }) {
    return API_URL + url + (query ? "?" + queryString.stringify(query) : "");
  }

  private static mergeHeader(headers: any) {
    const state = store.getState();
    const token = state.auth.token;
    return Object.assign(headers, {
      "Content-Type": "application/json",
      Authorization: token ? "Bearer " + token : null,
    });
  }

  static post(url: string, data: any = {}, headers: any = {}) {
    return ajax.post(
      Api.getFullUrl(url),
      JSON.stringify(data),
      Api.mergeHeader(headers)
    );
  }

  static put(url: string, data: any = {}, headers: any = {}) {
    return ajax.put(
      Api.getFullUrl(url),
      JSON.stringify(data),
      Api.mergeHeader(headers)
    );
  }

  static get(url: string, query: any = {}, headers = {}) {
    return ajax({
      url: Api.getFullUrl(url, query),
      method: "GET",
      headers: Api.mergeHeader(headers),
    });
  }

  static delete(url: string, query: any = {}, headers = {}) {
    return ajax.delete(Api.getFullUrl(url, query), Api.mergeHeader(headers));
  }
}
