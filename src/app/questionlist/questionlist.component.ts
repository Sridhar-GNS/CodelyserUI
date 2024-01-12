

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-question-list',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.scss']
})
export class QuestionListComponent implements OnInit {
  currentIndex = 0;
  currentQuestion: any;
  showNextButton = false;
  questions: any;
  questionList=false;
  counter=0;
  onSubmit(){
    this.questionList=true;
  }
    
  constructor(private questionService: QuestionService) {}
  ngOnInit(): void {
    this.loadQuestion();
  }
  loadQuestion(): void {
    this.currentQuestion = this.questionService.getQuestion(this.currentIndex);
    this.showNextButton = false;
  }

  onNextClick(): void {
     if (this.currentIndex < 14) {
      this.currentIndex++;
      this.counter++;
    if (this.currentIndex < this.questionService.getTotalQuestions()) {
      this.loadQuestion();
    } else{

      console.log('End of questions');
    }
  } else{
    console.log('reached');
  }
  }}