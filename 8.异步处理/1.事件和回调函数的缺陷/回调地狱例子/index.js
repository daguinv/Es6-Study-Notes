// 获取李华所在班级老师的信息
ajax({
  url: "./data/students.json",
  success(data) {
    for (let i of data) {
      if (i.name == "李华") {
        let classId = i.classId;
        ajax({
          url: "./data/classes.json",
          success(data) {
            for (let i of data) {
              if (i.id == classId) {
                let tId = i.teacherId;
                ajax({
                  url: "./data/teachers.json",
                  success(data) {
                    for (let i of data) {
                      if(i.id == tId){
                        console.log(i);
                        return
                      }
                      
                    }
                  }
                })
                return;
              }
            }
          }
        })
        return;
      }
    }
  }
})