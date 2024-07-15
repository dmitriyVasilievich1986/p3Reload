import { QuestionsWrapper, Question, Answer } from "../../components/choices";
import { baseSocialLinkCalculation } from "./baseFunctions";
import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

export const Tower: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Tower,
  levels: [
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Create bond" />,
    },
    QuestionsWrapper({
      points: 0,
      element: [
        <Question label="What'cha doin' here today, kid?">
          <Answer label="I came to see you, old man." />
          <Answer label="None of your business." points={15} />
        </Question>,
        <Question label="You don't have to revere me, but at least show some proper respect.">
          <Answer label="How should I address you?" points={5} />
          <Answer label="Show respect?" />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 0,
      element: [
        <Question label="How come you're always alone when I see ya? Don'tcha got any friends?">
          <Answer label="I can't say I don't." />
          <Answer label="I don't have any friends." points={15} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 25,
      element: [
        <Question label="You should cut it. No, better yet, shave it all off... Give the bald look a try.">
          <Answer label="Yeah, that might look cool." points={15} />
          <Answer label="Yeah, I dunno..." />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 25,
      element: [
        <Question label="High school kids don't have much money, do they? At least, I never gave much to my son.">
          <Answer label="I have enough." points={5} />
          <Answer label="I am not NOT struggling..." />
        </Question>,
        <Question label='...And I mean something you can buy with money. Not some crap like "love" or "a sense of humor".'>
          <Answer label="Yes." points={5} />
          <Answer label="No." points={15} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 25,
      element: [
        <Question label="Ugh... I'm in bad shape...">
          <Answer label="Are you okay?" />
          <Answer label="You should go home." points={15} />
        </Question>,
        <Question label="It's times like these... ah... when it's hardest to be alone...">
          <Answer label="You live by yourself?" />
          <Answer label="Do you have any coworkers?" points={5} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 30,
      element: [
        <Question label="...Hey! There's a microphone over there. Bring it over, kid! I'll perform a live sutra reading.">
          <Answer label="Really?" />
          <Answer label="You probably shouldn't..." points={15} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 30,
      element: [
        <Question label="Didn't dad tell you not to do that, huh?">
          <Answer label="Dad?" points={15} />
          <Answer label="It's my first time hearing it." points={5} />
          <Answer label="......" />
        </Question>,
        <Question label="Where the hell were ya wanderin' around? Iss late!">
          <Answer label="I was with a friend." points={5} />
          <Answer label="I was studying." />
          <Answer label="None of your business." points={5} />
        </Question>,
        <Question label="I wonder if they felt the same way I did, when I was waiting for you earlier...">
          <Answer label="Who's 'they'?" />
          <Answer label="What're you talking about?" />
        </Question>,
        <Question label="…Now when I go home, I don't know what to do with myself, so I just come here and drink every night.">
          <Answer label="Do you miss your family?" />
          <Answer label="Are you running away?" points={5} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 40,
      element: [
        <Question label="I'm workin' memorial service after memorial service 24/7, as if my little temple was some kinda convenience store...">
          <Answer label="Why not take a break?" points={5} />
          <Answer label="Poor men know no leisure." points={5} />
        </Question>,
        <Question label="I've been drinkin' too much lately… Makin' a fool of myself like I did the other day.">
          <Answer label="Hang in there." points={5} />
          <Answer label="Time to retire?" points={5} />
        </Question>,
        <Question label="Whaddya think?">
          <Answer label="What's this about?" points={5} />
          <Answer label="I don't really care." points={5} />
        </Question>,
      ],
    }),
    QuestionsWrapper({
      points: 40,
      element: [
        <Question label="…Well? How's that sound?">
          <Answer label="That's awesome!" points={15} />
          <Answer label="It's missing something." />
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
