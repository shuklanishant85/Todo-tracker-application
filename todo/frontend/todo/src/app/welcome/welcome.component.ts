import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage: string
  user = ''

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['username']
  }


  getWelcomeMessage() {
    this.welcomeDataService.executeTodoWelcomeService(this.user).subscribe(
      response => this.handleSuccessfulResponse(response),
      response => this.handleErrorResponse(response)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessage = response.message
  }

  handleErrorResponse(response){
    this.welcomeMessage = response.error.message
  }
}
