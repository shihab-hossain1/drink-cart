//গ্রেড মেকিং
var marks = 75;

if (marks >= 80) {
  console.log("Grade: A+");
} else if (marks >= 70) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: A-");
} else if (marks >= 50) {
  console.log("Grade: B");
} else if (marks >= 40) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

//একটা Array থাকবে (১–২০ পর্যন্ত এলোমেলো নাম্বার)
var arr = [5, 12, 1, 20, 7, 3, 15, 10];

arr.sort(function(a, b) {
  return a - b;
});

console.log(arr);

//Leap Year

var year = 2024;

if (year % 4 === 0) {
  console.log("This is a Leap Year");
} else {
  console.log("This is NOT a Leap Year");
}


//যেসব সংখ্যা ৩ এবং ৫ দিয়ে বিভাজ্য
for (var i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

//Array থেকে সবচেয়ে বড় নাম বের করো

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var bigName = friends[0];

for (var i = 0; i < friends.length; i++) {
  if (friends[i].length > bigName.length) {
    bigName = friends[i];
  }
}

console.log(bigName);


//Duplicate নাম্বার বাদ দিয়ে শুধু Unique নাম্বার বের করো
var numbers = [1,2,3,3,4,4,5,6,7,8,9,10];
var unique = [];

for (var i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}

console.log(unique);


//Array থেকে সবচেয়ে বড় নাম্বার বের করো

var numbers = [10, 45, 3, 99, 23, 67];

var max = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Largest number:", max);


//problem

function monthlySavings(payments, livingCost) {
    // Input validation
    if (!Array.isArray(payments) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;

    for (let payment of payments) {
        if (typeof payment !== "number") {
            return "invalid input";
        }

        if (payment > 3000) {
            totalIncome += payment * 0.8; // 20% tax
        } else {
            totalIncome += payment;
        }
    }

    let savings = totalIncome - livingCost;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}

