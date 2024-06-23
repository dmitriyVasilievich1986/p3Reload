import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Temperance = {
  name: "Temperance",
  ...baseSocialLinkCalculation,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices(
        "It will be my first time going, Will you maybe, how do you say, show me the ropes?",
        [
          choice({ label: "Sure, let's go.", ok: true }),
          choice({ label: "You like sweets?" }),
          choice({ label: "There's nothing to show.", correct: true }),
        ]
      ),
      choices("I love the culture of Nihon! Japan sugoi-amazing!", [
        choice({ label: "I totally agree.", correct: true }),
        choice({ label: "What about your country?" }),
        choice({ label: "It's not that great.	" }),
      ]),
    ]),
    LinkLevel(0, [
      choices(
        "You have gotten much better at this, Makoto-dono! Subarashii-wonderful!",
        [
          choice({ label: "I can do better." }),
          choice({ label: "Thanks.", ok: true }),
        ]
      ),
      choices("I would like to make something Japanese, but what?", [
        choice({ label: "What do you like?" }),
        choice({ label: "Why not western clothes?" }),
        choice({ label: "How about a kimono?", correct: true }),
      ]),
    ]),
    LinkLevel(15, [
      choices("......", [
        choice({ label: "How come you're not working?" }),
        choice({ label: "Should we stop for today?" }),
        choice({ label: "Are you alright?", correct: true }),
      ]),
      choices("She was taken by the angels!", [
        choice({ label: "What happened?" }),
        choice({ label: "Calm down." }),
        choice({ label: "That's terrible..." }),
      ]),
    ]),
    LinkLevel(15, [
      choices("", [
        choice({ label: "Sure.", ok: true }),
        choice({ label: "Why?" }),
      ]),
      choices("", [
        choice({ label: "You have to accept it." }),
        choice({ label: "Just stay in Japan!", ok: true }),
      ]),
    ]),
    LinkLevel(15, [
      choices("I have barely sewn anything at all.", [
        choice({ label: "What's wrong?" }),
        choice({ label: "Why not take a break?", ok: true }),
      ]),
      choices("Will you go to Azuki Arai with moi?", [
        choice({ label: "Let's do it.", ok: true }),
        choice({ label: "Just one minute." }),
      ]),
      choices("I want to stay here in Japan even if I have to eat dirt!", [
        choice({ label: "I have your back!", correct: true }),
        choice({ label: "What will you do?" }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "I will show him a kimono! When he sees it, he will understand the beauty of Nihon!",
        [
          choice({ label: "Will that be enough?" }),
          choice({ label: "That's a great idea.", correct: true }),
        ]
      ),
    ]),
    LinkLevel(10, [
      choices(
        "When my uncle sees this, I know he'll agree with me about how great Nihon is!",
        [
          choice({ label: "When will it be done?" }),
          choice({ label: "He'll definitely agree!", correct: true }),
          choice({ label: "Less talk, more work." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices(
        "And thanks to all your help, the kimono is almost finished! I feel so blessed.",
        [
          choice({ label: "Congrats!", ok: true }),
          choice({ label: "Aren't you homesick?", correct: true }),
          choice({ label: "Don't forget, you owe me." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("At last, it is fini!", [
        choice({ label: "How does it look?", correct: true }),
        choice({ label: "Great Work!", correct: true }),
      ]),
      choices("They are the times I spend with you, my tomodachi.", [
        choice({ label: "I'll be waiting for you.", correct: true }),
        choice({ label: "Good luck out there.", correct: true }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
