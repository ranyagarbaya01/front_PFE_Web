import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livreur } from '../Models/livreur.model';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {


  private baseUrl = 'http://localhost:8000/livreurs/'; // L'URL de base de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les livreurs depuis le backend
  getAllLivreurs(): Observable<Livreur[]> {
    return this.http.get<Livreur[]>(this.baseUrl);
  }


  // Méthode pour récupérer un livreur par son identifiant depuis le backend
  getLivreurById(id: number): Observable<Livreur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Livreur>(url);
  }

  // Méthode pour créer un nouveau livreur dans le backend
  createLivreur(livreur: Livreur): Observable<Livreur> {
    return this.http.post<Livreur>(this.baseUrl, livreur);
  }

  // Méthode pour mettre à jour les informations d'un livreur dans le backend
  updateLivreur(id: number, livreur: Livreur): Observable<Livreur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Livreur>(url, livreur);
  }

    // Méthode pour supprimer un livreur du backend
  deleteLivreur(id: number): Observable<any> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete(url);
    }
}
