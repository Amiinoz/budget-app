"usestrict";
let budgetController = (function () {
  let x = 23;

  let add = function (a) {
    return x + a;
  };
  return {
    puplicTest: function (b) {
      console.log(add(b));
    },
  };
})();

var uiController = (function () {
  //code
})();

var controller = (function (budgetCtrl, UICtrl) {})(
  budgetController,
  uiController
);
