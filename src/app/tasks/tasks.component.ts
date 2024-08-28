import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() id!: string;
  @Input() name!: string;

  shouldShowAddTask = false;
  

  constructor(private tasksService: TasksService){}
  

  //tasks = dummyTasks;

  ngOnInit() {
    // Initialization logic here
    
    console.log(this.id);
    console.log(this.name);
    console.log(this.selectedUserTasks);
    
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.id);
  }

  onStartAddTask() {
    console.log("let's add new task");
    this.shouldShowAddTask = true;
    
  }

  clsAddTaskDialogueEvent(){
    this.shouldShowAddTask = false;
  }

  /*AddTaskDialogueEvent(taskData: addTaskModel){
    console.log("Let's add task data. I am in task");
    console.log(taskData);

    

    this.shouldShowAddTask = false;
    
  }*/


}
