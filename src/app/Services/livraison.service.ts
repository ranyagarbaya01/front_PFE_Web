import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livraison } from 'app/Models/livraison.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private baseUrl = 'http://localhost:8000/livraisons/'; // L'URL de base de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les livreurs depuis le backend
  getAllCommandes(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.baseUrl);
  }

  // Méthode pour récupérer un livreur par son identifiant depuis le backend
  getLivraisonById(id: number): Observable<Livraison> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Livraison>(url);
  }

  // Méthode pour créer un nouveau livreur dans le backend
  createLivraison(livraison: Livraison): Observable<Livraison> {
    return this.http.post<Livraison>(this.baseUrl, livraison);
  }

  // Méthode pour mettre à jour les informations d'un livreur dans le backend
  updateLivreur(id: number, livraison: Livraison): Observable<Livraison> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Livraison>(url, livraison);
  }

  // Méthode pour supprimer un livreur du backend
  deleteLivraison(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

}
