import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Fortune: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Fortune,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("...!", [
        choice({ label: "What's wrong?" }),
        choice({ label: "Do you need some rest?" }),
      ]),
      choices("Yamagishi-san won't be going anywhere for a while.", [
        choice({ label: "'Strikes again'?" }),
        choice({ label: "Is that a problem?" }),
      ]),
    ]),
    LinkLevel(0, [
      choices(
        "It really helped apply the paint to the canvas, so I'm sure that's the only reason the judges even noticed.",
        [
          choice({ label: "You've got talent!", points: 15 }),
          choice({ label: "You got lucky." }),
        ]
      ),
      choices(
        "I recommend adding more shellfish to your diet, like oyster and abalone. They're packed with iron and easy to cook.",
        [
          choice({ label: "Good work, Doc Junior." }),
          choice({ label: "Will he be okay?" }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Did you... hear everything?", [
        choice({ label: "You're quitting art club?", points: 5 }),
        choice({ label: "You're pulling out of the contest?", points: 5 }),
      ]),
      choices(
        "I have my own dreams too, you know! Ugh, I can't stand it anymore!",
        [
          choice({
            label: "Complaining to me won't help you.",
            points: 15,
          }),
          choice({ label: "So you're just gonna take it?", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Wait. Then... that means...", [
        choice({ label: "You should tell your dad.", points: 15 }),
        choice({ label: "Now you don't have to quit.", points: 5 }),
      ]),
    ]),
    LinkLevel(15, [
      choices("Everyone is working so hard...", [
        choice({ label: "So are you." }),
        choice({ label: "What's the matter?" }),
      ]),
      choices("I just don't know what to think.", [
        choice({ label: "Will you study abroad?" }),
        choice({ label: "It's your choice now.", points: 15 }),
      ]),
    ]),
    LinkLevel(15, [
      choices(
        "It's like he's suddenly trying to be more understanding. It's weird.",
        [
          choice({ label: "Do you want to be a doctor?", points: 15 }),
          choice({ label: "Don't you like art club?" }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Can you remember my name?", [
        choice({ label: "It's okay, I'm fine.", points: 15 }),
        choice({ label: "Of course. It's Keisuke." }),
        choice({ label: "......" }),
      ]),
      choices("A-Anyway, do you remember what happened?", [
        choice({ label: "I do." }),
        choice({ label: "I don't." }),
      ]),
      choices("I'm not a doctor.", [
        choice({ label: "Do you think you want to be one?" }),
        choice({ label: "Don't beat yourself up for it." }),
      ]),
    ]),
    LinkLevel(22, [
      choices("Tell the others I said goodbye!", [
        choice({ label: "You can't go!", points: 15 }),
        choice({ label: "Good luck!" }),
      ]),
      choices("Ma'am, are you all right!? That cough...", [
        choice({ label: "What happened?" }),
        choice({ label: "...You should just go." }),
      ]),
      choices("My train's about to leave... Wh-What should I do...?", [
        choice({ label: "Leave this to me!" }),
        choice({ label: "You can't abandon your trip!" }),
      ]),
      choices("How should I help him?", [
        choice({ label: "Better leave him alone." }),
        choice({ label: "I should talk to him." }),
        choice({ label: "I'll try patting his upper back." }),
      ]),
      choices("What should I do next?", [
        choice({ label: "Better leave him alone." }),
        choice({ label: "I could rub his back." }),
        choice({ label: "I'll lay him on his back." }),
      ]),
    ]),
    LinkLevel(22, [
      choices("That's why I want you to have it.", [
        choice({ label: "I understand.", points: 15 }),
        choice({ label: "Why?", points: 15 }),
        choice({ label: "Stop relying on others.", points: 15 }),
      ]),
      choices("I-I'm not coming off as arrogant, am I?", [
        choice({ label: "No, not really.", points: 15 }),
        choice({ label: "Yeah.", points: 15 }),
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
        <Question label="I doubt I'd ever see something like a beef bowl on the dinner table at home...">
          <Answer label="Let's eat here again, then." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="D-Do you think it's okay for me to be in the finals?">
          <Answer label="Yeah, you just did your best." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="Hey, we should organize an outdoor sketching session one of these days.">
          <Answer label="That would be cool." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="What would I list as my occupation on a survey...?">
          <Answer label="Entertainment industry." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="This is all his fault! Why does he keep changing his mind!?">
          <Answer label="You shouldn't blame others." points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="I mean, I won't just be visiting; I'll be living there...">
          <Answer label="Think of the new inspirations." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="So... I was wondering... what it'd be like if you called me something in that vein...">
          <Answer label="Okay, Brother." points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="Even if your life is predestined, I think you should give it your all while on that path.">
          <Answer label="You have a point." points={30} />
        </Question>
      ),
    },
  },
};
