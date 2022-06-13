import {LoginRequestBody, LoginResponse} from './types'
import axios from 'axios'

module.exports = {
  async Login(payload: LoginRequestBody): Promise<LoginResponse> {
    const res: LoginResponse = await axios
      .post('/auth/local', payload)
    
    return res
  }
}