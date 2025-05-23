import { QuestionsWrapper, Question, Answer } from "@/components";

import { PrerequisitsEventsNames, Times } from "@/constants/events/types";
import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";

import { SocialLink } from "@/constants/socialLinks/classes/SocialLink";
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
  SocialLinkNames,
  LevelsType,
  Routes,
} from "@/constants/socialLinks/types";

class JusticeMainLevels extends LinkMainLevels {
  isAvailable = new availables.And_([
    new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
    new availables.AvailableTimesIsIn({ times: [Times.Day] }),
    new availables.AvailableLinkRoute({ forkLevel: 4 }),
    new availables.AvailableLinkIsNewLevel(),
    new availables.AvailableSingleTimeEventsIsIn({
      name: PrerequisitsEventsNames.JusticePrerequisit3,
    }),
    new availables.AvailableDaysNamesIsIn({
      days: [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday],
    }),
    new availables.AvailableDateIsIn({
      date: [
        new Date(2009, 10, 7),
        new Date(2009, 10, 10),
        new Date(2009, 10, 12),
      ],
      reverse: true,
    }),
  ]).available;

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 0,
        element: [
          <Question label="Sorry to drag you along while I go shopping...">
            <Answer label="Don't worry about it." points={15} />
            <Answer label="I was bored anyway." />
          </Question>,
          <Question label="...Um, do you read much, ${mainCharName}-san?">
            <Answer label="I read the classics." points={5} />
            <Answer label="I read manga." points={5} />
            <Answer label="I read fashion magazines." />
            <Answer label="I don't read books." />
          </Question>,
          <Question label="Is it boring for you to hang around with, um... someone like me?">
            <Answer label="I'm having fun." points={5} />
            <Answer label="Yeah, it's a drag." />
            <Answer label="I'm indifferent." />
          </Question>,
          <Question label="But I'm always so scared, that all I can do is nod...">
            <Answer label="Are you only like this with guys?" />
            <Answer label="Why are you so afraid?" />
          </Question>,
          <Question label="So... whenever I see a man now, all I can think of is that face...">
            <Answer label="I shouldn't have asked." />
            <Answer label="I'm sorry." />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 0,
        element: [
          <Question label="...Do they not know where they are!?">
            <Answer label="They have no shame." points={5} />
            <Answer label="They're gonna...kiss?" />
            <Answer label="Where did they go?" />
          </Question>,
          <Question label="We should notify the student council president right away, and discuss this at our next meeting!">
            <Answer label="I agree." points={5} />
            <Answer label="That's kind of extreme..." />
            <Answer label="You don't like kissing?" />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 22,
        element: [
          <Question label="${mainCharName}-san!">
            <Answer label="Get lost." />
            <Answer label="...Hey." />
          </Question>,
          <Question label="Why am I still shaking?">
            <Answer label="Let's hold hands." />
            <Answer label="I'm here for you." points={15} />
            <Answer label="Take a deep breath." />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 22,
        element: [
          <Question label="So, um... there was something I needed to ask you...">
            <Answer label="I'm all ears." points={10} />
            <Answer label="Something on your mind?" />
          </Question>,
          <Question label="Is she in love right now!?">
            <Answer label="Yeah, she's in love." />
            <Answer
              label="You're jumping to conclusions."
              fork={true}
              points={5}
            />
          </Question>,
          <Question label="Sorry for asking you about such a weird topic.">
            <Answer label="Happy to help." points={10} />
            <Answer label="Don't worry about it." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        // checked
        points: 22,
        element: [
          <Question label="So, um... there was something I needed to ask you...">
            <Answer label="I'm all ears." points={10} />
            <Answer label="Something on your mind?" />
          </Question>,
          <Question label="Is she in love right now!?">
            <Answer label="Yeah, she's in love." fork={true} points={15} />
            <Answer label="You're jumping to conclusions." />
          </Question>,
          <Question label="Sorry for asking you about such a weird topic.">
            <Answer label="Happy to help." points={10} />
            <Answer label="Don't worry about it." />
          </Question>,
          <Question label="What should i do...?">
            <Answer label="Hold her hand" points={15} />
            <Answer label="Kiss her" />
            <Answer label="Speak to her softly" />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 22,
        element: [
          <Question label="Wh-What should I do...?">
            <Answer label="Is it good?" points={15} />
            <Answer label="You're not buying it?" />
          </Question>,
          <Question label="That is, until recently...">
            <Answer label="What do you think now?" />
            <Answer label="What do you mean?" points={5} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        // checked
        points: 22,
        element: [
          <Question label="Wh-What should I do...?">
            <Answer label="Is it good?" points={15} />
            <Answer label="You're not buying it?" />
          </Question>,
          <Question label="That is, until recently...">
            <Answer label="What do you think now?" />
            <Answer label="What do you mean?" points={5} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 30,
        element: [
          <Question label="${mainCharName}-san...">
            <Answer label="Try to remember." />
            <Answer label="It's gotta be a misunderstanding." points={5} />
          </Question>,
          <Question label="I-I couldn't stand up to them, but I... I didn't take anything!">
            <Answer label="Don't worry." />
            <Answer label="We have to do something..." points={5} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        // checked
        points: 30,
        element: [
          <Question label="${mainCharName}-san...">
            <Answer label="Try to remember." />
            <Answer label="It's gotta be a misunderstanding." points={5} />
          </Question>,
          <Question label="I-I couldn't stand up to them, but I... I didn't take anything!">
            <Answer label="Don't worry." />
            <Answer label="We have to do something..." points={5} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 30,
        element: [
          <Question label="See, how could it not be her!? And with such an innocent face, too...">
            <Answer label="That's all a misunderstanding." />
            <Answer label="......" />
          </Question>,
          <Question label="I don't really have anyone else I can count on...">
            <Answer label="The rumors will stop soon." />
            <Answer label="I know you're innocent." points={5} />
            <Answer label="Be strong." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        // checked
        points: 30,
        element: [
          <Question label="See, how could it not be her!? And with such an innocent face, too...">
            <Answer label="That's all a misunderstanding." />
            <Answer label="......" />
          </Question>,
          <Question label="I don't really have anyone else I can count on...">
            <Answer label="The rumors will stop soon." />
            <Answer label="I know you're innocent." points={5} />
            <Answer label="Be strong." />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 30,
        element: [
          <Question label="D-Don't tell me she thinks I stole the money too!">
            <Answer label="Don't worry, she'll help us." points={5} />
            <Answer label="Mitsuru's not like that." />
          </Question>,
          <Question label="......">
            <Answer label="Chihiro is innocent." points={5} />
            <Answer label="You need to tell her yourself." points={5} />
          </Question>,
          <Question label="Give me a hand, will you, ${mainCharName}?">
            <Answer label="Why me?" />
            <Answer label="All right." />
          </Question>,
          <Question label="And I stood up to Mr. Takenozuka... An actual adult man!">
            <Answer label="I saw the whole thing." points={5} />
            <Answer label="What're you talking about?" />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        // checked
        points: 30,
        element: [
          <Question label="D-Don't tell me she thinks I stole the money too!">
            <Answer label="Don't worry, she'll help us." points={5} />
            <Answer label="Mitsuru's not like that." />
          </Question>,
          <Question label="......">
            <Answer label="Chihiro is innocent." points={5} />
            <Answer label="You need to tell her yourself." points={5} />
          </Question>,
          <Question label="Give me a hand, will you, ${mainCharName}?">
            <Answer label="Why me?" />
            <Answer label="All right." />
          </Question>,
          <Question label="Ehehehehe!">
            <Answer label="What's gotten into you?" points={5} />
            <Answer label="So you ARE guilty." />
          </Question>,
          <Question label="I love you!">
            <Answer label="I feel the same, Chihiro." fork={true} />
            <Answer label="I like working with you, but..." />
          </Question>,
          <Question label="Huh? What did you say...?">
            <Answer label="I said I feel the same." />
            <Answer label="I love you" />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        // checked
        points: 40,
        element: [
          <Question label="I wonder if this is going to be enough flyers...">
            <Answer label="Looks tough." />
            <Answer label="Where you forced into this?" />
          </Question>,
          <Question label="Oh, but, um... I'd appreciate it if you could still help me every now and then, just like today.">
            <Answer label="You can do it." points={10} />
            <Answer label="I believe in you, Chihiro." points={10} />
          </Question>,
          <Question label="Could I asd that you be the first of those many readers?">
            <Answer label="Thanks." />
            <Answer label="I'll take it" />
          </Question>,
          <Question label="I'll handle the rest by myself.">
            <Answer label="I can tag along." />
            <Answer label="Are you sure?" />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        // checked
        points: 40,
        element: [
          <Question label="Just promise to think of me when you read it…">
            <Answer label="Thank you." points={15} />
            <Answer label="I don't read shoujo manga." />
          </Question>,
          <Question label="I-I don't have to spell it out, do I!?">
            <Answer label="It's getting late..." />
            <Answer label="Lock your doors." />
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

class JusticeInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2009, 4, 31).getTime(),
    new Date(2009, 5, 21).getTime(),
    new Date(2009, 6, 5).getTime(),
    new Date(2009, 6, 26).getTime(),
    new Date(2009, 7, 9).getTime(),
    new Date(2009, 7, 27).getTime(),
    new Date(2009, 8, 27).getTime(),
    new Date(2009, 9, 25).getTime(),
    new Date(2009, 10, 29).getTime(),
    new Date(2010, 0, 5).getTime(),
    new Date(2010, 0, 10).getTime(),
  ];

  levels: LevelsType = {
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label={`I kept thinking, "What if he doesn't show up?"`}>
            <Answer label="Try not to worry so much." points={30} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="There's not much point in meeting up if we're both just going to read on our own, huh...?">
            <Answer label="You're right, it's pointless." />
            <Answer label="I think it's fun, actually." />
            <Answer label="We'll do better next time." points={30} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I-I was afraid that I might see that guy from before who tried to, um...">
            <Answer label="I'd help you again." points={30} />
            <Answer label="It could happen anytime." />
            <Answer label="Don't let it bother you." />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Um... Your coffee is going to get cold.">
            <Answer label="It needs to cool down." />
            <Answer label="Do you want sugar?" points={30} />
            <Answer label="I know." />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I... want to be like that too...">
            <Answer label="It's just fiction, though." />
            <Answer label="You can do it." points={30} />
            <Answer label="It sounds interesting." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="It's sad to think there might be a thief at our school...">
            <Answer label="Don't worry, it wasn't a thief." points={30} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="It's just... ever since that money went missing, I've been feeling anxious whenever I'm alone...">
            <Answer label="So that's why I'm here?" />
            <Answer label="I don't mind." />
            <Answer label="I'm happy to help." points={30} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What about you, ${mainCharName}-san? Are you planning to get a driver's license?">
            <Answer label="I am." points={30} />
            <Answer label="Probably not." />
            <Answer label="It's a secret." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What about you, ${mainCharName}-san? Are you planning to get a driver's license?">
            <Answer label="I am." points={30} />
            <Answer label="Probably not." />
            <Answer label="It's a secret." />
          </Question>,
        ],
      }),
    },
  };
}

class JusticeKoromaruWalkSocialLinkLevels extends KoromaruWalkSocialLinkLevels {
  dates = [
    new Date(2009, 8, 6).getTime(),
    new Date(2009, 10, 14).getTime(),
    new Date(2009, 11, 8).getTime(),
    new Date(2010, 0, 9).getTime(),
    new Date(2010, 0, 23).getTime(),
  ];
}

export const Justice = new SocialLink(
  { name: "Chihiro Fushimi", place: "2nd Floor Hallway" },
  SocialLinkNames.Justice,
  [
    new JusticeKoromaruWalkSocialLinkLevels(),
    new JusticeInvitationLevels(),
    new JusticeMainLevels(),
    new ShrineLevels(),
  ]
);
