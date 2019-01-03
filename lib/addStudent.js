let Student = require("./student");

function addStudent(studentMessage) {
  let messageArr = studentMessage.split(', ');
  if (isStudentMessageTrue(messageArr)) {
    return addStudentMessage(messageArr);
  }
  return false;
}

function isStudentMessageTrue(messageArr) {
  return !(messageArr.length !== 6 || isNaN(parseInt(messageArr[1])) || !messageArr[2].includes('数学: ') || !messageArr[3].includes('语文: ') || !messageArr[4].includes('英语: ') || !messageArr[5].includes('编程: '));
}

function addStudentMessage(messageArr) {
  let courses = [];
  for (let i = 2; i < messageArr.length; i++) {
    let courseObj = {};
    let course = messageArr[i].slice(0, messageArr[i].indexOf(': '));
    let score = Number(messageArr[i].slice(messageArr[i].indexOf(': ') + 1));
    courseObj.course = course;
    courseObj.score = score;
    courses.push(courseObj);
  }
  let student = new Student(messageArr[0], messageArr[1], courses);
  return student;
}
module.exports = addStudent