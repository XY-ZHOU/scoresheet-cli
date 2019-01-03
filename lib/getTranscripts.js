function getTranscripts(studentsId, students) {
  let studentsIdArr = studentsId.split(', ');
  if (isStudentIdTrue(studentsIdArr)) {
    return getTranscriptsContent(studentsIdArr, students);
  } else {
    return false;
  }
}

function getTranscriptsContent(studentsIdArr, students) {
  let studentsOfPrint = students.filter(element => studentsIdArr.includes(element.id));
  let scores = [];
  let sumOfClass = [];
  let transcripts = {};
  for (let stu of studentsOfPrint) {
    scores.push([stu.name, stu.courses[0].score, stu.courses[1].score,
       stu.courses[2].score, stu.courses[3].score, stu.getAverage(), stu.getSum()]);
    sumOfClass.push(stu.getSum());
  }
  sumOfClass.sort(rankAsc);
  let averageOfSum = sumOfClass.reduce((acc, cur) => acc + cur) / sumOfClass.length;
  let lowMiddle = Math.floor((sumOfClass.length - 1) / 2);
  let highMiddle = Math.ceil((sumOfClass.length - 1) / 2);
  let medianOfSum = (Number(sumOfClass[lowMiddle]) + Number(sumOfClass[highMiddle])) / 2;
  transcripts.scores = scores;
  transcripts.averageOfSum = averageOfSum;
  transcripts.medianOfSum = medianOfSum;
  return transcripts;
}

function isStudentIdTrue(idTxt) {
  for (let id of idTxt) {
    if (isNaN(parseInt(id))) {
      return false;
      break;
    }
  }
  return true;
}

function rankAsc(a, b) {
  return a - b;
}
module.exports = getTranscripts;