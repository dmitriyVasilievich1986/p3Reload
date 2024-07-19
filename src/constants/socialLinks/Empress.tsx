import { QuestionsWrapper, Question, Answer } from "../../components/choices";
import { baseSocialLinkCalculation, mainCharName } from "./baseFunctions";
import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { CreateBond, LinkMaxed } from "./GenericCard";

export const Empress: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Empress,
  levels: {
    0: {
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: CreateBond,
      },
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
          <Question label="Sometimes my own ignorance astounds me...">
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
            <Answer label="Maybe you're sad." />
          </Question>,
          <Question label="Sorry for subjecting you to my thoughtless ramblings… Just forget I said anything.">
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
          <Question label="She's likely more suited to riding a motorcycle than I am as well.">
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
          <Question label="Or, is that too selfish a request?">
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
            <Answer label="Impressive." />
            <Answer label="Looks like fun." points={5} />
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
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: LinkMaxed,
      },
      [Routes.Romantic]: {
        points: 0,
        maxPoints: 0,
        element: LinkMaxed,
      },
    },
  },
  invitations: {
    2: {
      [Routes.Platonic]: (
        <Question label="I didn't see many female customers there... Or was it just my imagination?">
          <Answer label="Does it really matter?" points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="How much does one of those arcade machines with a life-sized motorcycle cost?">
          <Answer label="But you have a real one." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="Should we... head back now?">
          <Answer label="You don't want to?" points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="Would you mind telling me who your favorite musical artist is?">
          <Answer label="Why?" points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="It seems I have a tendency to spill all my thoughts when I'm with you. I wonder why.">
          <Answer label="Don't worry about it." points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="Since manga aren't that expensive, why don't people just buy them?">
          <Answer label="Lack of storage space." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="Why did they give us this lemon on the side? I don't suppose it's dessert...">
          <Answer label="Squeeze it over your food." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question label="...interested in anyone?">
          <Answer label="Why do you ask?" points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="Once everything is over... where would be a nice place to go?">
          <Answer label="You don't need a destination." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question
          label={`So, um, ${mainCharName}- Oh no, I mean ${mainCharName}...`}
        >
          <Answer label="You usually don't call me that." points={30} />
        </Question>
      ),
    },
  },
};
