import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  private tasksService = inject(TasksService);

  @Input({required: true}) id!: string;
  @Output() clsAddTaskDialogueEvent = new EventEmitter<void>();
  

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  

  clsAddTaskDialogue(){
    console.log("let's cls dialogue");
    this.clsAddTaskDialogueEvent.emit();
  }

  triggerAddTask(){
    console.log(this.enteredTitle);
    console.log(this.enteredSummary);
    console.log(this.enteredDate);

    
    this.tasksService.addTask({title:this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate}, this.id);
    this.clsAddTaskDialogueEvent.emit();
  }
}
