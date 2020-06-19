const {publicPostAPI, publicPutAPI, privateGetAPI, privatePutAPI} = require("./fetchAPI")
const baseURL = 'http://192.168.43.85:3000/api/v1'

class publicHTTPAPI {
    static async register(email, password, nama_lengkap){
        const url = baseURL.concat('/account','/register')
        const data = {email:email, password:password, nama_lengkap:nama_lengkap}
        const result = await publicPostAPI(url, data)
        return result
    }
    static async login(email, password){
        const url = baseURL.concat('/account','/login')
        const data = {email:email, password:password}
        const result = await publicPostAPI(url, data)
        return result
    }
    static async resendVerification(email){
        const url = baseURL.concat('/account','/resendVerification')
        const data = {email:email}
        const result = await publicPostAPI(url, data)
        return result
    }
    static async requestPasswordChange(email) {
        const url = baseURL.concat('/account','/requestPasswordChange')
        const data = {email:email}
        const result = await publicPostAPI(url, data)
        return result
    }
    static async changePassword(email,tempcode,password) {
        const url = baseURL.concat('/account','/changePassword')
        const data = {email:email, tempcode:tempcode, password:password}
        const result = await publicPutAPI(url,data)
        return result
    }
}

class privateHTTPAPI {
    static async getProfile(access_token, user_id) {
        const url = baseURL.concat('/profile','/getProfile','/',user_id)
        const result = await privateGetAPI(url, access_token)
        return result
    }
    static async updateProfile(access_token, user_id, nama_lengkap, idkaryawan, no_hp, email_2) {
        const url = baseURL.concat('/profile','/updateProfile','/',user_id)
        const data = {nama_lengkap:nama_lengkap, idkaryawan:idkaryawan, no_hp:no_hp, email_2:email_2}
        const result = await privatePutAPI(url, access_token, data)
        return result
    }
    static async refreshToken(refresh_token, user_id) {
        const url = baseURL.concat('/account','/refreshToken','/',user_id)
        const data = {refresh_token : refresh_token}
        const result = await publicPostAPI(url, data)
        return result
    }
    static async logout(access_token, user_id) {
        const url = baseURL.concat('/account','/logout','/',user_id)
        const result = await privateGetAPI(url, access_token)
        return result
    }
}

module.exports = {
    publicHTTPAPI : publicHTTPAPI,
    privateHTTPAPI : privateHTTPAPI
}