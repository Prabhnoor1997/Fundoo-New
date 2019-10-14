import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditBoxComponent } from './note-edit-box.component';

describe('NoteEditBoxComponent', () => {
  let component: NoteEditBoxComponent;
  let fixture: ComponentFixture<NoteEditBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteEditBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
