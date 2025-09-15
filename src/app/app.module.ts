import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Компоненты
import { FaqComponent } from './components/common/faq/faq.component';
import { ContactFormComponent } from './components/common/contact-form/contact-form.component';
import { HomeComponent } from './views/main/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CatalogModule} from "./views/products/catalog.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    ContactFormComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    CatalogModule,
    SharedModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

