class UserService {
  static async login(email, password, role = "USER") {
    //select _id,_rev,name,email,role from users where email=?1 and password=?2 and role=?3
    let requestData = {
      selector: {
        email: email,
        password: password,
        role: role,
      },
      fields: ["_id", "_rev", "name", "role"],
    };

    return axios.request({
      url: "/users/_find",
      method: "post",
      baseURL: DB_URL,
      auth: {
        username: "apikey-v2-14ujhegslgodmumexb1pgbt9f458q50zlpqwo6ypclss",
        password: "31edca6cd3724c2a42277e2c71daa917",
      },
      data: requestData,
    });
    // return DBService.sendRequest("post", "/users/_find", requestData);
  }
}
