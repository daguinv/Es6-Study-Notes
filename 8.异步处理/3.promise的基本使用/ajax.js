function ajax(obj) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 <= 300 || xhr.status == 304) {
          resolve(xhr.responseText);
        } else {
          reject();
        }
      }
    }
    const { type = 'get', url, axync = true } = obj;
    xhr.open(type, url, axync);
    if(xhr.type == 'post'){
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xhr.send(pbj.data);
    }else{
      xhr.send(null);
    }
  })

}
