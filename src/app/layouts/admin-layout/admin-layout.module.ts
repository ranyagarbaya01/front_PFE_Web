import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ListeMedicineComponent } from '../../ListeMedicine/ListeMedicine.component';
import { AddLivreurComponent } from '../../AddLivreur/AddLivreur.component';
import { AddMedicineComponent } from '../../AddMedicine/AddMedicine.component';
import { ListeCommandeComponent } from '../../ListeCommande/ListeCommande.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ListeLivreurComponent } from 'app/liste-livreur/liste-livreur.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ListeCommandeComponent,
    AddLivreurComponent,
    AddMedicineComponent,
    ListeMedicineComponent,
    NotificationsComponent,
    ListeLivreurComponent,
    
    
  ]
})

export class AdminLayoutModule {}
