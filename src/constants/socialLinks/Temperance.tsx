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

export const Temperance: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Temperance,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices(
        "It will be my first time going. Will you maybe, how do you say, show me the ropes?",
        [
          choice({ label: "Sure, let's go.", points: 5 }),
          choice({ label: "You like sweets?", points: 5 }),
          choice({ label: "There's nothing to show.", points: 5 }),
        ]
      ),
      choices("I love the culture of Nihon! Japan is sugoi-amazing!", [
        choice({ label: "I totally agree.", points: 15 }),
        choice({ label: "What about your country?" }),
        choice({ label: "It's not that great.	" }),
      ]),
    ]),
    LinkLevel(5, [
      choices(
        `You have gotten much better at this, ${mainCharName}-dono! Subarashii-wonderful!`,
        [
          choice({ label: "I can do better.", points: 5 }),
          choice({ label: "Thanks.", points: 5 }),
        ]
      ),
      choices("I would like to make something Japanese, but what?", [
        choice({ label: "What do you like?" }),
        choice({ label: "Why not western clothes?", points: 5 }),
        choice({ label: "How about a kimono?", points: 15 }),
      ]),
    ]),
    LinkLevel(20, [
      choices("......", [
        choice({ label: "How come you're not working?" }),
        choice({ label: "Should we stop for today?" }),
        choice({ label: "Are you alright?", points: 15 }),
      ]),
      choices("She was taken by the angels!", [
        choice({ label: "What happened?" }),
        choice({ label: "Calm down." }),
        choice({ label: "That's terrible..." }),
      ]),
    ]),
    LinkLevel(15, [
      choices("Could we go somwhere to eat after this?", [
        choice({ label: "Sure.", points: 5 }),
        choice({ label: "Why?" }),
      ]),
      choices("I might never come back to Japan again!", [
        choice({ label: "You have to accept it." }),
        choice({ label: "Just stay in Japan!", points: 5 }),
      ]),
    ]),
    LinkLevel(20, [
      choices("I have barely sewn anything at all.", [
        choice({ label: "What's wrong?" }),
        choice({ label: "Why not take a break?", points: 5 }),
      ]),
      choices("Will you go to Azuki Arai with moi?", [
        choice({ label: "Let's do it.", points: 5 }),
        choice({ label: "Just one minute...", points: 5 }),
      ]),
      choices("I want to stay here in Japan even if I have to eat dirt!", [
        choice({ label: "I have your back!", points: 15 }),
        choice({ label: "What will you do?", points: 5 }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "I will show him a kimono! When he sees it, he will understand the beauty of Nihon!",
        [
          choice({ label: "Will that be enough?", points: 5 }),
          choice({ label: "That's a great idea.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(10, [
      choices(
        "When my uncle sees this, I know he'll agree with me about how great Nihon is!",
        [
          choice({ label: "When will it be done?", points: 5 }),
          choice({ label: "He'll definitely agree!", points: 15 }),
          choice({ label: "Less talk, more work." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices(
        "And thanks to all your help, the kimono is almost finished! I feel so blessed!",
        [
          choice({ label: "Congrats!", points: 5 }),
          choice({ label: "Aren't you homesick?", points: 15 }),
          choice({ label: "Don't forget, you owe me." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("At last, it is fini!", [
        choice({ label: "How does it look?", points: 15 }),
        choice({ label: "Great work!", points: 15 }),
      ]),
      choices("They are the times I spend with you, my tomodachi.", [
        choice({ label: "I'll be waiting for you.", points: 15 }),
        choice({ label: "Good luck out there.", points: 15 }),
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
        <Question label="...I know! We can go there now! It is just a train ride away, is it not?">
          <Answer label="Sure, let's go." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label={`Do you like it, too, ${mainCharName}-dono?`}>
          <Answer label="Yeah, I do." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="Perhaps I am feeling homesick...">
          <Answer label="You should stay in Japan." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="He looked just like my scary uncle! I did not want to think about him...">
          <Answer label="Don't worry about it." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="Does no one play those games anymore?">
          <Answer label="We do on New Year's." points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="I must hurry and complete the kimono.">
          <Answer label="Just relax." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="What exactly is it? It just looks like the eggs of an insect to me.">
          <Answer label="It's beans." points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question
          label={`Speaking of rice... What is your favorite dish with it, ${mainCharName}-dono?`}
        >
          <Answer label="Ochazuke." points={30} />
        </Question>
      ),
    },
  },
};
