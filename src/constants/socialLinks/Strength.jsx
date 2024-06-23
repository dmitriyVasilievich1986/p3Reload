import React from "react";

import {
  baseSocialLinkCalculation,
  mainCharName,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

const strengthLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "Also, I wasn't really in the mental state to do this alone today.",
      [
        choice({ label: "What happened?", correct: true }),
        choice({ label: "You did good." }),
      ]
    ),
    choices(
      "And before I knew it, I'd dozed off. I ended up handing in a blank paper.",
      [
        choice({ label: "That's bad." }),
        choice({ label: "It wasn't your fault.", ok: true }),
      ]
    ),
    choices(
      "But come on, it's way too early to worry about the future, isn't it? We're still just teenagers!",
      [
        choice({ label: "That's true.", correct: true }),
        choice({ label: "I don't think so." }),
        choice({ label: "You haven't thought about it?" }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices("Going that far would've been crossing the line.", [
      choice({ label: "Does this happen often?" }),
      choice({ label: "Do you know who did it?" }),
    ]),
    choices("Sorry you got dragged into that.", [
      choice({ label: "Friend of yours?" }),
      choice({ label: "Don't worry about it.", ok: true }),
    ]),
    choices(
      "They called you my boyfriend. That must have made you feel awkward, huh?",
      [
        choice({ label: "I'm honored.", fork: true, ok: true }),
        choice({ label: "I don't mind.", ok: true }),
        choice({ label: "It might be a problem." }),
      ]
    ),
  ]),
  LinkLevel(20, [
    choices(`${mainCharName}-kun, what do you think I should do?`, [
      choice({ label: "Why not give it a go?" }),
      choice({ label: "That's for you to decide." }),
    ]),
    choices(
      "I mean, why not, right? Please? Honestly, I don't think I can handle it on my own...",
      [
        choice({ label: "Sure thing.", ok: true }),
        choice({ label: "It's kind of a hassle." }),
      ]
    ),
  ]),
];

export const Strength = {
  name: "Strength",
  ...baseSocialLinkCalculation,
  levels: [
    ...strengthLevels,
    LinkLevel(15, [
      choices("Elementary school kids really learn fast don't you think?", [
        choice({ label: "You're right. It's impressive.", ok: true }),
        choice({ label: "That's not normal?" }),
        choice({ label: "It's because you teach so well.", correct: true }),
      ]),
      choices(
        "Should I change the training routine? Maybe they should be running more.",
        [
          choice({ label: "You shouldn't change it.", ok: true }),
          choice({ label: "Maybe you should rethink it." }),
          choice({
            label: "I trust whatever you decide Yuko.",
            ok: true,
            fork: true,
          }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("Oh Makoto-Kun, why don't you give them some advice too?", [
        choice({ label: "You guys got this!", ok: true }),
        choice({ label: "Show some guts!", ok: true }),
      ]),
      choices(
        "Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders.",
        [
          choice({ label: "It's gonna be tough." }),
          choice({ label: "As long as we believe in them.", ok: true }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("They called you my boyfriend till the very end...", [
        choice({ label: "Wanna make that true?", fork: true }),
        choice({ label: "It's embarassing." }),
        choice({ label: "They're just joking." }),
      ]),
      choices("It's like the kids have left the nest...", [
        choice({ label: "Are you sad?" }),
        choice({ label: "Are you relieved?", ok: true }),
      ]),
      choices(
        "Maybe we should have a little party… you know, to celebrate our first attempt at coaching...",
        [
          choice({ label: "Let's do it.", correct: true }),
          choice({ label: "Why?" }),
        ]
      ),
    ]),
    LinkLevel(40, [
      choices(
        "I was out buying stuff that might be useful for running practice, and I ran out of money.",
        [
          choice({ label: "It's fine." }),
          choice({ label: "This is a nice room." }),
          choice({ label: "Stuff for the kids?" }),
        ]
      ),
      choices("Hmm... Oh, do you like children?", [
        choice({ label: "I do." }),
        choice({ label: "Not really." }),
      ]),
      choices("Would you want it to be a boy or a girl?", [
        choice({ label: "A boy.", ok: true }),
        choice({ label: "A girl.", ok: true }),
        choice({ label: "I don't care." }),
      ]),
    ]),
    LinkLevel(40, [
      choices(
        "All it did was make me more confused than I originally was. Guess I'll have to go ask again tomorrow.",
        [
          choice({ label: "You're so hardworking.", ok: true }),
          choice({ label: "Why go through all that trouble?" }),
        ]
      ),
      choices("Can you guess what it is?", [
        choice({ label: "A track and field star?", ok: true }),
        choice({ label: "An instructor?", correct: true }),
        choice({ label: "A nursery teacher?", ok: true }),
        choice({ label: "No idea..." }),
      ]),
      choices("I realized that I might've been relying too much on you.", [
        choice({ label: "I don't mind." }),
        choice({ label: "You can rely on me even more." }),
      ]),
      choices(
        "Are you like this... just with me? N-No, no, th-that can't be it, huh...",
        [
          choice({ label: "It's because I love you.", fork: true }),
          choice({ label: "It's because you're a close friend." }),
        ]
      ),
      choices("What's happening...? Is this a dream?", [
        choice({ label: "I love you, Yuko." }),
        choice({ label: "It's not a dream." }),
      ]),
    ]),
    LinkLevel(40, [
      choices(
        "I could've given this to you at school, but I wanted to talk somewhere quiet.",
        [
          choice({ label: "Is it important?", ok: true }),
          choice({ label: "What is it?", ok: true }),
        ]
      ),
      choices(
        "I know they were kind of a handful, but they also have an endearing side to them, don't you think?",
        [choice({ label: "Yeah.", ok: true }), choice({ label: "Not really." })]
      ),
      choices("Because today... Well, my parents aren't home, so...", [
        choice({ label: "I see." }),
        choice({ label: "What does that mean?", ok: true }),
      ]),
    ]),
    LinkLevel(40, [
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
    ...strengthLevels,
    LinkLevel(15, [
      choices("Elementary school kids really learn fast don't you think?", [
        choice({ label: "You're right. It's impressive.", ok: true }),
        choice({ label: "That's not normal?" }),
        choice({ label: "It's because you teach so well.", correct: true }),
      ]),
      choices(
        "Should I change the training routine? Maybe they should be running more.",
        [
          choice({ label: "You shouldn't change it." }),
          choice({ label: "Maybe you should rethink it." }),
          choice({ label: "I trust whatever you decide Yuko.", fork: true }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("Oh Makoto-Kun, why don't you give them some advice too?", [
        choice({ label: "You guys got this!", ok: true }),
        choice({ label: "Show some guts!", ok: true }),
      ]),
      choices(
        "Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders.",
        [
          choice({ label: "It's gonna be tough." }),
          choice({ label: "As long as we believe in them.", ok: true }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("They called you my boyfriend till the very end...", [
        choice({ label: "Wanna make that true?", fork: true }),
        choice({ label: "It's embarassing." }),
        choice({ label: "They're just joking." }),
      ]),
      choices("It's like the kids have left the nest...", [
        choice({ label: "Are you sad?" }),
        choice({ label: "Are you relieved?", ok: true }),
      ]),
      choices(
        "Maybe we should have a little party… you know, to celebrate our first attempt at coaching...",
        [
          choice({ label: "Let's do it.", correct: true }),
          choice({ label: "Why?" }),
        ]
      ),
    ]),
    LinkLevel(40, [
      choices(
        "I was out buying stuff that might be useful for running practice, and I ran out of money.",
        [
          choice({ label: "It's fine." }),
          choice({ label: "This is a nice room." }),
          choice({ label: "Stuff for the kids?" }),
        ]
      ),
      choices("Hmm... Oh, do you like children?", [
        choice({ label: "I do." }),
        choice({ label: "Not really." }),
      ]),
      choices("Would you want it to be a boy or a girl?", [
        choice({ label: "A boy.", ok: true }),
        choice({ label: "A girl.", ok: true }),
        choice({ label: "I don't care." }),
      ]),
    ]),
    LinkLevel(40, [
      choices(
        "All it did was make me more confused than I originally was. Guess I'll have to go ask again tomorrow.",
        [
          choice({ label: "You're so hardworking.", ok: true }),
          choice({ label: "Why go through all that trouble?" }),
        ]
      ),
      choices("Can you guess what it is?", [
        choice({ label: "A track and field star?", ok: true }),
        choice({ label: "An instructor?", correct: true }),
        choice({ label: "A nursery teacher?", ok: true }),
        choice({ label: "No idea..." }),
      ]),
      choices("I realized that I might've been relying too much on you.", [
        choice({ label: "I don't mind." }),
        choice({ label: "You can rely on me even more." }),
      ]),
      choices(
        "Are you like this... just with me? N-No, no, th-that can't be it, huh...",
        [
          choice({ label: "It's because I love you.", fork: true }),
          choice({ label: "It's because you're a close friend." }),
        ]
      ),
      choices("What's happening...? Is this a dream?", [
        choice({ label: "I love you, Yuko." }),
        choice({ label: "It's not a dream." }),
      ]),
    ]),
    LinkLevel(40, [
      choices(
        "I could've given this to you at school, but I wanted to talk somewhere quiet.",
        [
          choice({ label: "Is it important?", ok: true }),
          choice({ label: "What is it?", ok: true }),
        ]
      ),
      choices(
        "I know they were kind of a handful, but they also have an endearing side to them, don't you think?",
        [choice({ label: "Yeah.", ok: true }), choice({ label: "Not really." })]
      ),
      choices("Because today... Well, my parents aren't home, so...", [
        choice({ label: "I see." }),
        choice({ label: "What does that mean?", ok: true }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
