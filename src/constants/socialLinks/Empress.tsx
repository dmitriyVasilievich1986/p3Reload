import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

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
      choice({ label: "Is this your first time?", points: 5 }),
      choice({ label: "Do you know how to eat it?", points: 5 }),
    ]),
  ]),
  LinkLevel(0, [
    choices("Sometimes my own ignorance astounds me...", [
      choice({ label: "Want me to treat you?" }),
      choice({ label: "Why not give it a try?", points: 5 }),
    ]),
    choices("Maybe he's just maturing…", [
      choice({ label: "Are you sad?" }),
      choice({ label: "Are you happy?", points: 15 }),
    ]),
    choices("It's the most peculiar feeling", [
      choice({ label: "Maybe you're in love.", points: 5 }),
      choice({ label: "Maybe you're anxious.", points: 5 }),
      choice({ label: "Maybe you're sad." }),
    ]),
    choices(
      "Sorry for subjecting you to my thoughtless ramblings… Just forget I said anything.",
      [
        choice({ label: "I'm rooting for you." }),
        choice({ label: "I heard nothing.", points: 5 }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices(
      "In just a short while, we'll be looking back on these days with nostalgia.",
      [
        choice({ label: "What's next for you?" }),
        choice({ label: "Did something happen?", points: 5 }),
      ]
    ),
    choices("What does marriage mean to you?", [
      choice({ label: "It's all for love", points: 15 }),
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
        choice({ label: "Glad you enjoyed it.", points: 15 }),
      ]
    ),
    choices(
      "She's likely more suited to riding a motorcycle than I am as well.",
      [
        choice({ label: "A motorcycle?", points: 15 }),
        choice({ label: "You're not suited?" }),
      ]
    ),
    choices(
      "I don't regret it. Even now, I spend my time tuning it whenever I can.",
      [
        choice({ label: "What a high-class biker." }),
        choice({ label: "Let's go for a ride.", points: 15 }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices("......", [
      choice({ label: "Looking for something specific?", points: 5 }),
      choice({ label: "Need some help?", points: 5 }),
      choice({ label: "Borrowing a book?" }),
    ]),
    choices("...Even if I have to make sacrifices to do it.", [
      choice({ label: "Did something happen?" }),
      choice({ label: "That doesn't sound good." }),
    ]),
    choices("This is the best solution for everyone involved...", [
      choice({ label: "Is it really?" }),
      choice({ label: "I didn't know...", points: 5 }),
    ]),
    choices("So... I won't run from my fate.", [
      choice({ label: "Are you sure about this?", points: 5 }),
      choice({ label: "That's admirable." }),
      choice({ label: "I'll do something about it.", points: 15 }),
    ]),
  ]),
  LinkLevel(22, [
    choices("Or, is that too selfish a request?", [
      choice({ label: "I don't mind at all.", points: 15 }),
      choice({ label: "Is that all you need?" }),
    ]),
  ]),
];

export const Empress: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Empress,
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
          choice({ label: "Vent all you want.", points: 5 }),
          choice({ label: "This isn't like you.", points: 5 }),
        ]
      ),
      choices("Ah... Keep in mind, this is a what-if scenario.", [
        choice({ label: "That's up to you." }),
        choice({ label: "It's not meant to be.", fork: true }),
      ]),
      choices("How dare you say that!?", [
        choice({ label: "Calm down, Mitsuru" }),
        choice({ label: "Don't insult her father!", points: 15 }),
      ]),
      choices("Please excuse me.", [
        choice({ label: "Don't give in.", points: 15 }),
        choice({ label: "You're sure about this?", points: 5 }),
      ]),
    ]),
    LinkLevel(22, [
      choices("I am so sorry about what happened last time.", [
        choice({ label: "What happened?" }),
        choice({ label: "Don't worry about it." }),
        choice({ label: "It made me happy.", points: 15 }),
      ]),
      choices(
        "I just didn't think I'd end up shouting them in public like that.",
        [
          choice({ label: "Talk about bold." }),
          choice({ label: "Your feelings?" }),
        ]
      ),
      choices("...I feel like I'm going to die of embarassment.", [
        choice({ label: "I love you too.", points: 15 }),
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
          choice({ label: "Looks like fun.", points: 5 }),
        ]
      ),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
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
          choice({ label: "Vent all you want.", points: 5 }),
          choice({ label: "This isn't like you.", points: 5 }),
        ]
      ),
      choices("Ah... Keep in mind, this is a what-if scenario.", [
        choice({ label: "That's up to you." }),
        choice({ label: "It's not meant to be.", fork: true }),
      ]),
      choices("How dare you say that!?", [
        choice({ label: "Calm down, Mitsuru" }),
        choice({ label: "Don't insult her father!", points: 15 }),
      ]),
      choices("Please excuse me.", [
        choice({ label: "Don't give in.", points: 15 }),
        choice({ label: "You're sure about this?", points: 5 }),
      ]),
    ]),
    LinkLevel(22, [
      choices("I am so sorry about what happened last time.", [
        choice({ label: "What happened?" }),
        choice({ label: "Don't worry about it." }),
        choice({ label: "It made me happy.", points: 15 }),
      ]),
      choices(
        "I just didn't think I'd end up shouting them in public like that.",
        [
          choice({ label: "Talk about bold." }),
          choice({ label: "Your feelings?" }),
        ]
      ),
      choices("...I feel like I'm going to die of embarassment.", [
        choice({ label: "I love you too.", points: 15 }),
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
          choice({ label: "Looks like fun.", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("I'll be looking forward to it.", [
        choice({ label: "I'll give it a try.", points: 15 }),
        choice({ label: "I'm fine with the back.", points: 5 }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
