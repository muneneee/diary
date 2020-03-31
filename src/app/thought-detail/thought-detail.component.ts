import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Thought } from '../thought'

@Component({
  selector: 'app-thought-detail',
  templateUrl: './thought-detail.component.html',
  styleUrls: ['./thought-detail.component.css']
})
export class ThoughtDetailComponent implements OnInit {

  @Input() thought: Thought;
  @Output() isComplete = new EventEmitter<boolean>();

  thoughtComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
