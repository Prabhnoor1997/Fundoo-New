import { Component, OnInit ,Output,Input, EventEmitter} from '@angular/core';
import {DataService} from '../../services/data.service'
import {Notes} from '../../models/notesModel'
import {Events} from '../../models/eventModel'
@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent implements OnInit {
  save:Boolean=false;
  message:string;
  event:Events;
  colors=[
  "#e8eaed","#e6c9a8","#fdcfe8","#d7aefb","#f28b82","#fbbc04","#fff475","#ccff90","#a7ffeb",
    "#cbf0f8","#aecbfa","#d7aefb"
  ]

  @Input() note:Notes;
  
  
  @Output() eventCarrier = new EventEmitter<Events>();
  @Output() saveNote = new EventEmitter<Boolean>();
  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
    
  }
  saveNotes() {
    this.save=true;
    this.saveNote.emit(this.save);
  }

  deleteNotes(){
    console.log("in delete notes icon bar")
    this.event={
      "purpose":"delete",
    }
   
    this.eventCarrier.emit(this.event);
    
  }
  colorElement(color){
    this.event={
      "purpose":"color",
      "value":color
    }
   
    this.eventCarrier.emit(this.event);;

  }
  archive(){
    this.event={
      "purpose":"archive",
    }
   
    this.eventCarrier.emit(this.event);
  }
}
