import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

const justiceLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices("Sorry to drag you along while I go shopping...", [
      choice({ label: "Don't worry about it.", points: 15 }),
      choice({ label: "I was bored anyway." }),
    ]),
    choices("...Um, do you read much, Makoto-san?", [
      choice({ label: "I read the classics.", points: 5 }),
      choice({ label: "I read manga.", points: 5 }),
      choice({ label: "I read fashion magazines." }),
      choice({ label: "I don't read books." }),
    ]),
    choices("Is it boring to hang around with, um, someone like me?", [
      choice({ label: "I'm having fun.", points: 5 }),
      choice({ label: "Yeah, it's a drag." }),
      choice({ label: "I'm indifferent." }),
    ]),
    choices("But I'm always so scared, that all I can do is nod...", [
      choice({ label: "Are you only like this with guys?" }),
      choice({ label: "Why are you so afraid?" }),
    ]),
    choices(
      "So... whenever I see a man now, all I can think of is that face...",
      [
        choice({ label: "I shouldn't have asked." }),
        choice({ label: "I'm sorry." }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices("...Do they not know where they are!?", [
      choice({ label: "They have no shame.", points: 5 }),
      choice({ label: "They're gonna...kiss?" }),
      choice({ label: "Where did they go?" }),
    ]),
    choices(
      "We should notify the student council president right away, and discuss this at our next meeting!",
      [
        choice({ label: "I agree.", points: 5 }),
        choice({ label: "That's kind of extreme...?" }),
        choice({ label: "You don't like kissing?" }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices("Makoto-san...", [
      choice({ label: "Get lost." }),
      choice({ label: "...Hey." }),
    ]),
    choices("Why am I still shaking?", [
      choice({ label: "Let's hold hands." }),
      choice({ label: "I'm here for you.", points: 15 }),
      choice({ label: "Take a deep breath." }),
    ]),
  ]),
];

export const Justice: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Justice,
  levels: [
    ...justiceLevels,
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
  levelsRomance: [
    ...justiceLevels,
    LinkLevel(22, [
      choices("So, um... there was something I needed to ask you...", [
        choice({ label: "I'm all ears.", points: 15 }),
        choice({ label: "Something on your mind?" }),
      ]),
      choices("Is she in love right now?", [
        choice({ label: "Yeah, she's in love.", fork: true }),
        choice({ label: "You're jumping to conclusions." }),
      ]),
      choices("Sorry for asking about such a weird topic.", [
        choice({ label: "Happy to help.", points: 15 }),
        choice({ label: "Don't worry about it." }),
      ]),
      choices("What should I do.", [
        choice({ label: "Hold her hand.", fork: true }),
        choice({ label: "Kiss her." }),
        choice({ label: "Talk to her softly." }),
      ]),
    ]),
    LinkLevel(22, [
      choices("Wh-What should I do…?", [
        choice({ label: "Is it good?", points: 15 }),
        choice({ label: "You're not going to buy it?" }),
      ]),
      choices("That is, until recently...", [
        choice({ label: "What do you think now?" }),
        choice({ label: "What do you mean?" }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Makoto-san…", [
        choice({ label: "Try to remember..." }),
        choice({ label: "It's gotta be a misunderstanding.", points: 5 }),
      ]),
      choices("I couldn't stand up to them… But… I… didn't take anything!", [
        choice({ label: "Don't worry." }),
        choice({ label: "We have to do something...", points: 5 }),
      ]),
    ]),
    LinkLevel(30, [
      choices(
        "See, how could it not be her!? And with such an innocent face too...",
        [
          choice({ label: "That's all a misunderstanding." }),
          choice({ label: "......" }),
        ]
      ),
      choices("I don't really have anyone else I can count on...", [
        choice({ label: "The rumors will stop soon." }),
        choice({ label: "I know you're innocent.", points: 5 }),
        choice({ label: "Be strong." }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Don't tell me she thinks I stole the money too!", [
        choice({ label: "Don't worry, she'll help us.", points: 5 }),
        choice({ label: "Mitsuru's not like that." }),
      ]),
      choices("......", [
        choice({ label: "Chihiro is innocent.", points: 5 }),
        choice({ label: "You need to tell her yourself.", points: 5 }),
      ]),
      choices("...Give me a hand, will you, Yuki?", [
        choice({ label: "Why me?" }),
        choice({ label: "Alright." }),
      ]),
      choices("Ehehehehe!", [
        choice({ label: "What's gotten into you?", points: 5 }),
        choice({ label: "So you are ARE guilty?" }),
      ]),
      choices("I love you!", [
        choice({ label: "I feel the same Chihiro.", fork: true }),
        choice({ label: "I like working with you, but..." }),
      ]),
      choices("Huh? What did you say?", [
        choice({ label: "I said I feel the same." }),
        choice({ label: "I love you." }),
      ]),
    ]),
    LinkLevel(40, [
      choices("Just promise to think of me when you read it…", [
        choice({ label: "Thank you.", points: 15 }),
        choice({ label: "I don't read shoujo manga." }),
      ]),
      choices("I-I don't have to spell it out, do I!?", [
        choice({ label: "It's getting late..." }),
        choice({ label: "Lock your doors." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
