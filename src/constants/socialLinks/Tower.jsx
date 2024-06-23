import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Tower = {
  name: "Tower",
  ...baseSocialLinkCalculation,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("What'cha doin' here today, kid?", [
        choice({ label: "I came to see you, old man." }),
        choice({ label: "None of your business.", correct: true }),
      ]),
      choices(
        "You don't have to revere me, but at least show some proper respect.",
        [
          choice({ label: "How should I address you?", ok: true }),
          choice({ label: "Show respect?" }),
        ]
      ),
    ]),
    LinkLevel(0, [
      choices(
        "How come you're always alone when I see ya? Don'tcha got any friends?",
        [
          choice({ label: "I can't say I don't." }),
          choice({ label: "I don't have any friends.", correct: true }),
        ]
      ),
    ]),
    LinkLevel(25, [
      choices(
        "You should cut it. No, better yet, shave it all off... Give the bald look a try.",
        [
          choice({ label: "Yeah, that might look cool.", correct: true }),
          choice({ label: "Yeah, I dunno..." }),
        ]
      ),
    ]),
    LinkLevel(25, [
      choices(
        "High school kids don't have much money, do they? At least, I never gave much to my son.",
        [
          choice({ label: "I have enough.", ok: true }),
          choice({ label: "I am not NOT struggling..." }),
        ]
      ),
      choices(
        '...And I mean something you can buy with money. Not some crap like "love" or "a sense of humor".',
        [
          choice({ label: "Yes.", ok: true }),
          choice({ label: "No.", correct: true }),
        ]
      ),
    ]),
    LinkLevel(25, [
      choices("Ugh... I'm in bad shape...", [
        choice({ label: "Are you okay?" }),
        choice({ label: "You should go home.", correct: true }),
      ]),
      choices(
        "It's times like these... ah... when it's hardest to be alone...",
        [
          choice({ label: "You live by yourself?" }),
          choice({ label: "Do you have any coworkers?", ok: true }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices(
        "...Hey! There's a microphone over there. Bring it over, kid! I'll perform a live sutra reading.",
        [
          choice({ label: "Really?" }),
          choice({ label: "You probably shouldn't...", correct: true }),
        ]
      ),
    ]),
    LinkLevel(30, [
      choices("Didn't dad tell you not to do that, huh?", [
        choice({ label: "Dad?", correct: true }),
        choice({ label: "It's my first time hearing it.", ok: true }),
        choice({ label: "......" }),
      ]),
      choices("Where the hell were ya wanderin' around? Iss late!", [
        choice({ label: "I was with a friend.", ok: true }),
        choice({ label: "I was studying." }),
        choice({ label: "None of your business.", ok: true }),
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
          choice({ label: "Are you running away?", ok: true }),
        ]
      ),
    ]),
    LinkLevel(40, [
      choices(
        "I'm workin' memorial service after memorial service 24/7, as if my little temple was some kinda convenience store...",
        [
          choice({ label: "Why not take a break?", ok: true }),
          choice({ label: "Poor men know no leisure.", ok: true }),
        ]
      ),
      choices(
        "I've been drinkin' too much lately… Makin' a fool of myself like I did the other day.",
        [
          choice({ label: "Hang in there.", ok: true }),
          choice({ label: "Time to retire?", ok: true }),
        ]
      ),
      choices("Whaddya think?", [
        choice({ label: "What's this about?", ok: true }),
        choice({ label: "I don't really care.", ok: true }),
      ]),
    ]),
    LinkLevel(40, [
      choices("…Well? How's that sound?", [
        choice({ label: "That's awesome!", correct: true }),
        choice({ label: "It's missing something." }),
      ]),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
