import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

const aeonLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices("What about you, Makoto-san? Do you... like it here?", [
      choice({ label: "I like it here.", points: 15 }),
      choice({ label: "Not really." }),
      choice({ label: "I don't care." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("How can we make them understand...?", [
      choice({ label: "Just try explaining." }),
      choice({ label: "I don't think we can." }),
    ]),
    choices("......", [
      choice({ label: "Maybe so." }),
      choice({ label: "That's not true.", points: 5 }),
    ]),
  ]),
  LinkLevel(0, [
    choices("A white, spotted cat... Did you see one, Makoto-san?", [
      choice({ label: "I might have...", points: 5 }),
      choice({ label: "No, I haven't." }),
    ]),
    choices("Goodness, really!? Where might this have been?", [
      choice({ label: "Near the station" }),
      choice({ label: "Near the strip mall." }),
      choice({ label: "I don't remember." }),
    ]),
    choices(
      "Being separated from a loved one can be very distressing after all...",
      [
        choice({ label: "All right.", points: 15 }),
        choice({ label: "What a pain..." }),
      ]
    ),
    choices("And I was the one who insisted we search... I'm sorry.", [
      choice({ label: "Don't let it get to you." }),
      choice({ label: "We should head back for today." }),
      choice({ label: "Let's keep looking." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("It seems that 'living' is something that can't be done alone...", [
      choice({ label: "You may be right.", points: 15 }),
      choice({ label: "That's not true." }),
      choice({ label: "I don't know." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("Did I do something wrong?", [
      choice({ label: "You didn't call him Joe." }),
      choice({ label: "No, you didn't" }),
      choice({ label: "He thought I was your boyfriend." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("Was Mii-chan-san happy?", [
      choice({ label: "I think she was happy." }),
      choice({ label: "Who knows?" }),
    ]),
    choices("Was Mii-chan-san... grateful to have been born...?", [
      choice({ label: "I'm sure she was happy." }),
      choice({ label: "I'm not sure." }),
    ]),
    choices("For what purpose... was Mii-chan-san born...?", [
      choice({ label: "No one can say." }),
      choice({ label: "I don't know." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("I was just curious.", [
      choice({ label: "Sometimes.", points: 5 }),
      choice({ label: "I'm doing it now.", points: 15 }),
      choice({ label: "No." }),
    ]),
    choices("......", [
      choice({ label: "I don't mind you being here." }),
      choice({ label: "What brought this on?" }),
    ]),
    choices("Why are you so important to me, Makoto-san?", [
      choice({ label: "It's love." }),
      choice({ label: "Because we're friends" }),
    ]),
  ]),
];

export const Aeon = {
  name: "Aeon",
  ...baseSocialLinkCalculation,
  levels: [
    ...aeonLevels,
    LinkLevel(0, [
      choices("January 31st...", [
        choice({ label: "You're right.", points: 15 }),
        choice({ label: "I hadn't noticed..." }),
      ]),
      choices(
        "I love you so much... that I feel like I'm going to break down somehow...",
        [
          choice({ label: "I love you, too.", fork: true }),
          choice({ label: "Sorry, but I can't..." }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices("There's something only I can say, because I am unable to die.", [
        choice({ label: "What is it?" }),
        choice({ label: "I don't get it." }),
      ]),
      choices("Aigis is gazing at you intently...", [
        choice({ label: "Nod silently" }),
        choice({ label: "Hold her hand gently" }),
      ]),
    ]),
    LinkLevel(30, [
      choices("", [
        choice({ label: "" }),
        choice({ label: "" }),
        choice({ label: "" }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
  levelsRomance: [
    ...aeonLevels,
    LinkLevel(0, [
      choices("January 31st...", [
        choice({ label: "You're right.", points: 15 }),
        choice({ label: "I hadn't noticed..." }),
      ]),
      choices(
        "I love you so much... that I feel like I'm going to break down somehow...",
        [
          choice({ label: "I love you, too.", fork: true }),
          choice({ label: "Sorry, but I can't..." }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices("There's something only I can say, because I am unable to die.", [
        choice({ label: "What is it?" }),
        choice({ label: "I don't get it." }),
      ]),
      choices("Aigis is gazing at you intently...", [
        choice({ label: "Nod silently" }),
        choice({ label: "Hold her hand gently" }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
