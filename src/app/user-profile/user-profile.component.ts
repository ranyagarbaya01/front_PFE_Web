import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Pharmacie } from 'app/Models/pharmacie.model';
import { PharmacieService } from 'app/Services/pharmacie.service';
import { AuthService } from 'app/Services/auth.service'; // Importez le service AuthService

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  errorMessage: string;

  constructor(
    private pharmacieService: PharmacieService,
    private authService: AuthService // Injectez le service AuthService
  ) { }

  ngOnInit() {
    const id = this.authService.getUserIdFromToken(); // Récupérez l'ID de l'utilisateur depuis le token
    this.profileForm = new FormGroup({
      id: new FormControl(id), // Pré-remplissez le champ id avec l'ID de l'utilisateur
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      heure_ouv: new FormControl(''),
      heure_ferm: new FormControl(''),
      // adresse: new FormControl(''),
      // medicament: new FormControl(''),
      // role: new FormControl(''),
    });
  }

  onSubmit(): void {
    const pharmacie: Pharmacie = this.profileForm.value;
    console.log('Pharmacie à modifier:', pharmacie);
    // Vérifiez si l'identifiant est un nombre entier valide
    if (pharmacie.id && Number.isInteger(Number(pharmacie.id))) {
      // Le formulaire est valide, procédez à la mise à jour de la pharmacie
      this.pharmacieService.updatePharmacie(pharmacie.id, pharmacie).subscribe(
        response => {
          console.log('Pharmacie modifiée avec succès:', response);
          
          this.errorMessage = '';
          this.profileForm.reset();
        },
        error => {
          console.error('Erreur lors de modification de la pharmacie:', error);
          this.errorMessage = 'Erreur lors de la modification de la pharmacie. Veuillez réessayer plus tard.';
        }
      );
    } else {
      
      console.error('Identifiant de la pharmacie non valide.');
      this.errorMessage = 'Veuillez saisir un identifiant de pharmacie valide.';
     
    }
  }  
}
