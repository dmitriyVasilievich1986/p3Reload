import { QuestionsWrapper, Question, Answer } from "@/components";

import { PrerequisitsEventsNames, Times } from "@/constants/events/types";
import availables from "@/constants/availability/AvailableClass";

import { SocialLink } from "@/constants/socialLinks/classes/SocialLink";
import {
  createBondObject,
  LinkMaxedObject,
} from "@/constants/socialLinks/classes/GenericCard.tsx";
import {
  LinkMainLevels,
  ShrineLevels,
} from "@/constants/socialLinks/classes/LinkLevels";
import {
  SocialLinkNames,
  LevelsType,
  Routes,
} from "@/constants/socialLinks/types";

class MoonMainLevels extends LinkMainLevels {
  isAvailable = new availables.And_([
    new availables.AvailableTimesIsIn({ times: [Times.Day] }),
    new availables.AvailableLinkIsNewLevel(),
    new availables.AvailableSingleTimeEventsIsIn({
      name: PrerequisitsEventsNames.MoonPrerequisit,
    }),
    new availables.Or_([
      new availables.AvailableIsDayOff({ reverse: true }),
      new availables.AvailableLinkLevelGreater({
        name: SocialLinkNames.Moon,
        level: 1,
      }),
    ]),
  ]).available;

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Well? Would you wanna be... my younger brother?">
            <Answer label="Sure, why not." points={15} />
            <Answer label="Not really, no." />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question
            label={`So? Do you "get me," hm? Who am I? Go on, I wanna hear it come out of your mouth!`}
          >
            <Answer label="Nozomi Suemitsu" />
            <Answer label="The gourmet king." points={15} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Whew... That was way too close. If that toilet was just a bit further away... Ohhhh, boy.">
            <Answer label="Did you eat too much?" />
            <Answer label="Are you feeling sick?" points={15} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Right, ${mainCharName}-kun?">
            <Answer label="That's right." points={15} />
            <Answer label="Sorry, what?" />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="I don't get it. I was fine up until a minute ago, then suddenly I felt sick.">
            <Answer label="Does this happen a lot?" points={5} />
            <Answer label="Did you eat too much?" />
            <Answer label="Are you sick?" points={15} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Well? Did that just blow your mind?">
            <Answer label="Yeah, I'm freaking out." />
            <Answer label="Not really." points={5} />
            <Answer label="The world is ending?" points={15} />
          </Question>,
          <Question label="Not to mention you'll get a discount since I'll be referring you, too. You are one lucky guy!">
            <Answer label="That's insane!" />
            <Answer label="No way I'm paying that." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Look at me! I'm paper-thin now!">
            <Answer label="You do look thinner.	" />
            <Answer label="No, you're not." points={15} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Finally, Paradise is smiling back at me! Yes! Yesss!">
            <Answer label="You're gonna scam them, too?" />
            <Answer label="Just knock it off." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question
            label={`But I couldn't even cry. I actually felt... relieved. I though, "Maybe they'll all finally stop laughing at me."`}
          >
            <Answer label="That's terrible." />
            <Answer label="That's understandable." />
          </Question>,
          <Question label="But if I keep this up, I'll never be able to replace my brother, will I?">
            <Answer label="Just be yourself." points={15} />
            <Answer label="You're irreplaceable." points={15} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  };
}

export const Moon = new SocialLink(
  { name: "Nozomi Suemitsu", place: "Paulownia Mall" },
  SocialLinkNames.Moon,
  [new MoonMainLevels(), new ShrineLevels()]
);
