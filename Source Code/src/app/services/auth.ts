import { LoginUser } from "../models/LoginUser";
import { Api } from "../api";
import store from "../redux";

export class Auth {
  static login(user: LoginUser) {
    return Api.post("", user);
  }

  static fetchUser() {
    return Api.get("");
  }

  static fetchPermissions(unitId?: number) {
    return Api.get("", {
      unitId: Auth.isSystemUser() ? unitId : undefined,
    });
  }

  static hasPermission(permission: string) {
    return true;
  }

  static async isLoggedIn() {
    return true;
  }

  static isSystemUser() {
    const state = store.getState();
    return state.auth.user_type === "system";
  }

  static getProfile() {
    return Api.get("");
  }
}
