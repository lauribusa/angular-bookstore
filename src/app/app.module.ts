import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
