import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ListeMedicineComponent } from '../../ListeMedicine/ListeMedicine.component';
import { AddLivreurComponent } from '../../AddLivreur/AddLivreur.component';
import { AddMedicineComponent } from '../../AddMedicine/AddMedicine.component';
import { ListeCommandeComponent } from '../../ListeCommande/ListeCommande.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ListeLivreurComponent } from 'app/liste-livreur/liste-livreur.component';
// import { LoginComponent } from 'app/Auth/login/login.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'ListeCommande',
    //         component: ListeCommandeComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // { path: 'login',          component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'ListeMedicine',  component: ListeMedicineComponent },
    { path: 'AddLivreur',     component: AddLivreurComponent },
    { path: 'AddMedicine',    component: AddMedicineComponent },
    { path: 'ListeCommande',  component: ListeCommandeComponent },
    { path: 'notifications',  component: NotificationsComponent },
    {path: 'liste-livreur',   component: ListeLivreurComponent },
    
];
