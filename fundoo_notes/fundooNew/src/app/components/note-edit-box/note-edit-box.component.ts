import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import{NotesSerivesService} from '../../services/notes-serives.service'
import {DisplayComponent} from '../display/display.component'
import { DataService } from '../../services/data.service'
import {Notes} from '../../models/notesModel'
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {
  isArchived='false';
  result: any;
  response: any;
  title = new FormControl();
  description = new FormControl();
  note:Notes;
  noteId:string;
  

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private svc: NotesSerivesService,private dataSvc:DataService, private dialogRef: MatDialogRef< DisplayComponent>){}
  ngOnInit() {
  }
 
  



}