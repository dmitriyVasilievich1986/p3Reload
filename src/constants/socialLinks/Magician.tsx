import { QuestionsWrapper, Question, Answer } from "../../components/choices";
import { baseSocialLinkCalculation, mainCharName } from "./baseFunctions";
import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { CreateBond, LinkMaxed } from "./GenericCard";

export const Magician: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Magician,
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
          <Question label="Can you, like, just waltz on into Takeba-san's room and stuff?">
            <Answer label="Of course." />
            <Answer label="No way." points={5} />
            <Answer label="That's a secret." points={5} />
          </Question>,
          <Question label="I'm more into older women. How 'bout you?">
            <Answer label="I'm into older women, too." points={5} />
            <Answer label="I prefer girls my age." />
            <Answer label="I like them all!" points={5} />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Maaan... I'm so sick of this, dude.">
            <Answer label="What, of ramen?" />
            <Answer label="What, of school?" />
            <Answer label="What, life?" points={15} />
          </Question>,
          <Question
            label={`Okay, that settles it, ${mainCharName}. I'm gonna get myself a girlfriend! Right now!`}
          >
            <Answer label="Sounds Impossible." />
            <Answer label="Good luck!" points={5} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Hey, thanks for coming, man. You mind waiting here for a sec?">
            <Answer label="Sure." />
            <Answer label="Why?" />
          </Question>,
          <Question label="I'm gonna go ask Ms. Kanou out! Like, right now!">
            <Answer label="Good luck!" points={15} />
            <Answer label="Don't do it." />
            <Answer label="Whatever, man." />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Yeah, good-looking people just flock together, y'know? It's like a law of attraction.">
            <Answer label="...Is that so?" points={5} />
            <Answer label="Okay..." points={15} />
            <Answer label="Good-looking, huh?" />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Sorry, man, but I've gotta pass this time.">
            <Answer label="Just like that?" />
            <Answer label="Why?" />
          </Question>,
          <Question label="I mean, getting into college is pretty important, don't ya think? You think about the future too, right?">
            <Answer label="I've got plans already." points={15} />
            <Answer label="Yeah, more than you do." />
            <Answer label="Not even a little." />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="I can't eat...">
            <Answer label="What happened?" points={5} />
            <Answer label="I'll eat it for you." />
          </Question>,
          <Question label="I saw a magazine in Emiri's room. Guess what it was called.">
            <Answer label="In Fashion?" />
            <Answer label="Occult Living?" />
            <Answer label="Bride-To-Be?" points={5} />
          </Question>,
          <Question label="You think that's a good plan?">
            <Answer label="Congrats!" points={5} />
            <Answer label="You're rushing things." />
            <Answer label="Sure, whatever." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 25,
        element: [
          <Question label="H-Hey, man. Sorry to make you come here. I, um... Ah, damn it...">
            <Answer label="Spit it out!" points={5} />
            <Answer label="Are you in trouble?" points={15} />
          </Question>,
          <Question label="And now she's being transferred to a school in Kyushu. What do I do!?">
            <Answer label="You should go with her." points={5} />
            <Answer label="You two should talk it out." points={5} />
            <Answer label="Figure it out yourself." />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="I was so excited about going with her that I...I...">
            <Answer label="Cheer up, man." />
            <Answer label="Let me handle this!" points={15} />
            <Answer label="Haha." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="Ms. Kanou must be in Kyushu by now. I wonder if she had her wedding already.">
            <Answer label="......" points={5} />
            <Answer label="Maybe she did." />
            <Answer label="I'm stealing your egg!" />
          </Question>,
          <Question label="Man, it's always a blast hanging out with you. That said... I still want a girlfriend!">
            <Answer label="You don't know when to give up..." points={5} />
            <Answer label="You've got this!" points={15} />
            <Answer label="Want me to find you a girl?" points={15} />
          </Question>,
          <Question label="What I did figure out is... you're a true friend.">
            <Answer label="...Are we still talking about love?" />
            <Answer label="That's right! We're great friends." />
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
    },
  },
  invitations: {
    1: {
      [Routes.Platonic]: (
        <Question label="Not bad... Not bad at all! But, there are some things you could do to look better...">
          <Answer label="Like what?" points={30} />
        </Question>
      ),
    },
    2: {
      [Routes.Platonic]: (
        <Question label="By the way, are you picky about your food?">
          <Answer label="I'm pretty picky." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="Well? Whaddaya think? Perfect plan, right?">
          <Answer label="I've got a better plan..." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="D-don't laugh, ok...? But, uh, I wanted to know if, um... if you've ever kissed a girl before...">
          <Answer label="I haven't." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="Maybe she's scared of catching it... Is it contagious?">
          <Answer label="No, it's not." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="That was the last beef bowl I'm ever gonna eat!">
          <Answer label="Why?" points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="Do you think I can make her happy?">
          <Answer label="Just do your best." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="Maybe I caught it or something...">
          <Answer label="You shouldn't worry about it." points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="Can you just... forget that ever happened?">
          <Answer label="Sure." points={30} />
        </Question>
      ),
    },
  },
};
