import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
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
        "It will be my first time going, Will you maybe, how do you say, show me the ropes?",
        [
          choice({ label: "Sure, let's go.", points: 5 }),
          choice({ label: "You like sweets?" }),
          choice({ label: "There's nothing to show.", points: 15 }),
        ]
      ),
      choices("I love the culture of Nihon! Japan sugoi-amazing!", [
        choice({ label: "I totally agree.", points: 15 }),
        choice({ label: "What about your country?" }),
        choice({ label: "It's not that great.	" }),
      ]),
    ]),
    LinkLevel(0, [
      choices(
        "You have gotten much better at this, Makoto-dono! Subarashii-wonderful!",
        [
          choice({ label: "I can do better." }),
          choice({ label: "Thanks.", points: 5 }),
        ]
      ),
      choices("I would like to make something Japanese, but what?", [
        choice({ label: "What do you like?" }),
        choice({ label: "Why not western clothes?" }),
        choice({ label: "How about a kimono?", points: 15 }),
      ]),
    ]),
    LinkLevel(15, [
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
      choices("", [
        choice({ label: "Sure.", points: 5 }),
        choice({ label: "Why?" }),
      ]),
      choices("", [
        choice({ label: "You have to accept it." }),
        choice({ label: "Just stay in Japan!", points: 5 }),
      ]),
    ]),
    LinkLevel(15, [
      choices("I have barely sewn anything at all.", [
        choice({ label: "What's wrong?" }),
        choice({ label: "Why not take a break?", points: 5 }),
      ]),
      choices("Will you go to Azuki Arai with moi?", [
        choice({ label: "Let's do it.", points: 5 }),
        choice({ label: "Just one minute." }),
      ]),
      choices("I want to stay here in Japan even if I have to eat dirt!", [
        choice({ label: "I have your back!", points: 15 }),
        choice({ label: "What will you do?" }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "I will show him a kimono! When he sees it, he will understand the beauty of Nihon!",
        [
          choice({ label: "Will that be enough?" }),
          choice({ label: "That's a great idea.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(10, [
      choices(
        "When my uncle sees this, I know he'll agree with me about how great Nihon is!",
        [
          choice({ label: "When will it be done?" }),
          choice({ label: "He'll definitely agree!", points: 15 }),
          choice({ label: "Less talk, more work." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices(
        "And thanks to all your help, the kimono is almost finished! I feel so blessed.",
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
        choice({ label: "Great Work!", points: 15 }),
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
};
