import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../Shared/constants';
import { Utils } from '../Shared/Utils';
@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(private http: HttpClient) { }

  getCoordinators() {
    const url = constants.BASE_URL + 'Dashboard/getallcoordinator';
    return this.http.get(url, { headers: Utils.getHeader() })
  }

  createCordinator(data: any) {
    const url = constants.BASE_URL + 'Dashboard/addcoordinator'
    return this.http.post(url, data, { headers: Utils.getHeader() })
  }

  getSingleCoordinator(id: number) {
    const url = constants.BASE_URL + `Dashboard/getcoordinatorwithid/${id}`
    return this.http.get(url, { headers: Utils.getHeader() })

  }

  editCordinator(id: number, data: any) {
    const url = constants.BASE_URL + `Dashboard/editcoordinator/${id}`
    return this.http.put(url, data, { headers: Utils.getHeader() })
  }


  deleteCordinator(id: number) {
    const url = constants.BASE_URL + `Dashboard/delcoordinator/${id}`
    return this.http.delete(url, { headers: Utils.getHeader() })
  }

}
