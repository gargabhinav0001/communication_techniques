const URL = "http://localhost:3000";
async function getData() {
  const res = await fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      console.log("data is: ", data);
      document.getElementById("heading").innerHTML = data.data.toString();
    })
    .catch((err) => console.log("error occured: ", err));
}

//  Calling API after every 3 seconds, try to mock short polling mechanism
setInterval(() => {
  getData();
}, 3000);
