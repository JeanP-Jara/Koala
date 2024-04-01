import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KoalaServiceService {

  public url: String = '';
  public credentials: any;
  public basic: any;


  constructor(public _http: HttpClient) {
    this.url =  environment.url;
  }

  listar(): Observable<any> {
    
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this._http.get(`${this.url}/list/companies`, { headers: reqHeader });
  }

  listarxId(id: number): Observable<any> {
    
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this._http.get(`${this.url}/find/company/${id}`, { headers: reqHeader });
  }

  crearCompany(request: any){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._http.post(`${this.url}/company`, request, { headers: reqHeader });
  }

  updateCompany(request: any){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._http.put(`${this.url}/update/company/${request.id}`, request, { headers: reqHeader });
  }
}
