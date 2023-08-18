Describe: count()

Test #1: "It should return a string if the user inputs a string"
Code: count(input);
Expected Output: "input";

Test #2: "It should return a string split into an array"
Code: count("1 2 3 4");
Expected Output: ["1", "2", "3", "4"]

Test #3 "It should return an array counting up to the user's inputted number"
Code: count("5");
Expected Output: ["1", "2", "3", "4", "5"]


Describe: numReplace() 

Test #1 "It should further modify the user's array from count function using for each loop"
Code: rodgersCount("4");
Expected Output: ["2", "4", "6", "8"]

Test #2 "It should replace the number 3 with "won't you be my neighbor?"
Code: count("4");
Expected Output: ["1", "2", "won't you be my neighbor?", "4"]

Test #3 "It should change any number with a 3 in it to "won't you be my neighbor?"
Code: count("14");
Expected Output: [1, 2, "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "won't you be my neighbor?", 14]

Test #4 "It should change any number with a 2 in it to "boop"
Code: count("14");
Expected Output: [1, "boop", "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "boop", "won't you be my neighbor?", 14]

Test #5 "It should change any number with a 1 in it to "beep"
Code: count("14");
Expected Output: ["beep", "boop", "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "beep", "beep", "boop", "won't you be my neighbor?", "beep"]
