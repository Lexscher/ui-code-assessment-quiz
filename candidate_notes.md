# Notes

Hey,

I'm using this to help you get a better understanding of my thought process
Also, I may leave extra notes and commented out code than I normally would to
help you get a better understanding of my thought process

## plan

Components I think I'll need:

```md
App - welcome the user
 |
 |- Quiz - handles logic for a quiz
     |
     |- Question - handles logic for single question
     |     |- Form 
     |     
     |- Results - shows results and sends user back to a new/refreshed quiz
```

# Button

It looks like all of the main components need a button to toggle state.
Also if I create an alright button then I can simplify the form.

## Form

I don't think I need an entire form for this...
I do, however, need a form input to handle the user's input.
Then we can reuse that button to handle the user's input.

```md
Form -> FormInput
adding Button
```
