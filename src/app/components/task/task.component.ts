import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/serveses/tasks.service';
import { Title } from '@angular/platform-browser';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

 taskId;
 task ;


  constructor(private title :Title,private route: ActivatedRoute
    ,private router : Router, private taskserr: TasksService) {
    this.title.setTitle('  Task Manger')
   }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id')

      this.task= this.taskserr.Tasks[this.taskId]
  }

  savetask(){
    this.taskserr.edettask(this.taskId,this.task)
    this.router.navigate(['/'])
  }


  deletetask(){
    this.taskserr.deletTask(this.taskId)
    this.router.navigate(['/'])
  }


}
