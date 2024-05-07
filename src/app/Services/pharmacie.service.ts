// PharmacieService.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pharmacie } from 'app/Models/pharmacie.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  private baseUrl = 'http://localhost:8000/pharmacielist';

  constructor(private http: HttpClient) { }

  getAllPharmacies(): Observable<Pharmacie[]> {
    return this.http.get<Pharmacie[]>(this.baseUrl);
  }

  getPharmacieById(id: number): Observable<Pharmacie> {
    const url = `${this.baseUrl}/${id}/`;
    return this.http.get<Pharmacie>(url);
  }

  createPharmacie(pharmacie: Pharmacie): Observable<Pharmacie> {
    return this.http.post<Pharmacie>(this.baseUrl, pharmacie);
  }

  updatePharmacie(id: number, pharmacie: Pharmacie): Observable<Pharmacie> {
    const url = `${this.baseUrl}/${id}/`;
    return this.http.patch<Pharmacie>(url, pharmacie);
  }

  deletePharmacie(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}/`;
    return this.http.delete(url);
  }
}
