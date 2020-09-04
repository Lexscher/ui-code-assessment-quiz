# Notes

Hey,

I'm using this to help you get a better understanding of my thought process
Also, I may leave extra notes and commented out code than I normally would to
help you get a better understanding of my thought process

## plan

Components I think I'll need:

```md
App - welcome the user
 |- Button - takes user to quiz page
 |
 |- Quiz - handles logic for a quiz
     |
     |- Question - handles logic for single question
     |     |- FormInput - handles user input
     |     |- Button - handles next/submit
     |
     |- Results - shows results and sends user back to a new/refreshed quiz
     |-Button - handles quiz reset

```

## Button

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

## Quiz and Random Three

To randomly select 3 questions, I was thinking of two approaches:

- A) using the a method to preselect three random questions, and then move through those as the user answers questions.

or

- B) just having a method spit out one random number, and picking the
corresponding question from the entire questions array passed into this as a
prop.

> But I'd still neeed a map to hold the index of the questions that have been answered. That way we can avoid having any repeat questions.

UPDATE:
I ended up going with approach A, using a method, randomThree to pick the questions when the user begins the quiz

UPDATE:
While building the randomThree utility, I realized that we might want to change the amount of questions a user can select from, so I updated it to be more versatile.

## Side Notes

### Utilities

I was making a lot of helpers and I thought I should store them somewhere else.

### messing up types

I don't have that much experience with Typescript, but I do have lots of experience with Java 8. When I first made functions in ts/tsx files, I thought that we were suppose to say what datatype the function returns -- not that the function is of type `Function`. Just wanted to clarify because I made quite a few mistakes there in the beginning haha! My apologies
