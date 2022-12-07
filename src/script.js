function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("#task").innerHTML = data.id;
            console.log(data);
        })
        .catch((error) => console.log(error))
}

const data = ["asd", "dasdkljef", "asdkjhl3"];

function randomJob(){
    var rdm = parseInt(Math.random() * (data.length - 0) + 0);
    console.log(rdm + " " + data[rdm]);
}
