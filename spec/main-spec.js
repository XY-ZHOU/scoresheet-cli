let sinon = require("sinon");
let main = require("../lib/main");
let Student = require("../lib/student");
let showPage = require("../lib/showCommand");
let addStudent = require("../lib/addStudent");
let getTranscripts = require("../lib/getTranscripts");
let cli = require("cli-interact");
describe('main()', () => {
  it('should display main menu once started', () => {
    sinon.spy(console, 'log');
    main();
    expect(console.log.args.join()).toBe(`1. 添加学生
      2. 生成成绩单
      3. 退出
      请输入你的选择（1～3）：`);
  });
});
describe('addStudent()', () => {
  it('should add student while input student message is correct', () => {
    let rightStudentMessage = '张三, 201701, 数学: 75, 语文: 95, 英语: 80, 编程: 80';
    let result = addStudent(rightStudentMessage);
    let student = new Student('张三', '201701', [{
      course: '数学',
      score: 75
    }, {
      course: '语文',
      score: 95
    }, {
      course: '英语',
      score: 80
    }, {
      course: '编程',
      score: 80
    }]);
    expect(result).toEqual(student);
  });
  it('should return false while input student message is not correct', () => {
    let errorStudentMessage = '张三, 201701, 数学: 75, 语文: 95, 英语: 80';
    let result = addStudent(errorStudentMessage);
    expect(result).toEqual(false);
  });
});
describe('getTranscripts()', () => {
  let student_one = new Student('张三', '201701', [{
    course: '数学',
    score: 75
    }, {
    course: '语文',
    score: 95
    }, {
    course: '英语',
    score: 80
    }, {
    course: '编程',
    score: 80
    }]);
  let student_two = new Student('李四', '201702', [{
    course: '数学',
    score: 68
    }, {
    course: '语文',
    score: 79
    }, {
    course: '英语',
    score: 89
    }, {
    course: '编程',
    score: 64
    }]);
  let students = [student_one, student_two];
  it('should get transcript if id is correct', () => {
    let rightStudentId = '201701, 201702, 201703';
    let result = getTranscripts(rightStudentId, students);
    let transcript = {
      scores: [['张三', 75, 95, 80, 80, 82.5, 330],
     ['李四', 68, 79, 89, 64, 75, 300]],
      averageOfSum: 315,
      medianOfSum: 315
    }
    expect(result).toEqual(transcript);
  });
  it('should return false while input info is not current', () => {
    let errorStudentId = '101, asd';
    let result = getTranscripts(errorStudentId, students);
    expect(result).toEqual(false);
  });
});