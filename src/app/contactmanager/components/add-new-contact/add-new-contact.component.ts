import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

  user: User;
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  name = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<AddNewContactComponent>, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  save() {
    this.user.name = this.name.value;
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(this.user);
    });
   
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name': '';
  }
}
