import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserAdminComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("New of me", data)
  }


  ngOnInit() {
  }

}
