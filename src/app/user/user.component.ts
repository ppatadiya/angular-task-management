import { Component, EventEmitter, Input, Output} from '@angular/core';

/*type User = {
  id: string;
  avatar: string;
  name: string;
}*/

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
/*@Input({ required: true }) id!: string;
@Input({ required: true }) avatar!: string;
@Input({ required: true }) name!: string;*/

@Input({required: true}) user!: User;
@Input({required: true}) selected!: boolean;

@Output() select = new EventEmitter<string>();


get imagePath(){
  return 'assets/users/' + this.user.avatar;
}
  OnSelectUser(){
    console.log("user clicked");
    this.select.emit(this.user.id);
  }
}
