import { HttpHeaders } from "@angular/common/http";
export class Utils {
  constructor() { }

  static getHeader(): HttpHeaders {
    return new HttpHeaders()
      .append("Content-Type", "application/json")
      .append("Authorization", "Bearer " + localStorage.getItem("access_token"));
  }

  
  // static getMultipartHeader(): HttpHeaders {
  //   return new HttpHeaders()
  //     .append("enctype", "multipart/form-data")
  //     .append("Authorization", "Bearer " + localStorage.getItem("access_token"));
  // }

  // static fetchDataFromResponse(response: any): any {
  //   return response.data.data;
  // }

  // static fetchOtherDataFromResponse(data: any): any {
  //   return data.data.data;
  // }
  
  // static fetchData(response: any): any {
  //   return response.data;
  // }

  // static handleError(error: any): any {
  //   let errorMessage = "Some Error Occured!"
  //   if (error.error !== undefined && error.error != null) {
  //     let errorBody = error.error;
  //     if (errorBody.error !== undefined && errorBody.error != null && errorBody.error == true && errorBody.message.length) {
  //       errorMessage = errorBody.message
  //     } else if (errorBody.status !== undefined && errorBody.status != null) {
  //       if (errorBody.message !== undefined && errorBody.message != null && Array.isArray(errorBody.message)) {
  //         if (errorBody.message[0].value !== undefined && errorBody.message[0].value != null) {
  //           errorMessage = errorBody.message[0].value;
  //         }
  //       }
  //     }
  //   }
  //   return errorMessage;
  // }
}