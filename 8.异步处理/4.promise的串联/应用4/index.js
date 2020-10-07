// 获取李华所在班级老师的信息
ajax({
  url: "./data/students.json",
}).then((data) => {
  for (let i of data) {
    if (i.name == "李华") {
      cId = i.classId
      return cId;
    }
  }
}).then((data) => {
  return ajax({
    url: "./data/classes.json"
  }).then((res) => {
    for (let i of res) {
      if (i.id == data) {
        return i.teacherId
      }
    }
  })
}).then((data) => {
  return ajax({
    url:"./data/teachers.json"
  }).then((res) => {
    for(let i of res){
      if (i.id == data){
        console.log(i);
        return i;
      }
    }
  })
}).then( (data) =>{
  return data;
})