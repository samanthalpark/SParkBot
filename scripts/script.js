// Description:
// Helpful SparkBot is here to get you through you day!
// Play a game if you ware bored, decide what food to eat for lunch, or just say hello!
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Author:
// Samantha Park
//

module.exports = function(robot) {
//Greeting (photo & image response): gives back random image of dog or cat depending on user input
  const helloCats = ["https://media1.tenor.com/images/d1cb9aceaae688373d08492671f13f1c/tenor.gif?itemid=5036702", "https://media1.tenor.com/images/6f1e0212b9954f9e7d2a33da72f11b37/tenor.gif?itemid=8028426", "https://media1.tenor.com/images/f098f9576b4742d4a91a6bff65914820/tenor.gif?itemid=6055542"];
  const helloDogs = ["https://media1.tenor.com/images/25337c89b595b504d7cf08ee3b2e92bb/tenor.gif?itemid=7940037", "https://media1.tenor.com/images/573e5e2de82388ece565f2e763b5dab8/tenor.gif?itemid=6821255", "https://media1.tenor.com/images/3383a0c453853dbe71ab220735d05592/tenor.gif?itemid=6249680"];

  robot.hear(/Hello Hubot! My name is (.*). I like (.*)/i, function(msg) {
    let name = msg.match[1];
    let animal = msg.match[2];

    if(animal === "cats") {
      return msg.send("Hello " + name + "!" + "\n" + msg.random(helloCats));
    }else if(animal === "dogs") {
      return msg.send("Hello " + name + "!" + "\n" + msg.random(helloCats));
    }else {
      return msg.send("Hello " + name + "!" + " Nice to meet you!");
    }
  });

//What should I do generator: "decision" machine that picks one of four activities. play a game, eat something, "get back to work", "i dont know"
  const whatToDo = ["Let's play a game!", "GET BACK TO WORK!", "Go eat something!", "https://media1.tenor.com/images/bcacdce42caf892e277f222403a85c59/tenor.gif?itemid=5265736"];

  robot.respond(/what should i do right now?|what should i do?/i, function(msg) {
    return msg.reply(msg.random(whatToDo));
  });

//Game (guess the number i am thinking of) user can guess what random number hubot has picked and keeps score
  robot.respond(/What game do you want to play?/i, function(msg) {
    return msg.reply("Guess what number I am thinking of? It's between 1 and 10.");
  });

  let sparkBotScore = 0;
  let userScore = 0;

  robot.respond(/guess:(.*)/i, function(msg){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = msg.match[1];
    guess = parseInt(guess, 10);

    if(Number.isInteger(guess)){
      if (guess === randomNumber) {
        userScore += 1;
        return msg.reply("You are right! You won!" + "\n" + "Hubot: " + sparkBotScore + " Everyone Else: " + userScore);
      } else {
        sparkBotScore += 1;
        return msg.reply("Sorry! I was thinking of another number." + "\n" + "Hubot: " + sparkBotScore + " Everyone Else: " + userScore);
      }
    } else{
      return msg.reply("That's not a number!");
    }
  });

  robot.hear(/clear the score/i, function(msg){
    sparkBotScore = 0;
    userScore = 0;
    return msg.send("Score is cleared!");
  });

//What to eat decision machine: Hubot gives you ideas of what food to eat based on what cuisine of food you like
  robot.hear(/What food should i eat?/i, function(msg) {
    return msg.send("What kind of food do you like?");
  });

  robot.respond(/I like (.*) food/i, function(msg){
    let food = msg.match[1];

    switch (food) {
      case "asian":
        return msg.reply("You should eat Japanese or Thai.");
        break;
      case "south american":
        return msg.reply("You should eat Mexican or Peruvian.");
        break;
      case "european":
        return msg.reply("You should eat Italian or French.");
        break;
      case "american":
        return msg.reply("You should have a burger or a pizza.");
        break;
      case "healthy":
        return msg.reply("You should have a salad or soup.");
        break;
    }
  });
}
