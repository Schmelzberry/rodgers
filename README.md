Describe: rodgersCount()

Test #1: "it should return a string if the user inputs a string"
Code: rodgersCount(input);
Expected Output: "input";

Test #2: "it should return a string split into an array"
Code: rodgersCount("1 2 3 4");
Expected Output: ["1", "2", "3", "4"]

Test #3 "it should return an array counting up to the user's inputted number"
Code: rodgersCount("5");
Expected Output: ["1", "2", "3", "4", "5"]

Test #4 "it should replace any number containing a 3 with the phrase "won't you be my neighbor?"
Code: rodgersCount("4");
Expected Output: ["1", "2", "won't you be my neighbor?", "4"]
