import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

const loversLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "I think I'll go with the gerberas. What color do you think should I get?",
      [
        choice({ label: "Cute pink.", correct: true }),
        choice({ label: "Pure white." }),
        choice({ label: "Bright red." }),
        choice({ label: "What's a gerbera?" }),
      ]
    ),
    choices(
      "Oh wait, you've never seen my room, have you? Well then, why am I even asking you?",
      [
        choice({ label: "That's mean.", ok: true }),
        choice({ label: "Invite me over, then." }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices("I guess my mom's no different.", [
      choice({ label: "What makes you say that?" }),
      choice({ label: "......" }),
    ]),
  ]),
  LinkLevel(15, [
    choices("Sorry.", [
      choice({ label: "Who was that?" }),
      choice({ label: "What was that about?" }),
      choice({ label: "Are you okay?", correct: true }),
    ]),
  ]),
];

export const Lovers = {
  name: "Lovers",
  ...baseSocialLinkCalculation,
  levels: [
    ...loversLevels,
    LinkLevel(22, [
      choices("What should I do?", [
        choice({ label: "Look around" }),
        choice({ label: "Wait here" }),
      ]),
      choices("Did something happen...?", [
        choice({ label: "Go look for her" }),
        choice({ label: "Wait a bit longer" }),
      ]),
      choices("......", [
        choice({ label: "I'll take you on." }),
        choice({ label: "Her friend." }),
        choice({ label: "Just a passerby." }),
      ]),
      choices("Huh? Who the hell are you?", [
        choice({ label: "Her boyfriend.", fork: true }),
        choice({ label: "Her friend." }),
        choice({ label: "Just a passerby." }),
      ]),
      choices("I didn't need your help!", [
        choice({ label: "I'm sorry.", correct: true }),
        choice({ label: "It's okay to rely on others." }),
        choice({ label: "You're a girl, so..." }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Thanks for your help back then. I really appreciate it.", [
        choice({ label: "You're quite welcome.", ok: true }),
        choice({ label: "Anytime.", correct: true }),
        choice({ label: "Thank you, too." }),
      ]),
      choices(
        "Wouldn't that be annoying, Makoto-kun? Y'know, if people assumed we were dating...",
        [
          choice({ label: "I wouldn't mind.", ok: true }),
          choice({ label: "Yeah..." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?",
        [
          choice({ label: "Sounds good.", correct: true }),
          choice({ label: "Let's go with everyone." }),
          choice({ label: "Let's go just the two of us.", correct: true }),
          choice({ label: "No thanks." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "I know! Why don't you come help me pick something out, Makoto-kun?",
        [
          choice({ label: "Alright.", correct: true }),
          choice({ label: "Im too lazy." }),
        ]
      ),
      choices(
        "I told her we could meet up and talk about her remarriage. I'm nervous just thinking about it...",
        [
          choice({ label: "Will you let her do it?" }),
          choice({ label: "Do you want to see her?" }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("......", [
        choice({ label: "Hello?" }),
        choice({ label: "....", correct: true }),
        choice({ label: "If it's nothing, I'm leaving." }),
      ]),
      choices("What do you really think of me?", [
        choice({ label: "I love you.", fork: true }),
        choice({ label: "You're a precious friend." }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "Wait, I didn't mean it like that! Don't get the wrong idea, okay!?",
        [
          choice({ label: "Too late.", correct: true }),
          choice({ label: "I didn't hear anything.", correct: true }),
        ]
      ),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
  levelsRomance: [
    ...loversLevels,
    LinkLevel(22, [
      choices("What should I do?", [
        choice({ label: "Look around" }),
        choice({ label: "Wait here" }),
      ]),
      choices("Did something happen...?", [
        choice({ label: "Go look for her" }),
        choice({ label: "Wait a bit longer" }),
      ]),
      choices("......", [
        choice({ label: "I'll take you on." }),
        choice({ label: "Her friend." }),
        choice({ label: "Just a passerby." }),
      ]),
      choices("Huh? Who the hell are you?", [
        choice({ label: "Her boyfriend.", fork: true }),
        choice({ label: "Her friend." }),
        choice({ label: "Just a passerby." }),
      ]),
      choices("I didn't need your help!", [
        choice({ label: "I'm sorry.", correct: true }),
        choice({ label: "It's okay to rely on others." }),
        choice({ label: "You're a girl, so..." }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Thanks for your help back then. I really appreciate it.", [
        choice({ label: "You're quite welcome.", ok: true }),
        choice({ label: "Anytime.", correct: true }),
        choice({ label: "Thank you, too." }),
      ]),
      choices(
        "Wouldn't that be annoying, Makoto-kun? Y'know, if people assumed we were dating...",
        [
          choice({ label: "I wouldn't mind.", ok: true }),
          choice({ label: "Yeah..." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?",
        [
          choice({ label: "Sounds good.", correct: true }),
          choice({ label: "Let's go with everyone." }),
          choice({ label: "Let's go just the two of us.", correct: true }),
          choice({ label: "No thanks." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "I know! Why don't you come help me pick something out, Makoto-kun?",
        [
          choice({ label: "Alright.", correct: true }),
          choice({ label: "Im too lazy." }),
        ]
      ),
      choices(
        "I told her we could meet up and talk about her remarriage. I'm nervous just thinking about it...",
        [
          choice({ label: "Will you let her do it?" }),
          choice({ label: "Do you want to see her?" }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("......", [
        choice({ label: "Hello?" }),
        choice({ label: "....", correct: true }),
        choice({ label: "If it's nothing, I'm leaving." }),
      ]),
      choices("What do you really think of me?", [
        choice({ label: "I love you.", fork: true }),
        choice({ label: "You're a precious friend." }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "Wait, I didn't mean it like that! Don't get the wrong idea, okay!?",
        [
          choice({ label: "Too late.", correct: true }),
          choice({ label: "I didn't hear anything.", correct: true }),
        ]
      ),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
