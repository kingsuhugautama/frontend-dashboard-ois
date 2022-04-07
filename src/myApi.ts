/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AuthenticationRequest {
  user_name?: string | null;
  password?: string | null;
  app_tipe?: string | null;
}

export interface AuthenticationResponse {
  /** @format int32 */
  id_user?: number;

  /** @format int32 */
  id_role?: number;
  nama_role?: string | null;
  user_name?: string | null;
  full_name?: string | null;
  token?: string | null;
  menuJson?: MenuJson;

  /** @format int32 */
  timeOut?: number;
}

export interface AuthenticationResponseResponseModel {
  responseResult?: boolean;
  data?: AuthenticationResponse;
  message?: string | null;
}

export interface Int16NullableResponseModel {
  responseResult?: boolean;

  /** @format int32 */
  data?: number | null;
  message?: string | null;
}

export interface MenuJson {
  mainMenu?: MnMenu[] | null;
  topMenu?: MnMenu[] | null;
  sidebarMenu?: SidebarMenu[] | null;
}

export interface MnJenisButton {
  /** @format int32 */
  id_jenis_button?: number;
  caption?: string | null;
  keterangan?: string | null;
  stack_icon?: string | null;
  icon?: string | null;
  icon2?: string | null;
}

export interface MnMenu {
  /** @format int32 */
  id_menu?: number;
  caption?: string | null;

  /** @format int32 */
  id_menu_parent?: number;
  is_parent?: boolean;
  icon?: string | null;
}

export interface MnMenuSidebarForMappingRequestGet {
  /** @format int32 */
  id_menu?: number;

  /** @format int32 */
  id_role?: number;
}

export interface MnMenuSidebarMappingResponse {
  /** @format int32 */
  id_menu_sidebar?: number;
  caption?: string | null;
  url?: string | null;
  status_akses?: boolean;

  /** @format int32 */
  id_menu_sidebar_parent?: number;
  is_parent?: boolean;
  icon?: string | null;

  /** @format int32 */
  id_menu?: number;
  childSidebarMenu?: MnMenuSidebarMappingResponse[] | null;
}

export interface MnMenuSidebarMappingResponseIEnumerableResponseModel {
  responseResult?: boolean;
  data?: MnMenuSidebarMappingResponse[] | null;
  message?: string | null;
}

export interface MnMenuViewMappingResponse {
  /** @format int32 */
  id_menu?: number;
  caption?: string | null;

  /** @format int32 */
  id_menu_parent?: number;
  caption_menu_parent?: string | null;
  icon_menu_parent?: string | null;
  is_parent?: string | null;
  icon?: string | null;
  childMenu?: MnMenuViewMappingResponse[] | null;
}

export interface MnMenuViewMappingResponseIEnumerableResponseModel {
  responseResult?: boolean;
  data?: MnMenuViewMappingResponse[] | null;
  message?: string | null;
}

export interface MnRole {
  /** @format int32 */
  id_role?: number;
  nama_role?: string | null;
  keterangan?: string | null;

  /** @format int32 */
  time_auto_logout?: number;
  is_active?: boolean;

  /** @format int32 */
  user_created?: number;

  /** @format date-time */
  time_created?: string;

  /** @format int32 */
  user_deactived?: number;

  /** @format date-time */
  time_deactived?: string;
}

export interface MnRoleMenu {
  /** @format int32 */
  id_role?: number;

  /** @format int32 */
  id_menu?: number;
}

export interface MnRoleMenuSidebar {
  /** @format int32 */
  id_role?: number;

  /** @format int32 */
  id_menu_sidebar?: number;
}

export interface MnRoleRequestDeactived {
  /** @format int32 */
  id_role?: number;

  /** @format int32 */
  user_deactived?: number;
}

export interface MnRoleRequestInsert {
  nama_role?: string | null;
  keterangan?: string | null;

  /** @format int32 */
  time_auto_logout?: number;

  /** @format int32 */
  user_created?: number;
}

export interface MnRoleRequestUpdate {
  /** @format int32 */
  id_role?: number;
  nama_role?: string | null;
  keterangan?: string | null;

  /** @format int32 */
  time_auto_logout?: number;
}

export interface MnRoleSetupButton {
  /** @format int32 */
  id_role?: number;

  /** @format int32 */
  id_menu_sidebar?: number;

  /** @format int32 */
  id_button?: number;
}

export interface MnRoleSetupFieldGrid {
  /** @format int32 */
  id_role?: number;

  /** @format int32 */
  id_menu_sidebar?: number;

  /** @format int32 */
  id_field_grid?: number;
}

export interface MnRoleIEnumerableResponseModel {
  responseResult?: boolean;
  data?: MnRole[] | null;
  message?: string | null;
}

export interface MnSetupButtonForMapping {
  /** @format int32 */
  id_jenis_button?: number;
  nama_button?: string | null;
  caption?: string | null;
  keterangan?: string | null;
  stack_icon?: boolean;
  icon?: string | null;
  icon2?: string | null;

  /** @format int32 */
  id_button?: number;

  /** @format int32 */
  id_role?: number;
  status_akses?: boolean;
}

export interface MnSetupButtonForMappingRequestGet {
  /** @format int32 */
  id_menu_sidebar?: number;

  /** @format int32 */
  id_role?: number;
}

export interface MnSetupButtonForMappingIEnumerableResponseModel {
  responseResult?: boolean;
  data?: MnSetupButtonForMapping[] | null;
  message?: string | null;
}

export interface MnSetupFieldGrid {
  /** @format int32 */
  id_field_grid?: number;

  /** @format int32 */
  id_menu_sidebar?: number;
  nama_asli_field?: string | null;
  nama_header_text?: string | null;

  /** @format int32 */
  width_field?: number;
  tipe_field?: string | null;
  format_field?: string | null;
  keterangan?: string | null;
}

export interface MnSetupFieldGridForMapping {
  /** @format int32 */
  id_field_grid?: number;
  nama_asli_field?: string | null;
  nama_header_text?: string | null;

  /** @format int32 */
  width_field?: number;
  tipe_field?: string | null;
  format_field?: string | null;
  keterangan?: string | null;

  /** @format int32 */
  id_menu_sidebar?: number;

  /** @format int32 */
  id_role?: number;
  status_akses?: boolean;
}

export interface MnSetupFieldGridForMappingRequestGet {
  /** @format int32 */
  id_menu_sidebar?: number;

  /** @format int32 */
  id_role?: number;
}

export interface MnSetupFieldGridForMappingIEnumerableResponseModel {
  responseResult?: boolean;
  data?: MnSetupFieldGridForMapping[] | null;
  message?: string | null;
}

export interface MnUserRequestChangePassword {
  /** @format int32 */
  id_user?: number;
  password_lama?: string | null;
  password_baru?: string | null;
}

export interface MnUserRequestDeactive {
  /** @format int32 */
  id_user?: number;

  /** @format int32 */
  user_deactived?: number;
}

export interface MnUserRequestInsert {
  /** @format int32 */
  id_role?: number;
  user_name?: string | null;
  password?: string | null;
  full_name?: string | null;

  /** @format int32 */
  user_created?: number;
}

export interface MnUserRequestUpdate {
  /** @format int32 */
  id_user?: number;

  /** @format int32 */
  id_role?: number;
  user_name?: string | null;
  full_name?: string | null;
}

export interface MnUserResponseGetAll {
  /** @format int32 */
  id_user?: number;

  /** @format int32 */
  id_role?: number;
  nama_role?: string | null;
  user_name?: string | null;
  password?: string | null;
  full_name?: string | null;

  /** @format int32 */
  id_outlet?: number;

  /** @format date-time */
  time_last_login?: string;

  /** @format date-time */
  time_last_logout?: string;
  app_tipe?: string | null;
  is_active?: boolean;

  /** @format int32 */
  user_created?: number;
  user_name_created?: string | null;
  full_name_created?: string | null;

  /** @format date-time */
  time_created?: string;

  /** @format int32 */
  user_deactived?: number;
  user_name_deactived?: string | null;
  full_name_deactived?: string | null;

  /** @format date-time */
  time_deactived?: string;
}

export interface MnUserResponseGetAllIEnumerableResponseModel {
  responseResult?: boolean;
  data?: MnUserResponseGetAll[] | null;
  message?: string | null;
}

export interface SidebarMenu {
  /** @format int32 */
  id_menu_sidebar?: number;
  caption?: string | null;
  icon?: string | null;
  url?: string | null;
  is_parent?: boolean;

  /** @format int32 */
  id_menu_sidebar_parent?: number;

  /** @format int32 */
  id_top_menu?: number;
  button?: MnJenisButton[] | null;
  fieldgrid?: MnSetupFieldGrid[] | null;
  sidebarChild?: SidebarMenu[] | null;
}

export interface StringResponseModel {
  responseResult?: boolean;
  data?: string | null;
  message?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title PIS.API
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthLoginCreate
     * @request POST:/api/Auth/Login
     */
    authLoginCreate: (data: AuthenticationRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponseResponseModel, any>({
        path: `/api/Auth/Login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthSetLogoutTimeUpdate
     * @request PUT:/api/Auth/SetLogoutTime/{id_user}
     */
    authSetLogoutTimeUpdate: (idUser: number, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/Auth/SetLogoutTime/${idUser}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthResetPasswordUpdate
     * @request PUT:/api/Auth/ResetPassword/{id_user}
     */
    authResetPasswordUpdate: (idUser: number, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/Auth/ResetPassword/${idUser}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthChangePasswordUpdate
     * @request PUT:/api/Auth/ChangePassword
     */
    authChangePasswordUpdate: (data: MnUserRequestChangePassword, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/Auth/ChangePassword`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthTestList
     * @request GET:/api/Auth/test
     */
    authTestList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Auth/test`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleGetRoleAllList
     * @request GET:/api/Role/GetRoleAll
     */
    roleGetRoleAllList: (params: RequestParams = {}) =>
      this.request<MnRoleIEnumerableResponseModel, any>({
        path: `/api/Role/GetRoleAll`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleGetRoleActiveAllList
     * @request GET:/api/Role/GetRoleActiveAll
     */
    roleGetRoleActiveAllList: (params: RequestParams = {}) =>
      this.request<MnRoleIEnumerableResponseModel, any>({
        path: `/api/Role/GetRoleActiveAll`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleGetRoleNonActiveAllList
     * @request GET:/api/Role/GetRoleNonActiveAll
     */
    roleGetRoleNonActiveAllList: (params: RequestParams = {}) =>
      this.request<MnRoleIEnumerableResponseModel, any>({
        path: `/api/Role/GetRoleNonActiveAll`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleInsertRoleCreate
     * @request POST:/api/Role/InsertRole
     */
    roleInsertRoleCreate: (data: MnRoleRequestInsert, params: RequestParams = {}) =>
      this.request<Int16NullableResponseModel, any>({
        path: `/api/Role/InsertRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleUpdateRoleUpdate
     * @request PUT:/api/Role/UpdateRole
     */
    roleUpdateRoleUpdate: (data: MnRoleRequestUpdate, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/Role/UpdateRole`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleRoleDeactivatedUpdate
     * @request PUT:/api/Role/RoleDeactivated
     */
    roleRoleDeactivatedUpdate: (data: MnRoleRequestDeactived, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/Role/RoleDeactivated`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleRoleActivatedUpdate
     * @request PUT:/api/Role/RoleActivated/{id_role}
     */
    roleRoleActivatedUpdate: (idRole: number, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/Role/RoleActivated/${idRole}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetUserActiveAllList
     * @request GET:/api/User/GetUserActiveAll
     */
    userGetUserActiveAllList: (params: RequestParams = {}) =>
      this.request<MnUserResponseGetAllIEnumerableResponseModel, any>({
        path: `/api/User/GetUserActiveAll`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetUserNonActiveAllList
     * @request GET:/api/User/GetUserNonActiveAll
     */
    userGetUserNonActiveAllList: (params: RequestParams = {}) =>
      this.request<MnUserResponseGetAllIEnumerableResponseModel, any>({
        path: `/api/User/GetUserNonActiveAll`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetUserAllList
     * @request GET:/api/User/GetUserAll
     */
    userGetUserAllList: (params: RequestParams = {}) =>
      this.request<MnUserResponseGetAllIEnumerableResponseModel, any>({
        path: `/api/User/GetUserAll`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInsertUserCreate
     * @request POST:/api/User/InsertUser
     */
    userInsertUserCreate: (data: MnUserRequestInsert, params: RequestParams = {}) =>
      this.request<Int16NullableResponseModel, any>({
        path: `/api/User/InsertUser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUpdateUserUpdate
     * @request PUT:/api/User/UpdateUser
     */
    userUpdateUserUpdate: (data: MnUserRequestUpdate, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/User/UpdateUser`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUserDeactivatedUpdate
     * @request PUT:/api/User/UserDeactivated
     */
    userUserDeactivatedUpdate: (data: MnUserRequestDeactive, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/User/UserDeactivated`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUserActivatedUpdate
     * @request PUT:/api/User/UserActivated/{id_user}
     */
    userUserActivatedUpdate: (idUser: number, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/User/UserActivated/${idUser}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetMainMenuForMappingDetail
     * @request GET:/api/User/GetMainMenuForMapping/{id_role}
     */
    userGetMainMenuForMappingDetail: (idRole: number, params: RequestParams = {}) =>
      this.request<MnMenuViewMappingResponseIEnumerableResponseModel, any>({
        path: `/api/User/GetMainMenuForMapping/${idRole}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDeleteMenuFromRoleUpdate
     * @request PUT:/api/User/DeleteMenuFromRole
     */
    userDeleteMenuFromRoleUpdate: (data: MnRoleMenu, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/User/DeleteMenuFromRole`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetMainMenuForMappingNotInRoleDetail
     * @request GET:/api/User/GetMainMenuForMappingNotInRole/{id_role}
     */
    userGetMainMenuForMappingNotInRoleDetail: (idRole: number, params: RequestParams = {}) =>
      this.request<MnMenuViewMappingResponseIEnumerableResponseModel, any>({
        path: `/api/User/GetMainMenuForMappingNotInRole/${idRole}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInsertMainMenuToRoleCreate
     * @request POST:/api/User/InsertMainMenuToRole
     */
    userInsertMainMenuToRoleCreate: (data: MnRoleMenu, params: RequestParams = {}) =>
      this.request<Int16NullableResponseModel, any>({
        path: `/api/User/InsertMainMenuToRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetSidebarMenuForMappingCreate
     * @request POST:/api/User/GetSidebarMenuForMapping
     */
    userGetSidebarMenuForMappingCreate: (data: MnMenuSidebarForMappingRequestGet, params: RequestParams = {}) =>
      this.request<MnMenuSidebarMappingResponseIEnumerableResponseModel, any>({
        path: `/api/User/GetSidebarMenuForMapping`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDeleteSidebarMenuFromRoleUpdate
     * @request PUT:/api/User/DeleteSidebarMenuFromRole
     */
    userDeleteSidebarMenuFromRoleUpdate: (data: MnRoleMenuSidebar, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/User/DeleteSidebarMenuFromRole`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInsertSideBarMenuToRoleCreate
     * @request POST:/api/User/InsertSideBarMenuToRole
     */
    userInsertSideBarMenuToRoleCreate: (data: MnRoleMenuSidebar, params: RequestParams = {}) =>
      this.request<Int16NullableResponseModel, any>({
        path: `/api/User/InsertSideBarMenuToRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetFieldGridForMappingCreate
     * @request POST:/api/User/GetFieldGridForMapping
     */
    userGetFieldGridForMappingCreate: (data: MnSetupFieldGridForMappingRequestGet, params: RequestParams = {}) =>
      this.request<MnSetupFieldGridForMappingIEnumerableResponseModel, any>({
        path: `/api/User/GetFieldGridForMapping`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDeleteFieldGridFromRoleUpdate
     * @request PUT:/api/User/DeleteFieldGridFromRole
     */
    userDeleteFieldGridFromRoleUpdate: (data: MnRoleSetupFieldGrid, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/User/DeleteFieldGridFromRole`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInsertFieldGridToRoleCreate
     * @request POST:/api/User/InsertFieldGridToRole
     */
    userInsertFieldGridToRoleCreate: (data: MnRoleSetupFieldGrid, params: RequestParams = {}) =>
      this.request<Int16NullableResponseModel, any>({
        path: `/api/User/InsertFieldGridToRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetButtonForMappingCreate
     * @request POST:/api/User/GetButtonForMapping
     */
    userGetButtonForMappingCreate: (data: MnSetupButtonForMappingRequestGet, params: RequestParams = {}) =>
      this.request<MnSetupButtonForMappingIEnumerableResponseModel, any>({
        path: `/api/User/GetButtonForMapping`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDeleteButtonFromRoleUpdate
     * @request PUT:/api/User/DeleteButtonFromRole
     */
    userDeleteButtonFromRoleUpdate: (data: MnRoleSetupButton, params: RequestParams = {}) =>
      this.request<StringResponseModel, any>({
        path: `/api/User/DeleteButtonFromRole`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserInsertButtonToRoleCreate
     * @request POST:/api/User/InsertButtonToRole
     */
    userInsertButtonToRoleCreate: (data: MnRoleSetupButton, params: RequestParams = {}) =>
      this.request<Int16NullableResponseModel, any>({
        path: `/api/User/InsertButtonToRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
