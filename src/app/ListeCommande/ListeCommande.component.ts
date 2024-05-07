import { Component, OnInit } from '@angular/core';
import { Livraison } from 'app/Models/livraison.model';
import { LivraisonService } from 'app/Services/livraison.service';


@Component({
  selector: 'app-ListeCommande',
  templateUrl: './ListeCommande.component.html',
  styleUrls: ['./ListeCommande.component.css']
})
export class ListeCommandeComponent implements OnInit {

  livraisons: Livraison[];

  constructor(private livraisonService: LivraisonService) { }

  ngOnInit() {
    this.getAllCommandes();
    
  }
  getAllCommandes(): void {
    this.livraisonService.getAllCommandes()
      .subscribe(livraisons => this.livraisons = livraisons);
  }

}
