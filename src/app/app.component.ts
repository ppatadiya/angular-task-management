import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  name: string = DUMMY_USERS[0].name;
  //selectedId: string = this.users[2].id;
  selectedId?: string;

  get selectedUser() {
    
    return this.users.find(ele => ele.id === this.selectedId);
    
    
  }

  onSelectUser(id: string){
    //console.log("app component received id from child " + id);
    //console.log(DUMMY_USERS);
    this.selectedId = id;
    
  }
}
