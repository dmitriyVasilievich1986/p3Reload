import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Magician: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Magician,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices(
        "Can you, like, just waltz on into Takeba-san's room and stuff?",
        [
          choice({ label: "Of course." }),
          choice({ label: "No way.", points: 5 }),
          choice({ label: "That's a secret.", points: 5 }),
        ]
      ),
      choices("I'm more into older women. How 'bout you?", [
        choice({ label: "I'm into older women, too.", points: 5 }),
        choice({ label: "I prefer girls my age." }),
        choice({ label: "I like them all.", points: 5 }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Maaan... I'm so sick of this, dude.", [
        choice({ label: "What, of ramen?" }),
        choice({ label: "What, of school?" }),
        choice({ label: "What, life?", points: 15 }),
      ]),
      choices(
        "Okay, that settles it. I'm gonna get myself a girlfriend! Right now!",
        [
          choice({ label: "Sounds Impossible." }),
          choice({ label: "Good luck!", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Hey, thanks for coming, man. You mind waiting here for a sec?", [
        choice({ label: "Sure." }),
        choice({ label: "Why?" }),
      ]),
      choices("I'm gonna go ask Ms. Kanou out! Like, right now!", [
        choice({ label: "Good luck!", points: 15 }),
        choice({ label: "Don't do it." }),
        choice({ label: "Whatever, man." }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "Yeah, good-looking people just flock together, y'know?. It's like a law of attraction.",
        [
          choice({ label: "...Is that so?", points: 5 }),
          choice({ label: "Okay...", points: 15 }),
          choice({ label: "Good-looking, huh?" }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Sorry, man. I've gotta pass this time.", [
        choice({ label: "Just like that?" }),
        choice({ label: "Why?" }),
      ]),
      choices(
        "I mean, getting into college is pretty important, don't you think? You think about the future too, right?",
        [
          choice({ label: "I've got plans already.", points: 15 }),
          choice({ label: "Yeah, more than you do." }),
          choice({ label: "Not even a little." }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("I can't eat...", [
        choice({ label: "What happened.", points: 5 }),
        choice({ label: "I'll eat it for you." }),
      ]),
      choices("I saw a magazine in Emiri's room. Guess what it was called.", [
        choice({ label: "In Fashion?" }),
        choice({ label: "Occult Living?" }),
        choice({ label: "Bride-To-Be?", points: 5 }),
      ]),
      choices("You think that's a good plan?", [
        choice({ label: "Congrats!", points: 5 }),
        choice({ label: "You're rushing things." }),
        choice({ label: "Sure, whatever." }),
      ]),
    ]),
    LinkLevel(22, [
      choices(
        "H-Hey, man. Sorry to make you come here. I, um... Ah, damn it...",
        [
          choice({ label: "Spit it out!" }),
          choice({ label: "Are you in trouble?", points: 15 }),
        ]
      ),
      choices(
        "And now she's being transferred to a school in Kyushu. What do I do!?",
        [
          choice({ label: "You should go with her.", points: 5 }),
          choice({ label: "You two should talk it out.", points: 5 }),
          choice({ label: "Figure it out yourself." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("I was so excited about going with her that I...I...", [
        choice({ label: "Cheer up, man." }),
        choice({ label: "Let me handle this!", points: 15 }),
        choice({ label: "Haha." }),
      ]),
    ]),
    LinkLevel(22, [
      choices(
        "Ms. Kanou must be in Kyushu by now. I wonder if she had her wedding already.",
        [
          choice({ label: "......", points: 5 }),
          choice({ label: "Maybe she did." }),
          choice({ label: "I'm stealing your egg!" }),
        ]
      ),
      choices(
        "Man, it's always a blast hanging out with you. That said... I still want a girlfriend!",
        [
          choice({ label: "You don't know when to give up..." }),
          choice({ label: "You've got this!", points: 5 }),
          choice({ label: "Want me to find you a girl?", points: 5 }),
        ]
      ),
      choices("What I did figure out is... you're a true friend.", [
        choice({ label: "...Are we still talking about love?" }),
        choice({ label: "That's right! We're great friends." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
