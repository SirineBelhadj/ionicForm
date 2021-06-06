import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/formulaire';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {

  questions: Question[] = []
  name: string = "";
  type: string = "";
  constructor() { }

  ngOnInit() { }

  makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }
  addQuestion() {
    const question = new Question(this.name, this.type);
    this.questions.push(question);
  }


}
