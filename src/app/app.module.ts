import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { FormsModule } from '@angular/forms';
import { CatListComponent } from './cat-list/cat-list.component';
import {appRoutes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
