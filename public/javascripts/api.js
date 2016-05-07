export default function postData(jsonData) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit.json");
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //log('written to db', xhr.responseText);
    }
  }
  xhr.send(JSON.stringify(jsonData));
};
