import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../Shared/constants';
@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(private http: HttpClient) { }

  getCoordinators() {
    const url = constants.BASE_URL + 'Dashboard/getallcoordinator';
    return this.http.get(url)
  }

  createCordinator(data: any) {
    const url = constants.BASE_URL + 'Dashboard/addcoordinator'
    return this.http.post(url, data)
  }

  getSingleCoordinator(id: number) {
    const url = constants.BASE_URL + `Dashboard/getcoordinator/${id}`
    return this.http.get(url)

  }

  editCordinator(id: number, data: any) {
    const url = constants.BASE_URL + `Dashboard/editcoordinator/${id}`
    return this.http.put(url, data)
  }


  // deleteCordinator(id: number) {
  //   const url = `constants.BASE_URL + 'Dashboard/delcoordinator/${id}`
  //   return this.http.delete(url)
  // }

}
