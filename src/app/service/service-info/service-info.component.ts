import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ServiceInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("New of me", data)
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  ngOnInit() {
  }

}
