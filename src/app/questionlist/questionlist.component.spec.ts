import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListComponent } from './questionlist.component';

describe('QuestionlistComponent', () => {
  let component: QuestionListComponent;
  let fixture: ComponentFixture<QuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
