import { QuestionsWrapper, EventCard, Question, Answer } from "@/components";
import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
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

class EmpressKitchenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.KitchenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 7, 17).getTime(),
    new Date(2009, 7, 24).getTime(),
    new Date(2009, 7, 31).getTime(),
    new Date(2009, 8, 14).getTime(),
    new Date(2009, 8, 21).getTime(),
    new Date(2009, 8, 28).getTime(),
    new Date(2009, 9, 26).getTime(),
    new Date(2009, 10, 30).getTime(),
    new Date(2009, 11, 28).getTime(),
    new Date(2010, 0, 4).getTime(),
    new Date(2010, 0, 11).getTime(),
    new Date(2010, 0, 18).getTime(),
    new Date(2010, 0, 25).getTime(),
  ];
}
class EmpressBookActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.BookActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 7, 23).getTime(),
    new Date(2009, 7, 29).getTime(),
    new Date(2009, 8, 13).getTime(),
    new Date(2009, 8, 27).getTime(),
    new Date(2009, 9, 19).getTime(),
    new Date(2009, 9, 25).getTime(),
    new Date(2009, 10, 29).getTime(),
    new Date(2009, 11, 21).getTime(),
    new Date(2009, 11, 27).getTime(),
    new Date(2010, 0, 10).getTime(),
    new Date(2010, 0, 24).getTime(),
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
        [StatsNames.Academics]:
          props.currentDay.stats[StatsNames.Academics] + 2,
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
          stats={`${StatsNames.Academics} +2`}
          name={socialLink.linkDetails.name}
          place="Dorm"
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

class EmpressMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    const linkName = socialLink.linkName;
    const academicsLevel = stats[StatsNames.Academics].levels[5].value;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const isRomance =
      previousLink.level === 7 || previousLink.romance === route;
    const days = [
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.saturday,
    ];
    if (props.currentDay.date.getTime() < new Date(2009, 11, 24).getTime()) {
      days.push(DaysNames.monday);
      days.push(DaysNames.friday);
    }

    return (
      props.currentDay.date.getTime() >= new Date(2009, 10, 21).getTime() &&
      props.previousDay!.stats[StatsNames.Academics] >= academicsLevel &&
      days.includes(props.currentDay.date.getDay()) &&
      !props.currentDay.isDayOff &&
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
          <Question label="It's smaller than I expected.">
            <Answer label="Is this your first time?" points={5} />
            <Answer label="Do you know how to eat it?" points={5} />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Sometimes my own ignorance truly astounds me...">
            <Answer label="Want me to treat you?" />
            <Answer label="Why not give it a try?" points={5} />
          </Question>,
          <Question label="Maybe he's just maturing…">
            <Answer label="Are you sad?" />
            <Answer label="Are you happy?" points={15} />
          </Question>,
          <Question label="It's the most peculiar feeling">
            <Answer label="Maybe you're in love." points={5} />
            <Answer label="Maybe you're anxious." points={5} />
            <Answer label="It must be sadness." />
          </Question>,
          <Question label="Sorry to subject you to my thoughtless rambling. Just forget I said anything.">
            <Answer label="I'm rooting for you." />
            <Answer label="I heard nothing." points={5} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="In just a short while, we'll be looking back on these days with nostalgia.">
            <Answer label="What's next for you?" />
            <Answer label="Did something happen?" points={5} />
          </Question>,
          <Question label="What does marriage mean to you?">
            <Answer label="It's all for love" points={15} />
            <Answer label="It's a social agreement." />
            <Answer label="It's about compromise." />
          </Question>,
          <Question label="Am I... wrong about this?">
            <Answer label="Do you have a boyfriend?" />
            <Answer label="That's a tough one." />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="It seems a lot of thought goes into the design and construction of a movie theather.">
            <Answer label="...Said the rich girl." />
            <Answer label="Glad you enjoyed it." points={15} />
          </Question>,
          <Question label="She's likely more suited to riding a motorcycle than I am, as well.">
            <Answer label="A motorcycle?" points={15} />
            <Answer label="You're not suited?" />
          </Question>,
          <Question label="I don't regret it. Even now, I spend my time tuning it whenever I can.">
            <Answer label="What a high-class biker." />
            <Answer label="Let's go for a ride." points={15} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="......">
            <Answer label="Looking for something specific?" points={5} />
            <Answer label="Need some help?" points={5} />
            <Answer label="Borrowing a book?" />
          </Question>,
          <Question label="...Even if I have to make sacrifices to do it.">
            <Answer label="Did something happen?" />
            <Answer label="That doesn't sound good." />
          </Question>,
          <Question label="This is the best solution for everyone involved...">
            <Answer label="Is it really?" />
            <Answer label="I didn't know..." points={5} />
          </Question>,
          <Question label="So... I won't run from my fate.">
            <Answer label="Are you sure about this?" points={5} />
            <Answer label="That's admirable." />
            <Answer label="I'll do something about it." points={15} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Or... is that too selfish a request?">
            <Answer label="I don't mind at all." points={15} />
            <Answer label="Is that all you need?" />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Or, is that too selfish a request?">
            <Answer label="I don't mind at all." points={15} />
            <Answer label="Is that all you need?" />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Somewhere far away, where no one knows who you are?">
            <Answer label="Yes." />
            <Answer label="No." />
          </Question>,
          <Question label="Talking to you has become something of an outlet for me. Heh, I'm sure you're sick of it by now.">
            <Answer label="Vent all you want." points={5} />
            <Answer label="This isn't like you." points={5} />
          </Question>,
          <Question label="Ah... Keep in mind, this is a what-if scenario.">
            <Answer label="That's up to you." />
            <Answer label="It's not meant to be." fork={true} />
          </Question>,
          <Question label="How dare you say that!?">
            <Answer label="Calm down, Mitsuru" />
            <Answer label="Don't insult her father!" points={15} />
          </Question>,
          <Question label="Please excuse me.">
            <Answer label="Don't give in." points={15} />
            <Answer label="You're sure about this?" points={5} />
          </Question>,
          <Question label="But... when he mentioned my father, and you... I couldn't help myself.">
            <Answer label="Don't sweat it." />
            <Answer label="You were awesome." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Somewhere far away, where no one knows who you are?">
            <Answer label="Yes." />
            <Answer label="No." />
          </Question>,
          <Question label="Talking to you has become something of an outlet for me. Heh, I'm sure you're sick of it by now.">
            <Answer label="Vent all you want." points={5} />
            <Answer label="This isn't like you." points={5} />
          </Question>,
          <Question label="Ah... Keep in mind, this is a what-if scenario.">
            <Answer label="That's up to you." />
            <Answer label="It's not meant to be." fork={true} />
          </Question>,
          <Question label="How dare you say that!?">
            <Answer label="Calm down, Mitsuru" />
            <Answer label="Don't insult her father!" points={15} />
          </Question>,
          <Question label="Please excuse me.">
            <Answer label="Don't give in." points={15} />
            <Answer label="You're sure about this?" points={5} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Um... I know what you're thinking.">
            <Answer label="This room is... Wow." />
            <Answer label="No fair." />
          </Question>,
          <Question label="It's been a much-needed reminder that i'm not alone.">
            <Answer label="That's a relief." points={15} />
            <Answer label="Never let go of that." />
            <Answer label="This is your strength." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="I am so sorry about what happened last time.">
            <Answer label="What happened?" />
            <Answer label="Don't worry about it." />
            <Answer label="It made me happy." points={15} />
          </Question>,
          <Question label="I just didn't think I'd end up shouting them in public like that.">
            <Answer label="Talk about bold." />
            <Answer label="Your feelings?" />
          </Question>,
          <Question label="...I feel like I'm going to die of embarassment.">
            <Answer label="I love you too." points={15} />
            <Answer label="I'm sorry but..." />
          </Question>,
          <Question label="I've been thinking about this for a while now, but the way you address me...">
            <Answer label="Mitsuru?" />
            <Answer label="What about it?" />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="The battery and tire pressue look good... And I've already changed the oil, so that's fine.">
            <Answer label="Impressive." points={5} />
            <Answer label="Looks like fun." points={5} />
          </Question>,
          <Question label="When this is all over, let's take this motorcycle and go on a trip somewhere together.">
            <Answer label="Great idea." points={10} />
            <Answer label="If i feel like it." />
            <Answer label="I don't have a license." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="The battery and tire pressue look good... And I've already changed the oil, so that's fine.">
            <Answer label="Impressive." />
            <Answer label="Looks like fun." points={5} />
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

class EmpressInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2010, 1, 4).getTime(),
    new Date(2010, 1, 7).getTime(),
    new Date(2010, 1, 24).getTime(),
  ];

  levels: LevelsType = {
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I didn't see many female customers there... Or was it just my imagination?">
            <Answer label="Does it really matter?" points={30} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="How much does one of those arcade machines with a life-sized motorcycle cost?">
            <Answer label="But you have a real one." points={30} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Should we... head back now?">
            <Answer label="You don't want to?" points={30} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Would you mind telling me who your favorite musical artist is?">
            <Answer label="Why?" points={30} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="It seems I have a tendency to spill all my thoughts when I'm with you. I wonder why.">
            <Answer label="Don't worry about it." points={30} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Since manga aren't that expensive, why don't people just buy them?">
            <Answer label="Lack of storage space." points={30} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Why did they give us this lemon on the side? I don't suppose it's dessert...">
            <Answer label="Squeeze it over your food." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="...interested in anyone?">
            <Answer label="Why do you ask?" points={30} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Once everything is over... where would be a nice place to go?">
            <Answer label="You don't need a destination." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="So, um, ${mainCharName}- Oh no, I mean ${mainCharName}...">
            <Answer label="You usually don't call me that." points={30} />
          </Question>,
        ],
      }),
    },
  };
}

class EmpressKoromaruWalkLevels extends KoromaruWalkLevels {
  dates = [
    new Date(2009, 7, 30).getTime(),
    new Date(2009, 11, 22).getTime(),
    new Date(2010, 0, 16).getTime(),
  ];
}

export const Empress = new SocialLink(
  SocialLinkNames.Empress,
  { name: "Mitsuru Kirijo", place: "Faculty Office Entrance" },

  {
    dormHangout1: new EmpressKitchenActivityLevels(),
    koromaruWalks: new EmpressKoromaruWalkLevels(),
    dormHangout2: new EmpressBookActivityLevels(),
    invitations: new EmpressInvitationLevels(),
    mainLevels: new EmpressMainLevels(),
  }
);
