import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from 'app/Models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeDetailsService {

  private baseUrl = 'http://localhost:8000/commandemedic/'; // L'URL de base de votre API

  constructor(private http: HttpClient) { }

    // Méthode pour récupérer tous les livreurs depuis le backend
    getCommandes(): Observable<Commande[]> {
      return this.http.get<Commande[]>(this.baseUrl);
    }
  
    // Méthode pour récupérer un livreur par son identifiant depuis le backend
    getCommandeById(id: number): Observable<Commande> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Commande>(url);
    }
  
    // Méthode pour créer un nouveau livreur dans le backend
    createCommande(commandes: Commande): Observable<Commande> {
      return this.http.post<Commande>(this.baseUrl, commandes);
    }
  
    // Méthode pour mettre à jour les informations d'un livreur dans le backend
    updateCommande(id: number, commandes: Commande): Observable<Commande> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.put<Commande>(url, commandes);
    }
  
    // Méthode pour supprimer un livreur du backend
    deleteCommandes(id: number): Observable<any> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete(url);
    }
  
}




