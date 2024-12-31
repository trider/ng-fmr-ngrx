import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './UserService/user.service';
import { Store } from '@ngrx/store';
import { selectUsers } from './state/users.selectors';
import { UsersApiActions } from './state/users.actions';
import { RouterOutlet } from '@angular/router';
import { UserApiActions } from './state/user/user.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ng-fmr-ngrx';
  users$:any = null
  users:any = null

  constructor(
    private store: Store,
    private userService:UserService,
    private router: Router,
   
  ) {
    this.users$ = this.store.select(selectUsers)
  
    // localStorage.setItem('Users', JSON.stringify(this.users$))
    }

  ngOnInit():void {
    this.userService.usersGet().subscribe((users) =>
        this.store.dispatch(UsersApiActions.userList({ users }))
    );

  }
}
