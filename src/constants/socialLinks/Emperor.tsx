import { QuestionsWrapper, Question, Answer } from "../../components/choices";
import { createBondObject, LinkMaxedObject } from "./GenericCard";
import { SocialLinkNames, Routes } from "./types";
import { SocialLink } from "./baseFunctions";

export const Emperor = new SocialLink(
  SocialLinkNames.Emperor,
  { name: "Hidetoshi Odagiri", place: "Student Council Room" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Some students think the school uniform should be abolished, and they're recruiting supporters.">
            <Answer label="They've got a point." />
            <Answer label="Sounds like nonsense." points={15} />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What!? You can't decide something like that without talking to the president first.">
            <Answer label="What happened?" points={5} />
            <Answer label="No need to fight." points={5} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="This guy looks like he's about to hit Odagiri!">
            <Answer label="Knock it off!" />
            <Answer label="..........." />
          </Question>,
          <Question label="What is it? Did you need something from me?">
            <Answer label="You went a little overboard." />
            <Answer label="Looks like you're hard at work." points={15} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="...Bunch of neanderthals">
            <Answer label="They're the worst." points={15} />
            <Answer label="You shouldn't accuse everyone." />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="It's nice not having those hyenas around.">
            <Answer label="You're not going home yet?" />
            <Answer label={`"It's nice"?`} />
          </Question>,
          <Question label="So as you can see, we can't exactly hold a meeting right now. You can leave if you want.">
            <Answer label="But I just got here…" points={15} />
            <Answer label="I think I'll stick around." points={5} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="About the smoker's punishment, I mean.">
            <Answer label="It seems reasonable." />
            <Answer label="It seems too harsh." points={15} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Um, did Odagiri-san do something?">
            <Answer label="What do you mean?" />
            <Answer label="Why? Is something wrong?" />
          </Question>,
          <Question label="...So, you heard all that.">
            <Answer label="It wasn't me." points={15} />
            <Answer label="You stood up for me?" points={5} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="I rambled on about rules and fairness, but all I really proved was that I was desperate for power.">
            <Answer label="Don't blame yourself." points={15} />
            <Answer label="What matters is you realized it." points={15} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="So, how did I do? What'd everyone think?">
            <Answer label="Not too shabby." points={15} />
            <Answer label="You were great." points={5} />
          </Question>,
          <Question label="That's why you should be the one to have it.">
            <Answer label="I'll cherish it." points={15} />
            <Answer label="I guess I'll take it." points={15} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  }
);
