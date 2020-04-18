import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/serveses/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tas: TasksService,
    private rout :Router , private title : Title) {
      this.title.setTitle('add task - Task Manger')
     }

  ngOnInit() {
  }
  savetask(title ,description){
  this.tas.savetask(title.value , description.value)
  this.rout.navigate(['/'])
  }
}
