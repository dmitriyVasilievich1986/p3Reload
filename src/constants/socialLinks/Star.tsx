import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Star: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Star,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices(
        "That's why I have to make it big-it's for everyone who's been helping me.",
        [
          choice({ label: "I'm kinda jealous." }),
          choice({ label: "Sounds like a lot of pressure.", points: 5 }),
        ]
      ),
      choices("By the way, who would you say is your biggest rival?", [
        choice({ label: "You." }),
        choice({ label: "Myself.", points: 15 }),
      ]),
    ]),
    LinkLevel(0, [
      choices("Maybe I should get some for them too?", [
        choice({ label: "For your teammates?", points: 5 }),
        choice({ label: "Who's 'them'?", points: 5 }),
      ]),
      choices(
        "Our apartment's pretty small, though, so we're packed like sardines.",
        [
          choice({ label: "Sounds like fun.", points: 5 }),
          choice({ label: "That sounds rough.", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("...All right, just one more!", [
        choice({ label: "What are you doing?", points: 5 }),
        choice({ label: "Enjoy your food.", points: 5 }),
      ]),
      choices(
        "Know what that means? If I do well enough, I might score a scholarship.",
        [
          choice({ label: "That would be amazing!", points: 5 }),
          choice({ label: "What's the big deal?" }),
        ]
      ),
      choices("And maybe... this'll make my mom's life a little easier.", [
        choice({ label: "Hard to say." }),
        choice({ label: "Yeah, I bet it would.", points: 5 }),
      ]),
    ]),
    LinkLevel(20, [
      choices("huff huff Sorry I kept you waiting...", [
        choice({ label: "You're late." }),
        choice({ label: "Are you okay?", points: 5 }),
      ]),
      choices("I used to come here a lot with my teammates, but...", [
        choice({ label: "But what?" }),
        choice({ label: "I'll come back here with you.", points: 5 }),
      ]),
    ]),
    LinkLevel(20, [
      choices("Let's see.", [
        choice({ label: "I'll look around for him." }),
        choice({ label: "I'll wait a bit longer." }),
      ]),
      choices("Hmm...", [
        choice({ label: "Guess I'll kill some time." }),
        choice({ label: "Guess I'll keep waiting." }),
      ]),
      choices("Well...", [
        choice({ label: "I'll wait just a bit longer." }),
        choice({ label: "I'm just gonna go home." }),
      ]),
      choices("Sorry, but I don't think I can make it today.", [
        choice({ label: "Well, what happened?" }),
        choice({ label: "Don't worry, it's okay.", points: 15 }),
      ]),
    ]),
    LinkLevel(20, [
      choices("Thanks for coming all the way here for this.", [
        choice({ label: "What did you want?" }),
        choice({ label: "It's no problem at all.", points: 5 }),
      ]),
      choices("There's still so much I have to do.", [
        choice({ label: "Sounds pretty rough.", points: 5 }),
        choice({ label: "Stop whining and do it? ", points: 5 }),
      ]),
      choices("Why'd you have to die, Dad!?", [
        choice({ label: "This isn't your fault.", points: 5 }),
        choice({ label: "Do something about it!" }),
      ]),
      choices("Is this... really how it ends for me?", [
        choice({ label: "You should just accept it." }),
        choice({ label: "Don't give up yet.", points: 15 }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Hmmm...", [
        choice({ label: "Do it!", points: 15 }),
        choice({ label: "I could spot you some cash." }),
      ]),
      choices(
        "In the end, maybe it was my fault the team couldn't work together.",
        [
          choice({ label: "It sure was.", points: 15 }),
          choice({ label: "Don't sweat it.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices("So uh, the big meet for that scholarship was yesterday.", [
        choice({ label: "Did you win?", points: 5 }),
        choice({ label: "Did you lose?" }),
      ]),
      choices("I got first place, of course!", [
        choice({ label: "Wor, really?" }),
        choice({ label: "Congrats, man!", points: 5 }),
      ]),
      choices("Kinda makes me feel empty inside.", [
        choice({ label: "What will you do now?", points: 5 }),
        choice({ label: "Will you quit running?", points: 5 }),
      ]),
      choices("Go ahead and order extra noodles. It's on me.", [
        choice({ label: "Thanks!", points: 5 }),
        choice({ label: "Don't put yourself out!" }),
      ]),
    ]),
    LinkLevel(30, [
      choices("Glad we could meet up one more time before I take off.", [
        choice({ label: "Take off?" }),
        choice({ label: "You're leaving today?", points: 15 }),
      ]),
      choices("Well then, I better get going...", [
        choice({ label: "I'll see you off." }),
        choice({ label: "Let's chat a bit more." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
