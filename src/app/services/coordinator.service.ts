import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(private http: HttpClient) { }

  getCoordinators() {
    const url = "http://10.64.29.243:8080/IRITM/Dashboard/getallcoordinator"
    return this.http.get(url)
  }

  createCordinator(data: any) {
    const url = "http://10.64.29.243:8080/IRITM/Dashboard/addcoordinator"
    return this.http.post(url, data)
  }

  getSingleCoordinator(id: number) {
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/getcoordinator/${id}`
    return this.http.get(url)

  }

  editCordinator(id: number, data: any) {
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/editcoordinator/${id}`
    return this.http.put(url, data)
  }


  deleteCordinator(id: number) {
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/delcoordinator/${id}`
    return this.http.delete(url)
  }

}
