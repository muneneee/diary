import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought'

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  thoughts: Thought[] =[
    new Thought(1, 'a', 'z', new Date(2020,7,13)),
    new Thought (2, 'b', 'y', new Date(2020,7,13)),
  ];


  toggleDetails(index){
    this.thoughts[index].showDescription = !this.thoughts[index].showDescription;
  }

  completeThought(isComplete, index){
    if (isComplete) {
      this.thoughts.splice(index,1)
    }
  }

   addNewThought(thought){
    let thoughtLength = this.thoughts.length;
    thought.id = thoughtLength+1;
    thought.entryDate = new Date(thought.entryDate)
    this.thoughts.push(thought)
  }

  
  constructor() { }

  ngOnInit() {
  }

}
