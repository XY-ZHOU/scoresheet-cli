let showPage = require("./showCommand");
let Student = require("./student");
let cli = require('cli-interact');
let addStudent = require("./addStudent");
let getTranscripts = require("./getTranscripts");
let students = [];
module.exports = () => {
  let getNumber = cli.question(showPage.showMainPage());
  if (getNumber === '1') {
    let studentMessage = cli.question(showPage.addStudentTxt());
    while (addStudent(studentMessage) === false) {
      studentMessage = cli.question(showPage.addStudentTxt());
    }
    let student = addStudent(studentMessage);
    students.push(student);
    showPage.messageRightTips(student.name);
    showPage.showMainPage();
  } else if (getNumber === '2') {
    let studentsId = cli.question(showPage.inputStudentIdTxt());
    while (getTranscripts(studentsId, students) == false) {
      studentsIdTxt = cli.question(showPage.inputStudentIdTxt());
    }
    let transcripts = getTranscripts(studentsId, students);
    showPage.showTranscript(transcripts);
  } else if (getNumber === '3') {
    showPage.showMainPage();
  }
}