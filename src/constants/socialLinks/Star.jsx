import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Star = {
  name: "Star",
  ...baseSocialLinkCalculation,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices(
        "That's why I have to make it big-it's for everyone who's been helping me.",
        [
          choice({ label: "I'm kinda jealous." }),
          choice({ label: "Sounds like a lot of pressure.", ok: true }),
        ]
      ),
      choices("By the way, who would you say is your biggest rival?", [
        choice({ label: "You." }),
        choice({ label: "Myself.", correct: true }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Maybe I should get some for them too?", [
        choice({ label: "For your teammates?", ok: true }),
        choice({ label: "Who's 'them'?", ok: true }),
      ]),
      choices(
        "Our apartment's pretty small, though, so we're packed like sardines.",
        [
          choice({ label: "Sounds like fun.", ok: true }),
          choice({ label: "That sounds rough.", ok: true }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("...All right, just one more!", [
        choice({ label: "What are you doing?", ok: true }),
        choice({ label: "Enjoy your food.", ok: true }),
      ]),
      choices(
        "Know what that means? If I do well enough, I might score a scholarship.",
        [
          choice({ label: "That would be amazing!", ok: true }),
          choice({ label: "What's the big deal?" }),
        ]
      ),
      choices("And maybe... this'll make my mom's life a little easier.", [
        choice({ label: "Hard to say." }),
        choice({ label: "Yeah, I bet it would.", ok: true }),
      ]),
    ]),
    LinkLevel(20, [
      choices("huff huff Sorry I kept you waiting...", [
        choice({ label: "You're late." }),
        choice({ label: "Are you okay?", ok: true }),
      ]),
      choices("I used to come here a lot with my teammates, but...", [
        choice({ label: "But what?" }),
        choice({ label: "I'll come back here with you.", ok: true }),
      ]),
    ]),
    LinkLevel(20, [
      choices("Let's see.", [
        choice({ label: "I'll look around for him." }),
        choice({ label: "I'll wait a bit longer." }),
      ]),
      choices("Hmm...", [
        choice({ label: "Guess I'll kill some time." }),
        choice({ label: "Guess I'll keep waiting." }),
      ]),
      choices("Well...", [
        choice({ label: "I'll wait just a bit longer." }),
        choice({ label: "I'm just gonna go home." }),
      ]),
      choices("Sorry, but I don't think I can make it today.", [
        choice({ label: "Well, what happened?" }),
        choice({ label: "Don't worry, it's okay.", correct: true }),
      ]),
    ]),
    LinkLevel(20, [
      choices("Thanks for coming all the way here for this.", [
        choice({ label: "What did you want?" }),
        choice({ label: "It's no problem at all.", ok: true }),
      ]),
      choices("There's still so much I have to do.", [
        choice({ label: "Sounds pretty rough.", ok: true }),
        choice({ label: "Stop whining and do it? ", ok: true }),
      ]),
      choices("Why'd you have to die, Dad!?", [
        choice({ label: "This isn't your fault.", ok: true }),
        choice({ label: "Do something about it!" }),
      ]),
      choices("Is this... really how it ends for me?", [
        choice({ label: "You should just accept it." }),
        choice({ label: "Don't give up yet.", correct: true }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Hmmm...", [
        choice({ label: "Do it!", correct: true }),
        choice({ label: "I could spot you some cash." }),
      ]),
      choices(
        "In the end, maybe it was my fault the team couldn't work together.",
        [
          choice({ label: "It sure was.", correct: true }),
          choice({ label: "Don't sweat it.", correct: true }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices("So uh, the big meet for that scholarship was yesterday.", [
        choice({ label: "Did you win?", ok: true }),
        choice({ label: "Did you lose?" }),
      ]),
      choices("I got first place, of course!", [
        choice({ label: "Wor, really?" }),
        choice({ label: "Congrats, man!", ok: true }),
      ]),
      choices("Kinda makes me feel empty inside.", [
        choice({ label: "What will you do now?", ok: true }),
        choice({ label: "Will you quit running?", ok: true }),
      ]),
      choices("Go ahead and order extra noodles. It's on me.", [
        choice({ label: "Thanks!", ok: true }),
        choice({ label: "Don't put yourself out!" }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Glad we could meet up one more time before I take off.", [
        choice({ label: "Take off?" }),
        choice({ label: "You're leaving today?", correct: true }),
      ]),
      choices("Well then, I better get going...", [
        choice({ label: "I'll see you off." }),
        choice({ label: "Let's chat a bit more." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
