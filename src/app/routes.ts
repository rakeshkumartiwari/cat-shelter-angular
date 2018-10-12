import {Routes} from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { CatListComponent } from './cat-list/cat-list.component';

export const appRoutes = [
    {path: 'home' , component: CatComponent},
    {path: 'cats', component: CatListComponent}
];
