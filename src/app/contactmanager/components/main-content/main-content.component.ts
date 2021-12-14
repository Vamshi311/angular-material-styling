import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      let id = params["id"];
      if (!id) {
        id = 1;
      }
      this.user = null;
      this.userService.users.subscribe(data => {
        if (data.length == 0) {
         return;
        }
        setTimeout(() => {
          this.user = this.userService.getUserId(id);
        }, 500)
      });
     
    });
  }

}
