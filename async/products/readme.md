# Products Pagination

- https://dummyjson.com/products?limit=<PARAM>&skip=<PARAM>

# Homework

1. Implement skip + limit with 2 DDL
2. Implement skip + limit with Buttons prev&next

skip = 10  
limit = 10

changed > skip = 15 current state>limit = 10
changed > limit = 5 current state>skip = 15  
changed > skip = 0 current state>limit 5

3. understand POST.reqeust.js

# Ex Post request

- Url https://reqbin.com/echo/post/json
- UI

1. Car LP
2. Car Type
3. Car Color
4. Car price

- send a new car to the following API: https://reqbin.com/echo/post/json

1. Create Form - `Create new car`
2. Clicking the button - `create new car` will send a POST request with the relevant payload
3. Print a message on success or failure
