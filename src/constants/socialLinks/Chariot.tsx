import { QuestionsWrapper, Question, Answer } from "@/components";

import availables from "@/constants/availability/AvailableClass";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import { SocialLink } from "@/constants/socialLinks/classes/SocialLink";
import { Strength } from "@/constants/socialLinks/Strength";
import {
  createBondObject,
  LinkMaxedObject,
} from "@/constants/socialLinks/classes/GenericCard.tsx";
import {
  KoromaruWalkSocialLinkLevels,
  InvitationLevels,
  LinkMainLevels,
  ShrineLevels,
} from "@/constants/socialLinks/classes/LinkLevels";
import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  EventAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "@/constants/socialLinks/types";

class ChariotMainLevels extends LinkMainLevels {
  isAvailable = new availables.And_([
    new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
    new availables.AvailableDateGreater({ date: new Date(2009, 3, 23) }),
    new availables.AvailableTimesIsIn({ times: [Times.Day] }),
    new availables.AvailableLinkIsNewLevel(),
    new availables.AvailableDaysNamesIsIn({
      days: [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.thursday,
        DaysNames.friday,
      ],
    }),
  ]).available;

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    let strengthLevel = props.previousDay!.links[SocialLinkNames.Strength];

    if (socialLink.isNewLevel(previousLink) && previousLink.level === 1) {
      strengthLevel = {
        ...props.currentDay.links[SocialLinkNames.Strength],
        points: 0,
        level: 1,
      };
    }
    const payload = super.calculate(socialLink, props, route);

    return {
      links: {
        ...payload.links,
        [SocialLinkNames.Strength]: strengthLevel,
      },
    };
  }

  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps,
    route: Routes
  ): React.ReactNode {
    if (!props.previousDay) return null;

    const linkName = socialLink.linkName;
    const currentLink = props.currentDay!.links[linkName];

    return (
      <div>
        {super.element(socialLink, props, route)}
        {props.fullCard &&
          currentLink.level === 2 &&
          Strength.element.bind(Strength)(props, Routes.Platonic)}
      </div>
    );
  }

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked!
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
        // checked!
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
        // checked!
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
        // checked!
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
        // checked!
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
        // checked!
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
        // checked!
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
        // checked!
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
        // checked!
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
  };
}

class ChariotInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2009, 4, 4).getTime(),
    new Date(2009, 4, 24).getTime(),
    new Date(2009, 5, 7).getTime(),
    new Date(2009, 5, 14).getTime(),
    new Date(2009, 7, 5).getTime(),
    new Date(2009, 8, 27).getTime(),
    new Date(2009, 9, 18).getTime(),
    new Date(2009, 10, 8).getTime(),
    new Date(2010, 0, 6).getTime(),
    new Date(2010, 0, 10).getTime(),
  ];

  levels: LevelsType = {
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="That way, I'm ready to go 24/7, y'know? That's real dedication, man.">
            <Answer label="Impressive." points={30} />
            <Answer label="I don't really care." />
            <Answer label="You need to chill." />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I'm trying to cut down on carbs.">
            <Answer label="Are you on a diet?" points={30} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="The more I want to win, I can just feel myself tense up...">
            <Answer label="Winning isn't everything." points={30} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Anyway... Sorry about all of that.">
            <Answer label="You'd be in trouble." />
            <Answer label="I was worried about you." />
            <Answer label="Gotta pick your battles." points={30} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Any ideas?">
            <Answer label="Running shoes?" />
            <Answer label="A video game." points={30} />
            <Answer label="Clothes." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="You know, that Apathy Syndrome thing.">
            <Answer label="I doubt it." />
            <Answer label="That's worrying." points={30} />
            <Answer label="Hang in there." />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Man, why do I even bother anymore? What's the point of going through all this pain just to win...?">
            <Answer label="That's just who you are." points={30} />
            <Answer label="For your nephew." />
            <Answer label="Figure it out yourself." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="With everything that's happening to me right now... do you really think I can still win the regionals next year?">
            <Answer label="It's all mentall strength." />
            <Answer label="It's all up to you." />
            <Answer label="Sounds impossible." points={30} />
          </Question>,
        ],
      }),
    },
  };
}

class ChariotKoromaruWalkSocialLinkLevels extends KoromaruWalkSocialLinkLevels {
  dates = [new Date(2009, 9, 25).getTime(), new Date(2009, 10, 7).getTime()];

  isAvailable(props: EventAvailableProps): boolean {
    if (props.previousDay === undefined) return false;

    const linkName = props.socialLink.linkName;
    const star = props.previousDay.links[SocialLinkNames.Star];
    const insteadStar =
      star.level >= 10 && this.dates.includes(props.currentDay.date.getTime());

    return (
      props.previousDay!.links[linkName].romance === props.route &&
      props.time === Times.Evening &&
      insteadStar
    );
  }
}

export const Chariot = new SocialLink(
  { name: "Kazushi Miyamoto", place: "Classroom 2F" },
  SocialLinkNames.Chariot,
  [
    new ChariotKoromaruWalkSocialLinkLevels(),
    new ChariotInvitationLevels(),
    new ChariotMainLevels(),
    new ShrineLevels(),
  ]
);
