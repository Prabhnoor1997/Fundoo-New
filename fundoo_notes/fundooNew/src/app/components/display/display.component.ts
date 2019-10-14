import { Component, OnInit } from '@angular/core';
import {NotesSerivesService} from '../../services/notes-serives.service';
import {Notes} from '../../models/notesModel'
import { DataService } from "../../services/data.service";
import {MatDialog} from '@angular/material/dialog';
import {DialogueComponent} from '../note-edit-box/note-edit-box.component'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public show:boolean = false;
  public notes:Notes[];
  public buttonName:any = 'Show';
  public message:string;
  public noteSelected;
  public dispalyIconTray: boolean=true;
  constructor(private noteService: NotesSerivesService,private dataService:DataService,private dialog:MatDialog) {
  
   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {this.checkNoteAdded()
     })
     
    

  }

  filterTrash(notes){
    console.log(notes);
    var newNote = notes.filter(function(note) {
      return (note.isDeleted==false && note.isArchived==false);
    });
    console.log("New note--------"+ newNote)
    return newNote;

  }
checkNoteAdded(){
  console.log("in note add")
  if(this.message="Note Added")
    this.displayNotes();
    this.message="";


}
  displayNotes(){
    this.noteService.getRequest("getNotesList").subscribe((res:any) =>{
      this.notes=res.data.data;
      this.notes=this.filterTrash(this.notes);
      this.notes.reverse();

      //console.log(this.notes);
      
    })
  }
  getNotes(note) {
      this.noteSelected=note;
      //console.log(this.noteSelected);
        return note;
  }

 

  recieveMessageFromIconTray($event,id){
    console.log($event,id)
    if($event.purpose=="delete" ){
      let data={
        "noteIdList":[id],
        "isDeleted":true
      }

      let url="trashNotes"
      this.noteService.postJson(url,data).subscribe(
        (data:any)=>{
          console.log("deleted Note");
          this.displayNotes();
        }
      )
    }

    if($event.purpose=="color"){
      if(this.noteSelected!=null)
      {
    
        let data={
          "color":$event.value,
          "noteIdList": [id]
        }
        
        let url="changesColorNotes"
    
        this.noteService.postJson(url,data).subscribe(
          (data:any)=>
        {
          console.log(data);
          this.displayNotes();
         
        })
      }
    }

    if($event.purpose=="archive"){
      let data={
        "noteIdList": [id],
        "isArchived":true
      }

      let url="archiveNotes"

      this.noteService.postJson(url,data).subscribe(
        (data:any)=>
      {
        console.log(data);
        this.displayNotes();
       
      })

    }


  }

  passNote(){
    
  }

  openDialog(note)
  {
    console.log("the value of note is ", note);
    let dialogref = this.dialog.open(DialogueComponent,
      {
        data : {
          title : note.title ,
          note : note.description,
          id : note.id,
          
        }
      });
    dialogref.afterClosed().subscribe(result=> {
      console.log("dialog result ", result);
    })
  }
}

