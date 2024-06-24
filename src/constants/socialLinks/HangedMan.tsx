import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const HangedMan: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.HangedMan,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("My tummy's grumbling! Can we go to Wilduck?", [
        choice({ label: "Sure, let's go.", points: 15 }),
        choice({ label: "Let's keep playing." }),
      ]),
      choices("Why would they get a divorce?", [
        choice({ label: "They fell out of love." }),
        choice({ label: "It's probably your fault." }),
        choice({ label: "I don't know." }),
      ]),
      choices("...She's sobbing loudly. What should I do?", [
        choice({ label: "Calm her down" }),
        choice({ label: "Wait for her to finish." }),
      ]),
    ]),
    LinkLevel(0, [
      choices("...And who are you?", [
        choice({ label: "I'm Maiko's friend." }),
        choice({ label: "Just a random passerby." }),
      ]),
      choices("Do you think he'll come home and see me?", [
        choice({ label: "He'll probably forget." }),
        choice({ label: "I really can't say." }),
        choice({ label: "Don't worry, he'll be there.", points: 15 }),
      ]),
    ]),
    LinkLevel(20, [
      choices("They really do care about me!", [
        choice({ label: "That's great news!", points: 15 }),
        choice({ label: "Of course they care.", points: 15 }),
        choice({ label: "Nah, they don't care." }),
      ]),
    ]),
    LinkLevel(20, [
      choices("He's so mean. It's not fair!", [
        choice({ label: "That's awful.", points: 15 }),
        choice({ label: "Why would he do that?" }),
      ]),
      choices("Do they just wish I would disappear?", [
        choice({ label: "It's possible." }),
        choice({ label: "They would never?", points: 5 }),
      ]),
    ]),
    LinkLevel(20, [
      choices("I made up my mind! I have to run away from home!", [
        choice({ label: "Don't do it." }),
        choice({ label: "Calm down.", points: 5 }),
        choice({ label: "It's up to you." }),
      ]),
      choices("I'll need lots of snacks, right? And my...insurance card?", [
        choice({ label: "That should be enough.", points: 15 }),
        choice({ label: "It'll take more than that." }),
      ]),
    ]),
    LinkLevel(30, [
      choices("She's never done anything like this before!", [
        choice({ label: "We should look for her." }),
        choice({ label: "It's probably your fault." }),
        choice({ label: "Just leave her alone." }),
      ]),
      choices(
        "If you have any idea where she is, I'm begging you to tell us.",
        [
          choice({ label: "Maybe the music store." }),
          choice({ label: "Maybe the takoyaki stand." }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("What do you wanna get?", [
        choice({ label: "Hamburgers.", points: 5 }),
        choice({ label: "Japanese food." }),
      ]),
      choices("It was sad, but I listened to the whole thing. Did I do good?", [
        choice({ label: "You're a good girl.", points: 15 }),
        choice({ label: "Not really." }),
      ]),
      choices("Who do you think I should pick?", [
        choice({ label: "Your dad.", points: 15 }),
        choice({ label: "Your mom." }),
        choice({ label: "You decide." }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Even if I'm gone... we'll still be friends right?", [
        choice({ label: "Friends forever.", points: 15 }),
        choice({ label: "I might forget about you." }),
      ]),
    ]),
    LinkLevel(15, [
      choices("Do you think I'll have a family of my own one day?", [
        choice({ label: "I'm sure you will.", points: 15 }),
        choice({ label: "No idea." }),
      ]),
      choices("Can we get married?", [
        choice({ label: "Sure.", points: 15 }),
        choice({ label: "I'll think about it." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
