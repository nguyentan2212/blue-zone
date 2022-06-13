import { getGeneralApiProblem } from '../api-problem';
import { ApisauceInstance, ApiResponse } from 'apisauce';
import * as Types from './types';

export default class AuthApi {
  apisauce: ApisauceInstance;

  constructor(apisauce) {
    this.apisauce = apisauce;
  }

  /**
   * Login
   * @param {string} country_code
   * @param {string} login_account
   * @param {string} login_password
   */
  async login (form: Types.LoginRequestBody): Promise<Types.LoginResponse> {
    console.log('Form: ', form)

    const response: ApiResponse<any> = await this.apisauce.post(
      '/auth/local',
      form
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      return { kind: 'ok', result: response.data };
    } catch {
      return { kind: 'bad-data' };
    }
  }

  /**
   * Get me
   * @param {number} id
   */
  async getMe (id: number): Promise<Types.LoginResponse> {
    const response: ApiResponse<any> = await this.apisauce.get(
      `/driveraccounts/${id}`
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      return { kind: 'ok', result: response.data };
    } catch {
      return { kind: 'bad-data' };
    }
  }

  // async registerUser(
  //   form: Types.RequestRegisterBody
  // ): Promise<Types.RequestRegisterResult> {
  //   const response: ApiResponse<any> = await this.apisauce.post(
  //     '/driveraccounts',
  //     form
  //   );

  //   if (!response.ok) {
  //     const problem = getGeneralApiProblem(response);
  //     if (problem) return problem;
  //   }

  //   try {
  //     return { kind: 'ok', result: response.data };
  //   } catch {
  //     return { kind: 'bad-data' };
  //   }
  // }

  /**
   * update user
   */
  // async updateUser(
  //   userId: number,
  //   form: Types.RequestUpdateAccountBody
  // ): Promise<Types.RequestUpdateAccountResult> {
  //   const response: ApiResponse<any> = await this.apisauce.put(
  //     `/driveraccounts/${userId}`,
  //     form
  //   );

  //   if (!response.ok) {
  //     const problem = getGeneralApiProblem(response);
  //     if (problem) return problem;
  //   }

  //   try {
  //     return { kind: 'ok', result: response.data };
  //   } catch {
  //     return { kind: 'bad-data' };
  //   }
  // }

  /**
   * Init device
   */
  // async initDevice(
  //   form: Types.RequestInitDeviceBody
  // ): Promise<Types.RequestInitDeviceResult> {
  //   const response: ApiResponse<any> = await this.apisauce.get(
  //     `/notifydevices/init?${Object.keys(form)
  //       .map(
  //         key => encodeURIComponent(key) + '=' + encodeURIComponent(form[key])
  //       )
  //       .join('&')}`
  //   );
  //   if (!response.ok) {
  //     const problem = getGeneralApiProblem(response);
  //     if (problem) return problem;
  //   }
  //   try {
  //     return { kind: 'ok', result: response.data };
  //   } catch {
  //     return { kind: 'bad-data' };
  //   }
  // }

  /**
   * De-init device
   */
  // async deInitDevice(
  //   push_tracker_id: string
  // ): Promise<Types.RequestDeInitDeviceResult> {
  //   const response: ApiResponse<any> = await this.apisauce.get(
  //     `/notifydevices/deinit?push_tracker_id=${push_tracker_id}`
  //   );
  //   if (!response.ok) {
  //     const problem = getGeneralApiProblem(response);
  //     if (problem) return problem;
  //   }
  //   try {
  //     return { kind: 'ok', result: response.data };
  //   } catch {
  //     return { kind: 'bad-data' };
  //   }
  // }
}
