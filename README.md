# SPARKBOT
Slackbot assistant

##Description:

Helpful SparkBot is here to get you through your day! Play a game if you ware bored, decide what food to eat for lunch, or just say hello!

## Commands:

#### Hi hubot! My name is [wildcard]. I like [wildcard].
returns a greeting customized based on the name inputed and posts a fun gif based on what animal the user said they liked. There are picture responses for dogs and cats. In response to other animals, "nice to meet you" is returned.

#### @Sparkbot what should i do right now? / what should i do?
returns a randomized selection of four options:

@user Let's play a game!
@user GET BACK TO WORK!
@user Go eat something!
@user (gif of person saying i dont know)

#### @Sparkbot What game do you want to play?
suggests guess my number game (select between 1 and 10)

#### @Sparkbot Guess: [wildcard]
compares the number inputed to the number randomly selected (1 to 10). if the user is correct, the bot adds a point to the "everyone else score" and stores it. if the user is wrong, the bot adds a point to its own score and stores it.

#### @Sparkbot clear the Score
clears the stored score board for the guess what number game

#### @Sparkbot What food should i eat?
asks what kind of food you like?

#### @Sparkbot I like [wildcard] food
returns answer based on what kind of food is put in

"asian" returns @user You should eat Japanese or Thai.
"south american" returns @user You should eat Mexican or Peruvian.
"european" returns @user You should eat Italian or French.
"american" returns @user You should have a burger or a pizza.
"healthy" returns @user You should have a salad or soup.

## Approach:

For the greeting, i used the random function to be able to return different pictures to different users.

For the number guess game, the bot would return a random number between 1 and 10 and compare it to the number the user gives. To do that, i had to turn the answer into a integer using parseInt. The answer would be then run through a if else statement to make sure the variable was a number. if the variable was a number, it would be compared to the random number the bot had returned. Points would be given and stored based on who 'won' and who 'lost'

For the food selector, i used a switch statement so that the slackbot could give different responses based on what type of food was entered.

## Unsolved problems / Future directions:

While coded as separate lines to a single interaction, i was hoping to make it so the slack bot could open a response box to certain questions (like the guess what number i am thinking of game and what kind of food do you like).

I could not figure out how to integrate with other apis yet to be able to play gifs that i included in the script but would like to figure that out so the user will get back fun gifs with the slackbot greeting

I wanted the user to be able to ask the sparkbot the time or date and for it to be able to answer but could not get the proper syntax for it to work.

i also wanted for the user to be able create events in slack and invite other users to it.
