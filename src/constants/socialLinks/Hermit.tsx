import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
import { QuestionsWrapper, Question, Answer } from "@/components";
import { LinkMainLevels } from "./classes/LinkLevels";
import { DaysNames } from "@/constants/monthsNames";
import { SocialLink } from "./classes/SocialLink";
import { Times } from "@/constants/events/types";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

class HermitMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const days = [
      new Date(2009, 3, 29).getTime(),
      new Date(2009, 4, 4).getTime(),
      new Date(2009, 4, 5).getTime(),
      new Date(2009, 8, 21).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 12).getTime(),
    ];
    const isToday =
      props.currentDay.date.getDay() === DaysNames.sunday ||
      days.includes(props.currentDay.date.getTime());

    return (
      props.currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
      props.time === Times.Day &&
      isNewLevel &&
      isToday
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
          <Question label="u remember me rite? :O">
            <Answer label="Of course." points={15} />
            <Answer label="...Have we met?" />
          </Question>,
          <Question label="hmmm... what kinda people r we, playing inside on such a beautiful day?">
            <Answer label="Don't you like video games?" />
            <Answer label="Sunshine is overrated." points={5} />
            <Answer label="Guess we're loners." />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="so ummmmm…… i'm drunk! xD">
            <Answer label="Oh really? o_O" points={5} />
            <Answer label="Are you an adult?" />
          </Question>,
          <Question label="but lately i cant get motivated to get work done @ work. =/">
            <Answer label="You don't like your job?" points={15} />
            <Answer label="Are you burned out?" />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="Its like all she cares about is marrying me off to some dude >=/ whys it her problem?">
            <Answer label="Don't wanna get married?" />
            <Answer label="You'll need a boyfriend first." />
            <Answer label="Let's plan our wedding, then." points={15} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="Mr. E is such a stupid eh so bee!! t(-_-t)">
            <Answer label="Who's Mr. E?" points={5} />
            <Answer label="Are you drunk again?" />
            <Answer label="Do you mean S.O.B.?" points={5} />
          </Question>,
          <Question label="…oh noes! u cant figure out what my job is can u? O_o">
            <Answer label="A drunken master?" points={5} />
            <Answer label="Maya's a reporter, right?" />
            <Answer label="Are you a teacher?" points={5} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="actually, i only went cuz i was so pissed at that bastard! >=/">
            <Answer label="Calm down." />
            <Answer label="What bastard?" points={15} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="…do men only want younger women? b honest ._.">
            <Answer label="What are you talking about?" />
            <Answer label="Age isn't the point." points={5} />
            <Answer label="Well, yeah." points={15} />
          </Question>,
          <Question label="she even stuffs her bra!! lol">
            <Answer label="She, um… what?" points={5} />
            <Answer label="Calm down." points={5} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="oh noes… now im starting to get sweaty =/">
            <Answer label="Are you talking to yourself?" />
            <Answer label="Hurry up and tell me." points={15} />
          </Question>,
          <Question label="thats kinda crazy even for me >_>;">
            <Answer label="What is he like?" points={5} />
            <Answer label="Are you gonna ask him out?" />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="it said their canceling innocent sin. …think its for real?">
            <Answer label="Not much we can do." />
            <Answer label="No way!" points={5} />
            <Answer label="Whatever, I guess." />
          </Question>,
          <Question label="tatsuya... do u think we'll still be able to see each other? T_T">
            <Answer label="I think so." />
            <Answer label="No, this is the end." />
            <Answer label="Don't worry about that." />
          </Question>,
          <Question label="maya's not goin quietly! >=/ i'll beat em to the punch!">
            <Answer label="What are you planning?" points={5} />
            <Answer label="This won't change anything." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="…i should apologize">
            <Answer label="About what?" />
            <Answer label="Oh, no worries." points={5} />
          </Question>,
          <Question label="i dun think i will...">
            <Answer label="Now they'll end it for sure." />
            <Answer label="Is that why you're sorry?" points={5} />
          </Question>,
          <Question label="im thinkin bout quittin the MMO today. i… dun think i'll c u again T_T">
            <Answer label="This is sudden..." />
            <Answer label="I'll miss you." points={15} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  };
}

export const Hermit = new SocialLink(
  SocialLinkNames.Hermit,
  { name: "Maya", place: "Laptop at the Protagonist's room" },
  { mainLevels: new HermitMainLevels() }
);
