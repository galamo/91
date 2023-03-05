# JS Advanced

- Ref vs Value

1. `function addNewUser(arrayOfusers,newUser)`
2. implement the function in section 1 ( the function will push newUser:string to the array)
3. call the function with global users array `users = []` (using ref)
4. call the function again with copy of the global array ( using the copy )
5. what are the result ? how much users in arrayOfusers ?

Results:

<!-- users
(2) ['maiCohen-PC', 'Rafi-G']
userCopy
(3) ['maiCohen-PC', 'Rafi-G', 'Noy-B'] -->

- Complex objects.

1. Implement getCountryBy name Or alpha3code

# Homework

1. implements search by border, input: countryCode, output: all countries that border with the input `function getBorderByCountries(borderCountryCode)`
2. implements function that gets the currencies 
3. implement function that return all the countries according the currency sent, if the currency is used in the country return the country code / name
4. `function getCountriesByStartofWeek(sow)` - get all countries that startring the week at `sow`
5. `function getCountriesAbovethePopulation(populationNumber)`  get all the countries that has higher amount than populationNumber
