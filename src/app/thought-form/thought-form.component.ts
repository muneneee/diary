import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought-form',
  templateUrl: './thought-form.component.html',
  styleUrls: ['./thought-form.component.css']
})
export class ThoughtFormComponent implements OnInit {

    newThought =new Thought(0,'','',new Date());
  @Output() addThought =new EventEmitter<Thought>();

    submitThought(){
  this.addThought.emit(this.newThought);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
