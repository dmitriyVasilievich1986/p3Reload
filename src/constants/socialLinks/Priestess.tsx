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

const priestessLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "Maybe I should give him some food. What do you think, Makoto-kun?",
      [
        choice({ label: "Sure.", points: 15 }),
        choice({ label: "Don't do it." }),
      ]
    ),
    choices("I don't want to put you in the hospital...", [
      choice({ label: "I can handle a bit." }),
      choice({ label: "Maybe we can use it in battle." }),
    ]),
    choices(
      "I don't think I can do this alone. Can I... count on you to help?",
      [
        choice({ label: "Sure thing.", points: 15 }),
        choice({ label: "Will it be good next time?" }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices(
      "I still don't have a feel for how much salt to add. How do you do it, Makoto-kun?",
      [
        choice({ label: "Just a dash or two.", points: 15 }),
        choice({ label: "I don't add salt." }),
        choice({ label: "Just dump it a ton.", points: 5 }),
      ]
    ),
    choices(
      "O-Oh, sorry. I know you're just trying to help me, and all I'm doing is being negative.",
      [
        choice({ label: "Just take it slow.", points: 15 }),
        choice({ label: "Don't get discouraged already.", points: 5 }),
        choice({ label: "Practice makes perfect.", points: 5 }),
      ]
    ),
    choices(
      "Hmm... But in that case, I can't really read while cooking. I wouldn't want to get the pages dirty.",
      [
        choice({ label: "Go to the bookstore." }),
        choice({ label: "I'll help you find something." }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices("", [
      choice({ label: "" }),
      choice({ label: "" }),
      choice({ label: "" }),
    ]),
  ]),
  LinkLevel(15, [
    choices(
      "But I couldn't really decide, and I wasn't sure how to use whatever I'd buy...",
      [
        choice({ label: "Do you really need one?" }),
        choice({ label: "Start with the basics first." }),
      ]
    ),
    choices("And it's not like I have any other redeeming qualities.", [
      choice({ label: "There's nothing you're good at?" }),
      choice({ label: "What about your Persona?" }),
      choice({ label: "You're a hard worker.", points: 5 }),
    ]),
    choices(
      "Not to mention that I'm kind of embarrassed about it all. I mean, it's not a very feminine hobby.",
      [
        choice({ label: "That's not true.", points: 15 }),
        choice({ label: "Maybe you're right." }),
        choice({ label: "Why do you think that?" }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices("W-Well... How is it?", [
      choice({ label: "It's good.", points: 5 }),
      choice({ label: "You did a great job.", points: 15 }),
    ]),
    choices(
      "Because I don't think I could have made it this far without you.",
      [
        choice({ label: "I'm glad I could help.", points: 5 }),
        choice({ label: "I didn't do anything." }),
      ]
    ),
    choices(
      "That might be the reason why I made such good rice balls. Because I was thinking about who was going to eat them.",
      [
        choice({ label: "Thank you." }),
        choice({ label: "I think I get it." }),
        choice({ label: "Can you make me more sometime?", points: 15 }),
      ]
    ),
  ]),
  LinkLevel(30, [
    choices(
      "I promise I'm going to do the best I can. So can I count on you?",
      [
        choice({ label: "Of course.", points: 15 }),
        choice({ label: "You sure you're not overdoing it?" }),
      ]
    ),
    choices(
      "I know I don't seem very reliable, but I want to make myself a useful member of the team.",
      [
        choice({ label: "That's the spirit.", points: 15 }),
        choice({ label: "Don't get too carried away." }),
        choice({ label: "You're already plenty useful." }),
      ]
    ),
  ]),
];

export const Priestess: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Priestess,
  levels: [
    ...priestessLevels,
    LinkLevel(30, [
      choices("......", [
        choice({ label: "What is it?" }),
        choice({ label: "Something wrong with that?" }),
      ]),
      choices("I mentioned that I don't really like going to bookstores", [
        choice({ label: "Yeah, I remember." }),
        choice({ label: "But we were just in one..." }),
      ]),
      choices("She even threatened to show my parents.", [
        choice({ label: "You did nothing wrong." }),
        choice({ label: "......" }),
        choice({ label: "That's messed up.", points: 5 }),
      ]),
      choices(
        "I'm sure it's because you're our leader. That's why I depend on you so much.",
        [
          choice({ label: "Is that the only reason?" }),
          choice({ label: "That's probably it.", fork: true }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "How are you able to tell yourself that everything will work out in the end?",
        [
          choice({ label: "I believe in myself.", points: 5 }),
          choice({ label: "It's just my personality.", points: 5 }),
          choice({ label: "I've never thought about it.", points: 5 }),
        ]
      ),
      choices("Will that be the end of us spending time together like this?", [
        choice({ label: "Not at all." }),
        choice({ label: "We'll see each other in the dorm.", points: 5 }),
      ]),
    ]),
    LinkLevel(40, [
      choices("She said, 'When you're friends, you don't keep score.'", [
        choice({ label: "She's right." }),
        choice({ label: "Ahaha! That's funny." }),
      ]),
      choices("I want to be together with you, forever.", [
        choice({ label: "I feel the same way." }),
        choice({ label: "Me too." }),
      ]),
      choices("......", [
        choice({ label: "I love you, Fuuka.", points: 15 }),
        choice({ label: "We'll always be friends." }),
      ]),
      choices("...!?", [
        choice({ label: "We'll be together forever." }),
        choice({ label: "I'll treat you right." }),
      ]),
    ]),
    LinkLevel(55, [
      choices(
        "I thought it might be nice to add some texture, so I made sure there's plenty of vegetables mixed in.",
        [
          choice({ label: "How bold." }),
          choice({ label: "Is that safe?" }),
          choice({ label: "But I like meat..." }),
        ]
      ),
      choices(
        "You just seem more at ease now. Or maybe it's more confidence? Don't you think so?",
        [
          choice({ label: "I agree." }),
          choice({ label: "You haven't seen anything just yet." }),
        ]
      ),
      choices(
        "Remeber how I told you I was pretty good with machines? Well, how are they?",
        [
          choice({ label: "I love them!", points: 15 }),
          choice({ label: "My mind is blown.", points: 5 }),
        ]
      ),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
  levelsRomance: [
    ...priestessLevels,
    LinkLevel(30, [
      choices("......", [
        choice({ label: "What is it?" }),
        choice({ label: "Something wrong with that?" }),
      ]),
      choices("I mentioned that I don't really like going to bookstores", [
        choice({ label: "Yeah, I remember." }),
        choice({ label: "But we were just in one..." }),
      ]),
      choices("She even threatened to show my parents.", [
        choice({ label: "You did nothing wrong." }),
        choice({ label: "......" }),
        choice({ label: "That's messed up.", points: 5 }),
      ]),
      choices(
        "I'm sure it's because you're our leader. That's why I depend on you so much.",
        [
          choice({ label: "Is that the only reason?" }),
          choice({ label: "That's probably it.", fork: true }),
        ]
      ),
    ]),
    LinkLevel(35, [
      choices(
        "How are you able to tell yourself that everything will work out in the end?",
        [
          choice({ label: "I believe in myself.", points: 5 }),
          choice({ label: "It's just my personality.", points: 5 }),
          choice({ label: "I've never thought about it.", points: 5 }),
        ]
      ),
      choices("Will that be the end of us spending time together like this?", [
        choice({ label: "Not at all." }),
        choice({ label: "We'll see each other in the dorm.", points: 5 }),
      ]),
    ]),
    LinkLevel(55, [
      choices("She said, 'When you're friends, you don't keep score.'", [
        choice({ label: "She's right." }),
        choice({ label: "Ahaha! That's funny." }),
      ]),
      choices("I want to be together with you, forever.", [
        choice({ label: "I feel the same way." }),
        choice({ label: "Me too." }),
      ]),
      choices("......", [
        choice({ label: "I love you, Fuuka.", points: 15 }),
        choice({ label: "We'll always be friends." }),
      ]),
      choices("...!?", [
        choice({ label: "We'll be together forever." }),
        choice({ label: "I'll treat you right." }),
      ]),
    ]),
    LinkLevel(0, [
      choices(
        "Sorry... I don't know what I'm saying... I'm acting weird, aren't I?",
        [
          choice({ label: "Are you nervous?" }),
          choice({ label: "You seem like yourself." }),
        ]
      ),
      choices("As long as I have you... I don't think I'll lose my way.", [
        choice({ label: "Glad to hear it.", points: 5 }),
        choice({ label: "I'm always here for you.", points: 15 }),
      ]),
      choices("So... what do you think?", [
        choice({ label: "I love them!", points: 15 }),
        choice({ label: "Your skills are impressive.", points: 5 }),
      ]),
    ]),
    LinkLevel(0, [
      choices("", [
        choice({ label: "" }),
        choice({ label: "" }),
        choice({ label: "" }),
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
        <Question label={`Um, ${mainCharName}-kun. Do you like sweets?`}>
          <Answer label="I do." points={30} />
        </Question>
      ),
    },
    3: {
      [Routes.Platonic]: (
        <Question label="Which do you like more? Japanese food or western food?">
          <Answer label="Japanese food." points={30} />
        </Question>
      ),
    },
    4: {
      [Routes.Platonic]: (
        <Question label="Do you prefer watching movies at the theater or at home on DVD?">
          <Answer label="At home on DVD." points={30} />
        </Question>
      ),
    },
    5: {
      [Routes.Platonic]: (
        <Question label="What do you usually do on your days off?">
          <Answer label="Spend time with friends." points={30} />
        </Question>
      ),
    },
    6: {
      [Routes.Platonic]: (
        <Question
          label={`Um... If I did make a dish with dried snake meat, would you still eat it, ${mainCharName}-kun?`}
        >
          <Answer label="You don't have to." points={30} />
        </Question>
      ),
    },
    7: {
      [Routes.Platonic]: (
        <Question label="Have you ever filleted a fish before?">
          <Answer label="Yeah, I'm not too bad." points={30} />
        </Question>
      ),
    },
    8: {
      [Routes.Platonic]: (
        <Question label="Do you think it's possible to connect music to cooking in that same vein?">
          <Answer label="Yeah, I think so." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question label="Do you think it's possible to connect music to cooking in that same vein?">
          <Answer label="Yeah, I think so." points={30} />
        </Question>
      ),
    },
    9: {
      [Routes.Platonic]: (
        <Question label="You've been awfully friendly with different girls lately, haven't you?">
          <Answer label="N-No, I haven't." points={30} />
        </Question>
      ),
      [Routes.Romantic]: (
        <Question label="You've been awfully friendly with different girls lately, haven't you?">
          <Answer label="N-No, I haven't." points={30} />
        </Question>
      ),
    },
  },
};
