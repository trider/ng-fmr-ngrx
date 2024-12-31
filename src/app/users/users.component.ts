import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../UserService/user.service';
import { Store } from '@ngrx/store';
import { selectUsers } from '../state/users.selectors';
import { UsersApiActions } from '../state/users.actions';
import { UserListComponent } from '../components/user-list/user-list.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    UserListComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  users$:any = null
  users:any = null

  constructor(
    private store: Store,
    private userService:UserService,
    private router: Router,
   
  ) {
    this.users$ = this.store.select(selectUsers)
 
    }

  ngOnInit():void {
   

  }

  onAdd(user:any){
    this.store.dispatch(UsersApiActions.addUser({
      user
    }));
  }

  onUpdate(user:any){
    this.store.dispatch(UsersApiActions.updateUser({user}));
  }

  onRemove(user:any){
    this.store.dispatch(UsersApiActions.removeUser({user}));
  }



   

}
