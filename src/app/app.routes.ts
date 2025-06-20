import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'app-articles', component: ArticlesComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-connexion', component: ConnexionComponent },
    { path: 'app-inscription', component: InscriptionComponent },
    { path: 'app-reservations', component: ReservationsComponent },
    { path: 'app-detail/:id', component: DetailComponent },
    { path: '**', redirectTo: '' }
];
