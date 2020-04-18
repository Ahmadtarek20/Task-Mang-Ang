import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/serveses/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tasksServ : TasksService , private title:Title) {
       this.title.setTitle('Task Manger')
     }

  ngOnInit() {
  }
  deletTask(i){
   this.tasksServ.deletTask(i)
  }
}
