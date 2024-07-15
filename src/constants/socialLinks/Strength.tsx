import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  mainCharName,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

const strengthLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "Also, I wasn't really in the mental state to do this alone today.",
      [
        choice({ label: "What happened?", points: 15 }),
        choice({ label: "You did good." }),
      ]
    ),
    choices(
      "And before I knew it, I'd dozed off. I ended up handing in a blank paper.",
      [
        choice({ label: "That's bad." }),
        choice({ label: "It wasn't your fault.", points: 5 }),
      ]
    ),
    choices(
      "But come on, it's way too early to worry about the future, isn't it? We're still just teenagers!",
      [
        choice({ label: "That's true.", points: 15 }),
        choice({ label: "I don't think so." }),
        choice({ label: "You haven't thought about it?" }),
      ]
    ),
  ]),
];

export const Strength: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Strength,
  levels: [
    ...strengthLevels,
    LinkLevel(0, [
      choices("Going that far would've been crossing the line.", [
        choice({ label: "Does this happen often?" }),
        choice({ label: "Do you know who did it?" }),
      ]),
      choices("Sorry you got dragged into that.", [
        choice({ label: "Friend of yours?" }),
        choice({ label: "Don't worry about it.", points: 5 }),
      ]),
      choices(
        "They called you my boyfriend. That must have made you feel awkward, huh?",
        [
          choice({ label: "I'm honored.", points: 5 }),
          choice({ label: "I don't mind.", fork: true, points: 5 }),
          choice({ label: "It might be a problem." }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices(`${mainCharName}-kun, what do you think I should do?`, [
        choice({ label: "Why not give it a go?" }),
        choice({ label: "That's for you to decide." }),
      ]),
      choices(
        "I mean, why not, right? Please? Honestly, I don't think I can handle it on my own...",
        [
          choice({ label: "Sure thing.", points: 5 }),
          choice({ label: "It's kind of a hassle." }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Elementary school kids really learn fast don't you think?", [
        choice({ label: "You're right. It's impressive.", points: 5 }),
        choice({ label: "That's not normal?" }),
        choice({ label: "It's because you teach so well.", points: 10 }),
      ]),
      choices(
        "Should I change the training routine? Maybe they should be running more.",
        [
          choice({ label: "You shouldn't change it.", fork: true, points: 5 }),
          choice({ label: "Maybe you should rethink it." }),
          choice({ label: "I trust whatever you decide Yuko." }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices(
        `...Oh, ${mainCharName}-kun, why don't you give them some advice too?`,
        [
          choice({ label: "You guys got this.", points: 5 }),
          choice({ label: "Show some guts!", points: 5 }),
        ]
      ),
      choices(
        "Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders?",
        [
          choice({ label: "It's gonna be tough." }),
          choice({ label: "As long as we believe in them.", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("They called you my boyfriend till the very end...", [
        choice({ label: "Wanna make that true?" }),
        choice({ label: "It's embarassing.", fork: true }),
        choice({ label: "They're just joking.", fork: true }),
      ]),
      choices("It's like the kids have left the nest...", [
        choice({ label: "Are you sad?" }),
        choice({ label: "Are you relieved?", points: 5 }),
      ]),
      choices(
        "Maybe we should throw a little party. You know, to celebrate our first attempt at coaching.",
        [
          choice({ label: "Let's do it.", points: 15 }),
          choice({ label: "Why?" }),
        ]
      ),
    ]),
    LinkLevel(40, [
      choices(`Which one sounds better to you, ${mainCharName}-kun?`, [
        choice({ label: "The cute one.", points: 5 }),
        choice({ label: "The reasonable one.", points: 5 }),
        choice({ label: "Either is fine." }),
      ]),
      choices("Sorry for always dragging you into situations like this", [
        choice({ label: "Glad it didn't turn into a fight." }),
        choice({ label: "You handled it well." }),
      ]),
    ]),
    LinkLevel(30, [
      choices("I thought my stomach was gonna explode!", [
        choice({ label: "That sounds like you." }),
        choice({ label: "You're gonna get fat" }),
      ]),
      choices("Can you guess what it is?", [
        choice({ label: "A track and field star?", points: 5 }),
        choice({ label: "An instructor?", points: 15 }),
        choice({ label: "A nursery teacher?", points: 5 }),
        choice({ label: "No idea...", points: 5 }),
      ]),
      choices(
        "Thinking back, I really caused you a lot of trouble, so... I'm sorry.",
        [
          choice({ label: "I don't mind." }),
          choice({ label: "You can rely on me even more." }),
        ]
      ),
      choices(
        "If you've got something on your mind, I'm here for you anytime, even if you just gotta rant, all right?",
        [
          choice({ label: "Thanks.", points: 5 }),
          choice({ label: "You're so dependable." }),
          choice({ label: "I do have some homework..." }),
        ]
      ),
    ]),
    LinkLevel(40, [
      choices(
        "Ugh, this is so heavy. I should't have crammed everything in there...",
        [
          choice({ label: "Stuff for the track team?" }),
          choice({ label: "Want me to carry it?", points: 5 }),
        ]
      ),
      choices(
        "It hasn't even been that long since we cached those kids though, huh?",
        [
          choice({ label: "That's just how fulfilling it was.", points: 5 }),
          choice({ label: "It's age..." }),
        ]
      ),
      choices(
        `It's from those kids. They told me to "make sure I give it to my boyfriend."`,
        [
          choice({ label: "Boyfriend..." }),
          choice({ label: "Where's yours?", points: 5 }),
          choice({ label: "I'm honored.", points: 5 }),
        ]
      ),
      choices("Kinda makes me wanna do it all again. What about you?", [
        choice({ label: "If the opportunity arises.", points: 5 }),
        choice({ label: "Let me think about it." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
  levelsRomance: [
    ...strengthLevels,
    LinkLevel(0, [
      choices("Going that far would've been crossing the line.", [
        choice({ label: "Does this happen often?" }),
        choice({ label: "Do you know who did it?" }),
      ]),
      choices("Sorry you got dragged into that.", [
        choice({ label: "Friend of yours?" }),
        choice({ label: "Don't worry about it.", points: 5 }),
      ]),
      choices(
        "They called you my boyfriend. That must have made you feel awkward, huh?",
        [
          choice({ label: "I'm honored.", fork: true, points: 5 }),
          choice({ label: "I don't mind." }),
          choice({ label: "It might be a problem." }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices(`${mainCharName}-kun, what do you think I should do?`, [
        choice({ label: "Why not give it a go?" }),
        choice({ label: "That's for you to decide." }),
      ]),
      choices(
        "I mean, why not, right? Please? Honestly, I don't think I can handle it on my own...",
        [
          choice({ label: "Sure thing.", points: 5 }),
          choice({ label: "It's kind of a hassle." }),
        ]
      ),
    ]),
    LinkLevel(15, [
      choices("Elementary school kids really learn fast don't you think?", [
        choice({ label: "You're right. It's impressive.", points: 5 }),
        choice({ label: "That's not normal?" }),
        choice({ label: "It's because you teach so well.", points: 10 }),
      ]),
      choices(
        "Should I change the training routine? Maybe they should be running more.",
        [
          choice({ label: "You shouldn't change it." }),
          choice({ label: "Maybe you should rethink it." }),
          choice({
            label: "I trust whatever you decide Yuko.",
            fork: true,
            points: 5,
          }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices(
        `...Oh, ${mainCharName}-kun, why don't you give them some advice too?`,
        [
          choice({ label: "You guys got this.", points: 5 }),
          choice({ label: "Show some guts!", points: 5 }),
        ]
      ),
      choices(
        "Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders?",
        [
          choice({ label: "It's gonna be tough." }),
          choice({ label: "As long as we believe in them.", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(22, [
      choices("They called you my boyfriend till the very end...", [
        choice({ label: "Wanna make that true?", fork: true }),
        choice({ label: "It's embarassing." }),
        choice({ label: "They're just joking." }),
      ]),
      choices("It's like the kids have left the nest...", [
        choice({ label: "Are you sad?" }),
        choice({ label: "Are you relieved?", points: 5 }),
      ]),
      choices(
        "Maybe we should throw a little party. You know, to celebrate our first attempt at coaching.",
        [
          choice({ label: "Let's do it.", points: 15 }),
          choice({ label: "Why?" }),
        ]
      ),
    ]),
    LinkLevel(40, [
      choices(
        "I was out buying stuff that might be useful for running practice, and I ran out of money.",
        [
          choice({ label: "It's fine." }),
          choice({ label: "This is a nice room." }),
          choice({ label: "Stuff for the kids?" }),
        ]
      ),
      choices("Hmm... Oh, do you like children?", [
        choice({ label: "I do." }),
        choice({ label: "Not really." }),
      ]),
      choices("Would you want it to be a boy or a girl?", [
        choice({ label: "A boy.", points: 5 }),
        choice({ label: "A girl.", points: 5 }),
        choice({ label: "I don't care." }),
      ]),
    ]),
    LinkLevel(30, [
      choices(
        "All it did was make me more confused than I originally was. Guess I'll have to go ask again tomorrow.",
        [
          choice({ label: "You're so hardworking." }),
          choice({ label: "Why go through all that trouble?" }),
        ]
      ),
      choices("Can you guess what it is?", [
        choice({ label: "A track and field star?", points: 5 }),
        choice({ label: "An instructor?", points: 15 }),
        choice({ label: "A nursery teacher?", points: 5 }),
        choice({ label: "No idea...", points: 5 }),
      ]),
      choices("I realized now that I might've been relying too much on you.", [
        choice({ label: "I don't mind." }),
        choice({ label: "You can rely on me even more." }),
      ]),
      choices(
        "Are you like this... just with me? N-No, no, th-that can't be it, huh...",
        [
          choice({ label: "It's because I love you.", fork: true, points: 5 }),
          choice({ label: "It's because you're a close friend." }),
        ]
      ),
      choices("What's happening...? Is this a dream?", [
        choice({ label: "I love you, Yuko.", points: 5 }),
        choice({ label: "It's not a dream.", points: 5 }),
      ]),
    ]),
    LinkLevel(40, [
      choices(
        "I guess I could've told you this next part at school, but I wanted to talk somewhere quiet.",
        [
          choice({ label: "Is it important?", points: 5 }),
          choice({ label: "What is it?", points: 5 }),
        ]
      ),
      choices(
        "I know they were kind of a handful, but they also have an endearing side to them, don't you think?",
        [
          choice({ label: "Yeah.", points: 5 }),
          choice({ label: "Not really.", points: 5 }),
        ]
      ),
      choices("Because today... Well, my parents aren't home, so...", [
        choice({ label: "I see." }),
        choice({ label: "What does that mean?", points: 5 }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
  invitations: {
    2: {
      [Routes.Platonic]: (
        <Question label="Take me, for example. How's my outfit?">
          <Answer label="It's pretty slick." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="What!? No way! That's such bull! This has to be rigged or something!">
          <Answer label="Let's just calm down first." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="Sure, I'm team manager and all, but I dunno if I'm ready to be a coach... What do you think?">
          <Answer label="You're very responsible." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="I wonder what I'll be doing then...">
          <Answer label="Studying for entrance exams." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question label="I'm a little envious... since I don't really have anything I'm passionate about.">
          <Answer label="You'll find something." points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="You still have some time, right? What do you wanna do now?">
          <Answer label="Let's go to a café." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question
          label={`Hey, ${mainCharName}-kun, you got some sauce around your mouth.`}
        >
          <Answer label="It's a fashion statement." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question
          label={`Hey, ${mainCharName}-kun, you got some sauce around your mouth.`}
        >
          <Answer label="Will you wipe it off for me?" points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="I must be in my prime!">
          <Answer label="This is only the beginning." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question label="I must be in my prime!">
          <Answer label="This is only the beginning." points={30} />
        </Question>
      ),
    },
  },
};
