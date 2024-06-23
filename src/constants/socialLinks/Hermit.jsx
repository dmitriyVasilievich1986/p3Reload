import React from "react";

import {
  baseSocialLinkCalculation,
  LinkLevel,
  choices,
  choice,
} from "./baseFunctions";

export const Hermit = {
  name: "Hermit",
  ...baseSocialLinkCalculation,
  levels: [
    LinkLevel(),
    LinkLevel(0, [
      choices("u remember me rite? :O", [
        choice({ label: "Of course.", points: 15 }),
        choice({ label: "...Have we met?" }),
      ]),
      choices(
        "hmmm… what kinda people r we, playing inside on such a beautiful day?",
        [
          choice({ label: "Don't you like video games?" }),
          choice({ label: "Sunshine is overrated.", points: 5 }),
          choice({ label: "Guess we're loners." }),
        ]
      ),
    ]),
    LinkLevel(0, [
      choices("so ummmmm…… i'm drunk! xD", [
        choice({ label: "Oh really? o_O", points: 5 }),
        choice({ label: "Are you an adult?" }),
      ]),
      choices("but lately i cant get motivated to get work done @ work. =/", [
        choice({ label: "You don't like your job?", points: 15 }),
        choice({ label: "Are you burned out?" }),
      ]),
    ]),
    LinkLevel(20, [
      choices(
        "Its like all she cares about is marrying me off to some dude >=/ whys it her problem?",
        [
          choice({ label: "Don't wanna get married?" }),
          choice({ label: "You'll need a boyfriend first." }),
          choice({ label: "Let's plan our wedding, then.", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("Mr. E is such a stupid eh so bee!! t(-_-t)", [
        choice({ label: "Who's Mr. E?", points: 5 }),
        choice({ label: "Are you drunk again?" }),
        choice({ label: "Do you mean S.O.B.?", points: 5 }),
      ]),
      choices("…oh noes! u cant figure out what my job is can u? O_o", [
        choice({ label: "A drunken master?", points: 5 }),
        choice({ label: "Maya's a reporter, right?" }),
        choice({ label: "Are you a teacher?", points: 5 }),
      ]),
    ]),
    LinkLevel(20, [
      choices(
        "actually, i only went cuz i was so pissed at that bastard! >=/",
        [
          choice({ label: "Calm down." }),
          choice({ label: "What bastard?", points: 15 }),
        ]
      ),
    ]),
    LinkLevel(20, [
      choices("…do men only want younger women? be honest ・_・", [
        choice({ label: "What are you talking about?" }),
        choice({ label: "Age isn't the point.", points: 5 }),
        choice({ label: "Well, yeah." }),
      ]),
      choices("she even stuffs her bra!! lol", [
        choice({ label: "She, um… what?", points: 5 }),
        choice({ label: "Calm down." }),
      ]),
    ]),
    LinkLevel(20, [
      choices("oh noes… now i'm starting to get sweaty =/", [
        choice({ label: "Are you talking to yourself?" }),
        choice({ label: "Hurry up and tell me.", points: 15 }),
      ]),
      choices("that's kinda crazy even for me >_>;", [
        choice({ label: "What is he like?", points: 5 }),
        choice({ label: "Are you gonna ask him out?" }),
      ]),
    ]),
    LinkLevel(20, [
      choices("it said their canceling innocent sin. …think its for real?!", [
        choice({ label: "Not much we can do." }),
        choice({ label: "No way!", points: 5 }),
        choice({ label: "Whatever, I guess." }),
      ]),
      choices(
        "tatsuya... do u think we'll still be able to see each other? T_T",
        [
          choice({ label: "I think so." }),
          choice({ label: "No, this is the end." }),
          choice({ label: "Don't worry about that." }),
        ]
      ),
      choices("maya's not goin quietly! >=/ i'll beat them to the punch!", [
        choice({ label: "What are you planning?", points: 5 }),
        choice({ label: "This won't change anything." }),
      ]),
    ]),
    LinkLevel(20, [
      choices("…i should apologize", [
        choice({ label: "About what?" }),
        choice({ label: "Oh, no worries.", points: 15 }),
      ]),
      choices("i dun think i will...", [
        choice({ label: "Now they'll end it for sure." }),
        choice({ label: "Is that why you're sorry?" }),
      ]),
      choices(
        "im thinkin bout quittin the MMO today. i… dun think i'll c u again T_T",
        [
          choice({ label: "This is sudden..." }),
          choice({ label: "I'll miss you.", points: 15 }),
        ]
      ),
    ]),
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
