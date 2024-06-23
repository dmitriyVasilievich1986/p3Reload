import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const HangedMan = {
  name: "HangedMan",
  ...baseSocialLinkCalculation,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("My tummy's grumbling! Can we go to Wilduck?", [
        choice({ label: "Sure, let's go.", correct: true }),
        choice({ label: "Let's keep playing." }),
      ]),
      choices("Why would they get a divorce?", [
        choice({ label: "They fell out of love." }),
        choice({ label: "It's probably your fault." }),
        choice({ label: "I don't know." }),
      ]),
      choices("...She's sobbing loudly. What should I do?", [
        choice({ label: "Calm her down" }),
        choice({ label: "Wait for her to finish." }),
      ]),
    ]),
    LinkLevel(0, [
      choices("...And who are you?", [
        choice({ label: "I'm Maiko's friend." }),
        choice({ label: "Just a random passerby." }),
      ]),
      choices("Do you think he'll come home and see me?", [
        choice({ label: "He'll probably forget." }),
        choice({ label: "I really can't say." }),
        choice({ label: "Don't worry, he'll be there.", correct: true }),
      ]),
    ]),
    LinkLevel(20, [
      choices("They really do care about me!", [
        choice({ label: "That's great news!", correct: true }),
        choice({ label: "Of course they care.", correct: true }),
        choice({ label: "Nah, they don't care." }),
      ]),
    ]),
    LinkLevel(20, [
      choices("He's so mean. It's not fair!", [
        choice({ label: "That's awful.", correct: true }),
        choice({ label: "Why would he do that?" }),
      ]),
      choices("Do they just wish I would disappear?", [
        choice({ label: "It's possible." }),
        choice({ label: "They would never?", ok: true }),
      ]),
    ]),
    LinkLevel(20, [
      choices("I made up my mind! I have to run away from home!", [
        choice({ label: "Don't do it." }),
        choice({ label: "Calm down.", ok: true }),
        choice({ label: "It's up to you." }),
      ]),
      choices("I'll need lots of snacks, right? And my...insurance card?", [
        choice({ label: "That should be enough.", correct: true }),
        choice({ label: "It'll take more than that." }),
      ]),
    ]),
    LinkLevel(30, [
      choices("She's never done anything like this before!", [
        choice({ label: "We should look for her." }),
        choice({ label: "It's probably your fault." }),
        choice({ label: "Just leave her alone." }),
      ]),
      choices(
        "If you have any idea where she is, I'm begging you to tell us.",
        [
          choice({ label: "Maybe the music store." }),
          choice({ label: "Maybe the takoyaki stand." }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("What do you wanna get?", [
        choice({ label: "Hamburgers.", ok: true }),
        choice({ label: "Japanese food." }),
      ]),
      choices("It was sad, but I listened to the whole thing. Did I do good?", [
        choice({ label: "You're a good girl.", correct: true }),
        choice({ label: "Not really." }),
      ]),
      choices("Who do you think I should pick?", [
        choice({ label: "Your dad.", correct: true }),
        choice({ label: "Your mom." }),
        choice({ label: "You decide." }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Even if I'm gone... we'll still be friends right?", [
        choice({ label: "Friends forever.", correct: true }),
        choice({ label: "I might forget about you." }),
      ]),
    ]),
    LinkLevel(15, [
      choices("Do you think I'll have a family of my own one day?", [
        choice({ label: "I'm sure you will.", correct: true }),
        choice({ label: "No idea." }),
      ]),
      choices("Can we get married?", [
        choice({ label: "Sure.", correct: true }),
        choice({ label: "I'll think about it." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
