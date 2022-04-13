// let selectedOption = "";
// let options = document.getElementsByClassName("rating__scale--option");
// let button = document.querySelector("button");
// const rating = document.getElementById("rating__card");
// const thanks = document.getElementById("thanks");
// for (let index = 0; index < options.length; index++) {
//     options[index].addEventListener("click", ()=> {
//         clearAll();
//         selectedOption = index;
//         option[index].classList.replace(
//             "rating__scale--option--selectable",
//             "rating__scale--option--active"
//         );
//     })
// }

let selectedOption = "";
let options = document.getElementsByClassName("rating__scale--option");
let button = document.querySelector("button");
const rating = document.getElementById("rating");
const thank = document.getElementById("thank");
for (let index = 0; index < options.length; index++) {
  options[index].addEventListener("click", () => {
    clearAll();
    selectedOption = index;
    options[index].classList.replace(
      "rating__scale--option--selectable",
      "rating__scale--option--active"
    );
  });
}

// button.addEventListener("click", () => {
//     if (selectedOption === "") {
//       return;
//     }
//     const label = document.getElementsByClassName("thanks__rating")[0];
//     label.innerHTML = `You selected ${selectedOption + 1} out of 5`;
//     rating__card.style.display = "none";
//     thanks.style.display = "flex";
//   });
//   const clearAll = () => {
//     for (let index = 0; index < options.length; index++) {
//       options[index].classList = [
//         "rating__scale--option rating__scale--option--selectable",
//       ];
//     }
//   };

  button.addEventListener("click", () => {
      if (selectedOption === "") {
          return;
      }
      const label = document.getElementsByClassName("thanks__rating")[0];
      label.innerHTML = `You selected ${selectedOption + 1} out of 5`;
      rating__card.style.display = "none";
      thanks.style.display = "flex";
  });
  const clearAll = () => {
      for (let index = 0; index < options.length; index++) {
          options[index].classList = [
            "rating__scale--option rating__scale--option--selectable",
        ];
      }
  };