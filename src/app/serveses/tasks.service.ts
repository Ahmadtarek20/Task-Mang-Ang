import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  Tasks : Array<Task> = [ ]

  constructor() {
    let savestasks =localStorage.getItem('tasks')
   if(savestasks) this.Tasks=  JSON.parse(savestasks);
   else this.Tasks =[]
   }

  deletTask(i){
    this.Tasks.splice(i, 1)
   this.saveAll()
  }
  savetask(title ,description){
    this.Tasks.push({
      title,
      description ,
    })
    this.saveAll()
  }
  edettask(i,data){

    this.Tasks[i] = data
    this.saveAll()
  }
  saveAll(){
    localStorage.setItem('tasks' , JSON.stringify(this.Tasks))
  }

}
