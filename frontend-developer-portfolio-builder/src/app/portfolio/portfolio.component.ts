import { Component, OnInit } from '@angular/core';
import {SharedInformationService} from '../shared-information.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  constructor(private sharedInformationService:SharedInformationService) {
    this.sharedInformationService=JSON.parse(localStorage.getItem("data"));
  }

  ngOnInit() {
  }
downloadResume(){
  window.location.href=this.sharedInformationService.resumeUrl;
}
gotoFacebook(){
  window.location.href=this.sharedInformationService.facebook;
}
gotoTwitter(){
  window.location.href=this.sharedInformationService.twitter;
}
gotoGithub(){
  window.location.href=this.sharedInformationService.github;
}
gotoLinkedin(){
  window.location.href=this.sharedInformationService.linkedin;
}

}
