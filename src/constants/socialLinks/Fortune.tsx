import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
import { QuestionsWrapper, Question, Answer } from "@/components";
import { DaysNames } from "@/constants/monthsNames";
import { SocialLink } from "./classes/SocialLink";
import { Times } from "@/constants/events/types";

import {
  KoromaruWalkSocialLinkLevels,
  InvitationLevels,
  LinkMainLevels,
} from "./classes/LinkLevels";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

class FortuneMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
    const excluded = [new Date(2009, 8, 8).getTime()];

    return (
      props.currentDay.date.getTime() >= new Date(2009, 5, 17).getTime() &&
      !excluded.includes(props.currentDay.date.getTime()) &&
      days.includes(props.currentDay.date.getDay()) &&
      !props.currentDay.isDayOff &&
      props.time === Times.Day &&
      !props.currentDay.exams &&
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
          <Question label="...!">
            <Answer label="What's wrong?" />
            <Answer label="Do you need some rest?" />
          </Question>,
          <Question label="Yamagishi-san won't be going anywhere for a while.">
            <Answer label='"Strikes again"?' />
            <Answer label="Is that a problem?" />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="It really helped apply the paint to the canvas, so I'm sure that's the only reason the judges even noticed.">
            <Answer label="You've got talent." points={15} />
            <Answer label="You got lucky." />
          </Question>,
          <Question label="I recommend adding more shellfish to your diet, like oyster and abalone. They're packed with iron and easy to cook.">
            <Answer label="Good work, Doc Junior." />
            <Answer label="Will he be okay?" />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Did you... hear everything?">
            <Answer label="You're quitting art club?" points={5} />
            <Answer label="You're pulling out of the contest?" points={5} />
          </Question>,
          <Question label="I have my own dreams too, you know! Ugh, I can't stand it anymore!">
            <Answer label="Complaining to me won't help you." points={15} />
            <Answer label="So you're just gonna take it?" points={5} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Wait. Then... that means...">
            <Answer label="You should tell your dad!" points={15} />
            <Answer label="Now you don't have to quit." points={15} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Everyone's working so hard...">
            <Answer label="So are you." />
            <Answer label="What's the matter?" />
          </Question>,
          <Question label="I just don't know what to think.">
            <Answer label="Will you study abroad?" points={5} />
            <Answer label="It's your choice now." points={15} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="It's like he's suddenly trying to be more understanding. It's weird.">
            <Answer label="Do you want to be a doctor?" points={15} />
            <Answer label="Don't you like art club?" />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Can you remember your name?">
            <Answer label="It's okay, I'm fine." points={15} />
            <Answer label="Of course. It's Keisuke." />
            <Answer label="......" />
          </Question>,
          <Question label="A-Anyway, do you remember what happened?">
            <Answer label="I do." />
            <Answer label="I don't." />
          </Question>,
          <Question label="I'm not a doctor...">
            <Answer label="Do you think you want to be one?" />
            <Answer label="Don't beat yourself up about it." />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Tell the others I said goodbye!">
            <Answer label="You can't go!" points={15} />
            <Answer label="Good luck!" />
          </Question>,
          <Question label="Ma'am, are you all right!? That cough...">
            <Answer label="What happened?" />
            <Answer label="...You should just go." />
          </Question>,
          <Question label="My train's about to leave! Wh-What should I do?">
            <Answer label="Leave this to me!" />
            <Answer label="You can't abandon your trip!" />
          </Question>,
          <Question label="How should I help him?">
            <Answer label="Better leave him alone." />
            <Answer label="I should talk to him." />
            <Answer label="I'll try patting his upper back." />
          </Question>,
          <Question label="What should I do next?">
            <Answer label="Better leave him alone." />
            <Answer label="I could rub his back." />
            <Answer label="I'll lay him on his back." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="That's why I want you to have it.">
            <Answer label="I understand." points={15} />
            <Answer label="But why?" points={5} />
            <Answer label="Stop relying on others." points={5} />
          </Question>,
          <Question label="I-I'm not coming off as arrogant, am I?">
            <Answer label="Not at all." points={15} />
            <Answer label="You kinda are." points={5} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  };
}

class FortuneInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2009, 7, 4).getTime(),
    new Date(2009, 7, 7).getTime(),
    new Date(2009, 8, 23).getTime(),
    new Date(2009, 9, 18).getTime(),
    new Date(2010, 0, 4).getTime(),
    new Date(2010, 0, 10).getTime(),
    new Date(2010, 0, 11).getTime(),
  ];

  levels: LevelsType = {
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I doubt I'd ever see something like a beef bowl on the dinner table at home...">
            <Answer label="Let's eat here again, then." points={30} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="D-Do you think it's okay for me to be in the finals?">
            <Answer label="Yeah, you just did your best." points={30} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Hey, we should organize an outdoor sketching session one of these days.">
            <Answer label="Sounds like a hassle." />
            <Answer label="That would be cool." points={30} />
            <Answer label="Think we can do it?" />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What would I list as my occupation on a survey...?">
            <Answer label="Artist." />
            <Answer label="Entertainment industry." points={30} />
            <Answer label="Unemployed." />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="This is all his fault! Why does he keep changing his mind!?">
            <Answer label="You're right." />
            <Answer label="You shouldn't blame others." points={30} />
            <Answer label="I don't really care." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I mean, I won't just be visiting; I'll be living there...">
            <Answer label="Think of the new inspirations." points={30} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="So... I was wondering... what it'd be like if you called me something in that vein...">
            <Answer label='Hou about "Kid Brother"?' />
            <Answer label='What about "Senpai"?' />
            <Answer label="Okay, Brother." points={30} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Even if your life is predestined, I think you should give it your all while on that path.">
            <Answer label="You have a point." points={30} />
          </Question>,
        ],
      }),
    },
  };
}

class FortuneKoromaruWalkSocialLinkLevels extends KoromaruWalkSocialLinkLevels {
  dates = [new Date(2009, 9, 24).getTime()];

  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    if (props.previousDay === undefined) return false;

    const linkName = socialLink.linkName;
    const star = props.previousDay.links[SocialLinkNames.Star];
    const insteadStar =
      star.level >= 10 &&
      props.currentDay.date.getTime() === new Date(2010, 0, 10).getTime();
    const isDay =
      this.dates.includes(props.currentDay.date.getTime()) || insteadStar;

    return (
      props.previousDay!.links[linkName].romance === route &&
      props.time === Times.Evening &&
      isDay
    );
  }
}

export const Fortune = new SocialLink(
  SocialLinkNames.Fortune,
  { name: "Keisuke Hiraga", place: "Art Club Room" },

  {
    koromaruWalks: new FortuneKoromaruWalkSocialLinkLevels(),
    invitations: new FortuneInvitationLevels(),
    mainLevels: new FortuneMainLevels(),
  }
);
