import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SerachComponent } from './container/serach/serach.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeaderComponent,
    CauroselComponent,
    ContainerComponent,
    ProductListComponent,
    SerachComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
