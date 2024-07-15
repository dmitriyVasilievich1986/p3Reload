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
        choice({ label: "I like them all!", points: 5 }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Maaan... I'm so sick of this, dude.", [
        choice({ label: "What, of ramen?" }),
        choice({ label: "What, of school?" }),
        choice({ label: "What, life?", points: 15 }),
      ]),
      choices(
        `Okay, that settles it, ${mainCharName}. I'm gonna get myself a girlfriend! Right now!`,
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
        "Yeah, good-looking people just flock together, y'know? It's like a law of attraction.",
        [
          choice({ label: "...Is that so?", points: 5 }),
          choice({ label: "Okay...", points: 15 }),
          choice({ label: "Good-looking, huh?" }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Sorry, man, but I've gotta pass this time.", [
        choice({ label: "Just like that?" }),
        choice({ label: "Why?" }),
      ]),
      choices(
        "I mean, getting into college is pretty important, don't ya think? You think about the future too, right?",
        [
          choice({ label: "I've got plans already.", points: 15 }),
          choice({ label: "Yeah, more than you do." }),
          choice({ label: "Not even a little." }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("I can't eat...", [
        choice({ label: "What happened?", points: 5 }),
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
    LinkLevel(25, [
      choices(
        "H-Hey, man. Sorry to make you come here. I, um... Ah, damn it...",
        [
          choice({ label: "Spit it out!", points: 5 }),
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
          choice({ label: "You don't know when to give up...", points: 5 }),
          choice({ label: "You've got this!", points: 15 }),
          choice({ label: "Want me to find you a girl?", points: 15 }),
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
  invitations: {
    1: {
      [Routes.Platonic]: (
        <Question label="Not bad... Not bad at all! But, there are some things you could do to look better...">
          <Answer label="Like what?" points={30} />
        </Question>
      ),
    },
    2: {
      [Routes.Platonic]: (
        <Question label="By the way, are you picky about your food?">
          <Answer label="I'm pretty picky." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="Well? Whaddaya think? Perfect plan, right?">
          <Answer label="I've got a better plan..." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="D-don't laugh, ok...? But, uh, I wanted to know if, um... if you've ever kissed a girl before...">
          <Answer label="I haven't." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="Maybe she's scared of catching it... Is it contagious?">
          <Answer label="No, it's not." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="That was the last beef bowl I'm ever gonna eat!">
          <Answer label="Why?" points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="Do you think I can make her happy?">
          <Answer label="Just do your best." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="Maybe I caught it or something...">
          <Answer label="You shouldn't worry about it." points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="Can you just... forget that ever happened?">
          <Answer label="Sure." points={30} />
        </Question>
      ),
    },
  },
};
