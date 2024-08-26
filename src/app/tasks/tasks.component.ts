import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() id!: string;
  @Input() name!: string;
  

  tasks = dummyTasks;

  ngOnInit() {
    // Initialization logic here
    console.log(this.tasks);
    console.log(this.id);
    console.log(this.name);
    console.log(this.selectedUserTasks);
    
  }

  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId === this.id);
  }

  triggerComplete(taskId: string){
    console.log(taskId);
    console.log(this.tasks);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    console.log(this.tasks);
    
  }


}
