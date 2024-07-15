import { QuestionsWrapper, Question, Answer } from "../../components/choices";
import { baseSocialLinkCalculation } from "./baseFunctions";
import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

export const HangedMan: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.HangedMan,
  levels: [
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Create bond" />,
    },
    QuestionsWrapper({
      points: 0,
      element: [
        <Question label="My tummy's grumbling! Can we go to Wilduck?">
          <Answer label="Sure, let's go." points={15} />
          <Answer label="Let's keep playing." />
        </Question>,
        <Question label="Why would they get a divorce?">
          <Answer label="They fell out of love." />
          <Answer label="It's probably your fault." />
          <Answer label="I don't know." />
        </Question>,
        <Question label="...She's sobbing loudly. What should I do?">
          <Answer label="Calm her down" />
          <Answer label="Wait for her to finish." />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 0,
      element: [
        <Question label="...And who are you?">
          <Answer label="I'm Maiko's friend." />
          <Answer label="Just a random passerby." />
        </Question>,
        <Question label="Do you think he'll come home and see me?">
          <Answer label="He'll probably forget." />
          <Answer label="I really can't say." />
          <Answer label="Don't worry, he'll be there." points={15} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 20,
      element: [
        <Question label="They really do care about me!">
          <Answer label="That's great news!" points={15} />
          <Answer label="Of course they care." points={15} />
          <Answer label="Nah, they don't care." />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 20,
      element: [
        <Question label="He's so mean. It's not fair!">
          <Answer label="That's awful." points={15} />
          <Answer label="Why would he do that?" />
        </Question>,
        <Question label="Do they just wish I would disappear?">
          <Answer label="It's possible." />
          <Answer label="They would never." points={5} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 20,
      element: [
        <Question label="I made up my mind! I have to run away from home!">
          <Answer label="Don't do it." />
          <Answer label="Calm down." points={5} />
          <Answer label="It's up to you." points={5} />
        </Question>,
        <Question label="I need lots of snacks, right? And my...insurance card?">
          <Answer label="That should be enough." points={15} />
          <Answer label="It'll take more than that." />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 40,
      element: [
        <Question label="She's never done anything like this before!">
          <Answer label="We should look for her." />
          <Answer label="It's probably your fault." />
          <Answer label="Just leave her alone." />
        </Question>,
        <Question label="If you have any idea where she is, I'm begging you to tell us.">
          <Answer label="Maybe the music store." />
          <Answer label="Maybe the takoyaki stand." />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 15,
      element: [
        <Question label="What do you wanna get?">
          <Answer label="Hamburgers." points={5} />
          <Answer label="Japanese food." />
        </Question>,
        <Question label="It was sad, but I listened to the whole thing. Did I do good?">
          <Answer label="You're a good girl." points={15} />
          <Answer label="Not really." />
        </Question>,
        <Question label="Who do you think I should pick?">
          <Answer label="Your dad." points={15} />
          <Answer label="Your mom." />
          <Answer label="You decide." />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 30,
      element: [
        <Question label="Even if I'm gone... we'll still be friends, right?">
          <Answer label="Friends forever." points={15} />
          <Answer label="I might forget about you." />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 30,
      element: [
        <Question label="Do you think I'll have a family of my own one day?">
          <Answer label="I'm sure you will." points={15} />
          <Answer label="No idea." />
        </Question>,
        <Question label="Can we get married?">
          <Answer label="Sure." points={15} />
          <Answer label="I'll think about it." />
        </Question>,
      ],
    }),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
