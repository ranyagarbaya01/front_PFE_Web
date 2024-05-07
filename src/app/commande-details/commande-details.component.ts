import { Component, OnInit } from '@angular/core';
import { Commande } from 'app/Models/commande.model';
import { CommandeDetailsService } from 'app/Services/commande-details.service';

@Component({
  selector: 'commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {

  commandes: Commande[];

  constructor(private commandeService: CommandeDetailsService) { }

  ngOnInit(): void {

    this.commandeService.getCommandes()
    .subscribe(data => {
      this.commandes = data
        console.log(this.commandes );
    
  });


}

  
  
  


}
