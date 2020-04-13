"usestrict";
// BUDGET CONTROLLER----------------------------
let budgetController = (function () {
  let Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };
})();

// UI CONTROLLER----------------------------
let uiController = (function () {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    // exposing the DOMstrings globaly
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// GOLOBAL APP CONTROLLER----------------------------
let controller = (function (budgetCtrl, UICtrl) {
  let setupEventListeners = function () {
    let DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  let ctrlAddItem = function () {
    // 1. Get the field input data
    let input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };
  // globall init
  return {
    init: function () {
      console.log("application has started");
      setupEventListeners();
    },
  };
})(budgetController, uiController);

controller.init();
