import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Emperor: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Emperor,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices(
        "Some students think the school uniform should be abolished, and they're recruiting supporters.",
        [
          choice({ label: "They've got a point." }),
          choice({ label: "Sounds like nonsense.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(0, [
      choices(
        "What!? You can't decide something like that without talking to the president first.",
        [
          choice({ label: "What happened?", points: 5 }),
          choice({ label: "No need to fight.", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(0, [
      choices("This guy looks like he's about to hit Odagiri!", [
        choice({ label: "Knock it off!" }),
        choice({ label: "..........." }),
      ]),
      choices("What is it? Do you need something from me?", [
        choice({ label: "You went a little overboard." }),
        choice({ label: "Looks like you're hard at work.", points: 15 }),
      ]),
    ]),
    LinkLevel(15, [
      choices("...Bunch of neanderthals", [
        choice({ label: "They're the worst.", points: 15 }),
        choice({ label: "You shouldn't accuse everyone." }),
      ]),
    ]),
    LinkLevel(15, [
      choices("It's nice not having those hyenas around.", [
        choice({ label: "You're not going home yet?" }),
        choice({ label: "It's nice?" }),
      ]),
      choices(
        "So as you can see, we can't exactly hold a meeting right now. You can leave if you want.",
        [
          choice({ label: "But I just got here…", points: 15 }),
          choice({ label: "I think I'll stick around.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("About the smoker's punishment, I mean.", [
        choice({ label: "It seems reasonable." }),
        choice({ label: "It seems too harsh.", points: 15 }),
      ]),
    ]),
    LinkLevel(15, [
      choices("Um, did Odagiri-san do something?", [
        choice({ label: "What do you mean?" }),
        choice({ label: "Why? Is something wrong?" }),
      ]),
      choices("...So, you heard all that.", [
        choice({ label: "It wasn't me.", points: 15 }),
        choice({ label: "You came to my defense?", points: 5 }),
      ]),
    ]),
    LinkLevel(22, [
      choices(
        "I rambled on about rules and fairness, but all I really proved was that I was desperate for power.",
        [
          choice({ label: "Don't blame yourself.", points: 15 }),
          choice({ label: "Good thing you noticed." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("So, how did I do? What'd everyone think?", [
        choice({ label: "Not too shabby.", points: 15 }),
        choice({ label: "You were great.", points: 15 }),
      ]),
      choices("That's why you should be the one to have it.", [
        choice({ label: "I'll cherish it.", points: 15 }),
        choice({ label: "I guess I'll take it.", points: 15 }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
