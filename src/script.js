
// Infos for fetching Data
function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("#task").innerHTML = data.id;
            console.log(data);
        })
        .catch((error) => console.log(error))
}

function randomJob(){
    fetch('../OpenJsonData_wifi.json')
    .then((response) => response.json())
    .then((data) => {
        
    })
    .catch((error) => console.log(error))
    var rdm = parseInt(Math.random() * (data.length - 0) + 0);
}
