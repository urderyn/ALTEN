import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormNameComponent } from './components/form-name/form-name.component';
import { FormAgeComponent } from './components/form-age/form-age.component';
import { FormResultComponent } from './components/form-result/form-result.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Animations
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormNameComponent,
    FormAgeComponent,
    FormResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
