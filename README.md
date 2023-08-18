Describe: count()

Test #1: "It should return a string if the user inputs a string"
Code: rodgersCount(input);
Expected Output: "input";

Test #2: "It should return a string split into an array"
Code: rodgersCount("1 2 3 4");
Expected Output: ["1", "2", "3", "4"]

Test #3 "It should return an array counting up to the user's inputted number"
Code: rodgersCount("5");
Expected Output: ["1", "2", "3", "4", "5"]


Describe: numReplace() 

Test #1 "It should further modify the user's array from count function using for each loop"
Code: rodgersCount("4");
Expected Output: ["2", "4", "6", "8"]
