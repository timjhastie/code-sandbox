import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const [nameArr, ageArr] = ["Tim", "35"];
// console.log(nameArr);
// console.log(ageArr);

const { name, age } = {
  name: "Timm",
  age: 33
};

// console.log(name);
// console.log(age);

const hobbies = ["Drawing", "Skiing"];
const newHobbies = ["Eating", "Sleeping"];

const allHobbies = [...newHobbies, ...hobbies];
console.log(allHobbies);
