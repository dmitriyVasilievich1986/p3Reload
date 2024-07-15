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

const loversLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "I think I'll go with the gerberas. What color do you think should I get?",
      [
        choice({ label: "Cute pink.", points: 15 }),
        choice({ label: "Pure white." }),
        choice({ label: "Bright red." }),
        choice({ label: "What's a gerbera?" }),
      ]
    ),
    choices(
      "Oh wait, you've never seen my room, have you? Well then, why am I even asking you?",
      [
        choice({ label: "That's mean.", points: 5 }),
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
      choice({ label: "Are you okay?", points: 15 }),
    ]),
  ]),
];

export const Lovers: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Lovers,
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
        choice({ label: "I'm sorry.", points: 15 }),
        choice({ label: "It's okay to rely on others." }),
        choice({ label: "You're a girl, so..." }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Thanks for your help back then. I really appreciate it.", [
        choice({ label: "You're quite welcome.", points: 5 }),
        choice({ label: "Anytime.", points: 15 }),
        choice({ label: "Thank you, too." }),
      ]),
      choices(
        "Wouldn't that be annoying, Makoto-kun? Y'know, if people assumed we were dating...",
        [
          choice({ label: "I wouldn't mind.", points: 5 }),
          choice({ label: "Yeah..." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?",
        [
          choice({ label: "Sounds good.", points: 15 }),
          choice({ label: "Let's go with everyone." }),
          choice({ label: "Let's go just the two of us.", points: 15 }),
          choice({ label: "No thanks." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "I know! Why don't you come help me pick something out, Makoto-kun?",
        [
          choice({ label: "Alright.", points: 15 }),
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
        choice({ label: "....", points: 15 }),
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
          choice({ label: "Too late.", points: 15 }),
          choice({ label: "I didn't hear anything.", points: 15 }),
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
        choice({ label: "I'm sorry.", points: 15 }),
        choice({ label: "It's okay to rely on others." }),
        choice({ label: "You're a girl, so..." }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Thanks for your help back then. I really appreciate it.", [
        choice({ label: "You're quite welcome.", points: 5 }),
        choice({ label: "Anytime.", points: 15 }),
        choice({ label: "Thank you, too." }),
      ]),
      choices(
        "Wouldn't that be annoying, Makoto-kun? Y'know, if people assumed we were dating...",
        [
          choice({ label: "I wouldn't mind.", points: 5 }),
          choice({ label: "Yeah..." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?",
        [
          choice({ label: "Sounds good.", points: 15 }),
          choice({ label: "Let's go with everyone." }),
          choice({ label: "Let's go just the two of us.", points: 15 }),
          choice({ label: "No thanks." }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "I know! Why don't you come help me pick something out, Makoto-kun?",
        [
          choice({ label: "Alright.", points: 15 }),
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
        choice({ label: "....", points: 15 }),
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
          choice({ label: "Too late.", points: 15 }),
          choice({ label: "I didn't hear anything.", points: 15 }),
        ]
      ),
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
        <Question label="Oh, speaking of music, what do you usually listen to?">
          <Answer label="J-pop." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="Do YOU like azuki strawberry daifuku!?">
          <Answer label="I love it." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="Is it weird for me to be so hung up about my parents so much at my age?">
          <Answer label="Leave the bags to me." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="I-I'm not trying to pry, or anything. I was just curious...">
          <Answer label="Hang out with a friend." points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label={`What's your favorite color, ${mainCharName}-kun?`}>
          <Answer label="Green." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="Yeah, I have a pretty big appetite, huh? Haha...">
          <Answer label="It's a healthy appetite." points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="But no one knows about us, huh... Just like a manga.">
          <Answer label="Some people do." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question label="But no one knows about us, huh... Just like a manga.">
          <Answer label="Some people do." points={30} />
        </Question>
      ),
    },
  },
};
