import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Profil utilisateur',  icon:'person', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/ListeCommande', title: 'Liste des commandes',  icon:'content_paste', class: '' },
    { path: '/AddMedicine', title: 'Ajout médicaments',  icon:'add', class: '' },
    { path: '/ListeMedicine', title: 'Liste des médicaments',  icon:'content_paste', class: '' },
    { path: '/AddLivreur', title: 'Ajout Livreur',  icon:'add', class: '' },
    { path: '/liste-livreur', title: 'Liste des Livreurs',  icon:'content_paste', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
