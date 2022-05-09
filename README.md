# etch-a-sketch

The purpose of this project was to challenge our DOM manipulation skills. I learned how to use event listeners and handlers. As well as using Javascript to create new elements within the page.

### What I learned with this project:

- How to print an elements ID: 

`console.log(element.id);`
- How to print an elements class: 

`console.log(element.className);`

- CSS variables allowed me change a CSS variable with JS. When the user inputs a grid size, that number updates the CSS variables, in turn changing the amount of grid squares in the etch-a-sketch container. [Source - w3.org](https://www.w3.org/TR/css-variables/)
     
- Found an idea for a "flag variable". This allowed me to "flag" if a user was inputting the correct number within a given range. [Source - Stack Overflow](https://stackoverflow.com/questions/36398974/keep-prompting-the-user-a-number-until-it-falls-into-a-certain-range)
  
`let isValid = false;`

```  
if (isValid) {
    gridSize = userInput * userInput;
    let percCalc = ((1/userInput) * 100) + '%';
    root.style.setProperty("--percent", percCalc);
  } else {
    userInput = parseInt(prompt("Please try again. Enter 1 - 64"));
  }
} while (!isValid);
```

- Found how to create a random RBG code. [Source - Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
 