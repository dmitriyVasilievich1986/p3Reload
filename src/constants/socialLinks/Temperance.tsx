import { InvitationLevels, SocialLink, mainCharName } from "./baseFunctions";
import { QuestionsWrapper, Question, Answer } from "@/components";
import { createBondObject, LinkMaxedObject } from "./GenericCard";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  LevelsType,
  Routes,
} from "./types";

class TemperanceInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2009, 5, 7).getTime(),
    new Date(2009, 5, 21).getTime(),
    new Date(2009, 6, 26).getTime(),
    new Date(2009, 7, 7).getTime(),
    new Date(2009, 7, 27).getTime(),
    new Date(2009, 8, 27).getTime(),
    new Date(2009, 10, 8).getTime(),
    new Date(2009, 10, 29).getTime(),
    new Date(2010, 0, 5).getTime(),
  ];

  levels: LevelsType = {
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="...I know! We can go there now! It is just a train ride away, is it not?">
            <Answer label="Sure, let's go." points={30} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label={`Do you like it, too, ${mainCharName}-dono?`}>
            <Answer label="Yeah, I do." points={30} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Perhaps I am feeling homesick...">
            <Answer label="Are you going back?" />
            <Answer label="You should stay in Japan." points={30} />
            <Answer label="Will you go to the funeral?" />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="He looked just like my scary uncle! I did not want to think about him...">
            <Answer label="Don't worry about it." points={30} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Does no one play those games anymore?">
            <Answer label="We do on New Year's." points={30} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I must hurry and complete the kimono.">
            <Answer label="Go finish it now." />
            <Answer label="Patience." />
            <Answer label="Just relax." points={30} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What exactly is it? It just looks like the eggs of an insect to me.">
            <Answer label="I'm not sure." />
            <Answer label="It IS insect eggs." />
            <Answer label="It's beans." points={30} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question
            label={`Speaking of rice... What is your favorite dish with it, ${mainCharName}-dono?`}
          >
            <Answer label="Ochazuke." points={30} />
          </Question>,
        ],
      }),
    },
  };
}

class TemperanceSocialLink extends SocialLink {
  isLinkAvailable(props: SocialLinkAvailableProps): boolean {
    const academicsLevel = stats[StatsNames.Academics].levels[1].value;
    const previousLink = props.previousDay!.links[this.linkName];
    const isNewLevel = this.isNewLevel(previousLink);
    const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];

    return (
      props.currentDay.date.getTime() >= new Date(2009, 4, 8).getTime() &&
      props.previousDay!.stats[StatsNames.Academics] >= academicsLevel &&
      props.previousDay!.links[SocialLinkNames.Hierophant].level >= 3 &&
      days.includes(props.currentDay.date.getDay()) &&
      !props.currentDay.isDayOff &&
      props.time === Times.Day &&
      !props.currentDay.exams &&
      isNewLevel
    );
  }
}

export const Temperance = new TemperanceSocialLink(
  SocialLinkNames.Temperance,
  { name: 'André Laurent Jean "Bebe" Geraux', place: "2F Classroom Hallway" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="It will be my first time going. Will you maybe, how do you say, show me the ropes?">
            <Answer label="Sure, let's go." points={5} />
            <Answer label="You like sweets?" points={5} />
            <Answer label="There's nothing to show." points={5} />
          </Question>,
          <Question label="I love the culture of Nihon! Japan is sugoi-amazing!">
            <Answer label="I totally agree." points={15} />
            <Answer label="What about your country?" />
            <Answer label="It's not that great.	" />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question
            label={`You have gotten much better at this, ${mainCharName}-dono! Subarashii-wonderful!`}
          >
            <Answer label="I can do better." points={5} />
            <Answer label="Thanks." points={5} />
          </Question>,
          <Question label="I would like to make something Japanese, but what?">
            <Answer label="What do you like?" />
            <Answer label="Why not western clothes?" points={5} />
            <Answer label="How about a kimono?" points={15} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="......">
            <Answer label="How come you're not working?" />
            <Answer label="Should we stop for today?" />
            <Answer label="Are you alright?" points={15} />
          </Question>,
          <Question label="She was taken by the angels!">
            <Answer label="What happened?" />
            <Answer label="Calm down." />
            <Answer label="That's terrible..." />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Could we go somwhere to eat after this?">
            <Answer label="Sure." points={5} />
            <Answer label="Why?" />
          </Question>,
          <Question label="I might never come back to Japan again!">
            <Answer label="You have to accept it." />
            <Answer label="Just stay in Japan!" points={5} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="I have barely sewn anything at all.">
            <Answer label="What's wrong?" />
            <Answer label="Why not take a break?" points={5} />
          </Question>,
          <Question label="Will you go to Azuki Arai with moi?">
            <Answer label="Let's do it." points={5} />
            <Answer label="Just one minute..." points={5} />
          </Question>,
          <Question label="I want to stay here in Japan even if I have to eat dirt!">
            <Answer label="I have your back!" points={15} />
            <Answer label="What will you do?" points={5} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="I will show him a kimono! When he sees it, he will understand the beauty of Nihon!">
            <Answer label="Will that be enough?" points={5} />
            <Answer label="That's a great idea." points={15} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 10,
        element: [
          <Question label="When my uncle sees this, I know he'll agree with me about how great Nihon is!">
            <Answer label="When will it be done?" points={5} />
            <Answer label="He'll definitely agree!" points={15} />
            <Answer label="Less talk, more work." />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="And thanks to all your help, the kimono is almost finished! I feel so blessed!">
            <Answer label="Congrats!" points={5} />
            <Answer label="Aren't you homesick?" points={15} />
            <Answer label="Don't forget, you owe me." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="At last, it is fini!">
            <Answer label="How does it look?" points={15} />
            <Answer label="Great work!" points={15} />
          </Question>,
          <Question label="They are the times I spend with you, my tomodachi.">
            <Answer label="I'll be waiting for you." points={15} />
            <Answer label="Good luck out there." points={15} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  },
  { invitations: new TemperanceInvitationLevels() }
);
