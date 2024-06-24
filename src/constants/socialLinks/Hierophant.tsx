import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  mainCharName,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Hierophant: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Hierophant,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("What was your name again?", [
        choice({ label: mainCharName, points: 5 }),
        choice({ label: "..." }),
      ]),
      choices(
        `Someone gave it to me, but I have more than enough. Go ahead and take it, ${mainCharName}-chan.`,
        [
          choice({ label: "Thank you.", points: 15 }),
          choice({ label: "I'm okay, thanks." }),
        ]
      ),
      choices(
        "We have so many, my wife and I would take forever to finish them all.",
        [
          choice({ label: "I'd like that." }),
          choice({ label: "No, thank you." }),
        ]
      ),
      choices(
        `He should be here helping customers... Sorry about that, ${mainCharName}-chan.`,
        [choice({ label: "Boy?" }), choice({ label: "No need to apologize." })]
      ),
      choices("Oh, my dear, he's...", [
        choice({ label: "He's what?" }),
        choice({ label: "What's this about?" }),
      ]),
    ]),
    LinkLevel(0, [
      choices("I don't see it anywhere...", [
        choice({ label: "Looking for something?", points: 5 }),
        choice({ label: "Cleaning the store?" }),
      ]),
      choices(
        "It's not y contact lens I'm looking for, it's my wallet. My wallet! Now, where did I put it?",
        [
          choice({ label: "Best of luck.", points: 5 }),
          choice({ label: "Can I help?", points: 15 }),
        ]
      ),
      choices("I am one as well! I am a student at Gekkoukan!", [
        choice({ label: "Nice to meet you." }),
        choice({ label: "...Who are you?" }),
      ]),
      choices("But you can call me 'Bebe'! It's quite nice to meet you!", [
        choice({ label: "Nice to meet you." }),
        choice({ label: "......" }),
      ]),
      choices(
        "Why must you get into a car...? Do you want me to end up all alone!?",
        [
          choice({ label: "What's this about a car?" }),
          choice({ label: "All alone?" }),
        ]
      ),
      choices(
        "On his way home from work, he got into an accident... He was hit by a dump truck driver who was drunk on the job...",
        [
          choice({ label: "I'm sorry to hear that." }),
          choice({ label: "That's terrible luck." }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("My wife just headed out to Gekkoukan.", [
        choice({ label: "I should go too.", points: 15 }),
        choice({ label: "I'll wait here.", points: 15 }),
      ]),
      choices("The... The... The tree...", [
        choice({ label: "What happened" }),
        choice({ label: "Tree?" }),
      ]),
      choices(`Do you know anything about this, ${mainCharName}-chan?`, [
        choice({ label: "No, I don't." }),
        choice({ label: "I'm worried.", points: 5 }),
      ]),
    ]),
    LinkLevel(20, [
      choices(
        "We've been feeling a bit guilty for troubling you about the persimmon tree...",
        [
          choice({ label: "I wouldn't worry about it.", points: 5 }),
          choice({ label: "What tree?" }),
        ]
      ),
      choices("Why now? Why do they want to cut it down now...?", [
        choice({ label: "Cheer up.", points: 5 }),
        choice({ label: "It'll be okay.", points: 5 }),
      ]),
    ]),
    LinkLevel(20, [
      choices(
        "If we lose that tree... it would be like losing our son all over again...",
        [
          choice({ label: "You're overthinking it." }),
          choice({ label: "Please don't fight.", points: 15 }),
        ]
      ),
      choices(
        "Unfortunately, that just reminded my dear of the pain we felt the day our son died...",
        [
          choice({ label: "Cheer up." }),
          choice({ label: "I'm sure it'll be okay." }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("Ah...", [
        choice({ label: "What happened?", points: 5 }),
        choice({ label: "Are you fighting again?" }),
      ]),
      choices(
        "They say the tree is a memorial to their former teacher... They don't want it to be cut down.",
        [
          choice({ label: "The tree? A memorial?" }),
          choice({ label: "That's great.", points: 5 }),
        ]
      ),
      choices(
        `You must be the one who called on them for this, right, ${mainCharName}-chan?`,
        [
          choice({ label: "No.", points: 5 }),
          choice({ label: "That's right.", points: 5 }),
          choice({ label: "What are you talking about?", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("Who do you think it was? Here's a hint: 'signature.'", [
        choice({ label: "A petitioner?", points: 5 }),
        choice({ label: "A fan of yours?", points: 5 }),
      ]),
      choices(
        "He's already gathered a number of signatures from students who were in our son's class.",
        [
          choice({ label: "That's great." }),
          choice({ label: "That's amazing." }),
        ]
      ),
      choices("I have to tell my son the good news!", [
        choice({ label: "Sure, let's go.", points: 15 }),
        choice({ label: "Right now?", points: 15 }),
      ]),
    ]),
    LinkLevel(20, [
      choices(
        "What, is that surprising? I'm actually quite the net surfer, you know!",
        [
          choice({ label: "What does the letter say?", points: 5 }),
          choice({ label: "Why a letter?", points: 5 }),
        ]
      ),
      choices(
        "Are you curious about the letter? Excited, perhaps? Even exhilerated?",
        [choice({ label: "Excited." }), choice({ label: "Exhilerated." })]
      ),
    ]),
    LinkLevel(30, [
      choices("Bunkichi is sleep talking. Looks like he's taking a nap.", [
        choice({ label: "Take a closer look." }),
        choice({ label: "Leave him alone." }),
      ]),
      choices("It's the middle of the day, but I feel awfully sleepy.", [
        choice({ label: "What matter?" }),
        choice({ label: "Why are you relieved?" }),
      ]),
      choices("We asked them to go ahead and cut the persimmon tree down.", [
        choice({ label: "But.. why?", points: 15 }),
        choice({ label: "Oh well." }),
      ]),
      choices("He was a teacher after all.", [
        choice({ label: "That's true." }),
        choice({ label: "Are you really sure?" }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
