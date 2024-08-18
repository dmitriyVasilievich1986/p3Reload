import { QuestionsWrapper, Question, Answer } from "@/components";
import { createBondObject, LinkMaxedObject } from "./GenericCard";
import { SocialLinkNames, Routes } from "./types";
import { SocialLink } from "./baseFunctions";

export const Aeon = new SocialLink(
  SocialLinkNames.Aeon,
  { name: "Aigis", place: "Classroom 2F" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What about you, Makoto-san? Do you... like it here?">
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
          <Question label="How can we make them understand...?">
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
          <Question label="A white, spotted cat... Did you see one, Makoto-san?">
            <Answer label="I might have..." points={5} />
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
          <Question label="It seems that 'living' is something that can't be done alone...">
            <Answer label="You may be right." points={15} />
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
            <Answer label="You didn't call him Joe." />
            <Answer label="No, you didn't" />
            <Answer label="He thought I was your boyfriend." />
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
            <Answer label="I'm sure she was happy." />
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
          <Question label="Why are you so important to me, Makoto-san?">
            <Answer label="It's love." />
            <Answer label="Because we're friends" />
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
          <Question label="Why are you so important to me, Makoto-san?">
            <Answer label="It's love." />
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
          <Question label="I love you so much... that I feel like I'm going to break down somehow...">
            <Answer label="I love you, too." fork={true} />
            <Answer label="Sorry, but I can't..." />
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
          <Question label="There's something only I can say, because I am unable to die.">
            <Answer label="What is it?" />
            <Answer label="I don't get it." />
          </Question>,
          <Question label="Aigis is gazing at you intently...">
            <Answer label="Nod silently" />
            <Answer label="Hold her hand gently" />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="There's something only I can say, because I am unable to die.">
            <Answer label="What is it?" />
            <Answer label="I don't get it." />
          </Question>,
          <Question label="Aigis is gazing at you intently...">
            <Answer label="Nod silently" />
            <Answer label="Hold her hand gently" />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
      [Routes.Romantic]: LinkMaxedObject,
    },
  }
);
