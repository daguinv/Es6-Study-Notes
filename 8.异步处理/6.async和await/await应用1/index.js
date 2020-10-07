// 获取李华所在班级老师的信息
async function getTeacher(){
  const students = await ajax({
    url: "./data/students.json",
  })
  let cId; //班级Id
  for (let i of students) {
    if (i.name == "李华") {
      cId = i.classId;
      break;
    }
  }
  const classes = await ajax({
    url: "./data/classes.json",
  })
  let tId; //l=老师Id
  for (let i of classes) {
    if (i.id == cId) {
      tId = i.teacherId
      break;
    }
  }
  let teachers = await ajax({
    url: "./data/teachers.json",
  })
  for (let i of teachers) {
    if (i.id == tId) {
      console.log(i);
      break;
    }
  }
}
getTeacher();
console.log(123);
