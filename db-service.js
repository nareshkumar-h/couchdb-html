class DBService {
  static async sendRequest(method, url, requestData) {
    axios.request({
      url: url,
      method: method,
      baseURL: DB_URL,
      auth: {
        username: "apikey-v2-14ujhegslgodmumexb1pgbt9f458q50zlpqwo6ypclss",
        password: "31edca6cd3724c2a42277e2c71daa917",
      },
      data: requestData,
    });
  }
}
