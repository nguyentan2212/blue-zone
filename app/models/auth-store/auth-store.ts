import { flow, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { withRootStore } from "../extensions/with-root-store"
import * as Types from "../../services/api/authApi/types"

const ContactsType = types.model({
  id: types.maybe(types.number),
  username: types.optional(types.string, ""),
  password: types.optional(types.string, ""),
  fullName: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  phone: types.optional(types.string, ""),
  address: types.optional(types.string, ""),
  // role: types.optional(types.string, ''),
  status: types.optional(types.string, "NORMAL"),
})

export const AuthStore = types
  .model({
    isAuthenticated: types.optional(types.boolean, false),
    isSignOut: types.optional(types.boolean, false),
    token: types.optional(types.string, ""),

    id: types.maybe(types.number),
    username: types.optional(types.string, ""),
    password: types.optional(types.string, ""),
    fullName: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    phone: types.optional(types.string, ""),
    address: types.optional(types.string, ""),
    // role: types.optional(types.string, ''),
    status: types.optional(types.string, "NORMAL"),

    contacts: types.optional(types.array(ContactsType), []),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions(self => ({
    login: flow(function*(info) {
      self.token = info.data.jwt
      self.isSignOut = false
      self.isAuthenticated = true
      self.address = info.data.user.address
      self.email = info.data.user.email
      self.fullName = info.data.user.fullName
      self.phone = info.data.user.phone
      self.username = info.data.user.username
      self.id = info.data.user.id
      self.status = info.data.user.status

      self.contacts = info.data.user.contacts
      // self.initDevice();
    }),
  }))
  /**
   * login account
   */
  .actions(self => ({
    loginUser: flow(function*(form: Types.LoginRequestBody) {
      const res: Types.LoginResponse = yield self.environment.api.authApi.login(form)
      return res
    }),
  }))
