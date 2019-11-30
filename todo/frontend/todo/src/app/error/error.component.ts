import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Some error occured. Please contact support @ 7004581432'

  constructor() { }

  ngOnInit() {
  }

}
