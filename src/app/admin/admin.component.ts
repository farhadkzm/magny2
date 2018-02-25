import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {UserAdminComponent} from "./user-admin/user-admin.component";
import {ServiceAdminComponent} from "./service-admin/service-admin.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  bizColumns = ['name', 'type', 'address','approved'];
  bizDataSource = new MatTableDataSource(businessData);

  userColumns = ['firstName', 'lastName', 'email','approved'];
  userDataSource = new MatTableDataSource(userData);

  applyFilter(dataSource: MatTableDataSource<any[]>, filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    dataSource.filter = filterValue;
  }


  onBizEdit(element: Business) {
    let dialogRef = this.dialog.open(ServiceAdminComponent, {
      height: '350px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }


  onUserEdit(element: User) {
    let dialogRef = this.dialog.open(UserAdminComponent, {
      height: '350px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });

  }
}

export interface Business {
  address: string;
  name: string;
  type: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const userData: User[] = [
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'restaurant'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'He'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Li'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Be'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'B'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'C'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'N'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'O'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'F'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Ne'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Na'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Mg'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Al'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Si'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'P'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'S'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Cl'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Ar'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'K'},
  {firstName: 'Farhad', lastName: 'Kazemi', email: 'Ca'},
];

const businessData: Business[] = [
  {address: '39 MT Alexander rd', name: 'Apadana Supermarket', type: 'restaurant'},
  {address: '39 MT Alexander rd', name: 'Helium', type: 'He'},
  {address: '39 MT Alexander rd', name: 'Lithium', type: 'Li'},
  {address: '39 MT Alexander rd', name: 'Beryllium', type: 'Be'},
  {address: '39 MT Alexander rd', name: 'Boron', type: 'B'},
  {address: '39 MT Alexander rd', name: 'Carbon', type: 'C'},
  {address: '39 MT Alexander rd', name: 'Nitrogen', type: 'N'},
  {address: '39 MT Alexander rd', name: 'Oxygen', type: 'O'},
  {address: '39 MT Alexander rd', name: 'Fluorine', type: 'F'},
  {address: '39 MT Alexander rd', name: 'Neon', type: 'Ne'},
  {address: '39 MT Alexander rd', name: 'Sodium', type: 'Na'},
  {address: '39 MT Alexander rd', name: 'Magnesium', type: 'Mg'},
  {address: '39 MT Alexander rd', name: 'Aluminum', type: 'Al'},
  {address: '39 MT Alexander rd', name: 'Silicon', type: 'Si'},
  {address: '39 MT Alexander rd', name: 'Phosphorus', type: 'P'},
  {address: '39 MT Alexander rd', name: 'Sulfur', type: 'S'},
  {address: '39 MT Alexander rd', name: 'Chlorine', type: 'Cl'},
  {address: '39 MT Alexander rd', name: 'Argon', type: 'Ar'},
  {address: '39 MT Alexander rd', name: 'Potassium', type: 'K'},
  {address: '39 MT Alexander rd', name: 'Calcium', type: 'Ca'},
];
