const sendData = (body) => {
	let url = "https://jsonplaceholder.typicode.com/posts";
  let xhr = new XMLHttpRequest();
	xhr.open('POST', url)
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(body))
	xhr.onload = () => {
		if (xhr.status === 404) {
				console.log('Путь не найден', url);
		}
		if (xhr.status === 201) {
				console.log('Пользователь создан: ', xhr.response)
		}
		console.dir( xhr)
	};
	xhr.onerror =()=> {
		console.log('Что-то пошло не так: ')
		console.dir(xhr)
	};
	
};
const getData = (url) => {
  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      sendData(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData("./db.json");
