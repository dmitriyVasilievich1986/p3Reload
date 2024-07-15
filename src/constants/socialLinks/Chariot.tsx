import { Choices, Choice } from "../../components/choices";
import { EventCard } from "../../components/eventCard";

import {
  SocialLinkNames,
  SocialLinkType,
  CalculateProps,
  Routes,
} from "./types";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

function chariotStrength() {
  const payload = LinkLevel(0, [
    choices("M-My side is killing me... I might've overdone it a bit.", [
      choice({ label: "Don't push yourself." }),
      choice({ label: "Toughen up!", points: 5 }),
    ]),
    choices(
      "You don't even look tired... Uh, what kind of training regimen do you have?",
      [
        choice({ label: "Just a normal routine." }),
        choice({ label: "A very special routine." }),
      ]
    ),
    choices("Let's get go- Argh!", [
      choice({ label: "What's wrong?" }),
      choice({ label: "Come on, hurry up." }),
    ]),
  ]);
  return {
    ...payload,
    element: () => (
      <>
        {payload.element({ key: "chariotStrength" })}
        <EventCard
          place="2F Classroom Hallway"
          name="Yuko Nishiwaki"
          head="Strength"
        >
          <EventCard head="Create bond" />
        </EventCard>
      </>
    ),
  };
}

export const Chariot: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Chariot,
  calculate: function (props: CalculateProps) {
    const payload = this._calculate(props);
    const thisLink = props.currentLinks[SocialLinkNames.Chariot];
    if (thisLink.level === 1) {
      return {
        links: {
          ...payload.links,
          [SocialLinkNames.Strength]: {
            ...props.currentLinks[SocialLinkNames.Strength],
            level: 1,
          },
        },
      };
    }
    return payload;
  },
  levels: [
    LinkLevel(),
    chariotStrength(),
    LinkLevel(0, [
      choices("It's just, um... my anemia's acting up.", [
        choice({ label: "Sorry, that sounds awful!" }),
        choice({ label: "Are you going to be okay?", points: 5 }),
      ]),
      choices(
        "I tried medicine, I tried wrapping it, but the pain won't stop.",
        [
          choice({ label: "Will it heal?", points: 5 }),
          choice({ label: "Take a break from practice." }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("Wh-What's up? I was just gonna sneak back into practice.", [
        choice({ label: "Where have you been?" }),
        choice({ label: "Did you ditch?" }),
      ]),
      choices(
        "She made the appointment without telling me, so there was nothing I could do!",
        [
          choice({ label: "How did it go?" }),
          choice({ label: "That really sucks.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Man... I keep running into you at the weirdest times.", [
        choice({ label: "Back from the hospital?", points: 5 }),
        choice({ label: "Did you ditched?" }),
      ]),
      choices("You gotta be kidding... Why can't I... stand up!?", [
        choice({ label: "Take my shoulder!", points: 15 }),
        choice({ label: "I'll carry you!", points: 5 }),
        choice({ label: "I'll go get help!" }),
      ]),
    ]),
    LinkLevel(15, [
      choices("I want to win, so I have to practice.", [
        choice({ label: "There's nothing you can do." }),
        choice({ label: "Show some guts, man!", points: 5 }),
      ]),
      choices(
        "I promised I'd win at next year's meet and become the number one athlete in Japan.",
        [
          choice({ label: "You promised?" }),
          choice({ label: "Why go so far?", points: 5 }),
        ]
      ),
      choices(
        "That's why I have to win this meet-so I can make it to nationals!",
        [
          choice({ label: "Do you think you can win?" }),
          choice({ label: "What about your knee?", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices(
        "I know you didn't say anything. I just think he can tell something's up.",
        [
          choice({ label: "How's your knee?", points: 5 }),
          choice({ label: "Can you hide it?" }),
        ]
      ),
      choices("Otherwise, I won't be able to keep my promise to my nephew!", [
        choice({ label: "You need to get tougher.", points: 15 }),
        choice({ label: "You can't win like this.", points: 5 }),
        choice({ label: "You need to take a break." }),
      ]),
    ]),
    LinkLevel(22, [
      choices("You must know what's going on.", [
        choice({ label: "I don't know anything." }),
        choice({ label: "......", points: 5 }),
      ]),
    ]),
    LinkLevel(22, [
      choices("I'm sure you love lugging all this dead weight around, huh?", [
        choice({ label: "I don't mind at all.", points: 15 }),
        choice({ label: "No, not exactly." }),
        choice({ label: "It's fine-I'm tough as hell.", points: 5 }),
      ]),
    ]),
    LinkLevel(22, [
      choices("There's something I wanna talk to you about.", [
        choice({ label: "Okay, let's hear it." }),
        choice({ label: "What is it about?" }),
      ]),
      choices(
        "I've made up my mind. I'm going to have surgery to fix my knee.",
        [
          choice({ label: "What about the big meet?", points: 15 }),
          choice({ label: "What about your promise?" }),
        ]
      ),
      choices(
        "I'm not gonna worry about winning races. I'm gonna focus on winning back my health instead.",
        [
          choice({ label: "You've got this!", points: 5 }),
          choice({ label: "You've really grown up.", points: 5 }),
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
        <Choices label="That way, I'm ready to go 24/7, y'know? That's real dedication, man.">
          <Choice label="Impressive." points={30} />
        </Choices>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Choices label="I'm trying to cut down on carbs.">
          <Choice label="Are you on a diet?" points={30} />
        </Choices>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Choices label="The more I want to win, I can just feel myself tense up...">
          <Choice label="Winning isn't everything." points={30} />
        </Choices>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Choices label="Anyway... Sorry about all of that.">
          <Choice label="Gotta pick your battles." points={30} />
        </Choices>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Choices label="Any ideas?">
          <Choice label="A video game." points={30} />
        </Choices>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Choices label="You know, that Apathy Syndrome thing.">
          <Choice label="That's worrying." points={30} />
        </Choices>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Choices label="Man, why do I even bother anymore? What's the point of going through all this pain just to win...?">
          <Choice label="That's just who you are." points={30} />
        </Choices>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Choices label="With everything that's happening to me right now... do you really think I can still win the regionals next year?">
          <Choice label="Sounds impossible." points={30} />
        </Choices>
      ),
    },
  },
};
