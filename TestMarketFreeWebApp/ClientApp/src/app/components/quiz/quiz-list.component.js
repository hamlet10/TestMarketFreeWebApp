"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(http, baseUrl) {
        var _this = this;
        this.title = "Latest Quizzes";
        var url = baseUrl + "api/quiz/Latest/";
        http.get(url).subscribe(function (result) {
            _this.quizzes = result;
        }, function (error) { return console.error(error); });
    }
    QuizListComponent.prototype.onSelect = function (quiz) {
        this.selectedQuiz = quiz;
        console.log("quiz with Id "
            + this.selectedQuiz.Id
            + " has been selected.");
    };
    QuizListComponent = __decorate([
        core_1.Component({
            selector: "quiz-list",
            templateUrl: './quiz-list.component.html',
            styleUrls: ['./quiz-list.component.css']
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], QuizListComponent);
    return QuizListComponent;
}());
exports.QuizListComponent = QuizListComponent;
//# sourceMappingURL=quiz-list.component.js.map