import { Component, OnInit } from '@angular/core';
import { Livreur } from '../Models/livreur.model';
import { LivreurService } from '../Services/livreur.service';

@Component({
  selector: 'liste-livreur',
  templateUrl: './liste-livreur.component.html',
  styleUrls: ['./liste-livreur.component.css']
})
export class ListeLivreurComponent implements OnInit {

  livreurs: Livreur[];

  constructor(private livreurService: LivreurService) { }

  ngOnInit(): void {
    this.getLivreurs();
  }

  getLivreurs(): void {
    this.livreurService.getAllLivreurs()
      .subscribe(livreurs => this.livreurs = livreurs);
  }

}
