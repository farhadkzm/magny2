import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css']
})
export class ServiceAdminComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ServiceAdminComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("New of me", data)
  }

  ngOnInit() {
  }

}
