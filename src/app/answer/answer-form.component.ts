import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { User } from '../auth/user.model';
import { Question } from '../question/question.model';

@Component({
    selector: 'app-answer-form',
    templateUrl: './answer-form.component.html',
    styles: [
        `
        form{
            margin-top: 20px;
        }
        `
    ]
})

export class AnswerFormComponent {
    @Input() question: Question;
  
    onSubmit ( form: NgForm ) {
      const ANSWER = new Answer(
        form.value.description,
        this.question,
        new Date(),
        new User( null,null, 'Usuario', 'Prueba' )
      );
  
      this.question.answers.unshift( ANSWER );
      form.reset();
    }
  }