import { QuestionsWrapper, EventCard, Question, Answer } from "@/components";
import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
import { mainCharName } from "./classes/mainCharName";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { SocialLink } from "./classes/SocialLink";
import { Times } from "@/constants/events/types";

import {
  KoromaruWalkLevels,
  DormHangoutLevels,
  InvitationLevels,
  LinkMainLevels,
} from "./classes/LinkLevels";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  LabelHeadPrefixes,
  SocialLinkLevel,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

class LoversKitchenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.KitchenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 7, 7).getTime(),
    new Date(2009, 7, 21).getTime(),
    new Date(2009, 8, 11).getTime(),
    new Date(2009, 8, 25).getTime(),
    new Date(2009, 9, 2).getTime(),
    new Date(2009, 9, 23).getTime(),
    new Date(2009, 9, 30).getTime(),
    new Date(2009, 10, 13).getTime(),
  ];
}

class LoversDVDActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.DVDActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 7, 4).getTime(),
    new Date(2009, 7, 19).getTime(),
    new Date(2009, 7, 25).getTime(),
    new Date(2009, 8, 8).getTime(),
    new Date(2009, 8, 15).getTime(),
    new Date(2009, 9, 20).getTime(),
    new Date(2009, 9, 27).getTime(),
    new Date(2009, 10, 10).getTime(),
  ];

  calculate(socialLink: SocialLinkType, props: SocialLinkAvailableProps) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];

    return {
      links: {
        ...props.currentDay.links,
        [linkName]: {
          ...previousLink,
          [this.dormName]: previousLink[this.dormName] + 1,
        },
      },
      stats: {
        ...props.currentDay.stats,
        [StatsNames.Charm]: props.currentDay.stats[StatsNames.Charm] + 2,
      },
    };
  }

  element(socialLink: SocialLinkType, props: SocialLinkElementProps) {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const level = this.levels[previousLink[this.dormName]][
      previousLink.romance
    ] as SocialLinkLevel;

    return (
      <div>
        <EventCard
          head={`${socialLink.linkName}${this.headPostfix}`}
          stats={`${StatsNames.Charm} +2`}
          name={socialLink.linkDetails.name}
          place="Dorm"
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

class LoversMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const isRomance =
      previousLink.level === 6 || previousLink.romance === route;
    const days = [
      DaysNames.monday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.saturday,
    ];

    return (
      props.currentDay.date.getTime() >= new Date(2009, 6, 25).getTime() &&
      props.previousDay!.stats[StatsNames.Charm] >= charmLevel &&
      days.includes(props.currentDay.date.getDay()) &&
      !props.currentDay.isDayOff &&
      props.time === Times.Day &&
      !props.currentDay.exams &&
      isNewLevel &&
      isRomance
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
          <Question label="I think I'll go with the gerberas. What color do you think should I get?">
            <Answer label="Cute pink." points={15} />
            <Answer label="Pure white." />
            <Answer label="Bright red." />
            <Answer label="What's a gerbera?" />
          </Question>,
          <Question label="Oh wait, you've never seen my room, have you? Well then, why am I even asking you?">
            <Answer label="That's mean." points={5} />
            <Answer label="Invite me over, then." />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I guess my own mom's no different.">
            <Answer label="What makes you say that?" />
            <Answer label="......" />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Sorry.">
            <Answer label="Who was that?" />
            <Answer label="What was that about?" />
            <Answer label="Are you okay?" points={15} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="What should I do?">
            <Answer label="Look around" />
            <Answer label="Wait here" />
          </Question>,
          <Question label="Did something happen...?">
            <Answer label="Go look for her" />
            <Answer label="Wait a bit longer" />
          </Question>,
          <Question label="......">
            <Answer label="I'll take you on." />
            <Answer label="Her friend." />
            <Answer label="Just a passerby." />
          </Question>,
          <Question label="Huh? Who the hell are you?">
            <Answer label="Her boyfriend." fork={true} />
            <Answer label="Her friend." />
            <Answer label="Just a passerby." />
          </Question>,
          <Question label="I didn't need your help!">
            <Answer label="I'm sorry." points={15} />
            <Answer label="It's okay to rely on others." />
            <Answer label="You're a girl, so..." />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Thanks for your help back then. I really appreciate it.">
            <Answer label="You're quite welcome." points={5} />
            <Answer label="Anytime." points={15} />
            <Answer label="Thank you, too." />
          </Question>,
          <Question
            label={`Wouldn't that be annoying, ${mainCharName}-kun? Y'know, if people assumed we were dating...`}
          >
            <Answer label="I wouldn't mind." points={5} />
            <Answer label="Yeah..." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Thanks for your help back then. I really appreciate it.">
            <Answer label="You're quite welcome." points={5} />
            <Answer label="Anytime." points={15} />
            <Answer label="Thank you, too." />
          </Question>,
          <Question
            label={`Wouldn't that be annoying, ${mainCharName}-kun? Y'know, if people assumed we were dating...`}
          >
            <Answer label="I wouldn't mind." points={5} />
            <Answer label="Yeah..." />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question label="We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?">
            <Answer label="Sounds good." points={15} />
            <Answer label="Let's go with everyone." />
            <Answer label="Let's go just the two of us." points={15} />
            <Answer label="No thanks." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question label="We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?">
            <Answer label="Sounds good." points={15} />
            <Answer label="Let's go with everyone." />
            <Answer label="Let's go just the two of us." points={15} />
            <Answer label="No thanks." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question
            label={`I know! Why don't you come help me pick something out, ${mainCharName}-kun?`}
          >
            <Answer label="Alright." points={15} />
            <Answer label="Im too lazy." />
          </Question>,
          <Question label="I told her we could meet up and talk about her remarriage. I'm nervous just thinking about it...">
            <Answer label="Will you let her do it?" />
            <Answer label="Do you want to see her?" />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question
            label={`I know! Why don't you come help me pick something out, ${mainCharName}-kun?`}
          >
            <Answer label="Alright." points={15} />
            <Answer label="Im too lazy." />
          </Question>,
          <Question label="I told her we could meet up and talk about her remarriage. I'm nervous just thinking about it...">
            <Answer label="Will you let her do it?" />
            <Answer label="Do you want to see her?" />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="......">
            <Answer label="Hello?" />
            <Answer label="...." points={15} />
            <Answer label="If it's nothing, I'm leaving." />
          </Question>,
          <Question label="What do you really think of me?">
            <Answer label="I love you." fork={true} />
            <Answer label="You're a precious friend." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="......">
            <Answer label="Hello?" />
            <Answer label="...." points={15} />
            <Answer label="If it's nothing, I'm leaving." />
          </Question>,
          <Question label="What do you really think of me?">
            <Answer label="I love you." fork={true} />
            <Answer label="You're a precious friend." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 55,
        element: [
          <Question label="He was with his mother today, huh...">
            <Answer label="That's a relief." points={5} />
            <Answer label="What's wrong?" />
          </Question>,
          <Question label="Gee, what should I do? If only someone would come with me...">
            <Answer label="I'll go." points={10} />
            <Answer label="Good luck." />
            <Answer label="What's the magic word?" />
          </Question>,
          <Question label="So I was just thinking, maybe it could help you in some way too.">
            <Answer label="Can I really have this?" />
            <Answer label="That's intense." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 55,
        element: [
          <Question label="Wait, I didn't mean it like that! Don't get the wrong idea, okay!?">
            <Answer label="Too late." points={15} />
            <Answer label="I didn't hear anything." points={15} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
      [Routes.Romantic]: LinkMaxedObject,
    },
  };
}

class LevelsInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2009, 8, 13).getTime(),
    new Date(2009, 8, 23).getTime(),
    new Date(2009, 9, 25).getTime(),
    new Date(2009, 10, 15).getTime(),
    new Date(2010, 0, 7).getTime(),
    new Date(2010, 0, 10).getTime(),
    new Date(2010, 0, 17).getTime(),
    new Date(2010, 0, 24).getTime(),
  ];

  levels: LevelsType = {
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Oh, speaking of music, what do you usually listen to?">
            <Answer label="J-pop." points={30} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Do YOU like azuki strawberry daifuku?">
            <Answer label="Not really." />
            <Answer label="I love it." points={30} />
            <Answer label="Never tried it." />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Is it weird for me to be so hung up about my parents so much at my age?">
            <Answer label="Leave the bags to me." points={30} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I-I'm not trying to pry, or anything. I was just curious...">
            <Answer label="Hang out with a friend." points={30} />
            <Answer label="Stay in my room." />
            <Answer label="I never remember." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label={`What's your favorite color, ${mainCharName}-kun?`}>
            <Answer label="Green." points={30} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Yeah, I have a pretty big appetite, huh? Haha...">
            <Answer label="It's a healthy appetite." points={30} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="But, no one knows about us, huh... Just like a manga.">
            <Answer label="You look like a hero." />
            <Answer label="Probably not." />
            <Answer label="Some people do." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="But no one knows about us, huh... Just like a manga.">
            <Answer label="Some people do." points={30} />
          </Question>,
        ],
      }),
    },
  };
}

class LoversKoromaruWalkLevels extends KoromaruWalkLevels {
  dates = [new Date(2009, 10, 1).getTime(), new Date(2009, 11, 23).getTime()];
}

export const Lovers = new SocialLink(
  SocialLinkNames.Lovers,
  { name: "Yukari Takeba", place: "Classroom 2F" },
  {
    dormHangout1: new LoversKitchenActivityLevels(),
    koromaruWalks: new LoversKoromaruWalkLevels(),
    dormHangout2: new LoversDVDActivityLevels(),
    invitations: new LevelsInvitationLevels(),
    mainLevels: new LoversMainLevels(),
  }
);
