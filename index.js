// Import stylesheets
import "./style.css";

var acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];

var balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

function outputAccArr(arr) {
  let outAccArray = [];
  arr.forEach(element => {
    outAccArray.push(element.acctNum);
  });
  return outAccArray;
}

function FilterAndSortData(user, sortBy, sortDirection = "asc") {
  let keysBalance = Object.keys(balance);
  acctData.forEach(element => {
    for (let i = 0; i < keysBalance.length; i++) {
      if (element.acctNum === keysBalance[i]) {
        element.balance = balance[keysBalance[i]];
      }
    }
  });
  let filteredByUser;
  filteredByUser = acctData;
  // filter data by user name
  if (user) {
    filteredByUser = acctData.filter(acc => acc.user === user);
  }
  // Sort acctNum" or "balance" in ascending or descending order
  let sortedArray = filteredByUser;
  if (sortBy === "acctNum") {
    if (sortDirection === "desc") {
      sortedArray = filteredByUser.sort(
        (c1, c2) => c2.acctNum.slice(5) - c1.acctNum.slice(5)
      );
    } else if (sortDirection === "asc") {
      sortedArray = filteredByUser.sort(
        (c1, c2) => c1.acctNum.slice(5) - c2.acctNum.slice(5)
      );
    } else {
      sortedArray = [];
      console.log("Please enter correct sorting order.");
    }
  } else if (sortBy === "balance") {
    if (sortDirection === "desc") {
      sortedArray = filteredByUser.sort((c1, c2) => c2.balance - c1.balance);
    } else if (sortDirection === "asc") {
      sortedArray = filteredByUser.sort((c1, c2) => c1.balance - c2.balance);
    } else if (sortDirection) {
      console.log("Please enter correct sorting order.");
    }
  } else if (sortBy) {
    sortedArray = [];
    console.log("Please enter correct parameter for sortBy value.");
  }

  return outputAccArr(sortedArray);
}

// filtered by Bob
console.log("filtered by Bob", FilterAndSortData("Bob"));

// filtered by Charlie
console.log("filtered by Charlie", FilterAndSortData("Charlie"));

// sorted by acctNum
console.log("sorted by acctNum", FilterAndSortData(null, "acctNum"));

// filtered by Alice; sorted by balance ascending
console.log(
  "filtered by Alice; sorted by balance ascending",
  FilterAndSortData("Alice", "balance", "asc")
);
