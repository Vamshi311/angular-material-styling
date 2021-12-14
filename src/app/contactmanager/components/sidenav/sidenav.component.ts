import { state } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isScreenSmall: boolean;
  users: Observable<User[]>;
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private router: Router ) {

  }

  ngOnInit(): void {

    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      //.observe([Breakpoints.Small]) // we can use either predefined breakpoints or custom breakpoint like above (720px)
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
    });

    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => {
      if (data.length > 0) {
        this.router.navigate(["/contactmanager", data[0].id]);
      }  
    });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });

  }

}
