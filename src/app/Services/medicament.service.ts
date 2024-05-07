import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicament } from 'app/Models/medicament.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  private baseUrl = 'http://localhost:8000/medicaments/'; // L'URL de base de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les medicaments depuis le backend
  getAllMedicaments(): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(this.baseUrl);
  }


  // Méthode pour récupérer un medicament par son identifiant depuis le backend
  getMedicamentById(id: number): Observable<Medicament> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Medicament>(url);
  }

  // Méthode pour créer un nouveau medicament  dans le backend
  createMedicament(medicament: Medicament): Observable<Medicament> {
    return this.http.post<Medicament>(this.baseUrl, medicament);
  }

  // Méthode pour mettre à jour les informations d'un medicament dans le backend
  updateMedicament(id: number, medicament: Medicament): Observable<Medicament> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Medicament>(url, Medicament);
  }

    // Méthode pour supprimer une medicament du backend
  deleteMedicament(id: number): Observable<any> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete(url);
    }
}
