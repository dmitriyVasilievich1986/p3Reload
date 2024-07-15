import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  mainCharName,
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
    choices(`...Um, do you read much, ${mainCharName}-san?`, [
      choice({ label: "I read the classics.", points: 5 }),
      choice({ label: "I read manga.", points: 5 }),
      choice({ label: "I read fashion magazines." }),
      choice({ label: "I don't read books." }),
    ]),
    choices(
      "Is it boring for you to hang around with, um... someone like me?",
      [
        choice({ label: "I'm having fun.", points: 5 }),
        choice({ label: "Yeah, it's a drag." }),
        choice({ label: "I'm indifferent." }),
      ]
    ),
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
        choice({ label: "That's kind of extreme..." }),
        choice({ label: "You don't like kissing?" }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices(`${mainCharName}-san!`, [
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
    LinkLevel(22, [
      choices("So, um... there was something I needed to ask you...", [
        choice({ label: "I'm all ears.", points: 10 }),
        choice({ label: "Something on your mind?" }),
      ]),
      choices("Is she in love right now!?", [
        choice({ label: "Yeah, she's in love." }),
        choice({
          label: "You're jumping to conclusions.",
          fork: true,
          points: 5,
        }),
      ]),
      choices("Sorry for asking you about such a weird topic.", [
        choice({ label: "Happy to help.", points: 10 }),
        choice({ label: "Don't worry about it." }),
      ]),
    ]),
    LinkLevel(22, [
      choices("Wh-What should I do...?", [
        choice({ label: "Is it good?", points: 15 }),
        choice({ label: "You're not buying it?" }),
      ]),
      choices("That is, until recently...", [
        choice({ label: "What do you think now?" }),
        choice({ label: "What do you mean?", points: 5 }),
      ]),
    ]),
    LinkLevel(40, [
      choices(`${mainCharName}-san...`, [
        choice({ label: "Try to remember." }),
        choice({ label: "It's gotta be a misunderstanding.", points: 5 }),
      ]),
      choices(
        "I-I couldn't stand up to them, but I... I didn't take anything!",
        [
          choice({ label: "Don't worry." }),
          choice({ label: "We have to do something...", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices(
        "See, how could it not be her!? And with such an innocent face, too...",
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
      choices("D-Don't tell me she thinks I stole the money too!", [
        choice({ label: "Don't worry, she'll help us.", points: 5 }),
        choice({ label: "Mitsuru's not like that." }),
      ]),
      choices("......", [
        choice({ label: "Chihiro is innocent.", points: 5 }),
        choice({ label: "You need to tell her yourself.", points: 5 }),
      ]),
      choices(`Give me a hand, will you, ${mainCharName}?`, [
        choice({ label: "Why me?" }),
        choice({ label: "All right." }),
      ]),
      choices("And I stood up to Mr. Takenozuka... An actual adult man!", [
        choice({ label: "I saw the whole thing.", points: 5 }),
        choice({ label: "What're you talking about?" }),
      ]),
    ]),
    LinkLevel(40, [
      choices("I wonder if this is going to be enough flyers...", [
        choice({ label: "Looks tough." }),
        choice({ label: "Where you forced into this?" }),
      ]),
      choices(
        "Oh, but, um... I'd appreciate it if you could still help me every now and then, just like today.",
        [
          choice({ label: "You can do it.", points: 10 }),
          choice({ label: "I believe in you, Chihiro.", points: 10 }),
        ]
      ),
      choices("Could I asd that you be the first of those many readers?", [
        choice({ label: "Thanks." }),
        choice({ label: "I'll take it" }),
      ]),
      choices("I'll handle the rest by myself.", [
        choice({ label: "I can tag along." }),
        choice({ label: "Are you sure?" }),
      ]),
    ]),
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
        choice({ label: "I'm all ears.", points: 10 }),
        choice({ label: "Something on your mind?" }),
      ]),
      choices("Is she in love right now!?", [
        choice({ label: "Yeah, she's in love.", fork: true, points: 15 }),
        choice({ label: "You're jumping to conclusions." }),
      ]),
      choices("Sorry for asking you about such a weird topic.", [
        choice({ label: "Happy to help.", points: 10 }),
        choice({ label: "Don't worry about it." }),
      ]),
      choices("What should i do...?", [
        choice({ label: "Hold her hand", points: 15 }),
        choice({ label: "Kiss her" }),
        choice({ label: "Speak to her softly" }),
      ]),
    ]),
    LinkLevel(22, [
      choices("Wh-What should I do...?", [
        choice({ label: "Is it good?", points: 15 }),
        choice({ label: "You're not buying it?" }),
      ]),
      choices("That is, until recently...", [
        choice({ label: "What do you think now?" }),
        choice({ label: "What do you mean?", points: 5 }),
      ]),
    ]),
    LinkLevel(40, [
      choices(`${mainCharName}-san...`, [
        choice({ label: "Try to remember." }),
        choice({ label: "It's gotta be a misunderstanding.", points: 5 }),
      ]),
      choices(
        "I-I couldn't stand up to them, but I... I didn't take anything!",
        [
          choice({ label: "Don't worry." }),
          choice({ label: "We have to do something...", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices(
        "See, how could it not be her!? And with such an innocent face, too...",
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
      choices("D-Don't tell me she thinks I stole the money too!", [
        choice({ label: "Don't worry, she'll help us.", points: 5 }),
        choice({ label: "Mitsuru's not like that." }),
      ]),
      choices("......", [
        choice({ label: "Chihiro is innocent.", points: 5 }),
        choice({ label: "You need to tell her yourself.", points: 5 }),
      ]),
      choices(`Give me a hand, will you, ${mainCharName}?`, [
        choice({ label: "Why me?" }),
        choice({ label: "All right." }),
      ]),
      choices("Ehehehehe!", [
        choice({ label: "What's gotten into you?", points: 5 }),
        choice({ label: "So you ARE guilty." }),
      ]),
      choices("I love you!", [
        choice({ label: "I feel the same, Chihiro.", fork: true }),
        choice({ label: "I like working with you, but..." }),
      ]),
      choices("Huh? What did you say...?", [
        choice({ label: "I said I feel the same." }),
        choice({ label: "I love you" }),
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
  invitations: {
    2: {
      [Routes.Platonic]: (
        <Question label={`I kept thinking, "What if he doesn't show up?"`}>
          <Answer label="Try not to worry so much." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="There's not much point in meeting up if we're both just going to read on our own, huh...?">
          <Answer label="We'll do better next time." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="I-I was afraid that I might see that guy from before who tried to, um...">
          <Answer label="I'd help you again." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="Um... Your coffee is going to get cold.">
          <Answer label="Do you want sugar?" points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="I... want to be like that too...">
          <Answer label="You can do it." points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="It's sad to think there might be a thief at our school...">
          <Answer label="Don't worry, it wasn't a thief." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="It's just... ever since that money went missing, I've been feeling anxious whenever I'm alone...">
          <Answer label="I'm happy to help." points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question
          label={`What about you, ${mainCharName}-san? Are you planning to get a driver's license?`}
        >
          <Answer label="I am." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question
          label={`What about you, ${mainCharName}-san? Are you planning to get a driver's license?`}
        >
          <Answer label="I am." points={30} />
        </Question>
      ),
    },
  },
};
