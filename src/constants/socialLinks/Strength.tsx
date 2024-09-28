import { createBondObject, LinkMaxedObject } from "./classes/GenericCard";
import { QuestionsWrapper, Question, Answer } from "@/components";
import { mainCharName } from "./classes/mainCharName";
import { DaysNames } from "@/constants/monthsNames";
import { SocialLink } from "./classes/SocialLink";
import { Times } from "@/constants/events/types";

import {
  KoromaruWalkSocialLinkLevels,
  InvitationLevels,
  LinkMainLevels,
} from "./classes/LinkLevels";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

class StrengthMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const isRomance =
      previousLink.level === 2 || previousLink.romance === route;
    const days = [DaysNames.wednesday, DaysNames.saturday];

    return (
      props.currentDay.date.getTime() >= new Date(2009, 3, 24).getTime() &&
      props.previousDay!.links[SocialLinkNames.Chariot].level >= 2 &&
      days.includes(props.currentDay.date.getDay()) &&
      !props.currentDay.isDayOff &&
      props.time === Times.Day &&
      !props.currentDay.exams &&
      isNewLevel &&
      isRomance
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
          <Question label="Also, I wasn't really in the mental state to do this alone today.">
            <Answer label="What happened?" points={15} />
            <Answer label="You did good." />
          </Question>,
          <Question label="And before I knew it, I'd dozed off. I ended up handing in a blank paper.">
            <Answer label="That's bad." />
            <Answer label="It wasn't your fault." points={5} />
          </Question>,
          <Question label="But come on, it's way too early to worry about the future, isn't it? We're still just teenagers!">
            <Answer label="That's true." points={15} />
            <Answer label="I don't think so." />
            <Answer label="You haven't thought about it?" />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Going that far would've been crossing the line.">
            <Answer label="Does this happen often?" />
            <Answer label="Do you know who did it?" />
          </Question>,
          <Question label="Sorry you got dragged into that.">
            <Answer label="Friend of yours?" />
            <Answer label="Don't worry about it." points={5} />
          </Question>,
          <Question label="They called you my boyfriend. That must have made you feel awkward, huh?">
            <Answer label="I'm honored." points={5} />
            <Answer label="I don't mind." fork={true} points={5} />
            <Answer label="It might be a problem." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Going that far would've been crossing the line.">
            <Answer label="Does this happen often?" />
            <Answer label="Do you know who did it?" />
          </Question>,
          <Question label="Sorry you got dragged into that.">
            <Answer label="Friend of yours?" />
            <Answer label="Don't worry about it." points={5} />
          </Question>,
          <Question label="They called you my boyfriend. That must have made you feel awkward, huh?">
            <Answer label="I'm honored." fork={true} points={5} />
            <Answer label="I don't mind." />
            <Answer label="It might be a problem." />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question
            label={`${mainCharName}-kun, what do you think I should do?`}
          >
            <Answer label="Why not give it a go?" />
            <Answer label="That's for you to decide." />
          </Question>,
          <Question label="I mean, why not, right? Please? Honestly, I don't think I can handle it on my own...">
            <Answer label="Sure thing." points={5} />
            <Answer label="It's kind of a hassle." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question
            label={`${mainCharName}-kun, what do you think I should do?`}
          >
            <Answer label="Why not give it a go?" />
            <Answer label="That's for you to decide." />
          </Question>,
          <Question label="I mean, why not, right? Please? Honestly, I don't think I can handle it on my own...">
            <Answer label="Sure thing." points={5} />
            <Answer label="It's kind of a hassle." />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Elementary school kids really learn fast don't you think?">
            <Answer label="You're right. It's impressive." points={5} />
            <Answer label="That's not normal?" />
            <Answer label="It's because you teach so well." points={10} />
          </Question>,
          <Question label="Should I change the training routine? Maybe they should be running more.">
            <Answer label="You shouldn't change it." fork={true} points={5} />
            <Answer label="Maybe you should rethink it." />
            <Answer label="I trust whatever you decide Yuko." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="Elementary school kids really learn fast don't you think?">
            <Answer label="You're right. It's impressive." points={5} />
            <Answer label="That's not normal?" />
            <Answer label="It's because you teach so well." points={10} />
          </Question>,
          <Question label="Should I change the training routine? Maybe they should be running more.">
            <Answer label="You shouldn't change it." />
            <Answer label="Maybe you should rethink it." />
            <Answer
              label="I trust whatever you decide Yuko."
              fork={true}
              points={5}
            />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question
            label={`...Oh, ${mainCharName}-kun, why don't you give them some advice too?`}
          >
            <Answer label="You guys got this." points={5} />
            <Answer label="Show some guts!" points={5} />
          </Question>,
          <Question label="Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders?">
            <Answer label="It's gonna be tough." />
            <Answer label="As long as we believe in them." points={5} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question
            label={`...Oh, ${mainCharName}-kun, why don't you give them some advice too?`}
          >
            <Answer label="You guys got this." points={5} />
            <Answer label="Show some guts!" points={5} />
          </Question>,
          <Question label="Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders?">
            <Answer label="It's gonna be tough." />
            <Answer label="As long as we believe in them." points={5} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="They called you my boyfriend till the very end...">
            <Answer label="Wanna make that true?" />
            <Answer label="It's embarassing." fork={true} />
            <Answer label="They're just joking." fork={true} />
          </Question>,
          <Question label="It's like the kids have left the nest...">
            <Answer label="Are you sad?" />
            <Answer label="Are you relieved?" points={5} />
          </Question>,
          <Question label="Maybe we should throw a little party. You know, to celebrate our first attempt at coaching.">
            <Answer label="Let's do it." points={15} />
            <Answer label="Why?" />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="They called you my boyfriend till the very end...">
            <Answer label="Wanna make that true?" fork={true} />
            <Answer label="It's embarassing." />
            <Answer label="They're just joking." />
          </Question>,
          <Question label="It's like the kids have left the nest...">
            <Answer label="Are you sad?" />
            <Answer label="Are you relieved?" points={5} />
          </Question>,
          <Question label="Maybe we should throw a little party. You know, to celebrate our first attempt at coaching.">
            <Answer label="Let's do it." points={15} />
            <Answer label="Why?" />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question
            label={`Which one sounds better to you, ${mainCharName}-kun?`}
          >
            <Answer label="The cute one." points={5} />
            <Answer label="The reasonable one." points={5} />
            <Answer label="Either is fine." />
          </Question>,
          <Question label="Sorry for always dragging you into situations like this">
            <Answer label="Glad it didn't turn into a fight." />
            <Answer label="You handled it well." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question label="I was out buying stuff that might be useful for running practice, and I ran out of money.">
            <Answer label="It's fine." />
            <Answer label="This is a nice room." />
            <Answer label="Stuff for the kids?" />
          </Question>,
          <Question label="Hmm... Oh, do you like children?">
            <Answer label="I do." />
            <Answer label="Not really." />
          </Question>,
          <Question label="Would you want it to be a boy or a girl?">
            <Answer label="A boy." points={5} />
            <Answer label="A girl." points={5} />
            <Answer label="I don't care." />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="I thought my stomach was gonna explode!">
            <Answer label="That sounds like you." />
            <Answer label="You're gonna get fat" />
          </Question>,
          <Question label="Can you guess what it is?">
            <Answer label="A track and field star?" points={5} />
            <Answer label="An instructor?" points={15} />
            <Answer label="A nursery teacher?" points={5} />
            <Answer label="No idea..." points={5} />
          </Question>,
          <Question label="Thinking back, I really caused you a lot of trouble, so... I'm sorry.">
            <Answer label="I don't mind." />
            <Answer label="You can rely on me even more." />
          </Question>,
          <Question label="If you've got something on your mind, I'm here for you anytime, even if you just gotta rant, all right?">
            <Answer label="Thanks." points={5} />
            <Answer label="You're so dependable." />
            <Answer label="I do have some homework..." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="All it did was make me more confused than I originally was. Guess I'll have to go ask again tomorrow.">
            <Answer label="You're so hardworking." />
            <Answer label="Why go through all that trouble?" />
          </Question>,
          <Question label="Can you guess what it is?">
            <Answer label="A track and field star?" points={5} />
            <Answer label="An instructor?" points={15} />
            <Answer label="A nursery teacher?" points={5} />
            <Answer label="No idea..." points={5} />
          </Question>,
          <Question label="I realized now that I might've been relying too much on you.">
            <Answer label="I don't mind." />
            <Answer label="You can rely on me even more." />
          </Question>,
          <Question label="Are you like this... just with me? N-No, no, th-that can't be it, huh...">
            <Answer label="It's because I love you." fork={true} points={5} />
            <Answer label="It's because you're a close friend." />
          </Question>,
          <Question label="What's happening...? Is this a dream?">
            <Answer label="I love you, Yuko." points={5} />
            <Answer label="It's not a dream." points={5} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="Ugh, this is so heavy. I should't have crammed everything in there...">
            <Answer label="Stuff for the track team?" />
            <Answer label="Want me to carry it?" points={5} />
          </Question>,
          <Question label="It hasn't even been that long since we cached those kids though, huh?">
            <Answer label="That's just how fulfilling it was." points={5} />
            <Answer label="It's age..." />
          </Question>,
          <Question
            label={`It's from those kids. They told me to "make sure I give it to my boyfriend."`}
          >
            <Answer label="Boyfriend..." />
            <Answer label="Where's yours?" points={5} />
            <Answer label="I'm honored." points={5} />
          </Question>,
          <Question label="Kinda makes me wanna do it all again. What about you?">
            <Answer label="If the opportunity arises." points={5} />
            <Answer label="Let me think about it." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="I guess I could've told you this next part at school, but I wanted to talk somewhere quiet.">
            <Answer label="Is it important?" points={5} />
            <Answer label="What is it?" points={5} />
          </Question>,
          <Question label="I know they were kind of a handful, but they also have an endearing side to them, don't you think?">
            <Answer label="Yeah." points={5} />
            <Answer label="Not really." points={5} />
          </Question>,
          <Question label="Because today... Well, my parents aren't home, so...">
            <Answer label="I see." />
            <Answer label="What does that mean?" points={5} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
      [Routes.Romantic]: LinkMaxedObject,
    },
  };
}

class StrengthInvitationLevels extends InvitationLevels {
  dates = [
    new Date(2009, 4, 31).getTime(),
    new Date(2009, 6, 5).getTime(),
    new Date(2009, 7, 4).getTime(),
    new Date(2009, 7, 26).getTime(),
    new Date(2009, 8, 22).getTime(),
    new Date(2009, 9, 25).getTime(),
    new Date(2009, 10, 15).getTime(),
    new Date(2010, 0, 6).getTime(),
    new Date(2010, 0, 17).getTime(),
  ];

  levels: LevelsType = {
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Take me, for example. How's my outfit?">
            <Answer label="It's cute on you." />
            <Answer label="You look mature." />
            <Answer label="It's pretty slick." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Take me, for example. How's my outfit?">
            <Answer label="It's cute on you." />
            <Answer label="You look mature." />
            <Answer label="It's pretty slick." points={30} />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What!? No way! That's such bull! This has to be rigged or something!">
            <Answer label="Let's just calm down first." points={30} />
            <Answer label="Man, you suck." />
            <Answer label="Want me to give it a shot?" />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="What!? No way! That's such bull! This has to be rigged or something!">
            <Answer label="Let's just calm down first." points={30} />
            <Answer label="Man, you suck." />
            <Answer label="Want me to give it a shot?" />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Sure, I'm team manager and all, but I dunno if I'm ready to be a coach... What do you think?">
            <Answer label="You were a bit hasty." />
            <Answer label="You're too nice." />
            <Answer label="You're very responsible." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="Sure, I'm team manager and all, but I dunno if I'm ready to be a coach... What do you think?">
            <Answer label="You were a bit hasty." />
            <Answer label="You're too nice." />
            <Answer label="You're very responsible." points={30} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I wonder what I'll be doing then...">
            <Answer label="Studying for entrance exams." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I wonder what I'll be doing then...">
            <Answer label="Studying for entrance exams." points={30} />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I'm a little envious... since I don't really have anything I'm passionate about.">
            <Answer label="Don't give up yet." />
            <Answer label="You'll find something." points={30} />
            <Answer label="You're amazing too." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I'm a little envious... since I don't really have anything I'm passionate about.">
            <Answer label="Don't give up yet." />
            <Answer label="You'll find something." points={30} />
            <Answer label="You're amazing too." />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="You still have some time, right? What do you wanna do now?">
            <Answer label="Let's go to a café." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="You still have some time, right? What do you wanna do now?">
            <Answer label="Let's go to a café." points={30} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question
            label={`Hey, ${mainCharName}-kun, you got some sauce around your mouth.`}
          >
            <Answer label="It's a fashion statement." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question
            label={`Hey, ${mainCharName}-kun, you got some sauce around your mouth.`}
          >
            <Answer label="Oh, thanks." />
            <Answer label="It's fine." />
            <Answer label="Will you wipe it off for me?" points={30} />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I must be in my prime!">
            <Answer label="This is only the beginning." points={30} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question label="I must be in my prime!">
            <Answer label="This is only the beginning." points={30} />
          </Question>,
        ],
      }),
    },
  };
}

class StrengthKoromaruWalkSocialLinkLevels extends KoromaruWalkSocialLinkLevels {
  dates = [
    new Date(2009, 9, 18).getTime(),
    new Date(2009, 10, 8).getTime(),
    new Date(2010, 0, 2).getTime(),
    new Date(2010, 0, 17).getTime(),
  ];
}

export const Strength = new SocialLink(
  SocialLinkNames.Strength,
  { name: "Yuko Nishiwaki", place: "2F Classroom Hallway" },

  {
    koromaruWalks: new StrengthKoromaruWalkSocialLinkLevels(),
    invitations: new StrengthInvitationLevels(),
    mainLevels: new StrengthMainLevels(),
  }
);
