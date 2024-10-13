import { QuestionsWrapper, Question, Answer } from "@/components";

import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
import { SocialLink } from "./classes/SocialLink";

import {
  KoromaruWalkSocialLinkLevels,
  LinkMainLevels,
} from "./classes/LinkLevels";

import {
  EventAvailableProps,
  SocialLinkNames,
  LevelsType,
  Routes,
} from "./types";

class StarMainLevels extends LinkMainLevels {
  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;
    const courageLevel = stats[StatsNames.Courage].levels[3].value;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = props.socialLink.isNewLevel(previousLink);
    const days = [DaysNames.wednesday, DaysNames.friday, DaysNames.sunday];

    return (
      props.currentDay.date.getTime() >= new Date(2009, 7, 5).getTime() &&
      props.previousDay!.stats[StatsNames.Courage] >= courageLevel &&
      days.includes(props.currentDay.date.getDay()) &&
      props.time === Times.Day &&
      isNewLevel
    );
  }

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="That's why I have to make it big-it's for everyone who's been helping me.">
            <Answer label="I'm kinda jealous." />
            <Answer label="Sounds like a lot of pressure." points={5} />
          </Question>,
          <Question label="By the way, who would you say is your biggest rival?">
            <Answer label="You." points={5} />
            <Answer label="Myself." points={15} />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Maybe I should get some for them, too...">
            <Answer label="For your teammates?" points={5} />
            <Answer label={`Who's "them"?`} points={5} />
          </Question>,
          <Question label="Our apartment's pretty small, though, so we're packed like sardines.">
            <Answer label="Sounds like fun." points={5} />
            <Answer label="That sounds rough." points={5} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="...All right, just one more!">
            <Answer label="What are you doing?" points={5} />
            <Answer label="Slow down and savor it." points={5} />
          </Question>,
          <Question label="Know what that means? If I do well enough, I might score a scholarship.">
            <Answer label="That would be amazing!" points={5} />
            <Answer label="What's the big deal?" />
          </Question>,
          <Question label="And maybe... this'll make my mom's life a little easier.">
            <Answer label="Hard to say." />
            <Answer label="Yeah, I bet it would." points={5} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="*huff* *huff* Sorry I kept you waiting...">
            <Answer label="You're late." />
            <Answer label="Are you okay?" points={5} />
          </Question>,
          <Question label="I used to come here all the time with my teammates, but...">
            <Answer label="But what?" />
            <Answer label="I'll come back here with you." points={5} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="Let's see.">
            <Answer label="I'll look around for him." />
            <Answer label="I'll wait a bit longer." />
          </Question>,
          <Question label="Hmm...">
            <Answer label="Guess I'll kill some time." />
            <Answer label="Guess I'll keep waiting." />
          </Question>,
          <Question label="Well...">
            <Answer label="I'll wait just a bit longer." />
            <Answer label="I'm just gonna go home." />
          </Question>,
          <Question label="Sorry, but I don't think I can make it today.">
            <Answer label="Well, what happened?" />
            <Answer label="Don't worry, it's okay." points={15} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="Thanks for coming all the way here for this.">
            <Answer label="What did you want?" />
            <Answer label="It's no problem at all." points={5} />
          </Question>,
          <Question label="There's still so much I have to do.">
            <Answer label="Sounds pretty rough." points={5} />
            <Answer label="Stop whining and do it! " points={5} />
          </Question>,
          <Question label="Why'd you have to die, Dad!?">
            <Answer label="This isn't your fault." />
            <Answer label="Do something about it!" />
          </Question>,
          <Question label="Is this... really how it ends for me?">
            <Answer label="You have to accept it." />
            <Answer label="Don't give up yet." points={15} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="Hmmm...">
            <Answer label="Do it!" points={15} />
            <Answer label="I could spot you some cash." />
          </Question>,
          <Question label="In the end, maybe it was my fault the team couldn't work together.">
            <Answer label="It sure was." points={5} />
            <Answer label="Don't sweat it." points={5} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="So, uh, the big meet for that scholarship was yesterday.">
            <Answer label="Did you win?" points={5} />
            <Answer label="Did you lose?" />
          </Question>,
          <Question label="I got first place, of course!">
            <Answer label="Wor, really?" />
            <Answer label="Congrats, man!" points={5} />
          </Question>,
          <Question label="Kinda makes me feel empty inside.">
            <Answer label="What will you do now?" points={5} />
            <Answer label="Will you quit running?" points={5} />
          </Question>,
          <Question label="Go ahead and order extra noodles. It's on me.">
            <Answer label="Thanks!" points={5} />
            <Answer label="Don't put yourself out!" />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="Glad we could meet up one more time before I take off.">
            <Answer label='"Take off"?' />
            <Answer label="You're leaving today?" points={15} />
          </Question>,
          <Question label="Well then, I better get going...">
            <Answer label="I'll see you off." />
            <Answer label="Let's chat a bit more." />
          </Question>,
          <Question label="I want you to hang on to that.">
            <Answer label="What's this for?" />
            <Answer label="But I can't drive yet." />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  };
}

class StarKoromaruWalkSocialLinkLevels extends KoromaruWalkSocialLinkLevels {
  dates = [
    new Date(2009, 9, 25).getTime(),
    new Date(2009, 10, 7).getTime(),
    new Date(2010, 0, 10).getTime(),
  ];

  isAvailable(props: EventAvailableProps): boolean {
    if (props.previousDay === undefined) return false;

    const linkName = props.socialLink.linkName;
    const thisLink = props.previousDay.links[linkName];

    return (
      this.dates.includes(props.currentDay.date.getTime()) &&
      props.previousDay!.links[linkName].romance === props.route &&
      props.time === Times.Evening &&
      thisLink.level < 10
    );
  }
}

export const Star = new SocialLink(
  { name: "Mamoru Hayase", place: "Iwatodai Station Strip Mall 1F" },
  SocialLinkNames.Star,
  [new StarKoromaruWalkSocialLinkLevels(), new StarMainLevels()]
);
