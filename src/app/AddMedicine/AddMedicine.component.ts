import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Medicament } from 'app/Models/medicament.model';
import { MedicamentService } from 'app/Services/medicament.service';

@Component({
  selector: 'app-AddMedicine',
  templateUrl: './AddMedicine.component.html',
  styleUrls: ['./AddMedicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  newMedicament: any = {}; // Assurez-vous que newMedicament est initialisé avec les champs requis

  categories: any[] = []; // Pour stocker les catégories récupérées depuis le backend

  errorMessage: string; // Variable pour stocker le message d'erreur

  constructor(private medicamentService: MedicamentService,private http: HttpClient) {}
 

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/categories/').subscribe(
      (response) => {
        this.categories = response; // Stocke les catégories récupérées dans la variable categories
      },
      (error) => {
        console.log('Erreur lors de la récupération des catégories :', error);
      }
    );
  }




  onSubmit() : void{
    this.medicamentService.createMedicament(this.newMedicament).subscribe(
      response => {
        // Réinitialiser le formulaire ou effectuer d'autres actions si nécessaire
        console.log('Médicament ajouté avec succès:', response);
        // Réinitialiser le formulaire après l'ajout réussi
        this.newMedicament = new Medicament();
        this.errorMessage = ''; // Réinitialiser le message d'erreur
      },
      error => {
        console.error('Erreur lors de l\'ajout du médicament:', error);
        // Gérer l'erreur en affichant un message à l'utilisateur
        this.errorMessage = 'Erreur lors de l\'ajout du médicament. Veuillez réessayer plus tard.';
      }
    );
  }
}
