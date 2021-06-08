import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/formulaire';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {

  question = {
    id: "",
    name: "",
    type: "",
  }

  surveyForm = {
    title: "",
    description: "",
    category: "",
    gender: [],
    maxAge: "",
    minAge: "",
    frais: "",
    participantsNumber: null,
    startDate: null,
    endDate: null,
    questions: new Array<Question>()
  }
  constructor(private categoryService: CategoryService) { }

  ngOnInit() { }

  addQuestion() {
    const question = new Question(this.question.name, this.question.type);
    if (!this.question.name || !this.question.type) console.error("please enter a valid name | name");
    else {
      this.surveyForm.questions.push(question);
      this.question.name = ""
      this.question.type = ""
    }
  }

  submitForm() {
    console.log("this.surveyForm", this.surveyForm)
    var validForm: boolean = true;
    Object.keys(this.surveyForm).map(key => {
      if (
        key != "description" &&
        (!this.surveyForm[key]
          || this.surveyForm[key] == ""
          || (Array.isArray(this.surveyForm[key]) && !this.surveyForm[key].length))
      ) validForm = false
    });
    if (!validForm) console.error('Please enter valid information.')
  }
}
