import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule,MatCardModule,MatSidenavModule,MatSidenavContainer, MatSidenavContent } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { DataService } from './data.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

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
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
