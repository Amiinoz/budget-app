"usestrict";
// Budget controller
let budgetController = (function () {
  //code
})();

// Ui controller
let uiController = (function () {
  //code
})();

// Global app controller
let controller = (function (budgetCtrl, UICtrl) {
  let ctrlAddItem = function () {
    // 1. Get the field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
    console.log("It works");
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, uiController);
