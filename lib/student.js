class Student {
  constructor(name, id, courses) {
    this.name = name;
    this.id = id;
    this.courses = courses;
  }
  getSum() {
    let sum = 0;
    this.courses.map((element) => {
      sum += element.score;
    })
    return sum;
  }
  getAverage() {
    return this.getSum() / this.courses.length;
  }
}
module.exports = Student;