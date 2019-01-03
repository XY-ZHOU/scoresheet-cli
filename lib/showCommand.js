function showMainPage() {
  console.log('1. 添加学生\n' + '2. 生成成绩单\n' + '3. 退出\n' + '请输入你的选择（1～3）：');
}

function addStudentTxt() {
  console.log('请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：');
}

function messageErrorTips() {
  console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n');
}

function messageRightTips(name) {
  console.log(`学生${name}的成绩被添加`);
}

function inputStudentIdTxt() {
  console.log('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
}

function idErrorTips() {
  console.log('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n');
}

function showTranscript(transcripts) {
  let str = '';
  for (let element of transcripts.scores) {
    str += element.join('|') + '\n';
  }
  console.log('成绩单\n' + '姓名 | 数学 | 语文 | 英语 | 编程 | 平均分 | 总分 \n' + '=== === === === === === === === \n' + str + '=== === === === === === === === \n' + '全班总分平均数:' + `${transcripts.averageOfSum}\n` + '全班总分中位数:' + `${transcripts.medianOfSum}\n`);
}
module.exports = {
  showMainPage,
  addStudentTxt,
  messageErrorTips,
  messageRightTips,
  inputStudentIdTxt,
  idErrorTips,
  showTranscript
};