const names = ["John", "Jane", "Joe"];
const jobs = ["Developer", "Designer", "Manager"];

const arr = () => {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i] + " is a " + jobs[i]);
  }
};
module.exports = { arr, names, jobs };
