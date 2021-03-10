## Notes

_Please do not supply your name or email address in this document. We're doing our best to remain unbiased._

### Date

Wednesday March 10, 2021

### Location of deployed application

[5 Day Forecast](https://nicsalsa.github.io/5day-forecast/)

### Time spent

Roughly 6 hours

### Assumptions made

I assumed that with a weather app, it is important to see the current weather, the high and low temperature for the day as well as the ability to look ahead and see what the temperature is for the rest of the week. In order to achieve this, it was necessary to work with libraries like date-fns.org to properly format and manipulate time and dates in a browser. 

### Shortcuts/Compromises made

Typically, I would use [Emotion.sh](https://www.npmjs.com/package/@emotion/styled) and [Theme UI](https://theme-ui.com/) to organize my css and style components. In this case, and for purposes of time, I chose to globally style in the App.css file.

### Stretch goals attempted

Stretch goals attempted: 

- [x] Create a responsive version: 
The page is responsive in mobile and uses media queries for css and a custom hook, useWindowSize, to conditionally render jsx.

- [x] Add a feature to explore the weather in other cities
The user is able to enter a different city in the input as well as choose a unit of measurement to measure the temperature in either degrees celsius or fahrenheit and then the submit triggers another api fetch with the appropriate parameters. 
I could have improved on the reactivity of the component, in making it faster, however, I didn't want to sacrifice too many requests to the API, despite adding a debounce to slow the amount of times requests were made.

- [x] Deploy assignment somewhere and include the link in README 
The site is deployed on github pages: [5 Day Forecast](https://nicsalsa.github.io/5day-forecast/)


### Instructions to run assignment locally

To run 5 day forecast locally:
```
yarn install
yarn start
```

### What did you not include in your solution that you want us to know about?

Stretch goals I wanted to attempt:
- [ ] change background photo based on temperature. I have the photos selected and added to assets folder, however, I ran out of time and chose to descope this part of the plan.
- [ ] Switch view from future hourly forecast to summary of daily future forecast.
- [ ] Incorporate animations
- [ ] Style Inputs better
- [ ] Add autocomplete to city input
- [ ] More form validations: better error handling if incorrect city is inputted

### Other information about your submission that you feel it's important that we know if applicable.
This was super fun to build!