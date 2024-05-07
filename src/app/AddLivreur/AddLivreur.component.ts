import { Component, OnInit } from '@angular/core';
import { Livreur } from 'app/Models/livreur.model';
import { LivreurService } from 'app/Services/livreur.service';

@Component({
  selector: 'app-AddLivreur',
  templateUrl: './AddLivreur.component.html',
  styleUrls: ['./AddLivreur.component.css']
})
export class AddLivreurComponent implements OnInit {

  newLivreur: Livreur = new Livreur();

  constructor(private livreurService: LivreurService) { }

  ngOnInit(): void {
    this.addLivreur();
    
  }

  addLivreur(): void {
    this.livreurService.createLivreur(this.newLivreur)
      .subscribe(() => {
        // Réinitialiser le formulaire après l'ajout réussi
        this.newLivreur = new Livreur();
      });
  }


}
