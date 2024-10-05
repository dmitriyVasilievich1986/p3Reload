import { QuestionsWrapper, EventCard, Question, Answer } from "@/components";
import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
import { DaysNames } from "@/constants/monthsNames";
import { SocialLink } from "./classes/SocialLink";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";

import {
  KoromaruWalkLevels,
  DormHangoutLevels,
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

class AeonGardenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.GardenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 7, 9).getTime(),
    new Date(2009, 7, 23).getTime(),
    new Date(2009, 7, 30).getTime(),
    new Date(2009, 9, 20).getTime(),
    new Date(2009, 9, 25).getTime(),
    new Date(2009, 10, 1).getTime(),
    new Date(2009, 10, 15).getTime(),
    new Date(2009, 10, 22).getTime(),
    new Date(2009, 10, 29).getTime(),
    new Date(2010, 0, 9).getTime(),
    new Date(2010, 0, 10).getTime(),
    new Date(2010, 0, 17).getTime(),
    new Date(2010, 0, 24).getTime(),
  ];
}

class AeonBookActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.BookActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 8, 2).getTime(),
    new Date(2009, 8, 7).getTime(),
    new Date(2009, 8, 9).getTime(),
    new Date(2009, 8, 16).getTime(),
    new Date(2009, 8, 25).getTime(),
    new Date(2009, 8, 30).getTime(),
    new Date(2009, 9, 2).getTime(),
    new Date(2009, 9, 21).getTime(),
    new Date(2009, 9, 24).getTime(),
    new Date(2009, 9, 28).getTime(),
    new Date(2009, 10, 11).getTime(),
    new Date(2010, 0, 6).getTime(),
    new Date(2010, 0, 13).getTime(),
    new Date(2010, 0, 20).getTime(),
    new Date(2010, 0, 27).getTime(),
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

class AeonMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const isRomance =
      previousLink.level === 7 || previousLink.romance === route;
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.saturday,
    ];
    const excluded_days = [new Date(2010, 0, 25).getTime()];

    return (
      props.currentDay.date.getTime() >= new Date(2010, 0, 8).getTime() &&
      !excluded_days.includes(props.currentDay.date.getTime()) &&
      days.includes(props.currentDay.date.getDay()) &&
      props.time === Times.Day &&
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
          <Question label="What about you, ${mainCharName}-san? Do you... like it here?">
            <Answer label="I like it here." points={15} />
            <Answer label="Not really." />
            <Answer label="I don't care." />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="How can we make them understand?">
            <Answer label="Just try explaining." />
            <Answer label="I don't think we can." />
          </Question>,
          <Question label="......">
            <Answer label="Maybe so." />
            <Answer label="That's not true." points={5} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="A white, spotted cat... Did you see one, ${mainCharName}-san?">
            <Answer label="I might have..." />
            <Answer label="No, I haven't." />
          </Question>,
          <Question label="Goodness, really!? Where might this have been?">
            <Answer label="Near the station" />
            <Answer label="Near the strip mall." />
            <Answer label="I don't remember." />
          </Question>,
          <Question label="Being separated from a loved one can be very distressing after all...">
            <Answer label="All right." points={15} />
            <Answer label="What a pain..." />
          </Question>,
          <Question label="And I was the one who insisted we search... I'm sorry.">
            <Answer label="Don't let it get to you." />
            <Answer label="We should head back for today." />
            <Answer label="Let's keep looking." />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="It seems that living is something that can't be done alone.">
            <Answer label="You might be right." points={15} />
            <Answer label="That's not true." />
            <Answer label="I don't know." />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Did I do something wrong?">
            <Answer label="You didn't call him Joe." points={5} />
            <Answer label="No, you didn't" points={15} />
            <Answer label="He thought I was your boyfriend." points={15} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Was Mii-chan-san happy?">
            <Answer label="I think she was happy." />
            <Answer label="Who knows?" />
          </Question>,
          <Question label="Was Mii-chan-san... grateful to have been born...?">
            <Answer label="I'm sure she was." />
            <Answer label="I'm not sure." />
          </Question>,
          <Question label="For what purpose... was Mii-chan-san born...?">
            <Answer label="No one can say." />
            <Answer label="I don't know." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Was Mii-chan-san happy?">
            <Answer label="I think she was happy." />
            <Answer label="Who knows?" />
          </Question>,
          <Question label="Was Mii-chan-san... grateful to have been born...?">
            <Answer label="I'm sure she was happy." />
            <Answer label="I'm not sure." />
          </Question>,
          <Question label="For what purpose... was Mii-chan-san born...?">
            <Answer label="No one can say." />
            <Answer label="I don't know." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I was just curious.">
            <Answer label="Sometimes." points={5} />
            <Answer label="I'm doing it now." points={15} />
            <Answer label="No." />
          </Question>,
          <Question label="......">
            <Answer label="I don't mind you being here." />
            <Answer label="What brought this on?" />
          </Question>,
          <Question label="Why are you so important to me, ${mainCharName}-san?">
            <Answer label="It's love." />
            <Answer label="Because we're friends" fork />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I was just curious.">
            <Answer label="Sometimes." points={5} />
            <Answer label="I'm doing it now." points={15} />
            <Answer label="No." />
          </Question>,
          <Question label="......">
            <Answer label="I don't mind you being here." />
            <Answer label="What brought this on?" />
          </Question>,
          <Question label="Why are you so important to me, ${mainCharName}-san?">
            <Answer label="It's love." fork />
            <Answer label="Because we're friends" />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="January 31st...">
            <Answer label="You're right." points={15} />
            <Answer label="I hadn't noticed..." />
          </Question>,
          <Question label="But, even so... my wish is to be your closest friend.">
            <Answer label="You're already my best friend." />
            <Answer label="That's a beautiful wish." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="January 31st...">
            <Answer label="You're right." points={15} />
            <Answer label="I hadn't noticed..." />
          </Question>,
          <Question label="I love you so much... that I feel like I'm going to break down somehow...">
            <Answer label="I love you, too." fork={true} />
            <Answer label="Sorry, but I can't..." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="Ch-Cheese...!">
            <Answer label="Cheese." />
            <Answer label="......" />
          </Question>,
          <Question label="Do you like taking photos, ${mainCharName}-san?">
            <Answer label="Yeah, it's fun." />
            <Answer label="Actually, I don't." />
          </Question>,
          <Question label="There is one thing only a machine with a human heart can do... That only I can do.">
            <Answer label="What's that?" />
            <Answer label="I don't understand." />
          </Question>,
          <Question label="Hehe. So, what were you and Aigis up to?">
            <Answer label="Taking a picture." />
            <Answer label="Just chatting." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="There's something only I can say, because I am unable to die.">
            <Answer label="What is it?" />
            <Answer label="I don't really get it." />
          </Question>,
          <Question label="Aigis is gazing at me intently...">
            <Answer label="Nod silently" />
            <Answer label="Gently hold her hand" />
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

class AeonKoromaruWalkLevels extends KoromaruWalkLevels {
  dates = [
    new Date(2009, 7, 15).getTime(),
    new Date(2009, 9, 5).getTime(),
    new Date(2010, 0, 7).getTime(),
  ];
}

export const Aeon = new SocialLink(
  SocialLinkNames.Aeon,
  { name: "Aigis", place: "Classroom 2F" },
  {
    dormHangout1: new AeonGardenActivityLevels(),
    koromaruWalks: new AeonKoromaruWalkLevels(),
    dormHangout2: new AeonBookActivityLevels(),
    mainLevels: new AeonMainLevels(),
  }
);
