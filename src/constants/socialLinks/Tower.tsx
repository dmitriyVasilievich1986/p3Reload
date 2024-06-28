import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Tower: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Tower,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("What'cha doin' here today, kid?", [
        choice({ label: "I came to see you, old man." }),
        choice({ label: "None of your business.", points: 15 }),
      ]),
      choices(
        "You don't have to revere me, but at least show some proper respect.",
        [
          choice({ label: "How should I address you?", points: 5 }),
          choice({ label: "Show respect?" }),
        ]
      ),
    ]),
    LinkLevel(0, [
      choices(
        "How come you're always alone when I see ya? Don'tcha got any friends?",
        [
          choice({ label: "I can't say I don't." }),
          choice({ label: "I don't have any friends.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(25, [
      choices(
        "You should cut it. No, better yet, shave it all off... Give the bald look a try.",
        [
          choice({ label: "Yeah, that might look cool.", points: 15 }),
          choice({ label: "Yeah, I dunno..." }),
        ]
      ),
    ]),
    LinkLevel(25, [
      choices(
        "High school kids don't have much money, do they? At least, I never gave much to my son.",
        [
          choice({ label: "I have enough.", points: 5 }),
          choice({ label: "I am not NOT struggling..." }),
        ]
      ),
      choices(
        '...And I mean something you can buy with money. Not some crap like "love" or "a sense of humor".',
        [
          choice({ label: "Yes.", points: 5 }),
          choice({ label: "No.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(25, [
      choices("Ugh... I'm in bad shape...", [
        choice({ label: "Are you okay?" }),
        choice({ label: "You should go home.", points: 15 }),
      ]),
      choices(
        "It's times like these... ah... when it's hardest to be alone...",
        [
          choice({ label: "You live by yourself?" }),
          choice({ label: "Do you have any coworkers?", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices(
        "...Hey! There's a microphone over there. Bring it over, kid! I'll perform a live sutra reading.",
        [
          choice({ label: "Really?" }),
          choice({ label: "You probably shouldn't...", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices("Didn't dad tell you not to do that, huh?", [
        choice({ label: "Dad?", points: 15 }),
        choice({ label: "It's my first time hearing it.", points: 5 }),
        choice({ label: "......" }),
      ]),
      choices("Where the hell were ya wanderin' around? Iss late!", [
        choice({ label: "I was with a friend.", points: 5 }),
        choice({ label: "I was studying." }),
        choice({ label: "None of your business.", points: 5 }),
      ]),
      choices(
        "I wonder if they felt the same way I did, when I was waiting for you earlier...",
        [
          choice({ label: "Who's 'they'?" }),
          choice({ label: "What're you talking about?" }),
        ]
      ),
      choices(
        "…Now when I go home, I don't know what to do with myself, so I just come here and drink every night.",
        [
          choice({ label: "Do you miss your family?" }),
          choice({ label: "Are you running away?", points: 5 }),
        ]
      ),
    ]),
    LinkLevel(40, [
      choices(
        "I'm workin' memorial service after memorial service 24/7, as if my little temple was some kinda convenience store...",
        [
          choice({ label: "Why not take a break?", points: 5 }),
          choice({ label: "Poor men know no leisure.", points: 5 }),
        ]
      ),
      choices(
        "I've been drinkin' too much lately… Makin' a fool of myself like I did the other day.",
        [
          choice({ label: "Hang in there.", points: 5 }),
          choice({ label: "Time to retire?", points: 5 }),
        ]
      ),
      choices("Whaddya think?", [
        choice({ label: "What's this about?", points: 5 }),
        choice({ label: "I don't really care.", points: 5 }),
      ]),
    ]),
    LinkLevel(40, [
      choices("…Well? How's that sound?", [
        choice({ label: "That's awesome!", points: 15 }),
        choice({ label: "It's missing something." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
