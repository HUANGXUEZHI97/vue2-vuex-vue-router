//手写原生JS
export default (type='GET',url='',data={},async=true) => {
  return new Promise((resolve,reject)=>{
    type=type.toUpperCase();

    let xhr;
    //初始化请求XMLHttpRequest
    if(window.XMLHttpRequest){
      xhr = new XMLHttpRequest();
    }else{
      xhr = new ActiveXObject;//浏览器低于IE6
    }

    let sendData = '';//传参
    Object.keys(data).forEach(key =>{
      sendData = key + '=' + data[key] + '&';
    })

    sendData=sendData.substring(0,sendData.length-1);
    url = url+'?'+sendData;
    if(type == 'GET'){
      xhr.open(type,url,async);
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xhr.send(JSON.stringify(data));
    }else if(type == "POST"){
      xhr.open(type,url,async);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(data));
    }

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          let obj = xhr.response;
          if(typeof obj !== 'object'){
            obj = JSON.parse(obj);
          }
          resolve(obj);
        }
      }else{
        reject(xhr);
      }
    }
  })
}