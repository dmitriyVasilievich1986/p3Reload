import { QuestionsWrapper, EventCard, Question, Answer } from "@/components";

import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";

import { SocialLink } from "@/constants/socialLinks/classes/SocialLink";
import {
  createBondObject,
  LinkMaxedObject,
} from "@/constants/socialLinks/classes/GenericCard.tsx";
import {
  KoromaruWalkLevels,
  DormHangoutLevels,
  InvitationLevels,
  LinkMainLevels,
} from "@/constants/socialLinks/classes/LinkLevels";
import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  LabelHeadPrefixes,
  SocialLinkLevel,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "@/constants/socialLinks/types";

class PriestessGardenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.GardenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 5, 16).getTime(),
    new Date(2009, 5, 23).getTime(),
    new Date(2009, 5, 30).getTime(),
    new Date(2009, 7, 27).getTime(),
    new Date(2009, 8, 9).getTime(),
    new Date(2009, 8, 15).getTime(),
    new Date(2009, 8, 29).getTime(),
    new Date(2009, 9, 27).getTime(),
    new Date(2009, 10, 10).getTime(),
    new Date(2009, 10, 21).getTime(),
    new Date(2009, 11, 1).getTime(),
    new Date(2009, 11, 22).getTime(),
    new Date(2009, 11, 29).getTime(),
    new Date(2010, 0, 5).getTime(),
    new Date(2010, 0, 12).getTime(),
    new Date(2010, 0, 22).getTime(),
    new Date(2010, 0, 26).getTime(),
  ];
}

class PriestessBookActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.BookActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 5, 18).getTime(),
    new Date(2009, 5, 25).getTime(),
    new Date(2009, 6, 30).getTime(),
    new Date(2009, 7, 20).getTime(),
    new Date(2009, 7, 25).getTime(),
    new Date(2009, 8, 4).getTime(),
    new Date(2009, 8, 10).getTime(),
    new Date(2009, 8, 17).getTime(),
    new Date(2009, 8, 24).getTime(),
    new Date(2009, 9, 1).getTime(),
    new Date(2009, 9, 22).getTime(),
    new Date(2009, 9, 29).getTime(),
    new Date(2009, 10, 12).getTime(),
    new Date(2010, 0, 7).getTime(),
    new Date(2010, 0, 14).getTime(),
    new Date(2010, 0, 28).getTime(),
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

class PriestessMainLevels extends LinkMainLevels {
  isAvailable = new availables.And_([
    new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
    new availables.AvailableDateGreater({ date: new Date(2009, 5, 19) }),
    new availables.AvailableTimesIsIn({ times: [Times.Day] }),
    new availables.AvailableLinkRoute({ forkLevel: 6 }),
    new availables.AvailableLinkIsNewLevel(),
    new availables.AvailableDateIsIn({
      date: [new Date(2009, 10, 6)],
      reverse: true,
    }),
    new availables.AvailableLinkLevelGreater({
      name: SocialLinkNames.Fortune,
      level: 1,
    }),
    new availables.AvailableStatGreater({
      name: StatsNames.Courage,
      level: 5,
    }),
    new availables.AvailableDaysNamesIsIn({
      days: [DaysNames.monday, DaysNames.friday, DaysNames.saturday],
    }),
  ]).available;

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Maybe I should give him some food. What do you think, ${mainCharName}-kun?">
            <Answer label="Sure." points={15} />
            <Answer label="Don't do it." />
          </Question>,
          <Question label="I don't want to put you in the hospital...">
            <Answer label="I can handle a bit." />
            <Answer label="Maybe we can use it in battle." />
          </Question>,
          <Question label="I don't think I can do this alone. Can I... count on you to help?">
            <Answer label="Sure thing." points={15} />
            <Answer label="Will it be good next time?" />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I still don't have a feel for how much salt to add. How do you do it, ${mainCharName}-kun?">
            <Answer label="Just a dash or two." points={15} />
            <Answer label="I don't add salt." />
            <Answer label="Just dump it a ton." points={5} />
          </Question>,
          <Question label="O-Oh, sorry. I know you're just trying to help me, and all I'm doing is being negative.">
            <Answer label="Just take it slow." points={15} />
            <Answer label="Don't get discouraged already." points={5} />
            <Answer label="Practice makes perfect." points={5} />
          </Question>,
          <Question label="Hmm... But in that case, I can't really read while cooking. I wouldn't want to get the pages dirty.">
            <Answer label="Go to the bookstore." />
            <Answer label="I'll help you find something." />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="But I couldn't really decide, and I wasn't sure how to use whatever I'd buy...">
            <Answer label="Do you really need one?" />
            <Answer label="Start with the basics first." />
          </Question>,
          <Question label="And it's not like I have any other redeeming qualities.">
            <Answer label="There's nothing you're good at?" />
            <Answer label="What about your Persona?" />
            <Answer label="You're a hard worker." points={5} />
          </Question>,
          <Question label="Not to mention that I'm kind of embarrassed about it all. I mean, it's not a very feminine hobby.">
            <Answer label="That's not true." points={15} />
            <Answer label="Maybe you're right." />
            <Answer label="Why do you think that?" points={5} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="W-Well... How is it?">
            <Answer label="It's good." points={5} />
            <Answer label="You did a great job." points={15} />
          </Question>,
          <Question label="Because, I don't think I could have made it this far without you.">
            <Answer label="I'm glad I could help." points={5} />
            <Answer label="I didn't do anything." />
          </Question>,
          <Question label="That might be the reason why I made such good rice balls. Because I was thinking about who was going to eat them.">
            <Answer label="Thank you." points={5} />
            <Answer label="I think I get it." />
            <Answer label="Can you make more sometime?" points={15} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="I promise I'm going to do the best I can. So can I count on you?">
            <Answer label="Of course." points={15} />
            <Answer label="You sure you're not overdoing it?" />
          </Question>,
          <Question label="I know I don't seem very reliable, but I want to make myself a useful member of the team.">
            <Answer label="That's the spirit." points={15} />
            <Answer label="Don't get too carried away." />
            <Answer label="You're already plenty useful." points={5} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="......">
            <Answer label="What is it?" />
            <Answer label="Something wrong with that?" />
          </Question>,
          <Question label="I mentioned that I don't really like going to bookstores">
            <Answer label="Yeah, I remember." />
            <Answer label="But we were just in one..." />
          </Question>,
          <Question label="She even threatened to show my parents...">
            <Answer label="You did nothing wrong." />
            <Answer label="......" />
            <Answer label="That's messed up." points={5} />
          </Question>,
          <Question label="I'm sure it's because you're our leader. That's why I depend on you so much.">
            <Answer label="Is that the only reason?" />
            <Answer label="That's probably it." fork={true} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="......">
            <Answer label="What is it?" />
            <Answer label="Something wrong with that?" />
          </Question>,
          <Question label="I mentioned that I don't really like going to bookstores">
            <Answer label="Yeah, I remember." />
            <Answer label="But we were just in one..." />
          </Question>,
          <Question label="She even threatened to show my parents...">
            <Answer label="You did nothing wrong." />
            <Answer label="......" />
            <Answer label="That's messed up." points={5} />
          </Question>,
          <Question label="I'm sure it's because you're our leader. That's why I depend on you so much.">
            <Answer label="Is that the only reason?" fork={true} />
            <Answer label="That's probably it." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question label="I am curious about that one, but it sounds like a lot of food.">
            <Answer label="Probably." />
            <Answer label="You'd better not order that." />
            <Answer label="I'll eat your ramen for you." points={5} />
          </Question>,
          <Question label="And whenever we ate, that's all we'd talk about. My upcoming tests, my post-graduation plans...">
            <Answer label="Sounds suffocating." />
            <Answer label="They're big on education, huh?" />
          </Question>,
          <Question label="Oh, but I'm not quite ready for that yet. I'd probably make so many mistakes.">
            <Answer label="I think it'd be fine." points={5} />
            <Answer label="You're worrying too much." points={5} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question label="How are you able to tell yourself that things will work out in the end?">
            <Answer label="I believe in myself." points={5} />
            <Answer label="It's just my personality." points={5} />
            <Answer label="I've never thought about it." points={5} />
          </Question>,
          <Question label="Will that be the end of us spending time together like this?">
            <Answer label="Not at all." points={5} />
            <Answer label="We'll see each other in the dorm." points={5} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question
            label={`She said, "When you're friends, you don't keep score."`}
          >
            <Answer label="She's right." />
            <Answer label="Ahaha! That's funny." />
          </Question>,
          <Question label="I hope you and I can continue to be friends.">
            <Answer label="Of course." points={5} />
            <Answer label="Here's to us." />
          </Question>,
          <Question label="I've never asked because I assumed I'd be wasting your time, but I've always wanted to try cooking with a friend.">
            <Answer label="Sure thing." points={10} />
            <Answer label="I'm not very good at it." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question
            label={`She said, "When you're friends, you don't keep score."`}
          >
            <Answer label="She's right." />
            <Answer label="Ahaha! That's funny." />
          </Question>,
          <Question label="I want to be together with you, forever.">
            <Answer label="I feel the same way." />
            <Answer label="Me too." />
          </Question>,
          <Question label="......">
            <Answer label="I love you, Fuuka." points={15} fork={true} />
            <Answer label="We'll always be friends." />
          </Question>,
          <Question label="...!?">
            <Answer label="We'll be together forever." />
            <Answer label="I'll treat you right." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 55,
        element: [
          <Question label="I thought it might be nice to add some texture, so I made sure there's plenty of vegetables mixed in.">
            <Answer label="How bold." />
            <Answer label="Is that safe?" />
            <Answer label="But I like meat..." />
          </Question>,
          <Question label="You just seem more at ease now. Or maybe it's more confidence? Don't you think so, ${mainCharName}-kun?">
            <Answer label="I agree." />
            <Answer label="You haven't seen anything just yet." />
          </Question>,
          <Question label="Remeber how I told you I was pretty good with machines? Well, how are they?">
            <Answer label="I love them!" points={15} />
            <Answer label="My mind is blown." points={5} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 55,
        element: [
          <Question label="Sorry, I don't know what I'm talking about...">
            <Answer label="Are you nervous?" />
            <Answer label="You seem like your usual self." />
          </Question>,
          <Question label="As long as I have you... I don't think I'll lose my way.">
            <Answer label="Glad to hear it." points={5} />
            <Answer label="I'm always here for you." points={15} />
          </Question>,
          <Question label="So... what do you think?">
            <Answer label="I love them!" points={15} />
            <Answer label="Your skills are impressive." points={5} />
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

class PriestessInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2009, 5, 28).getTime(),
    new Date(2009, 7, 4).getTime(),
    new Date(2009, 8, 13).getTime(),
    new Date(2009, 10, 15).getTime(),
    new Date(2010, 0, 5).getTime(),
    new Date(2010, 0, 17).getTime(),
    new Date(2010, 0, 24).getTime(),
  ];

  levels: LevelsType = {
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Um, ${mainCharName}-kun. Do you like sweets?">
            <Answer label="I do." points={30} />
            <Answer label="Not really." />
            <Answer label="Never thought about it." />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Um, ${mainCharName}-kun. Do you like sweets?">
            <Answer label="I do." points={30} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Which do you like more? Japanese food or western food?">
            <Answer label="Japanese food." points={30} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Do you prefer watching movies at the theater or at home on DVD?">
            <Answer label="At home on DVD." points={30} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What do you usually do on your days off?">
            <Answer label="Spend time with friends." points={30} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Um... If I did make a dish with dried snake meat, would you still eat it, ${mainCharName}-kun?">
            <Answer label="Sure I would." />
            <Answer label="You don't have to." points={30} />
            <Answer label="It's up to you." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Have you ever filleted a fish before?">
            <Answer label="Yeah, I'm not too bad." points={30} />
            <Answer label="I've never tried before." />
            <Answer label="Not interested." />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Do you think it's possible to connect music to cooking in that same vein?">
            <Answer label="Yeah, I think so." points={30} />
            <Answer label="I can't imagine so." />
            <Answer label="Not interested." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Do you think it's possible to connect music to cooking in that same vein?">
            <Answer label="Yeah, I think so." points={30} />
            <Answer label="I can't imagine so." />
            <Answer label="Not interested." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="You've been awfully friendly with different girls lately, haven't you?">
            <Answer label="N-No, I haven't." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="You've been awfully friendly with different girls lately, haven't you?">
            <Answer label="N-No, I haven't." points={30} />
          </Question>,
        ],
      }),
    },
  };
}

class PriestessKoromaruWalkLevels extends KoromaruWalkLevels {
  dates = [new Date(2009, 7, 29).getTime(), new Date(2009, 11, 21).getTime()];
}

export const Priestess = new SocialLink(
  { name: "Fuuka Yamagishi", place: "2nd Floor Hallway" },
  SocialLinkNames.Priestess,
  [
    new PriestessGardenActivityLevels(),
    new PriestessKoromaruWalkLevels(),
    new PriestessBookActivityLevels(),
    new PriestessInvitationLevels(),
    new PriestessMainLevels(),
  ]
);
