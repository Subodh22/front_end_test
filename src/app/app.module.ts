import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from'@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { QueryComponent } from './query/query.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'data',
        component:DataComponent
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {path:'query',
      component:QueryComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
