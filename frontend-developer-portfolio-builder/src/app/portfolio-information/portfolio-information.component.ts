import { Component, OnInit } from '@angular/core';
import {SharedInformationService} from '../shared-information.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-portfolio-information',
  templateUrl: './portfolio-information.component.html',
  styleUrls: ['./portfolio-information.component.css']
})
export class PortfolioInformationComponent implements OnInit {
  constructor(private router:Router,
  private sharedInformationService:SharedInformationService) { }

  ngOnInit() {
  }
  submit():void{
    localStorage.setItem("data",JSON.stringify(this.sharedInformationService));
    this.router.navigate(['portfolio']);
  }
  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
    reader.onload = (event:any) => {
      this.sharedInformationService.personalImg= event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}
}
