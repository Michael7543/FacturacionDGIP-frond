import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoconceptoService {

  private apiUrl = 'http://172.31.203.232:8080/Concepto/listarConcepto';

  constructor(private http: HttpClient) { }

  getTipoconcepto(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
