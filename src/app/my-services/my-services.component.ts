import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {


  myServices: Array<{
    name: string,
    link: string,
    phone: string,
    address: string
    type: string
    description: string
  }> = [
    {
      name: 'Apadana Supermarket',
      link: 'http://apadana.com',
      phone: '0432032324',
      address: '123 MT Alexander rd, Travancore VIC 3032',
      type: 'restaurant',
      description: 'A nice supermarket in Travancore!'
    },
   {
      name: 'Kuala Supermarket',
      link: 'http://apadana.com',
      phone: '0432032324',
      address: '123 MT Alexander rd, Travancore VIC 3032',
      type: 'restaurant',
      description: 'A nice supermarket in Travancore!'
    },
   {
      name: 'Hello Supermarket',
      link: 'http://apadana.com',
      phone: '0432032324',
      address: '123 MT Alexander rd, Travancore VIC 3032',
      type: 'restaurant',
      description: 'A nice supermarket in Travancore!'
    },
  ];

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('Check your email! We just sent you an email.', '', {
      duration: 4000,
    });
  }

  ngOnInit() {
  }

}
