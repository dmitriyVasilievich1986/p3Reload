import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
import { QuestionsWrapper, Question, Answer } from "@/components";
import { DaysNames } from "@/constants/monthsNames";
import { SocialLink } from "./classes/SocialLink";
import { Times } from "@/constants/events/types";

import {
  KoromaruWalkSocialLinkLevels,
  LinkMainLevels,
} from "./classes/LinkLevels";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

class HierophantMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const days = [
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.saturday,
      DaysNames.sunday,
    ];

    return (
      props.currentDay.date.getTime() >= new Date(2009, 3, 25).getTime() &&
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
          <Question label="What was your name again?">
            <Answer label="${mainCharName}" points={5} />
            <Answer label="..." />
          </Question>,
          <Question label="Someone gave it to me, but I have more than enough. Go ahead and take it, ${mainCharName}-chan.">
            <Answer label="Thank you." points={15} />
            <Answer label="I'm okay, thanks." />
          </Question>,
          <Question label="We have so many, my wife and I would take forever to finish them all.">
            <Answer label="I'd like that." />
            <Answer label="No, thank you." />
          </Question>,
          <Question label="He should be here helping customers... Sorry about that, ${mainCharName}-chan.">
            <Answer label="Boy?" />
            <Answer label="No need to apologize." />
          </Question>,
          <Question label="Oh, my dear, he's...">
            <Answer label="He's what?" />
            <Answer label="What's this about?" />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I don't see it anywhere...">
            <Answer label="Looking for something?" points={5} />
            <Answer label="Cleaning the store?" />
          </Question>,
          <Question label="It's not y contact lens I'm looking for, it's my wallet. My wallet! Now, where did I put it?">
            <Answer label="Best of luck." points={5} />
            <Answer label="Can I help?" points={15} />
          </Question>,
          <Question label="I am one as well! I am a student at Gekkoukan!">
            <Answer label="Nice to meet you." />
            <Answer label="...Who are you?" />
          </Question>,
          <Question label="But you can call me 'Bebe'! It's quite nice to meet you!">
            <Answer label="Nice to meet you." />
            <Answer label="......" />
          </Question>,
          <Question label="Why must you get into a car...? Do you want me to end up all alone!?">
            <Answer label="What's this about a car?" />
            <Answer label="All alone?" />
          </Question>,
          <Question label="On his way home from work, he got into an accident... He was hit by a dump truck driver who was drunk on the job...">
            <Answer label="I'm sorry to hear that." />
            <Answer label="That's terrible luck." />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="My wife just headed out to Gekkoukan.">
            <Answer label="I should go too." points={15} />
            <Answer label="I'll wait here." points={15} />
          </Question>,
          <Question label="The... The... The tree...">
            <Answer label="What happened" />
            <Answer label="Tree?" />
          </Question>,
          <Question label="Do you know anything about this, ${mainCharName}-chan?">
            <Answer label="No, I don't." />
            <Answer label="I'm worried." points={5} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="We've been feeling a bit guilty for troubling you about the persimmon tree...">
            <Answer label="I wouldn't worry about it." points={5} />
            <Answer label="What tree?" />
          </Question>,
          <Question label="Why now? Why do they want to cut it down now...?">
            <Answer label="Cheer up." points={5} />
            <Answer label="It'll be okay." points={5} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="If we lose that tree... it would be like losing our son all over again...">
            <Answer label="You're overthinking it." />
            <Answer label="Please don't fight." points={15} />
          </Question>,
          <Question label="Unfortunately, that just reminded my dear of the pain we felt the day our son died...">
            <Answer label="Cheer up." />
            <Answer label="I'm sure it'll be okay." />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="Ah...">
            <Answer label="What happened?" points={5} />
            <Answer label="Are you fighting again?" />
          </Question>,
          <Question label="They say the tree is a memorial to their former teacher... They don't want it to be cut down.">
            <Answer label="The tree? A memorial?" />
            <Answer label="That's great." points={5} />
          </Question>,
          <Question label="You must be the one who called on them for this, right, ${mainCharName}-chan?">
            <Answer label="No." points={5} />
            <Answer label="That's right." points={5} />
            <Answer label="What are you talking about?" points={5} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="Who do you think it was? Here's a hint: 'signature.'">
            <Answer label="A petitioner?" points={5} />
            <Answer label="A fan of yours?" points={5} />
          </Question>,
          <Question label="He's already gathered a number of signatures from students who were in our son's class.">
            <Answer label="That's great." />
            <Answer label="That's amazing." />
          </Question>,
          <Question label="I have to tell my son the good news!">
            <Answer label="Sure, let's go." points={15} />
            <Answer label="Right now?" points={15} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 20,
        element: [
          <Question label="What, is that surprising? I'm actually quite the net surfer, you know!">
            <Answer label="What does the letter say?" points={5} />
            <Answer label="Why a letter?" points={5} />
          </Question>,
          <Question label="Are you curious about the letter? Excited, perhaps? Even exhilerated?">
            <Answer label="Excited." />
            <Answer label="Exhilerated." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="Bunkichi is sleep talking. Looks like he's taking a nap.">
            <Answer label="Take a closer look." />
            <Answer label="Leave him alone." />
          </Question>,
          <Question label="It's the middle of the day, but I feel awfully sleepy.">
            <Answer label="What matter?" />
            <Answer label="Why are you relieved?" />
          </Question>,
          <Question label="We asked them to go ahead and cut the persimmon tree down.">
            <Answer label="But.. why?" points={15} />
            <Answer label="Oh well." />
          </Question>,
          <Question label="He was a teacher after all.">
            <Answer label="That's true." />
            <Answer label="Are you really sure?" />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  };
}

class HierophantKoromaruWalkSocialLinkLevels extends KoromaruWalkSocialLinkLevels {
  dates = [new Date(2009, 7, 22).getTime()];
}

export const Hierophant = new SocialLink(
  SocialLinkNames.Hierophant,
  { name: "Bunkichi and Mitsuko", place: "Bookworms Used Books" },
  {
    koromaruWalks: new HierophantKoromaruWalkSocialLinkLevels(),
    mainLevels: new HierophantMainLevels(),
  }
);
