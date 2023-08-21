# Mr Rodgers' Bot Word Replace

#### By Jake Elsberry

#### A simple robot who will count for you and apply their own take on what certain numbers represent.

## Technologies Used
HTML
CSS
Javascript
Bootstrap

## Description

This application takes a user's inputted number and counts to it. Some numbers are modified with messages instead of their original values. 

* For numbers that contain a 1, all digits are replaced with "Beep!"
For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"
## Setup/Installation Requirements
Have a machine that can open language-select/index.html in a web browser.
Open repository: (https://github.com/Schmelzberry/rodgers.git) in your browser.

## Known Bugs
No known issues

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 8/11/2023 Jake Elsberry - all rights reserved

## Tests for Business Logic

### Describe: count()

Test #1: "It should return a string if the user inputs a string"
Code: count(input);
Expected Output: "input";

Test #2: "It should return a string split into an array"
Code: count("1 2 3 4");
Expected Output: ["1", "2", "3", "4"]

Test #3 "It should return an array counting up to the user's inputted number"
Code: count("5");
Expected Output: ["1", "2", "3", "4", "5"]


### Describe: numReplace() 

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
