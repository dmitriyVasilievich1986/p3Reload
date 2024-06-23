import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Magician = {
  name: "Magician",
  ...baseSocialLinkCalculation,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices(
        "Can you, like, just waltz on into Takeba-san's room and stuff?",
        [
          choice({ label: "Of course." }),
          choice({ label: "No way.", ok: true }),
          choice({ label: "That's a secret.", ok: true }),
        ]
      ),
      choices("I'm more into older women. How 'bout you?", [
        choice({ label: "I'm into older women, too.", ok: true }),
        choice({ label: "I prefer girls my age." }),
        choice({ label: "I like them all.", ok: true }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Maaan... I'm so sick of this, dude.", [
        choice({ label: "What, of ramen?" }),
        choice({ label: "What, of school?" }),
        choice({ label: "What, life?", correct: true }),
      ]),
      choices(
        "Okay, that settles it. I'm gonna get myself a girlfriend! Right now!",
        [
          choice({ label: "Sounds Impossible." }),
          choice({ label: "Good luck!", ok: true }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Hey, thanks for coming, man. You mind waiting here for a sec?", [
        choice({ label: "Sure." }),
        choice({ label: "Why?" }),
      ]),
      choices("I'm gonna go ask Ms. Kanou out! Like, right now!", [
        choice({ label: "Good luck!", correct: true }),
        choice({ label: "Don't do it." }),
        choice({ label: "Whatever, man." }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "Yeah, good-looking people just flock together, y'know?. It's like a law of attraction.",
        [
          choice({ label: "...Is that so?", ok: true }),
          choice({ label: "Okay...", correct: true }),
          choice({ label: "Good-looking, huh?" }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Sorry, man. I've gotta pass this time.", [
        choice({ label: "Just like that?" }),
        choice({ label: "Why?" }),
      ]),
      choices(
        "I mean, getting into college is pretty important, don't you think? You think about the future too, right?",
        [
          choice({ label: "I've got plans already.", correct: true }),
          choice({ label: "Yeah, more than you do." }),
          choice({ label: "Not even a little." }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("I can't eat...", [
        choice({ label: "What happened.", ok: true }),
        choice({ label: "I'll eat it for you." }),
      ]),
      choices("I saw a magazine in Emiri's room. Guess what it was called.", [
        choice({ label: "In Fashion?" }),
        choice({ label: "Occult Living?" }),
        choice({ label: "Bride-To-Be?", ok: true }),
      ]),
      choices("You think that's a good plan?", [
        choice({ label: "Congrats!", ok: true }),
        choice({ label: "You're rushing things." }),
        choice({ label: "Sure, whatever." }),
      ]),
    ]),
    LinkLevel(22, [
      choices(
        "H-Hey, man. Sorry to make you come here. I, um... Ah, damn it...",
        [
          choice({ label: "Spit it out!" }),
          choice({ label: "Are you in trouble?", correct: true }),
        ]
      ),
      choices(
        "And now she's being transferred to a school in Kyushu. What do I do!?",
        [
          choice({ label: "You should go with her.", ok: true }),
          choice({ label: "You two should talk it out.", ok: true }),
          choice({ label: "Figure it out yourself." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("I was so excited about going with her that I...I...", [
        choice({ label: "Cheer up, man." }),
        choice({ label: "Let me handle this!", correct: true }),
        choice({ label: "Haha." }),
      ]),
    ]),
    LinkLevel(22, [
      choices(
        "Ms. Kanou must be in Kyushu by now. I wonder if she had her wedding already.",
        [
          choice({ label: "......", ok: true }),
          choice({ label: "Maybe she did." }),
          choice({ label: "I'm stealing your egg!" }),
        ]
      ),
      choices(
        "Man, it's always a blast hanging out with you. That said... I still want a girlfriend!",
        [
          choice({ label: "You don't know when to give up..." }),
          choice({ label: "You've got this!", ok: true }),
          choice({ label: "Want me to find you a girl?", ok: true }),
        ]
      ),
      choices("What I did figure out is... you're a true friend.", [
        choice({ label: "...Are we still talking about love?" }),
        choice({ label: "That's right! We're great friends." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
