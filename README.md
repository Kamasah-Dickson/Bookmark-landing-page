# Bookmark-landing-page
# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![Mobile Design](./Screenshots/Mobile%20screenshot.png)
![Desktop Design](./Screenshots/Desktop%20screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Kamasah-Dickson/Bookmark-landing-page)
- Live Site URL: [Add live site URL here](https://kamasah-dickson.github.io/Bookmark-landing-page/)

## My process

1. I divided the project into sections by the use of sass partials. Which made this project more organized;
2. used the sass functions to convert pixel values to rem.sass functions make things way easier;
3. created mixins to handle the various buttons on the page which keeps repeating itself at different sections. In this way i do not have to worry about creating a new button each and every time. I just need to import just one mixin.
4. I created this responsive project on mobile first. in this way things get way more easier as I scale/develop the project for desktop;
5. I used js regular expressions to validate the email;
6. I used flexbox and grid system design to create this project;
7. used only one JavaScript file for this project;

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this project I learnt how to use the css min() and the clamp() functions to archieve greater responsiveness.

<!-- css and js syntax that i am glad I know. -->

```css
.proud-of-this-css {
  font-size: clamp(14px, 17px + 2vw, )

}

```

```js
forEach((item)) = () => {
  item.addEventListener('click',()=> {
    console.log('🎉')
  })
}
```

### Continued development

1. Avoiding the use of muliple media query breakpoints
2. Accessibility[the use of ARIA attributes]

## Author

- Frontend Mentor - [@Kamasah Dickson](https://www.frontendmentor.io/profile/Kamasah-Dickson)
- Twitter - [@Kamasah Dickson](https://twitter.com/Kamas_DEV)
