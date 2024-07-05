import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  mainCharName,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Moon: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Moon,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("Well? Would you wanna be... my younger brother?", [
        choice({ label: "Sure, why not.", points: 15 }),
        choice({ label: "Not really, no." }),
      ]),
    ]),
    LinkLevel(0, [
      choices(
        `So? Do you "get me," hm? Who am I? Go on, I wanna hear it come out of your mouth!`,
        [
          choice({ label: "Nozomi Suemitsu" }),
          choice({ label: "The gourmet king.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices(
        "Whew... That was way too close. If that toilet was just a bit further away... Ohhhh, boy.",
        [
          choice({ label: "Did you eat too much?" }),
          choice({ label: "Are you feeling sick?", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices(`Right, ${mainCharName}-kun?`, [
        choice({ label: "That's right.", points: 15 }),
        choice({ label: "Sorry, what?" }),
      ]),
    ]),
    LinkLevel(22, [
      choices(
        "I don't get it. I was fine up until a minute ago, then suddenly I felt sick.",
        [
          choice({ label: "Does this happen a lot?", points: 5 }),
          choice({ label: "Did you eat too much?" }),
          choice({ label: "Are you sick?", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("Well? Did that just blow your mind?", [
        choice({ label: "Yeah, I'm freaking out." }),
        choice({ label: "Not really.", points: 5 }),
        choice({ label: "The world is ending?", points: 15 }),
      ]),
      choices(
        "Not to mention you'll get a discount since I'll be referring you, too. You are one lucky guy!",
        [
          choice({ label: "That's insane!" }),
          choice({ label: "No way I'm paying that." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("Look at me! I'm paper-thin now!", [
        choice({ label: "You do look thinner.	" }),
        choice({ label: "No, you're not.", points: 15 }),
      ]),
    ]),
    LinkLevel(22, [
      choices("Finally, Paradise is smiling back at me! Yes! Yesss!", [
        choice({ label: "You're gonna scam them, too?" }),
        choice({ label: "Just knock it off." }),
      ]),
    ]),
    LinkLevel(20, [
      choices(
        `But I couldn't even cry. I actually felt... relieved. I though, "Maybe they'll all finally stop laughing at me."`,
        [
          choice({ label: "That's terrible." }),
          choice({ label: "That's understandable." }),
        ]
      ),
      choices(
        "But if I keep this up, I'll never be able to replace my brother, will I?",
        [
          choice({ label: "Just be yourself.", points: 15 }),
          choice({ label: "You're irreplaceable.", points: 15 }),
        ]
      ),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
