import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../UserService/user.service';
import { Store } from '@ngrx/store';

import { UserApiActions } from '../state/user/user.actions';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import * as UserActions from '../state/user/user.actions'
import * as UserSelectors from '../state/user/user.selector'
import * as UserReducer from '../state/user/user.reducer'
import { OrderListComponent } from '../components/order-list/order-list.component';
import { DetailsTableComponent } from '../components/details-table/details-table.component';



@Component({
  selector: 'app-user-orders',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    OrderListComponent,
    DetailsTableComponent
  ],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss'
})
export class UserOrdersComponent implements OnInit {
  userId:any;
  user$:any = null
  details:any
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private userService:UserService,
   ) { 
    this.userId = this.route.snapshot.paramMap.get('id')?.toString();
  
   }
 
   ngOnInit(): void {
   
    this.userService.userGet(this.userId).subscribe((user) =>
    {
      this.user$=user  

      // delete(this.details.orders)
     

    }
     );
   }

  
   

}
