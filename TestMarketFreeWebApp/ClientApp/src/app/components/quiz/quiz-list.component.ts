import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Quiz } from '../../interfaces/quiz';
import { log } from "util";
@Component({
  selector: "quiz-list",
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {
  title: string;
  selectedQuiz: Quiz;
  quizzes: Quiz[];
  constructor(http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.title = "Latest Quizzes";
    var url = baseUrl + "api/quiz/Latest/10";
    http.get<Quiz[]>(url).subscribe(result => {
      this.quizzes = result;
    }, error => console.error(error));
    console.log("baseUrl value: ", baseUrl);
  }
  onSelect(quiz: Quiz) {
    this.selectedQuiz = quiz;
    console.log("quiz with Id "
      + this.selectedQuiz.Id
      + " has been selected.");
  }
}
