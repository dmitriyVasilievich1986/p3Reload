import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

const empressLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices("It's smaller than I expected.", [
      choice({ label: "Is this your first time?", ok: true }),
      choice({ label: "Do you know how to eat it?", ok: true }),
    ]),
  ]),
  LinkLevel(0, [
    choices("Sometimes my own ignorance astounds me...", [
      choice({ label: "Want me to treat you?" }),
      choice({ label: "Why not give it a try?", ok: true }),
    ]),
    choices("Maybe he's just maturing…", [
      choice({ label: "Are you sad?" }),
      choice({ label: "Are you happy?", correct: true }),
    ]),
    choices("It's the most peculiar feeling", [
      choice({ label: "Maybe you're in love.", ok: true }),
      choice({ label: "Maybe you're anxious.", ok: true }),
      choice({ label: "Maybe you're sad." }),
    ]),
    choices(
      "Sorry for subjecting you to my thoughtless ramblings… Just forget I said anything.",
      [
        choice({ label: "I'm rooting for you." }),
        choice({ label: "I heard nothing.", ok: true }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices(
      "In just a short while, we'll be looking back on these days with nostalgia.",
      [
        choice({ label: "What's next for you?" }),
        choice({ label: "Did something happen?", ok: true }),
      ]
    ),
    choices("What does marriage mean to you?", [
      choice({ label: "It's all for love", correct: true }),
      choice({ label: "It's a social agreement." }),
      choice({ label: "It's about compromise." }),
    ]),
    choices("Am I... wrong about this?", [
      choice({ label: "Do you have a boyfriend?" }),
      choice({ label: "That's a tough one." }),
    ]),
  ]),
  LinkLevel(22, [
    choices(
      "It seems a lot of thought goes into the design and construction of a movie theather.",
      [
        choice({ label: "...Said the rich girl." }),
        choice({ label: "Glad you enjoyed it.", correct: true }),
      ]
    ),
    choices(
      "She's likely more suited to riding a motorcycle than I am as well.",
      [
        choice({ label: "A motorcycle?", correct: true }),
        choice({ label: "You're not suited?" }),
      ]
    ),
    choices(
      "I don't regret it. Even now, I spend my time tuning it whenever I can.",
      [
        choice({ label: "What a high-class biker." }),
        choice({ label: "Let's go for a ride.", correct: true }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices("......", [
      choice({ label: "Looking for something specific?", ok: true }),
      choice({ label: "Need some help?", ok: true }),
      choice({ label: "Borrowing a book?" }),
    ]),
    choices("...Even if I have to make sacrifices to do it.", [
      choice({ label: "Did something happen?" }),
      choice({ label: "That doesn't sound good." }),
    ]),
    choices("This is the best solution for everyone involved...", [
      choice({ label: "Is it really?" }),
      choice({ label: "I didn't know...", ok: true }),
    ]),
    choices("So... I won't run from my fate.", [
      choice({ label: "Are you sure about this?", ok: true }),
      choice({ label: "That's admirable." }),
      choice({ label: "I'll do something about it.", correct: true }),
    ]),
  ]),
  LinkLevel(22, [
    choices("Or, is that too selfish a request?", [
      choice({ label: "I don't mind at all.", correct: true }),
      choice({ label: "Is that all you need?" }),
    ]),
  ]),
];

export const Empress = {
  name: "Empress",
  ...baseSocialLinkCalculation,
  levels: [
    ...empressLevels,
    LinkLevel(22, [
      choices("Somewhere far away, where no one knows who you are?", [
        choice({ label: "Yes." }),
        choice({ label: "No." }),
      ]),
      choices(
        "Talking to you has become something of an outlet for me. Heh, I'm sure you're sick of it by now.",
        [
          choice({ label: "Vent all you want.", ok: true }),
          choice({ label: "This isn't like you.", ok: true }),
        ]
      ),
      choices("Ah... Keep in mind, this is a what-if scenario.", [
        choice({ label: "That's up to you." }),
        choice({ label: "It's not meant to be.", fork: true }),
      ]),
      choices("How dare you say that!?", [
        choice({ label: "Calm down, Mitsuru" }),
        choice({ label: "Don't insult her father!", correct: true }),
      ]),
      choices("Please excuse me.", [
        choice({ label: "Don't give in.", correct: true }),
        choice({ label: "You're sure about this?", ok: true }),
      ]),
    ]),
    LinkLevel(22, [
      choices("I am so sorry about what happened last time.", [
        choice({ label: "What happened?" }),
        choice({ label: "Don't worry about it." }),
        choice({ label: "It made me happy.", correct: true }),
      ]),
      choices(
        "I just didn't think I'd end up shouting them in public like that.",
        [
          choice({ label: "Talk about bold." }),
          choice({ label: "Your feelings?" }),
        ]
      ),
      choices("...I feel like I'm going to die of embarassment.", [
        choice({ label: "I love you too.", correct: true }),
        choice({ label: "I'm sorry but..." }),
      ]),
      choices(
        "I've been thinking about this for a while now, but the way you address me...",
        [choice({ label: "Mitsuru?" }), choice({ label: "What about it?" })]
      ),
    ]),
    LinkLevel(22, [
      choices(
        "The battery and tire pressue look good... And I've already changed the oil, so that's fine.",
        [
          choice({ label: "Impressive." }),
          choice({ label: "Looks like fun.", ok: true }),
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
    ...empressLevels,
    LinkLevel(22, [
      choices("Somewhere far away, where no one knows who you are?", [
        choice({ label: "Yes." }),
        choice({ label: "No." }),
      ]),
      choices(
        "Talking to you has become something of an outlet for me. Heh, I'm sure you're sick of it by now.",
        [
          choice({ label: "Vent all you want.", ok: true }),
          choice({ label: "This isn't like you.", ok: true }),
        ]
      ),
      choices("Ah... Keep in mind, this is a what-if scenario.", [
        choice({ label: "That's up to you." }),
        choice({ label: "It's not meant to be.", fork: true }),
      ]),
      choices("How dare you say that!?", [
        choice({ label: "Calm down, Mitsuru" }),
        choice({ label: "Don't insult her father!", correct: true }),
      ]),
      choices("Please excuse me.", [
        choice({ label: "Don't give in.", correct: true }),
        choice({ label: "You're sure about this?", ok: true }),
      ]),
    ]),
    LinkLevel(22, [
      choices("I am so sorry about what happened last time.", [
        choice({ label: "What happened?" }),
        choice({ label: "Don't worry about it." }),
        choice({ label: "It made me happy.", correct: true }),
      ]),
      choices(
        "I just didn't think I'd end up shouting them in public like that.",
        [
          choice({ label: "Talk about bold." }),
          choice({ label: "Your feelings?" }),
        ]
      ),
      choices("...I feel like I'm going to die of embarassment.", [
        choice({ label: "I love you too.", correct: true }),
        choice({ label: "I'm sorry but..." }),
      ]),
      choices(
        "I've been thinking about this for a while now, but the way you address me...",
        [choice({ label: "Mitsuru?" }), choice({ label: "What about it?" })]
      ),
    ]),
    LinkLevel(22, [
      choices(
        "The battery and tire pressue look good... And I've already changed the oil, so that's fine.",
        [
          choice({ label: "Impressive." }),
          choice({ label: "Looks like fun.", ok: true }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("I'll be looking forward to it.", [
        choice({ label: "I'll give it a try.", correct: true }),
        choice({ label: "I'm fine with the back.", ok: true }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
