const URL = "http://localhost:3000";

const lastCachedData = "last cached data";

async function getData(lastData) {
  console.log(" valling valksjd;fl");

  const res = await fetch(`${URL}/?lastData=${lastData}`);
  const result = await res.json();
  console.log(" result is: ", result);
  lastCachedData = result.newData;
  document.getElementById("heading").innerHTML = result.newData;
  // calling the function in order to get the udpated data
  getData(result);
}

async function updateData() {
  alert("posted");
  console.log("#### strike is on!!");
  await fetch(`${URL}/updateData?lastData=${Math.random(100)}`, {
    method: "POST",
  });
}

const btn = document.getElementById("btn");
btn.onclick = () => {
  console.log("btn is clicked!!!");
};

getData(lastCachedData);
