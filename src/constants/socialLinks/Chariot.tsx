import { createBondObject, LinkMaxedObject } from "./GenericCard";
import { QuestionsWrapper, Question, Answer } from "@/components";
import { CardNeededCalculator } from "./calculationFunctions";
import { EventCard } from "../../components/eventCard";
import { SingleDay } from "../calendar/SingleDay";
import { SocialLink } from "./baseFunctions";
import { StatsNames } from "../stats/types";
import { Strength } from "./Strength";
import { stats } from "../stats";

import {
  SocialLinkNames,
  SocialLinkLevel,
  SocialLinkStats,
  Routes,
} from "./types";

class ChariotSocialLink extends SocialLink {
  calculate(props: {
    currentDay: SingleDay;
    level: number;
    points: number;
    maxPoints?: number[];
    cardMultiplier: number;
    examMultiplier: number;
    maxCharmMultiplier: number;
  }) {
    const thisLink = props.currentDay.links[this.linkName];
    const currentLevel = this.getLevel(thisLink);
    const maxPoints = props.maxPoints || currentLevel.maxPoints;
    let points = props.points;

    let multiplier = props.examMultiplier;
    const newLevel = this.getLevel({
      ...thisLink,
      level: props.level,
      romance: thisLink.romance,
    });
    if (props.currentDay.stats[StatsNames.Charm] >= 100)
      multiplier *= props.maxCharmMultiplier;

    const cardNeeded = new CardNeededCalculator({
      nextLevelPoints: newLevel.points - points,
      cardMultiplier: props.cardMultiplier,
      multiplier,
      maxPoints,
    });

    if (props.currentDay.arcanes.includes(this.linkName)) {
      multiplier *= props.cardMultiplier;
    } else if (cardNeeded.isCardNeeded()) {
      multiplier *= props.cardMultiplier;
      props.currentDay.arcanes.push(this.linkName);
    }

    points += CardNeededCalculator.maxPointsSum(maxPoints, multiplier);
    let strengthLevel = props.currentDay.links[SocialLinkNames.Strength];
    if (props.level === 2) {
      strengthLevel = {
        ...props.currentDay.links[SocialLinkNames.Strength],
        points: 0,
        level: 1,
      };
    }

    return {
      links: {
        ...props.currentDay.links,
        [this.linkName]: {
          ...thisLink,
          level: props.level,
          points,
        },
        [SocialLinkNames.Strength]: { ...strengthLevel },
      },
    };
  }

  element(props: { currentDay: SingleDay; fullCard?: boolean }) {
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const level = props.currentDay.links[this.linkName] as SocialLinkStats;

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[this.linkName].multiplier
              : undefined
          }
          card={
            props.fullCard && props.currentDay.arcanes.includes(this.linkName)
          }
          place={this.linkDetails.place}
          name={this.linkDetails.name}
          head={this.linkName}
        />
        {props.fullCard &&
          (
            this.getLevel({
              ...level,
              level: level.level - 1,
            }) as SocialLinkLevel
          ).element({
            key: this.linkName,
          })}
        {props.currentDay.links[this.linkName].level === 2 &&
          Strength.element.bind(Strength)(props)}
      </div>
    );
  }
}

export const Chariot = new ChariotSocialLink(
  SocialLinkNames.Chariot,
  { name: "Kazushi Miyamoto", place: "Classroom 2F" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="M-My side is killing me... I might've overdone it a bit.">
            <Answer label="Don't push yourself." />
            <Answer label="Toughen up!" points={5} />
          </Question>,
          <Question label="You don't even look tired... Uh, what kind of training regimen do you have?">
            <Answer label="Just a normal routine." />
            <Answer label="A very special routine." />
          </Question>,
          <Question label="Let's get go- Argh!">
            <Answer label="What's wrong?" />
            <Answer label="Come on, hurry up." />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="It's just, um... my anemia's acting up.">
            <Answer label="Sorry, that sounds awful!" />
            <Answer label="Are you going to be okay?" points={5} />
          </Question>,
          <Question label="I tried medicine, I tried wrapping it, but the pain won't stop.">
            <Answer label="Will it heal?" points={5} />
            <Answer label="Take a break from practice." />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Wh-What's up? I was just gonna sneak back into practice.">
            <Answer label="Where have you been?" />
            <Answer label="Did you ditch?" />
          </Question>,
          <Question label="She made the appointment without telling me, so there was nothing I could do!">
            <Answer label="How did it go?" />
            <Answer label="That really sucks." points={15} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Man... I keep running into you at the weirdest times.">
            <Answer label="Back from the hospital?" points={5} />
            <Answer label="Did you ditched?" />
          </Question>,
          <Question label="You gotta be kidding... Why can't I... stand up!?">
            <Answer label="Take my shoulder!" points={15} />
            <Answer label="I'll carry you!" points={5} />
            <Answer label="I'll go get help!" />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="I want to win, so I have to practice.">
            <Answer label="There's nothing you can do." />
            <Answer label="Show some guts, man!" points={5} />
          </Question>,
          <Question label="I promised I'd win at next year's meet and become the number one athlete in Japan.">
            <Answer label="You promised?" />
            <Answer label="Why go so far?" points={5} />
          </Question>,
          <Question label="That's why I have to win this meet-so I can make it to nationals!">
            <Answer label="Do you think you can win?" />
            <Answer label="What about your knee?" points={5} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="I know you didn't say anything. I just think he can tell something's up.">
            <Answer label="How's your knee?" points={5} />
            <Answer label="Can you hide it?" />
          </Question>,
          <Question label="Otherwise, I won't be able to keep my promise to my nephew!">
            <Answer label="You need to get tougher." points={15} />
            <Answer label="You can't win like this." points={5} />
            <Answer label="You need to take a break." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="You must know what's going on.">
            <Answer label="I don't know anything." />
            <Answer label="......" points={5} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="I'm sure you love lugging all this dead weight around, huh?">
            <Answer label="I don't mind at all." points={15} />
            <Answer label="No, not exactly." />
            <Answer label="It's fine-I'm tough as hell." points={5} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="There's something I wanna talk to you about.">
            <Answer label="Okay, let's hear it." />
            <Answer label="What is it about?" />
          </Question>,
          <Question label="I've made up my mind. I'm going to have surgery to fix my knee.">
            <Answer label="What about the big meet?" points={15} />
            <Answer label="What about your promise?" />
          </Question>,
          <Question label="I'm not gonna worry about winning races. I'm gonna focus on winning back my health instead.">
            <Answer label="You've got this!" points={5} />
            <Answer label="You've really grown up." points={5} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  },
  {
    2: {
      [Routes.Platonic]: (
        <Question label="That way, I'm ready to go 24/7, y'know? That's real dedication, man.">
          <Answer label="Impressive." points={30} />
          <Answer label="I don't really care." />
          <Answer label="You need to chill." />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="I'm trying to cut down on carbs.">
          <Answer label="Are you on a diet?" points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="The more I want to win, I can just feel myself tense up...">
          <Answer label="Winning isn't everything." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="Anyway... Sorry about all of that.">
          <Answer label="You'd be in trouble." />
          <Answer label="I was worried about you." />
          <Answer label="Gotta pick your battles." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="Any ideas?">
          <Answer label="Running shoes?" />
          <Answer label="A video game." points={30} />
          <Answer label="Clothes." />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="You know, that Apathy Syndrome thing.">
          <Answer label="That's worrying." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="Man, why do I even bother anymore? What's the point of going through all this pain just to win...?">
          <Answer label="That's just who you are." points={30} />
          <Answer label="For your nephew." />
          <Answer label="Figure it out yourself." />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="With everything that's happening to me right now... do you really think I can still win the regionals next year?">
          <Answer label="Sounds impossible." points={30} />
        </Question>
      ),
    },
  }
);
