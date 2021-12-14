import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddNewContactComponent } from '../add-new-contact/add-new-contact.component';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter();
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  openAddNewContactDialog() :void {
    let dialogRef = this.dialog.open(AddNewContactComponent, { width: '450px'});

    dialogRef.afterClosed().subscribe(result=> {
      console.log('result is' +result);
      if (result) {
        this.openSnackBar('Contact Added', 'Navigate').onAction().subscribe(() => {
          this.router.navigate(['/contactmanager', result.id]);
        });
      }
    })
  }

  openSnackBar(message, action) : MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {duration: 5000});
  }
}
