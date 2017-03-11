import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioInformationComponent } from './portfolio-information/portfolio-information.component';
import {SharedInformationService} from './shared-information.service'
import {Routes,RouterModule} from '@angular/router'

const routes:Routes=[
  {path:'portfolio',component:PortfolioComponent},
  {path:'information',component:PortfolioInformationComponent},
  {path:'',redirectTo: '/information',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioInformationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
