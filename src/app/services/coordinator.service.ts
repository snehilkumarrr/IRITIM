import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(private http: HttpClient) { }

  getCoordinators() {
    const url = "https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getallcoordinator"
    return this.http.get(url)
  }

  createCordinator(data: any) {
    const url = "https://testiritm.indianrailways.gov.in/IRITM/Dashboard/addcoordinator"
    return this.http.post(url, data)
  }

  getSingleCoordinator(id: number) {
    const url = `https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getcoordinator/${id}`
    return this.http.get(url)

  }

  editCordinator(id: number, data: any) {
    const url = `https://testiritm.indianrailways.gov.in/IRITM/Dashboard/editcoordinator/${id}`
    return this.http.put(url, data)
  }


  deleteCordinator(id: number) {
    const url = `https://testiritm.indianrailways.gov.in/IRITM/Dashboard/delcoordinator/${id}`
    return this.http.delete(url)
  }

}
