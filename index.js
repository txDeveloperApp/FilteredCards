var app = angular.module("ngShop", []);

app.filter("catFilter", function($rootScope){
  return function() {
    var output = [];
    $rootScope.items.forEach((value) => {
      $rootScope.categories.forEach((cat) => {
        if (value.category == cat.name && cat.checked == true) {
          output.push(value);
        }
      });
    });
    return output;
  }
});

app.controller("ngMenu", function($scope) {
    $scope.menu = [
      {
        "title" : "Menu Item 1",
        "page"  : "#"
      },
      {
        "title" : "Menu Item 2",
        "page"  : "#"
      },
      {
        "title" : "Menu Item 3",
        "page"  : "#"
      },
      {
        "title" : "Menu Item 4",
        "page"  : "#"
      },
      {
        "title" : "Menu Item 5",
        "page"  : "#"
      },
      {
        "title" : "Menu Item 6",
        "page"  : "#"
      },
    ]
});

app.controller("ngItems", function($scope, $rootScope) {
  $rootScope.items = [
    {
      "name" : "Apple",
      "category": "Fruit",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "name" : "Aubergine",
      "category": "Vegetable",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "name" : "Banana",
      "category": "Fruit",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "name" : "Broccoli",
      "category": "Vegetable",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "name" : "Chicken",
      "category": "Meat",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "name" : "Orange",
      "category": "Fruit",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "name" : "Beef",
      "category": "Meat",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      "name" : "Zucchini",
      "category": "Vegetable",
      "image":  "",
      "description":  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
  ];
});

app.controller("ngFilter", function($scope, $rootScope) {
  $rootScope.categories = [
    {
      "name"  : "Meat",
      "color" : "#E05021",
      "checked":  true
    },
    {
      "name"  : "Vegetable",
      "color" : "#3D8C40",
      "checked":  true
    },
    {
      "name"  : "Fruit",
      "color" : "#EE9A3C",
      "checked":  true
    }
  ];
});
