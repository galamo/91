# Homework 25-12

1. Create the following Page Pizza Site based on bootstrap
2. You must use Bootstrap css from our examples in the repository `bootstrap.css` OR download it straight from the [source](https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css)
   and using

```JS
 href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
```

3. The page contains the following bootstrap UI component:

- Button
- Select
- Spinner
- More..

4. ![img1](./bootstrap-homework-25-12//Screen%20Shot%202022-12-26%20at%201.04.14.png)
5. ![img1](./bootstrap-homework-25-12//Screen%20Shot%202022-12-26%20at%201.04.21.png)
6. ![img1](./bootstrap-homework-25-12//Screen%20Shot%202022-12-26%20at%201.04.27.png)

# Class exercise

![img1](./pizza-blocks.png)

# Homework 28-12

1. build the following layout ( chess game )
   ![img1](./bootstrap-homework-28-12%20homework/chess.com.png)

2. Use flex/bootstrap what ever you prefer to design the page.
3. Use images instead of the chess boards and icons ( search for images in google)

# Homework 1.1

- https://app.diagrams.net/
- Watch the Online academic course in the enablee - see screenshot below
- Solve all the exercises on page 11 ( חוברת מבוא לתכנות )
- Solve exercises 1,2,3 on page 15. ( חוברת מבוא לתכנות )
- ![img1](.//Screen%20Shot%202023-01-02%20at%2013.02.06.png)

# Homework 4.1

1. Write the distance exercise in Javascript ( open new file distance.js , load the file in the HTML)
2. Page 15 All exercises ( flow charts )
3. Page 15 Write ex3 & ex4 in Javascript

# Homework 8.1

1. Page 17 - ex 3 ( in JavaScript )
2. Page 17 - ex 4 ( in JavaScript + flow chart )
3. Page 17 - ex 5 ( in JavaScript + flow chart )

# 11.1

## 1

- Write a function that print your name
- Call the Function
- See the log output

## 2

- Call the function from #1 twice

# Homework

1. Page 40 Ex1.
2. Write a function that receive 3 numbers ( from prompt function ) , the function will calculate the average of those numbers and return the average.
   in the main program print the average to the console.log
3. write a function that receive country name ( from prompt function ) and return "yes - this is my country" if the selected country is "israel" otherwise return "not my country"
4. write a function that receive salary ( from prompt function ) and return the new salary after 10% raise
5. write a function that receive order of pizza ( from prompt function ) size, toppings with comma delimiter - "," and address
   for example:

```js
var size = prompt("What size you want?");
var toppings = prompt("What toppings you want?");
var address = prompt("What is your full address?");
```

the function will return the recipet with the price

- size small - 20ILS
- size med - 40ILS
- size large - 60ILS

6. write a function that receive a value ( from prompt function ) and return the type of the value

7. write a function that receive your weekly budget ( from prompt function ) and return "Stop waste your money" in case the budget is over 1000 ILS, if its less return "Good Job - keep save your money"

# 15.1

## Ex

- Loop - while

1. input - your name ( use prompt )
2. output - print your name 10 times
3. advanced: print your name X times - according to another input ( use prompt )

### Homework Page 25 ex 5 ( with the crazy teacher )

1. add option to receive the numberOfStudents ( from prompt )
2. sum all the grades
3. print the total sum

### Homework Page 25

1. exercises 4 - 12
2. watch JS academic online

# 18.1 - Homework

1. complete ex 13 in page 25
2. watch JS academic online
3. Write a Function which recieve first name & last name and `return` the full name ( use prompt )
4. write a function that recieve number of tables & number of guests and `return` the capacity of the resturant
5. write a function that calculate cart price, the function will recieve

- number of products = X
- prompt X times Product name + Product Price
- the function will `print` the final reciept

Example:

Input:

"Please Enter the number of Products" => 3
"Please Enter the name of Product 1" => "Milk"
"Please Enter the Price of Product 1" => 10
"Please Enter the name of Product 2" => "Potato"
"Please Enter the Price of Product 2" => 5
"Please Enter the name of Product 3" => "Bread"
"Please Enter the Price of Product 3" => 8

Output:

"Number of products - 3 , total amount: 23"

- Advanced: print each product in the output with his price as well

# Quiz Subject & Material

1. DOM manipulation
2. JS Objects & arrays
3. Functions
4. Document.createElement
5. Loops ( while, for )
6. CSS
7. Transitions

# 22.1

### Arrays

1. Create a function that receive from a user his favorite movies

- first input - number of movies
- second input - movies
- at the end, print the movies

2. Page 29 ex 3
3. Page 31 ex 3

## Homework

1. page 29 ex 2
2. page 29 5 OR 6
3. Page 31-32 ex 1-13 (include)

- Read:

3. https://he.wikipedia.org/wiki/%D7%A1%D7%93%D7%A8%D7%AA_%D7%A4%D7%99%D7%91%D7%95%D7%A0%D7%90%D7%A6%27%D7%99

# 25.1

## Ex Calculate Cart

1. Calculate the Cart amount:

- input number of products ( prompt )
- input the name of the relevant product ( prompt ) - in loop

apple - 4$
orange - 3$
milk - 2$
bread - 5$
tomato - 1$
default - if the product not exist charge with 10$

finally print the Cart amount
`The Cart total price is: ${totalPrice}`

Advanced: Print the products as well!!!

## homework

1. Write a function that find the highest number in array:
   The function recieve array and return the highest number
   use the following array

```js
const numbers = [1, 2, 55, 4, 6, 7787, 3, 4, 5, 2, 33, 4];
```

The result should be 7787;

2. Write a function that recieve an array of products & product name,
   the function will return the number of times the product exist in the array

```js
const products = [
  "oranges",
  "grapefruits",
  "grapefruits",
  "mandarins",
  "bananas",
  "bananas",
];
const relevantFruit = "grapefruits";
```

The result will be 2, grapefruits exist in the array twice

3. Write a function that receive array of prices

```js
const prices = [32, 42, 22, 33, 231, 44];
const discount = 0.2;
```

The function will return new array after discount

```js
[25.6, 33.6,17.6,26.40,.....]
```

# 29.1

## Homework - MANDATORY

1. Write a function `getFavoritesMovies` that recieve from customer his favorites movies

- recieve the number of movies

```js
const numOfMovies = prompt("Please Enter Movies");
```

- reviece the movies one by one ,

```js
const movieName = prompt("Please Enter movie name");
const movieRating = prompt("Please Enter your rating");
```

- movie object will look like ( suggestion only )

```js
 {movieName:"scream", rating: 4}
```

2. continue to ex 1, write another function `getHighRatingMovies` that recieve an array (movies) and number (rating), for example:

- first param array of movies:

```js
 [{ movieName:"the saw" rating: 5 },{ movieName:"i know what you did last summer" rating: 4 }]
```

- second param rating: `4`

- the function will return all the movies ( new array ) with the `rating > 4`

result:

```js
 [{ movieName:"the saw" rating: 5 }]
```

3. Write a function that add new movie to favorites ( use push function )
4. Write a function that remove a movie from the favorites ( recieve the movie name and remove it)
5. Write a function that modify the rating ( THINK ALONE WHAT SHOULD BE GIVEN HERE)

\*\*\* Remember to write validations! 

6. ADVANCED: on movie object, create a behavior that set the rating, `setRating`

```js
{ movieName:"i still know what you did last summer", rating: 4, setRating:function(newRating){
   // validate that rating is between 1-5
   // if not => return stop the funciton and dont set the new rating
   // otherwise set the new rating to be the new rating
   // remember to use this.rating...........
} }

```




# 1.2 
### ex1
1. use the current script for `add new user`
2. when clicking on  `add new user`   add a badge element next to the name ( inside the LI)
3. <span class="badge bg-secondary">New</span>

## Homework
1. Go over the last lesson especially MoviesApp 


# 5.2 
1. use Icons https://icons.getbootstrap.com/#install