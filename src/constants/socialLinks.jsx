import React from "react";

export function Choice({ label, correct = false, ok = false, fork = false }) {
  let color = "inherit";
  if (correct) color = "green";
  if (ok) color = "yellow";
  if (fork) color = "blue";
  return (
    <div
      style={{
        backgroundColor: color,
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );
}

export function ChoicesEvent({ label, children }) {
  return (
    <div>
      <h4>{label}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "250px" }}>{children}</div>
      </div>
    </div>
  );
}

const priestessLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "Maybe I should give him some food. What do you think, Makoto-kun?",
      [
        choice({ label: "Sure.", correct: true }),
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
        choice({ label: "Sure thing.", correct: true }),
        choice({ label: "Will it be good next time?" }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices(
      "I still don't have a feel for how much salt to add. How do you do it, Makoto-kun?",
      [
        choice({ label: "Just a dash or two.", correct: true }),
        choice({ label: "I don't add salt." }),
        choice({ label: "Just dump it a ton.", ok: true }),
      ]
    ),
    choices(
      "O-Oh, sorry. I know you're just trying to help me, and all I'm doing is being negative.",
      [
        choice({ label: "Just take it slow.", correct: true }),
        choice({ label: "Don't get discouraged already.", ok: true }),
        choice({ label: "Practice makes perfect.", ok: true }),
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
      choice({ label: "You're a hard worker.", ok: true }),
    ]),
    choices(
      "Not to mention that I'm kind of embarrassed about it all. I mean, it's not a very feminine hobby.",
      [
        choice({ label: "That's not true.", correct: true }),
        choice({ label: "Maybe you're right." }),
        choice({ label: "Why do you think that?" }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices("W-Well... How is it?", [
      choice({ label: "It's good.", ok: true }),
      choice({ label: "You did a great job.", correct: true }),
    ]),
    choices(
      "Because I don't think I could have made it this far without you.",
      [
        choice({ label: "I'm glad I could help.", ok: true }),
        choice({ label: "I didn't do anything." }),
      ]
    ),
    choices(
      "That might be the reason why I made such good rice balls. Because I was thinking about who was going to eat them.",
      [
        choice({ label: "Thank you." }),
        choice({ label: "I think I get it." }),
        choice({ label: "Can you make me more sometime?", correct: true }),
      ]
    ),
  ]),
  LinkLevel(30, [
    choices(
      "I promise I'm going to do the best I can. So can I count on you?",
      [
        choice({ label: "Of course.", correct: true }),
        choice({ label: "You sure you're not overdoing it?" }),
      ]
    ),
    choices(
      "I know I don't seem very reliable, but I want to make myself a useful member of the team.",
      [
        choice({ label: "That's the spirit.", correct: true }),
        choice({ label: "Don't get too carried away." }),
        choice({ label: "You're already plenty useful." }),
      ]
    ),
  ]),
];

const empressLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices("It's smaller than I expected.", [
      choice({ label: "Is this your first time?", ok: true }),
      choice({ label: "Do you know how to eat it?", ok: true }),
    ]),
  ]),
  LinkLevel(0, [
    choices("Sometimes my own ignorance astounds me...", [
      choice({ label: "Want me to treat you?" }),
      choice({ label: "Why not give it a try?", ok: true }),
    ]),
    choices("Maybe he's just maturing…", [
      choice({ label: "Are you sad?" }),
      choice({ label: "Are you happy?", correct: true }),
    ]),
    choices("It's the most peculiar feeling", [
      choice({ label: "Maybe you're in love.", ok: true }),
      choice({ label: "Maybe you're anxious.", ok: true }),
      choice({ label: "Maybe you're sad." }),
    ]),
    choices(
      "Sorry for subjecting you to my thoughtless ramblings… Just forget I said anything.",
      [
        choice({ label: "I'm rooting for you." }),
        choice({ label: "I heard nothing.", ok: true }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices(
      "In just a short while, we'll be looking back on these days with nostalgia.",
      [
        choice({ label: "What's next for you?" }),
        choice({ label: "Did something happen?", ok: true }),
      ]
    ),
    choices("What does marriage mean to you?", [
      choice({ label: "It's all for love", correct: true }),
      choice({ label: "It's a social agreement." }),
      choice({ label: "It's about compromise." }),
    ]),
    choices("Am I... wrong about this?", [
      choice({ label: "Do you have a boyfriend?" }),
      choice({ label: "That's a tough one." }),
    ]),
  ]),
  LinkLevel(22, [
    choices(
      "It seems a lot of thought goes into the design and construction of a movie theather.",
      [
        choice({ label: "...Said the rich girl." }),
        choice({ label: "Glad you enjoyed it.", correct: true }),
      ]
    ),
    choices(
      "She's likely more suited to riding a motorcycle than I am as well.",
      [
        choice({ label: "A motorcycle?", correct: true }),
        choice({ label: "You're not suited?" }),
      ]
    ),
    choices(
      "I don't regret it. Even now, I spend my time tuning it whenever I can.",
      [
        choice({ label: "What a high-class biker." }),
        choice({ label: "Let's go for a ride.", correct: true }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices("......", [
      choice({ label: "Looking for something specific?", ok: true }),
      choice({ label: "Need some help?", ok: true }),
      choice({ label: "Borrowing a book?" }),
    ]),
    choices("...Even if I have to make sacrifices to do it.", [
      choice({ label: "Did something happen?" }),
      choice({ label: "That doesn't sound good." }),
    ]),
    choices("This is the best solution for everyone involved...", [
      choice({ label: "Is it really?" }),
      choice({ label: "I didn't know...", ok: true }),
    ]),
    choices("So... I won't run from my fate.", [
      choice({ label: "Are you sure about this?", ok: true }),
      choice({ label: "That's admirable." }),
      choice({ label: "I'll do something about it.", correct: true }),
    ]),
  ]),
  LinkLevel(22, [
    choices("Or, is that too selfish a request?", [
      choice({ label: "I don't mind at all.", correct: true }),
      choice({ label: "Is that all you need?" }),
    ]),
  ]),
];

const loversLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "I think I'll go with the gerberas. What color do you think should I get?",
      [
        choice({ label: "Cute pink.", correct: true }),
        choice({ label: "Pure white." }),
        choice({ label: "Bright red." }),
        choice({ label: "What's a gerbera?" }),
      ]
    ),
    choices(
      "Oh wait, you've never seen my room, have you? Well then, why am I even asking you?",
      [
        choice({ label: "That's mean.", ok: true }),
        choice({ label: "Invite me over, then." }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices("I guess my mom's no different.", [
      choice({ label: "What makes you say that?" }),
      choice({ label: "......" }),
    ]),
  ]),
  LinkLevel(15, [
    choices("Sorry.", [
      choice({ label: "Who was that?" }),
      choice({ label: "What was that about?" }),
      choice({ label: "Are you okay?", correct: true }),
    ]),
  ]),
];

const justiceLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices("Sorry to drag you along while I go shopping...", [
      choice({ label: "Don't worry about it.", correct: true }),
      choice({ label: "I was bored anyway." }),
    ]),
    choices("...Um, do you read much, Makoto-san?", [
      choice({ label: "I read the classics.", ok: true }),
      choice({ label: "I read manga.", ok: true }),
      choice({ label: "I read fashion magazines." }),
      choice({ label: "I don't read books." }),
    ]),
    choices("Is it boring to hang around with, um, someone like me?", [
      choice({ label: "I'm having fun.", ok: true }),
      choice({ label: "Yeah, it's a drag." }),
      choice({ label: "I'm indifferent." }),
    ]),
    choices("But I'm always so scared, that all I can do is nod...", [
      choice({ label: "Are you only like this with guys?" }),
      choice({ label: "Why are you so afraid?" }),
    ]),
    choices(
      "So... whenever I see a man now, all I can think of is that face...",
      [
        choice({ label: "I shouldn't have asked." }),
        choice({ label: "I'm sorry." }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices("...Do they not know where they are!?", [
      choice({ label: "They have no shame.", ok: true }),
      choice({ label: "They're gonna...kiss?" }),
      choice({ label: "Where did they go?" }),
    ]),
    choices(
      "We should notify the student council president right away, and discuss this at our next meeting!",
      [
        choice({ label: "I agree.", ok: true }),
        choice({ label: "That's kind of extreme...?" }),
        choice({ label: "You don't like kissing?" }),
      ]
    ),
  ]),
  LinkLevel(22, [
    choices("Makoto-san...", [
      choice({ label: "Get lost." }),
      choice({ label: "...Hey." }),
    ]),
    choices("Why am I still shaking?", [
      choice({ label: "Let's hold hands." }),
      choice({ label: "I'm here for you.", correct: true }),
      choice({ label: "Take a deep breath." }),
    ]),
  ]),
];

const strengthLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices(
      "Also, I wasn't really in the mental state to do this alone today.",
      [
        choice({ label: "What happened?", ok: true }),
        choice({ label: "You did good." }),
      ]
    ),
    choices(
      "And before I knew it, I'd dozed off. I ended up handing a blank paper.",
      [
        choice({ label: "That's bad." }),
        choice({ label: "It wasn't your fault.", ok: true }),
      ]
    ),
    choices(
      "But come on, it's way too early to worry about the future, isn't it? We're still just teenagers!",
      [
        choice({ label: "That's true.", correct: true }),
        choice({ label: "I don't think so." }),
        choice({ label: "You haven't thought about it?" }),
      ]
    ),
  ]),
  LinkLevel(0, [
    choices("Going that far would've been crossing the line.", [
      choice({ label: "Does this happen often?" }),
      choice({ label: "Do you know who did it?" }),
    ]),
    choices("Sorry you got dragged into that.", [
      choice({ label: "Friend of yours?" }),
      choice({ label: "Don't worry about it.", ok: true }),
    ]),
    choices(
      "They called you my boyfriend. That must have made you feel awkward, huh?",
      [
        choice({ label: "I'm honored.", fork: true }),
        choice({ label: "I don't mind." }),
        choice({ label: "It might be a problem." }),
      ]
    ),
  ]),
  LinkLevel(5, [
    choices("Makoto-kun, what do you think I should do?", [
      choice({ label: "Why not give it a go?" }),
      choice({ label: "That's for you to decide." }),
    ]),
    choices(
      "I mean, why not right? Please? Honestly, I don't think I can handle it on my own...",
      [
        choice({ label: "Sure thing.", ok: true }),
        choice({ label: "It's kind of a hassle." }),
      ]
    ),
  ]),
];

const aeonLevels = [
  LinkLevel(),
  LinkLevel(0, [
    choices("What about you, Makoto-san? Do you... like it here?", [
      choice({ label: "I like it here.", correct: true }),
      choice({ label: "Not really." }),
      choice({ label: "I don't care." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("How can we make them understand...?", [
      choice({ label: "Just try explaining." }),
      choice({ label: "I don't think we can." }),
    ]),
    choices("......", [
      choice({ label: "Maybe so." }),
      choice({ label: "That's not true.", ok: true }),
    ]),
  ]),
  LinkLevel(0, [
    choices("A white, spotted cat... Did you see one, Makoto-san?", [
      choice({ label: "I might have...", ok: true }),
      choice({ label: "No, I haven't." }),
    ]),
    choices("Goodness, really!? Where might this have been?", [
      choice({ label: "Near the station" }),
      choice({ label: "Near the strip mall." }),
      choice({ label: "I don't remember." }),
    ]),
    choices(
      "Being separated from a loved one can be very distressing after all...",
      [
        choice({ label: "All right.", correct: true }),
        choice({ label: "What a pain..." }),
      ]
    ),
    choices("And I was the one who insisted we search... I'm sorry.", [
      choice({ label: "Don't let it get to you." }),
      choice({ label: "We should head back for today." }),
      choice({ label: "Let's keep looking." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("It seems that 'living' is something that can't be done alone...", [
      choice({ label: "You may be right.", correct: true }),
      choice({ label: "That's not true." }),
      choice({ label: "I don't know." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("Did I do something wrong?", [
      choice({ label: "You didn't call him Joe." }),
      choice({ label: "No, you didn't" }),
      choice({ label: "He thought I was your boyfriend." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("Was Mii-chan-san happy?", [
      choice({ label: "I think she was happy." }),
      choice({ label: "Who knows?" }),
    ]),
    choices("Was Mii-chan-san... grateful to have been born...?", [
      choice({ label: "I'm sure she was happy." }),
      choice({ label: "I'm not sure." }),
    ]),
    choices("For what purpose... was Mii-chan-san born...?", [
      choice({ label: "No one can say." }),
      choice({ label: "I don't know." }),
    ]),
  ]),
  LinkLevel(0, [
    choices("I was just curious.", [
      choice({ label: "Sometimes.", ok: true }),
      choice({ label: "I'm doing it now.", correct: true }),
      choice({ label: "No." }),
    ]),
    choices("......", [
      choice({ label: "I don't mind you being here." }),
      choice({ label: "What brought this on?" }),
    ]),
    choices("Why are you so important to me, Makoto-san?", [
      choice({ label: "It's love." }),
      choice({ label: "Because we're friends" }),
    ]),
  ]),
];

function choice({ label, correct = false, ok = false, fork = false }) {
  let points = 0;
  let backgroundColor = "inherit";

  if (correct) {
    points = 10;
    backgroundColor = "green";
  } else if (ok) {
    points = 5;
    backgroundColor = "yellow";
  } else if (fork) {
    backgroundColor = "blue";
  }

  return {
    label,
    points,
    element: ({ key }) => (
      <div
        key={key}
        style={{ backgroundColor, textAlign: "center", padding: "0 10px" }}
      >
        {label}
      </div>
    ),
  };
}

function choices(head, choices) {
  const points = Math.max(...choices.map((c) => c.points));

  return {
    points,
    element: ({ key }) => (
      <div key={key}>
        <h4 style={{ textAlign: "center" }}>{head}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div style={{ width: "fit-content" }}>
            {choices.map((c, i) => c.element({ key: i }))}
          </div>
        </div>
      </div>
    ),
  };
}

function LinkLevel(points = 0, levels = null) {
  if (levels === null)
    return {
      points: 0,
      maxPoints: 0,
      element: () => <h3 style={{ textAlign: "center" }}>Create bond</h3>,
    };
  const maxPoints = levels.reduce((acc, level) => acc + level.points, 0);

  return {
    points,
    maxPoints,
    element: () => <>{levels.map((level, i) => level.element({ key: i }))}</>,
  };
}

const baseSocialLinkCalculation = {
  maxLevel: 10,
  getlevel: function ({ level, romance = false }) {
    return this[romance ? "levelsRomance" : "levels"][level];
  },
  calculate: function ({ level, points, romance = false, multiplier = 1 }) {
    const currentLevel = this.getlevel({ level, romance });
    const isNewlevel = level < this.maxLevel && points >= currentLevel.points;
    return {
      [this.name]: {
        level: isNewlevel ? level + 1 : level,
        romance: romance,
        points: isNewlevel
          ? currentLevel.maxPoints * multiplier
          : points + 10 * multiplier,
      },
    };
  },
  getStaleLevel: function () {
    return <h3>Spending time</h3>;
  },
  levels: [],
};

export const socialLinks = {
  Magician: {
    name: "Magician",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices(
          "Can you like, just waltz on into Takeba-san's room and stuff?",
          [
            choice({ label: "Of course." }),
            choice({ label: "No way.", ok: true }),
            choice({ label: "That's a secret.", ok: true }),
          ]
        ),
        choices("I'm more into older women. How 'bout you?", [
          choice({ label: "I'm into older women, too.", ok: true }),
          choice({ label: "I prefer girls my age." }),
          choice({ label: "I like them all.", ok: true }),
        ]),
      ]),
      LinkLevel(0, [
        choices("Maaan... I'm so sick of this, dude.", [
          choice({ label: "What, of ramen?" }),
          choice({ label: "What, of school?" }),
          choice({ label: "What, life?", correct: true }),
        ]),
        choices(
          "Okay, that settles it. I'm gonna get myself a girlfriend! Right now!",
          [
            choice({ label: "Sounds Impossible." }),
            choice({ label: "Good luck!", ok: true }),
          ]
        ),
      ]),
      LinkLevel(0, [
        choices(
          "Hey, thanks for coming, man. You mind waiting here for a sec?",
          [choice({ label: "Sure." }), choice({ label: "Why?" })]
        ),
        choices("I'm gonna go ask Ms. Kanou out! Like, right now!", [
          choice({ label: "Good luck!", correct: true }),
          choice({ label: "Don't do it." }),
          choice({ label: "Whatever, man." }),
        ]),
      ]),
      LinkLevel(15, [
        choices(
          "Yeah, good-looking people just flock together, y'know?. It's like a law of attraction.",
          [
            choice({ label: "...Is that so?" }),
            choice({ label: "Okay...", correct: true }),
            choice({ label: "Good-looking, huh?" }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("Sorry, man. I've gotta pass this time.", [
          choice({ label: "Just like that?" }),
          choice({ label: "Why?" }),
        ]),
        choices(
          "I mean, getting into college is pretty important, don't you think? You think about the future too, right?",
          [
            choice({ label: "I've got plans already.", correct: true }),
            choice({ label: "Yeah, more than you do." }),
            choice({ label: "Not even a little." }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("I can't eat...", [
          choice({ label: "What happened.", ok: true }),
          choice({ label: "I'll eat it for you." }),
        ]),
        choices("I saw a magazine in Emiri's room. Guess what it was called.", [
          choice({ label: "In Fashion?" }),
          choice({ label: "Occult Living?" }),
          choice({ label: "Bride-To-Be?", ok: true }),
        ]),
        choices("You think that's a good plan?", [
          choice({ label: "Congrats!", ok: true }),
          choice({ label: "You're rushing things." }),
          choice({ label: "Sure, whatever." }),
        ]),
      ]),
      LinkLevel(22, [
        choices(
          "H-Hey, man. Sorry to make you come here. I, um... Ah, damn it...",
          [
            choice({ label: "Spit it out!" }),
            choice({ label: "Are you in trouble?", correct: true }),
          ]
        ),
        choices(
          "And now she's being transferred to a school in Kyushu. What do I do!?",
          [
            choice({ label: "You should go with her.", ok: true }),
            choice({ label: "You two should talk it out.", ok: true }),
            choice({ label: "Figure it out yourself." }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("I was so excited about going with her that I...I...", [
          choice({ label: "Cheer up, man." }),
          choice({ label: "Let me handle this!", correct: true }),
          choice({ label: "Haha." }),
        ]),
      ]),
      LinkLevel(22, [
        choices(
          "Ms. Kanou must be in Kyushu by now. I wonder if she had her wedding already.",
          [
            choice({ label: "......", ok: true }),
            choice({ label: "Maybe she did." }),
            choice({ label: "I'm stealing your egg!" }),
          ]
        ),
        choices(
          "Man, it's always a blast hanging out with you. That said... I still want a girlfriend!",
          [
            choice({ label: "You don't know when to give up..." }),
            choice({ label: "You've got this!", ok: true }),
            choice({ label: "Want me to find you a girl?", ok: true }),
          ]
        ),
        choices("What I did figure out is... you're a true friend.", [
          choice({ label: "...Are we still talking about love?" }),
          choice({ label: "That's right! We're great friends." }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Priestess: {
    name: "Priestess",
    ...baseSocialLinkCalculation,
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
          choice({ label: "That's messed up.", ok: true }),
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
            choice({ label: "I believe in myself.", ok: true }),
            choice({ label: "It's just my personality.", ok: true }),
            choice({ label: "I've never thought about it.", ok: true }),
          ]
        ),
        choices(
          "Will that be the end of us spending time together like this?",
          [
            choice({ label: "Not at all." }),
            choice({ label: "We'll see each other in the dorm.", ok: true }),
          ]
        ),
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
          choice({ label: "I love you, Fuuka.", correct: true }),
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
            choice({ label: "I love them!", correct: true }),
            choice({ label: "My mind is blown.", ok: true }),
          ]
        ),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
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
          choice({ label: "That's messed up.", ok: true }),
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
            choice({ label: "I believe in myself.", ok: true }),
            choice({ label: "It's just my personality.", ok: true }),
            choice({ label: "I've never thought about it.", ok: true }),
          ]
        ),
        choices(
          "Will that be the end of us spending time together like this?",
          [
            choice({ label: "Not at all." }),
            choice({ label: "We'll see each other in the dorm.", ok: true }),
          ]
        ),
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
          choice({ label: "I love you, Fuuka.", correct: true }),
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
          choice({ label: "Glad to hear it.", ok: true }),
          choice({ label: "I'm always here for you.", correct: true }),
        ]),
        choices("So... what do you think?", [
          choice({ label: "I love them!", correct: true }),
          choice({ label: "Your skills are impressive.", ok: true }),
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
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Emperor: {
    name: "Emperor",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices(
          "Some students feel the school uniform should be abolished, and they're recruiting supporters.",
          [
            choice({ label: "They've got a point." }),
            choice({ label: "Sounds like nonsense.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(0, [
        choices(
          "What!? You can't decide something like that without talking to the president first.",
          [
            choice({ label: "What happened?", ok: true }),
            choice({ label: "No need to fight.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(0, [
        choices("This guy looks like he's about to hit Odagiri!", [
          choice({ label: "Knock it off!" }),
          choice({ label: "..........." }),
        ]),
        choices("What is it? Do you need something from me?", [
          choice({ label: "You went a little overboard." }),
          choice({ label: "Looks like you're hard at work.", correct: true }),
        ]),
      ]),
      LinkLevel(15, [
        choices("...Bunch of neanderthals", [
          choice({ label: "They're the worst.", correct: true }),
          choice({ label: "You shouldn't accuse everyone." }),
        ]),
      ]),
      LinkLevel(15, [
        choices("It's nice not having those hyenas around.", [
          choice({ label: "You're not going home yet?" }),
          choice({ label: "It's nice?" }),
        ]),
        choices(
          "So as you can see, we can't exactly hold a meeting right now. You can leave if you want.",
          [
            choice({ label: "But I just got here…", correct: true }),
            choice({ label: "I think I'll stick around.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("About the smoker's punishment, I mean.", [
          choice({ label: "It seems reasonable." }),
          choice({ label: "It seems too harsh.", correct: true }),
        ]),
      ]),
      LinkLevel(15, [
        choices("Um, did Odagiri-san do something?", [
          choice({ label: "What do you mean?" }),
          choice({ label: "Why? Is something wrong?" }),
        ]),
        choices("...So, you heard all that.", [
          choice({ label: "It wasn't me.", correct: true }),
          choice({ label: "You came to my defense?", ok: true }),
        ]),
      ]),
      LinkLevel(22, [
        choices(
          "I rambled on about rules and fairness, but all I really proved was that I was desperate for power.",
          [
            choice({ label: "Don't blame yourself.", correct: true }),
            choice({ label: "Good thing you noticed." }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("So, how did I do? What'd everyone think?", [
          choice({ label: "Not too shabby.", correct: true }),
          choice({ label: "You were great.", correct: true }),
        ]),
        choices("That's why you should be the one to have it.", [
          choice({ label: "I'll cherish it.", correct: true }),
          choice({ label: "I guess I'll take it.", correct: true }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Hierophant: {
    name: "Hierophant",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices("What was your name again?", [
          choice({ label: "Tell him your name.", ok: true }),
          choice({ label: "..." }),
        ]),
        choices(
          "Someone gave them to me, but I have more than enough. Go ahead and take it, Makoto-chan.",
          [
            choice({ label: "Thank you.", correct: true }),
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
          "He should be here helping customers... Sorry about that, Makoto-chan.",
          [
            choice({ label: "Boy?" }),
            choice({ label: "No need to apologize." }),
          ]
        ),
        choices("Oh, my dear, he's...", [
          choice({ label: "He's what?" }),
          choice({ label: "What's this about?" }),
        ]),
      ]),
      LinkLevel(0, [
        choices("I don't see it anywhere...", [
          choice({ label: "Looking for something?", ok: true }),
          choice({ label: "Cleaning the store?" }),
        ]),
        choices(
          "I'm looking for my glasses-Er, not my glasses - my wallet! I can't seem to find it.",
          [
            choice({ label: "Best of luck." }),
            choice({ label: "Can I help?", correct: true }),
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
          choice({ label: "I should go too.", correct: true }),
          choice({ label: "I'll wait here.", ok: true }),
        ]),
        choices("The... The... The tree...", [
          choice({ label: "Ask what happened" }),
          choice({ label: "Remain silent" }),
        ]),
        choices("", [
          choice({ label: "Do you know anything about this, Makoto-chan?" }),
          choice({ label: "No, I don't." }),
          choice({ label: "I'm worried.", ok: true }),
        ]),
      ]),
      LinkLevel(20, [
        choices(
          "We've been feeling a bit guilty for troubling you about the persimmon tree...",
          [
            choice({ label: "I wouldn't worry about it.", ok: true }),
            choice({ label: "What tree?" }),
          ]
        ),
        choices("Why now? Why do they want to cut it down now...?", [
          choice({ label: "Cheer up.", ok: true }),
          choice({ label: "It'll be okay.", ok: true }),
        ]),
      ]),
      LinkLevel(20, [
        choices(
          "If we lose that tree... it would be like losing our son all over again...",
          [
            choice({ label: "You're overthinking it." }),
            choice({ label: "Please don't fight.", correct: true }),
          ]
        ),
        choices(
          "Unfortunately, that just reminded my dear the pain we felt the day our son died...",
          [
            choice({ label: "Cheer up." }),
            choice({ label: "I'm sure it'll be okay." }),
          ]
        ),
      ]),
      LinkLevel(20, [
        choices("Ah...", [
          choice({ label: "What happened?", ok: true }),
          choice({ label: "Are you fighting again?" }),
        ]),
        choices(
          "They say the tree is a memorial to their former teacher... They don't want it to be cut down.",
          [
            choice({ label: "The tree? A memorial?" }),
            choice({ label: "That's great.", ok: true }),
          ]
        ),
        choices(
          "You must be the one who called on them for this, right, Makoto-chan?",
          [
            choice({ label: "No.", ok: true }),
            choice({ label: "That's right.", ok: true }),
            choice({ label: "What are you talking about?", ok: true }),
          ]
        ),
      ]),
      LinkLevel(20, [
        choices("Who do you think it was? Here's a hint: 'signature.'", [
          choice({ label: "A petitioner?" }),
          choice({ label: "A fan of yours?", ok: true }),
        ]),
        choices(
          "He's already gathered a number of signatures from students who were in our son's class.",
          [
            choice({ label: "That's great." }),
            choice({ label: "That's amazing." }),
          ]
        ),
        choices("I have to tell my son the good news!", [
          choice({ label: "Sure, let's go.", correct: true }),
          choice({ label: "Right now?" }),
        ]),
      ]),
      LinkLevel(5, [
        choices(
          "What? is that surprising? I'm actually quite the net surfer, you know!",
          [
            choice({ label: "What does the letter say?", ok: true }),
            choice({ label: "Why a letter?", ok: true }),
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
          choice({ label: "But.. why?", correct: true }),
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
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Chariot: {
    name: "Chariot",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices("M-My side is killing me...", [
          choice({ label: "Don't overdo it." }),
          choice({ label: "Toughen up!", ok: true }),
        ]),
        choices(
          "You don't even look tired... Uh, what kind of training regimen do you have?",
          [
            choice({ label: "Just a normal routine." }),
            choice({ label: "A very special routine." }),
          ]
        ),
      ]),
      LinkLevel(0, [
        choices("Um... My anemia's just acting up...", [
          choice({ label: "Sorry, that sounds awful." }),
          choice({ label: "Are you going to be okay?", ok: true }),
        ]),
        choices(
          "Even if I put medicine on it, or massage it, the pain won't go away.",
          [
            choice({ label: "Will it heal?", correct: true }),
            choice({ label: "Take the day off." }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("Wh-What's up...? I was just gonna sneak into practice...", [
          choice({ label: "Where have you been?" }),
          choice({ label: "Did you ditch?" }),
        ]),
        choices(
          "She made the appointment without telling me, so... there was nothing I could do!",
          [
            choice({ label: "How did it go?" }),
            choice({ label: "That really sucks.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("Man... I keep running into you at the weirdest times.", [
          choice({ label: "Back from the hospital?", ok: true }),
          choice({ label: "You ditched?" }),
        ]),
        choices("You gotta be kidding... Why can't I... stand up!?", [
          choice({ label: "Take my shoulder!", correct: true }),
          choice({ label: "I'll carry you!", ok: true }),
          choice({ label: "I'll go get help!" }),
        ]),
      ]),
      LinkLevel(15, [
        choices("I want to win so I have to practice.", [
          choice({ label: "There's nothing you can do." }),
          choice({ label: "Show some guts, man!", ok: true }),
        ]),
        choices(
          "I promised I'd win at next year's meet and become the number one athlete in Japan.",
          [
            choice({ label: "You promised?" }),
            choice({ label: "Why go so far?", ok: true }),
          ]
        ),
        choices(
          "That's why I have to win this meet-so I can make it to nationals!",
          [
            choice({ label: "Do you think you can win?" }),
            choice({ label: "What about your knee?" }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices(
          "I know you didn't say anything. I just think he can tell something's up.",
          [
            choice({ label: "How's your knee?", ok: true }),
            choice({ label: "Can you fake it?" }),
          ]
        ),
        choices("Otherwise, I won't be able to keep my promise to my nephew!", [
          choice({ label: "You need to get tougher.", correct: true }),
          choice({ label: "You can't win like this." }),
          choice({ label: "You need to take a break." }),
        ]),
      ]),
      LinkLevel(22, [
        choices("You must know what's going on.", [
          choice({ label: "I don't know anything.", ok: true }),
          choice({ label: "......", ok: true }),
        ]),
      ]),
      LinkLevel(22, [
        choices("I'm sure you love lugging all this dead weight around, huh?", [
          choice({ label: "I don't mind at all.", correct: true }),
          choice({ label: "No, not exactly." }),
          choice({ label: "It's fine-I'm tough as hell.", ok: true }),
        ]),
      ]),
      LinkLevel(22, [
        choices("I need to talk to you...", [
          choice({ label: "Right now?" }),
          choice({ label: "What about?" }),
        ]),
        choices(
          "...I've made up my mind. I'm going to have surgery to fix my knee...",
          [
            choice({ label: "What about the big meet?" }),
            choice({ label: "What about your promise?", correct: true }),
          ]
        ),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Hermit: {
    name: "Hermit",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices("u remember me rite? =/", [
          choice({ label: "Of course.", correct: true }),
          choice({ label: "...Have we met?" }),
        ]),
        choices(
          "hmmm… what kinda people r we, playing inside on such a beautiful day?",
          [
            choice({ label: "Don't you like video games?" }),
            choice({ label: "Sunshine is overrated.", correct: true }),
            choice({ label: "Guess we're loners." }),
          ]
        ),
      ]),
      LinkLevel(0, [
        choices("so ummmmm…… i'm drunk! xD", [
          choice({ label: "Oh really?! o_O", correct: true }),
          choice({ label: "Are you an adult?" }),
        ]),
        choices(
          "but lately i cant get motivated to get ne work done @ work. =/",
          [
            choice({ label: "You don't like your job?", correct: true }),
            choice({ label: "Are you burned out?" }),
          ]
        ),
      ]),
      LinkLevel(20, [
        choices(
          "Its like all she cares about is marrying me to some dude >=/ whys it her problem?",
          [
            choice({ label: "Don't wanna get married?" }),
            choice({ label: "You'll need a boyfriend first." }),
            choice({ label: "Let's plan our wedding, then.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(20, [
        choices("Mr. E is such a stupid eh so bee!! t(-_-t)", [
          choice({ label: "Who's Mr. E?" }),
          choice({ label: "Are you drunk again?" }),
          choice({ label: "Do you mean S.O.B.?", correct: true }),
        ]),
        choices("…oh noes! u can't figure out what my job is can u? O_o?", [
          choice({ label: "A drunken master?" }),
          choice({ label: "Maya's a reporter, right?" }),
          choice({ label: "Are you a teacher?", correct: true }),
        ]),
      ]),
      LinkLevel(20, [
        choices(
          "actually, i only went cuz i was so pissed at that bastard! >=/",
          [
            choice({ label: "Calm down." }),
            choice({ label: "What bastard?", correct: true }),
          ]
        ),
      ]),
      LinkLevel(20, [
        choices("…do men only want younger women? be honest ・_・", [
          choice({ label: "What are you talking about?" }),
          choice({ label: "Age isn't the point.", ok: true }),
          choice({ label: "Well, yeah." }),
        ]),
        choices("she even stuffs her bra!! lol", [
          choice({ label: "She, um… what?", ok: true }),
          choice({ label: "Calm down." }),
        ]),
      ]),
      LinkLevel(20, [
        choices("oh noes… now i'm starting to get sweaty =/", [
          choice({ label: "Are you talking to yourself?" }),
          choice({ label: "Hurry up and tell me.", correct: true }),
        ]),
        choices("that's kinda crazy even for me >_>;", [
          choice({ label: "What is he like?", ok: true }),
          choice({ label: "Are you gonna ask him out?" }),
        ]),
      ]),
      LinkLevel(20, [
        choices("it said their canceling innocent sin. …think its for real?!", [
          choice({ label: "Not much we can do." }),
          choice({ label: "No way!", ok: true }),
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
          choice({ label: "What are you planning?", ok: true }),
          choice({ label: "This won't change anything." }),
        ]),
      ]),
      LinkLevel(20, [
        choices("…i should apologize", [
          choice({ label: "About what?" }),
          choice({ label: "Oh, no worries.", correct: true }),
        ]),
        choices("i dun think i will...", [
          choice({ label: "Now they'll end it for sure." }),
          choice({ label: "Is that why you're sorry?" }),
        ]),
        choices(
          "im thinkin bout quittin the MMO today. i… dun think i'll c u again T_T",
          [
            choice({ label: "This is sudden..." }),
            choice({ label: "I'll miss you.", correct: true }),
          ]
        ),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Fortune: {
    name: "Fortune",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices("...!", [
          choice({ label: "What's wrong?" }),
          choice({ label: "Do you need some rest?" }),
        ]),
        choices("Yamagishi-san won't be going anywhere for a while.", [
          choice({ label: "'Strikes again'?" }),
          choice({ label: "Is that a problem?" }),
        ]),
      ]),
      LinkLevel(0, [
        choices(
          "It really helped apply the paint to the canvas, so I'm sure that's the only reason the judges even noticed.",
          [
            choice({ label: "You've got talent!", correct: true }),
            choice({ label: "You got lucky." }),
          ]
        ),
        choices(
          "I recommend adding more shellfish to your diet, like oyster and abalone. They're packed with iron and easy to cook.",
          [
            choice({ label: "Good work, Doc Junior." }),
            choice({ label: "Will he be okay?" }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("Did you... hear everything?", [
          choice({ label: "You're quitting art club?", ok: true }),
          choice({ label: "You're pulling out of the contest?", ok: true }),
        ]),
        choices(
          "I have my own dreams too, you know! Ugh, I can't stand it anymore!",
          [
            choice({
              label: "Complaining to me won't help you.",
              correct: true,
            }),
            choice({ label: "So you're just gonna take it?", ok: true }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("Wait. Then... that means...", [
          choice({ label: "You should tell your dad.", correct: true }),
          choice({ label: "Now you don't have to quit.", ok: true }),
        ]),
      ]),
      LinkLevel(15, [
        choices("Everyone is working so hard...", [
          choice({ label: "So are you." }),
          choice({ label: "What's the matter?" }),
        ]),
        choices("I just don't know what to think.", [
          choice({ label: "Will you study abroad?" }),
          choice({ label: "It's your choice now.", correct: true }),
        ]),
      ]),
      LinkLevel(15, [
        choices(
          "It's like he's suddenly trying to be more understanding. It's weird.",
          [
            choice({ label: "Do you want to be a doctor?", correct: true }),
            choice({ label: "Don't you like art club?" }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("Can you remember my name?", [
          choice({ label: "It's okay, I'm fine.", correct: true }),
          choice({ label: "Of course. It's Keisuke." }),
          choice({ label: "......" }),
        ]),
        choices("A-Anyway, do you remember what happened?", [
          choice({ label: "I do." }),
          choice({ label: "I don't." }),
        ]),
        choices("I'm not a doctor.", [
          choice({ label: "Do you think you want to be one?" }),
          choice({ label: "Don't beat yourself up for it." }),
        ]),
      ]),
      LinkLevel(22, [
        choices("Tell the others I said goodbye!", [
          choice({ label: "You can't go!", correct: true }),
          choice({ label: "Good luck!" }),
        ]),
        choices("Ma'am, are you all right!? That cough...", [
          choice({ label: "What happened?" }),
          choice({ label: "...You should just go." }),
        ]),
        choices("My train's about to leave... Wh-What should I do...?", [
          choice({ label: "Leave this to me!" }),
          choice({ label: "You can't abandon your trip!" }),
        ]),
        choices("How should I help him?", [
          choice({ label: "Better leave him alone." }),
          choice({ label: "I should talk to him." }),
          choice({ label: "I'll try patting his upper back." }),
        ]),
        choices("What should I do next?", [
          choice({ label: "Better leave him alone." }),
          choice({ label: "I could rub his back." }),
          choice({ label: "I'll lay him on his back." }),
        ]),
      ]),
      LinkLevel(22, [
        choices("That's why I want you to have it.", [
          choice({ label: "I understand.", correct: true }),
          choice({ label: "Why?", correct: true }),
          choice({ label: "Stop relying on others.", correct: true }),
        ]),
        choices("I-I'm not coming off as arrogant, am I?", [
          choice({ label: "No, not really.", correct: true }),
          choice({ label: "Yeah.", correct: true }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  HangedMan: {
    name: "HangedMan",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices("My tummy's grumbling! Can we go to Wilduck?", [
          choice({ label: "Sure, let's go.", correct: true }),
          choice({ label: "Let's keep playing." }),
        ]),
        choices("Why would they get a divorce?", [
          choice({ label: "They fell out of love." }),
          choice({ label: "It's probably your fault." }),
          choice({ label: "I don't know." }),
        ]),
        choices("...She's sobbing loudly. What should I do?", [
          choice({ label: "Calm her down" }),
          choice({ label: "Wait for her to finish." }),
        ]),
      ]),
      LinkLevel(0, [
        choices("...And who are you?", [
          choice({ label: "I'm Maiko's friend." }),
          choice({ label: "Just a random passerby." }),
        ]),
        choices("Do you think he'll come home and see me?", [
          choice({ label: "He'll probably forget." }),
          choice({ label: "I really can't say." }),
          choice({ label: "Don't worry, he'll be there.", correct: true }),
        ]),
      ]),
      LinkLevel(20, [
        choices("They really do care about me!", [
          choice({ label: "That's great news!", correct: true }),
          choice({ label: "Of course they care.", correct: true }),
          choice({ label: "Nah, they don't care." }),
        ]),
      ]),
      LinkLevel(20, [
        choices("He's so mean. It's not fair!", [
          choice({ label: "That's awful.", correct: true }),
          choice({ label: "Why would he do that?" }),
        ]),
        choices("Do they just wish I would disappear?", [
          choice({ label: "It's possible." }),
          choice({ label: "They would never?", ok: true }),
        ]),
      ]),
      LinkLevel(20, [
        choices("I made up my mind! I have to run away from home!", [
          choice({ label: "Don't do it." }),
          choice({ label: "Calm down.", ok: true }),
          choice({ label: "It's up to you." }),
        ]),
        choices("I'll need lots of snacks, right? And my...insurance card?", [
          choice({ label: "That should be enough.", correct: true }),
          choice({ label: "It'll take more than that." }),
        ]),
      ]),
      LinkLevel(30, [
        choices("She's never done anything like this before!", [
          choice({ label: "We should look for her." }),
          choice({ label: "It's probably your fault." }),
          choice({ label: "Just leave her alone." }),
        ]),
        choices(
          "If you have any idea where she is, I'm begging you to tell us.",
          [
            choice({ label: "Maybe the music store." }),
            choice({ label: "Maybe the takoyaki stand." }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("What do you wanna get?", [
          choice({ label: "Hamburgers.", ok: true }),
          choice({ label: "Japanese food." }),
        ]),
        choices(
          "It was sad, but I listened to the whole thing. Did I do good?",
          [
            choice({ label: "You're a good girl.", correct: true }),
            choice({ label: "Not really." }),
          ]
        ),
        choices("Who do you think I should pick?", [
          choice({ label: "Your dad.", correct: true }),
          choice({ label: "Your mom." }),
          choice({ label: "You decide." }),
        ]),
      ]),
      LinkLevel(30, [
        choices("Even if I'm gone... we'll still be friends right?", [
          choice({ label: "Friends forever.", correct: true }),
          choice({ label: "I might forget about you." }),
        ]),
      ]),
      LinkLevel(15, [
        choices("Do you think I'll have a family of my own one day?", [
          choice({ label: "I'm sure you will.", correct: true }),
          choice({ label: "No idea." }),
        ]),
        choices("Can we get married?", [
          choice({ label: "Sure.", correct: true }),
          choice({ label: "I'll think about it." }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Temperance: {
    name: "Temperance",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices(
          "It will be my first time going, Will you maybe, how do you say, show me the ropes?",
          [
            choice({ label: "Sure, let's go.", ok: true }),
            choice({ label: "You like sweets?" }),
            choice({ label: "There's nothing to show.", correct: true }),
          ]
        ),
        choices("I love the culture of Nihon! Japan sugoi-amazing!", [
          choice({ label: "I totally agree.", correct: true }),
          choice({ label: "What about your country?" }),
          choice({ label: "It's not that great.	" }),
        ]),
      ]),
      LinkLevel(0, [
        choices(
          "You have gotten much better at this, Makoto-dono! Subarashii-wonderful!",
          [
            choice({ label: "I can do better." }),
            choice({ label: "Thanks.", ok: true }),
          ]
        ),
        choices("I would like to make something Japanese, but what?", [
          choice({ label: "What do you like?" }),
          choice({ label: "Why not western clothes?" }),
          choice({ label: "How about a kimono?", correct: true }),
        ]),
      ]),
      LinkLevel(15, [
        choices("......", [
          choice({ label: "How come you're not working?" }),
          choice({ label: "Should we stop for today?" }),
          choice({ label: "Are you alright?", correct: true }),
        ]),
        choices("She was taken by the angels!", [
          choice({ label: "What happened?" }),
          choice({ label: "Calm down." }),
          choice({ label: "That's terrible..." }),
        ]),
      ]),
      LinkLevel(15, [
        choices("", [
          choice({ label: "Sure.", ok: true }),
          choice({ label: "Why?" }),
        ]),
        choices("", [
          choice({ label: "You have to accept it." }),
          choice({ label: "Just stay in Japan!", ok: true }),
        ]),
      ]),
      LinkLevel(15, [
        choices("I have barely sewn anything at all.", [
          choice({ label: "What's wrong?" }),
          choice({ label: "Why not take a break?", ok: true }),
        ]),
        choices("Will you go to Azuki Arai with moi?", [
          choice({ label: "Let's do it.", ok: true }),
          choice({ label: "Just one minute." }),
        ]),
        choices("I want to stay here in Japan even if I have to eat dirt!", [
          choice({ label: "I have your back!", correct: true }),
          choice({ label: "What will you do?" }),
        ]),
      ]),
      LinkLevel(15, [
        choices(
          "I will show him a kimono! When he sees it, he will understand the beauty of Nihon!",
          [
            choice({ label: "Will that be enough?" }),
            choice({ label: "That's a great idea.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(10, [
        choices(
          "When my uncle sees this, I know he'll agree with me about how great Nihon is!",
          [
            choice({ label: "When will it be done?" }),
            choice({ label: "He'll definitely agree!", correct: true }),
            choice({ label: "Less talk, more work." }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices(
          "And thanks to all your help, the kimono is almost finished! I feel so blessed.",
          [
            choice({ label: "Congrats!", ok: true }),
            choice({ label: "Aren't you homesick?", correct: true }),
            choice({ label: "Don't forget, you owe me." }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("At last, it is fini!", [
          choice({ label: "How does it look?", correct: true }),
          choice({ label: "Great Work!", correct: true }),
        ]),
        choices("They are the times I spend with you, my tomodachi.", [
          choice({ label: "I'll be waiting for you.", correct: true }),
          choice({ label: "Good luck out there.", correct: true }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Devil: {
    name: "Devil",
    ...baseSocialLinkCalculation,
    getlevel: function ({ level }) {
      if (level === 10) return this.levels[2];
      if (level === 0) return this.levels[0];
      return this.levels[1];
    },
    calculate: function ({ level }) {
      const isNewlevel = level < this.maxLevel;
      return {
        [this.name]: {
          level: isNewlevel ? level + 1 : level,
          romance: false,
          points: 0,
        },
      };
    },
    levels: [
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Create bond</h3>,
      },
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Choose Any</h3>,
      },
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Sun: {
    name: "Sun",
    ...baseSocialLinkCalculation,
    getlevel: function ({ level }) {
      if (level === 10) return this.levels[2];
      if (level === 0) return this.levels[0];
      return this.levels[1];
    },
    calculate: function ({ level }) {
      const isNewlevel = level < this.maxLevel;
      return {
        [this.name]: {
          level: isNewlevel ? level + 1 : level,
          romance: false,
          points: 0,
        },
      };
    },
    levels: [
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Create bond</h3>,
      },
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Choose Any</h3>,
      },
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Tower: {
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
  },
  Star: {
    name: "Star",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices(
          "That's why I have to make it big-it's for everyone who's been helping me.",
          [
            choice({ label: "I'm kinda jealous." }),
            choice({ label: "Sounds like a lot of pressure.", ok: true }),
          ]
        ),
        choices("By the way, who would you say is your biggest rival?", [
          choice({ label: "You." }),
          choice({ label: "Myself.", correct: true }),
        ]),
      ]),
      LinkLevel(0, [
        choices("Maybe I should get some for them too?", [
          choice({ label: "For your teammates?", ok: true }),
          choice({ label: "Who's 'them'?", ok: true }),
        ]),
        choices(
          "Our apartment's pretty small, though, so we're packed like sardines.",
          [
            choice({ label: "Sounds like fun.", ok: true }),
            choice({ label: "That sounds rough.", ok: true }),
          ]
        ),
      ]),
      LinkLevel(20, [
        choices("...All right, just one more!", [
          choice({ label: "What are you doing?", ok: true }),
          choice({ label: "Enjoy your food.", ok: true }),
        ]),
        choices(
          "Know what that means? If I do well enough, I might score a scholarship.",
          [
            choice({ label: "That would be amazing!", ok: true }),
            choice({ label: "What's the big deal?" }),
          ]
        ),
        choices("And maybe... this'll make my mom's life a little easier.", [
          choice({ label: "Hard to say." }),
          choice({ label: "Yeah, I bet it would.", ok: true }),
        ]),
      ]),
      LinkLevel(20, [
        choices("huff huff Sorry I kept you waiting...", [
          choice({ label: "You're late." }),
          choice({ label: "Are you okay?", ok: true }),
        ]),
        choices("I used to come here a lot with my teammates, but...", [
          choice({ label: "But what?" }),
          choice({ label: "I'll come back here with you.", ok: true }),
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
          choice({ label: "Don't worry, it's okay.", correct: true }),
        ]),
      ]),
      LinkLevel(20, [
        choices("Thanks for coming all the way here for this.", [
          choice({ label: "What did you want?" }),
          choice({ label: "It's no problem at all.", ok: true }),
        ]),
        choices("There's still so much I have to do.", [
          choice({ label: "Sounds pretty rough.", ok: true }),
          choice({ label: "Stop whining and do it? ", ok: true }),
        ]),
        choices("Why'd you have to die, Dad!?", [
          choice({ label: "This isn't your fault.", ok: true }),
          choice({ label: "Do something about it!" }),
        ]),
        choices("Is this... really how it ends for me?", [
          choice({ label: "You should just accept it." }),
          choice({ label: "Don't give up yet.", correct: true }),
        ]),
      ]),
      LinkLevel(30, [
        choices("Hmmm...", [
          choice({ label: "Do it!", correct: true }),
          choice({ label: "I could spot you some cash." }),
        ]),
        choices(
          "In the end, maybe it was my fault the team couldn't work together.",
          [
            choice({ label: "It sure was.", correct: true }),
            choice({ label: "Don't sweat it.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(30, [
        choices("So uh, the big meet for that scholarship was yesterday.", [
          choice({ label: "Did you win?", ok: true }),
          choice({ label: "Did you lose?" }),
        ]),
        choices("I got first place, of course!", [
          choice({ label: "Wor, really?" }),
          choice({ label: "Congrats, man!", ok: true }),
        ]),
        choices("Kinda makes me feel empty inside.", [
          choice({ label: "What will you do now?", ok: true }),
          choice({ label: "Will you quit running?", ok: true }),
        ]),
        choices("Go ahead and order extra noodles. It's on me.", [
          choice({ label: "Thanks!", ok: true }),
          choice({ label: "Don't put yourself out!" }),
        ]),
      ]),
      LinkLevel(30, [
        choices("Glad we could meet up one more time before I take off.", [
          choice({ label: "Take off?" }),
          choice({ label: "You're leaving today?", correct: true }),
        ]),
        choices("Well then, I better get going...", [
          choice({ label: "I'll see you off." }),
          choice({ label: "Let's chat a bit more." }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Moon: {
    name: "Moon",
    ...baseSocialLinkCalculation,
    levels: [
      LinkLevel(),
      LinkLevel(0, [
        choices("Well? Would you wanna be... my younger brother?", [
          choice({ label: "Sure, why not.", correct: true }),
          choice({ label: "Not really... no." }),
        ]),
      ]),
      LinkLevel(0, [
        choices(
          "So, do you 'get me'? Hm? Who am I? Go on, I wanna hear it come out of your mouth!",
          [
            choice({ label: "Nozomi Suemitsu" }),
            choice({ label: "The gourmet king.", correct: true }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices(
          "Whew, that was way too close. If that toilet was just a bit further away... Ohhhh, boy.",
          [
            choice({ label: "Did you eat too much?" }),
            choice({ label: "Are you feeling sick?", correct: true }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("Right, Makoto?", [
          choice({ label: "That's right.", correct: true }),
          choice({ label: "Sorry, what?" }),
        ]),
      ]),
      LinkLevel(22, [
        choices(
          "I don't get it. I felt fine up until just a minute ago, then suddenly I felt sick.",
          [
            choice({ label: "Does this happen a lot?" }),
            choice({ label: "Did you eat too much?" }),
            choice({ label: "Are you sick?", correct: true }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("Well? Did that just blow your mind?", [
          choice({ label: "Yeah, I'm freaking out." }),
          choice({ label: "Not really?" }),
          choice({ label: "The world is ending?", correct: true }),
        ]),
        choices(
          "Not to mention you'll get a discount since I'll be referring you, too. You are one lucky guy!",
          [
            choice({ label: "That's insane!" }),
            choice({ label: "No way I'm paying for that." }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("Look at me! I'm paper-thin now.", [
          choice({ label: "You do look thinner.	" }),
          choice({ label: "No you're not.", correct: true }),
        ]),
      ]),
      LinkLevel(22, [
        choices("Finally, Paradise is smiling back at me! Yes! Yesss!", [
          choice({ label: "You're gonna scam them, too?" }),
          choice({ label: "Just knock it off." }),
        ]),
      ]),
      LinkLevel(15, [
        choices(
          "But I couldn't even cry. I actually felt... relieved. I though, 'Maybe they'll all finally stop laughing at me.",
          [
            choice({ label: "That's terrible." }),
            choice({ label: "That's understandable." }),
          ]
        ),
        choices(
          "But if I keep this up, I'll never be able to replace my brother, will I?",
          [
            choice({ label: "Just be yourself.", correct: true }),
            choice({ label: "You're irreplaceable.", ok: true }),
          ]
        ),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Empress: {
    name: "Empress",
    ...baseSocialLinkCalculation,
    levels: [
      ...empressLevels,
      LinkLevel(22, [
        choices("Somewhere far away, where no one knows who you are?", [
          choice({ label: "Yes." }),
          choice({ label: "No." }),
        ]),
        choices(
          "Talking to you has become something of an outlet for me. Heh, I'm sure you're sick of it by now.",
          [
            choice({ label: "Vent all you want.", ok: true }),
            choice({ label: "This isn't like you.", ok: true }),
          ]
        ),
        choices("Ah... Keep in mind, this is a what-if scenario.", [
          choice({ label: "That's up to you." }),
          choice({ label: "It's not meant to be.", fork: true }),
        ]),
        choices("How dare you say that!?", [
          choice({ label: "Calm down, Mitsuru" }),
          choice({ label: "Don't insult her father!", correct: true }),
        ]),
        choices("Please excuse me.", [
          choice({ label: "Don't give in.", correct: true }),
          choice({ label: "You're sure about this?", ok: true }),
        ]),
      ]),
      LinkLevel(22, [
        choices("I am so sorry about what happened last time.", [
          choice({ label: "What happened?" }),
          choice({ label: "Don't worry about it." }),
          choice({ label: "It made me happy.", correct: true }),
        ]),
        choices(
          "I just didn't think I'd end up shouting them in public like that.",
          [
            choice({ label: "Talk about bold." }),
            choice({ label: "Your feelings?" }),
          ]
        ),
        choices("...I feel like I'm going to die of embarassment.", [
          choice({ label: "I love you too.", correct: true }),
          choice({ label: "I'm sorry but..." }),
        ]),
        choices(
          "I've been thinking about this for a while now, but the way you address me...",
          [choice({ label: "Mitsuru?" }), choice({ label: "What about it?" })]
        ),
      ]),
      LinkLevel(22, [
        choices(
          "The battery and tire pressue look good... And I've already changed the oil, so that's fine.",
          [
            choice({ label: "Impressive." }),
            choice({ label: "Looks like fun.", ok: true }),
          ]
        ),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
    levelsRomance: [
      ...empressLevels,
      LinkLevel(22, [
        choices("Somewhere far away, where no one knows who you are?", [
          choice({ label: "Yes." }),
          choice({ label: "No." }),
        ]),
        choices(
          "Talking to you has become something of an outlet for me. Heh, I'm sure you're sick of it by now.",
          [
            choice({ label: "Vent all you want.", ok: true }),
            choice({ label: "This isn't like you.", ok: true }),
          ]
        ),
        choices("Ah... Keep in mind, this is a what-if scenario.", [
          choice({ label: "That's up to you." }),
          choice({ label: "It's not meant to be.", fork: true }),
        ]),
        choices("How dare you say that!?", [
          choice({ label: "Calm down, Mitsuru" }),
          choice({ label: "Don't insult her father!", correct: true }),
        ]),
        choices("Please excuse me.", [
          choice({ label: "Don't give in.", correct: true }),
          choice({ label: "You're sure about this?", ok: true }),
        ]),
      ]),
      LinkLevel(22, [
        choices("I am so sorry about what happened last time.", [
          choice({ label: "What happened?" }),
          choice({ label: "Don't worry about it." }),
          choice({ label: "It made me happy.", correct: true }),
        ]),
        choices(
          "I just didn't think I'd end up shouting them in public like that.",
          [
            choice({ label: "Talk about bold." }),
            choice({ label: "Your feelings?" }),
          ]
        ),
        choices("...I feel like I'm going to die of embarassment.", [
          choice({ label: "I love you too.", correct: true }),
          choice({ label: "I'm sorry but..." }),
        ]),
        choices(
          "I've been thinking about this for a while now, but the way you address me...",
          [choice({ label: "Mitsuru?" }), choice({ label: "What about it?" })]
        ),
      ]),
      LinkLevel(22, [
        choices(
          "The battery and tire pressue look good... And I've already changed the oil, so that's fine.",
          [
            choice({ label: "Impressive." }),
            choice({ label: "Looks like fun.", ok: true }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("I'll be looking forward to it.", [
          choice({ label: "I'll give it a try.", correct: true }),
          choice({ label: "I'm fine with the back.", ok: true }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Lovers: {
    name: "Lovers",
    ...baseSocialLinkCalculation,
    levels: [
      ...loversLevels,
      LinkLevel(22, [
        choices("What should I do?", [
          choice({ label: "Look around" }),
          choice({ label: "Wait here" }),
        ]),
        choices("Did something happen...?", [
          choice({ label: "Go look for her" }),
          choice({ label: "Wait a bit longer" }),
        ]),
        choices("......", [
          choice({ label: "I'll take you on." }),
          choice({ label: "Her friend." }),
          choice({ label: "Just a passerby." }),
        ]),
        choices("Huh? Who the hell are you?", [
          choice({ label: "Her boyfriend.", fork: true }),
          choice({ label: "Her friend." }),
          choice({ label: "Just a passerby." }),
        ]),
        choices("I didn't need your help!", [
          choice({ label: "I'm sorry.", correct: true }),
          choice({ label: "It's okay to rely on others." }),
          choice({ label: "You're a girl, so..." }),
        ]),
      ]),
      LinkLevel(0, [
        choices("Thanks for your help back then. I really appreciate it.", [
          choice({ label: "You're quite welcome.", ok: true }),
          choice({ label: "Anytime.", correct: true }),
          choice({ label: "Thank you, too." }),
        ]),
        choices(
          "Wouldn't that be annoying, Makoto-kun? Y'know, if people assumed we were dating...",
          [
            choice({ label: "I wouldn't mind.", ok: true }),
            choice({ label: "Yeah..." }),
          ]
        ),
      ]),
      LinkLevel(35, [
        choices(
          "We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?",
          [
            choice({ label: "Sounds good.", correct: true }),
            choice({ label: "Let's go with everyone." }),
            choice({ label: "Let's go just the two of us.", correct: true }),
            choice({ label: "No thanks." }),
          ]
        ),
      ]),
      LinkLevel(35, [
        choices(
          "I know! Why don't you come help me pick something out, Makoto-kun?",
          [
            choice({ label: "Alright.", correct: true }),
            choice({ label: "Im too lazy." }),
          ]
        ),
        choices(
          "I told her we could meet up and talk about her remarriage. I'm nervous just thinking about it...",
          [
            choice({ label: "Will you let her do it?" }),
            choice({ label: "Do you want to see her?" }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("......", [
          choice({ label: "Hello?" }),
          choice({ label: "....", correct: true }),
          choice({ label: "If it's nothing, I'm leaving." }),
        ]),
        choices("What do you really think of me?", [
          choice({ label: "I love you.", fork: true }),
          choice({ label: "You're a precious friend." }),
        ]),
      ]),
      LinkLevel(15, [
        choices(
          "Wait, I didn't mean it like that! Don't get the wrong idea, okay!?",
          [
            choice({ label: "Too late.", correct: true }),
            choice({ label: "I didn't hear anything.", correct: true }),
          ]
        ),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
    levelsRomance: [
      ...loversLevels,
      LinkLevel(22, [
        choices("What should I do?", [
          choice({ label: "Look around" }),
          choice({ label: "Wait here" }),
        ]),
        choices("Did something happen...?", [
          choice({ label: "Go look for her" }),
          choice({ label: "Wait a bit longer" }),
        ]),
        choices("......", [
          choice({ label: "I'll take you on." }),
          choice({ label: "Her friend." }),
          choice({ label: "Just a passerby." }),
        ]),
        choices("Huh? Who the hell are you?", [
          choice({ label: "Her boyfriend.", fork: true }),
          choice({ label: "Her friend." }),
          choice({ label: "Just a passerby." }),
        ]),
        choices("I didn't need your help!", [
          choice({ label: "I'm sorry.", correct: true }),
          choice({ label: "It's okay to rely on others." }),
          choice({ label: "You're a girl, so..." }),
        ]),
      ]),
      LinkLevel(0, [
        choices("Thanks for your help back then. I really appreciate it.", [
          choice({ label: "You're quite welcome.", ok: true }),
          choice({ label: "Anytime.", correct: true }),
          choice({ label: "Thank you, too." }),
        ]),
        choices(
          "Wouldn't that be annoying, Makoto-kun? Y'know, if people assumed we were dating...",
          [
            choice({ label: "I wouldn't mind.", ok: true }),
            choice({ label: "Yeah..." }),
          ]
        ),
      ]),
      LinkLevel(35, [
        choices(
          "We could have lunch outdoors. Maybe we'll even see a deer or something. Whaddya think?",
          [
            choice({ label: "Sounds good.", correct: true }),
            choice({ label: "Let's go with everyone." }),
            choice({ label: "Let's go just the two of us.", correct: true }),
            choice({ label: "No thanks." }),
          ]
        ),
      ]),
      LinkLevel(35, [
        choices(
          "I know! Why don't you come help me pick something out, Makoto-kun?",
          [
            choice({ label: "Alright.", correct: true }),
            choice({ label: "Im too lazy." }),
          ]
        ),
        choices(
          "I told her we could meet up and talk about her remarriage. I'm nervous just thinking about it...",
          [
            choice({ label: "Will you let her do it?" }),
            choice({ label: "Do you want to see her?" }),
          ]
        ),
      ]),
      LinkLevel(15, [
        choices("......", [
          choice({ label: "Hello?" }),
          choice({ label: "....", correct: true }),
          choice({ label: "If it's nothing, I'm leaving." }),
        ]),
        choices("What do you really think of me?", [
          choice({ label: "I love you.", fork: true }),
          choice({ label: "You're a precious friend." }),
        ]),
      ]),
      LinkLevel(15, [
        choices(
          "Wait, I didn't mean it like that! Don't get the wrong idea, okay!?",
          [
            choice({ label: "Too late.", correct: true }),
            choice({ label: "I didn't hear anything.", correct: true }),
          ]
        ),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Justice: {
    name: "Justice",
    ...baseSocialLinkCalculation,
    levels: [
      ...justiceLevels,
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
    levelsRomance: [
      ...justiceLevels,
      LinkLevel(22, [
        choices("So, um... there was something I needed to ask you...", [
          choice({ label: "I'm all ears.", correct: true }),
          choice({ label: "Something on your mind?" }),
        ]),
        choices("Is she in love right now?", [
          choice({ label: "Yeah, she's in love.", fork: true }),
          choice({ label: "You're jumping to conclusions." }),
        ]),
        choices("Sorry for asking about such a weird topic.", [
          choice({ label: "Happy to help.", correct: true }),
          choice({ label: "Don't worry about it." }),
        ]),
        choices("What should I do.", [
          choice({ label: "Hold her hand.", fork: true }),
          choice({ label: "Kiss her." }),
          choice({ label: "Talk to her softly." }),
        ]),
      ]),
      LinkLevel(22, [
        choices("Wh-What should I do…?", [
          choice({ label: "Is it good?", correct: true }),
          choice({ label: "You're not going to buy it?" }),
        ]),
        choices("That is, until recently...", [
          choice({ label: "What do you think now?" }),
          choice({ label: "What do you mean?" }),
        ]),
      ]),
      LinkLevel(30, [
        choices("Makoto-san…", [
          choice({ label: "Try to remember..." }),
          choice({ label: "It's gotta be a misunderstanding.", ok: true }),
        ]),
        choices("I couldn't stand up to them… But… I… didn't take anything!", [
          choice({ label: "Don't worry." }),
          choice({ label: "We have to do something...", ok: true }),
        ]),
      ]),
      LinkLevel(30, [
        choices(
          "See, how could it not be her!? And with such an innocent face too...",
          [
            choice({ label: "That's all a misunderstanding." }),
            choice({ label: "......" }),
          ]
        ),
        choices("I don't really have anyone else I can count on...", [
          choice({ label: "The rumors will stop soon." }),
          choice({ label: "I know you're innocent.", ok: true }),
          choice({ label: "Be strong." }),
        ]),
      ]),
      LinkLevel(30, [
        choices("Don't tell me she thinks I stole the money too!", [
          choice({ label: "Don't worry, she'll help us.", ok: true }),
          choice({ label: "Mitsuru's not like that." }),
        ]),
        choices("......", [
          choice({ label: "Chihiro is innocent.", ok: true }),
          choice({ label: "You need to tell her yourself.", ok: true }),
        ]),
        choices("...Give me a hand, will you, Yuki?", [
          choice({ label: "Why me?" }),
          choice({ label: "Alright." }),
        ]),
        choices("Ehehehehe!", [
          choice({ label: "What's gotten into you?", ok: true }),
          choice({ label: "So you are ARE guilty?" }),
        ]),
        choices("I love you!", [
          choice({ label: "I feel the same Chihiro.", fork: true }),
          choice({ label: "I like working with you, but..." }),
        ]),
        choices("Huh? What did you say?", [
          choice({ label: "I said I feel the same." }),
          choice({ label: "I love you." }),
        ]),
      ]),
      LinkLevel(40, [
        choices("Just promise to think of me when you read it…", [
          choice({ label: "Thank you.", correct: true }),
          choice({ label: "I don't read shoujo manga." }),
        ]),
        choices("I-I don't have to spell it out, do I!?", [
          choice({ label: "It's getting late..." }),
          choice({ label: "Lock your doors." }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Strength: {
    name: "Strength",
    ...baseSocialLinkCalculation,
    levels: [
      ...strengthLevels,
      LinkLevel(15, [
        choices("Elementary school kids really learn fast don't you think?", [
          choice({ label: "You're right. It's impressive.", ok: true }),
          choice({ label: "That's not normal?" }),
          choice({ label: "It's because you teach so well.", correct: true }),
        ]),
        choices(
          "Should I change the training routine? Maybe they should be running more.",
          [
            choice({ label: "You shouldn't change it." }),
            choice({ label: "Maybe you should rethink it." }),
            choice({ label: "I trust whatever you decide Yuko.", fork: true }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("Oh Makoto-Kun, why don't you give them some advice too?", [
          choice({ label: "You guys got this!", ok: true }),
          choice({ label: "Show some guts!", ok: true }),
        ]),
        choices(
          "Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders.",
          [
            choice({ label: "It's gonna be tough." }),
            choice({ label: "As long as we believe in them.", ok: true }),
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
          choice({ label: "Are you relieved?", ok: true }),
        ]),
        choices(
          "Maybe we should have a little party… you know, to celebrate our first attempt at coaching...",
          [
            choice({ label: "Let's do it.", correct: true }),
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
          choice({ label: "A boy.", ok: true }),
          choice({ label: "A girl.", ok: true }),
          choice({ label: "I don't care." }),
        ]),
      ]),
      LinkLevel(40, [
        choices(
          "All it did was make me more confused than I originally was. Guess I'll have to go ask again tomorrow.",
          [
            choice({ label: "You're so hardworking.", ok: true }),
            choice({ label: "Why go through all that trouble?" }),
          ]
        ),
        choices("Can you guess what it is?", [
          choice({ label: "A track and field star?", ok: true }),
          choice({ label: "An instructor?", correct: true }),
          choice({ label: "A nursery teacher?", ok: true }),
          choice({ label: "No idea..." }),
        ]),
        choices("I realized that I might've been relying too much on you.", [
          choice({ label: "I don't mind." }),
          choice({ label: "You can rely on me even more." }),
        ]),
        choices(
          "Are you like this... just with me? N-No, no, th-that can't be it, huh...",
          [
            choice({ label: "It's because I love you.", fork: true }),
            choice({ label: "It's because you're a close friend." }),
          ]
        ),
        choices("What's happening...? Is this a dream?", [
          choice({ label: "I love you, Yuko." }),
          choice({ label: "It's not a dream." }),
        ]),
      ]),
      LinkLevel(40, [
        choices(
          "I could've given this to you at school, but I wanted to talk somewhere quiet.",
          [
            choice({ label: "Is it important?", ok: true }),
            choice({ label: "What is it?", ok: true }),
          ]
        ),
        choices(
          "I know they were kind of a handful, but they also have an endearing side to them, don't you think?",
          [
            choice({ label: "Yeah.", ok: true }),
            choice({ label: "Not really." }),
          ]
        ),
        choices("Because today... Well, my parents aren't home, so...", [
          choice({ label: "I see." }),
          choice({ label: "What does that mean?", ok: true }),
        ]),
      ]),
      LinkLevel(40, [
        choices("", [
          choice({ label: "" }),
          choice({ label: "" }),
          choice({ label: "" }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
    levelsRomance: [
      ...strengthLevels,
      LinkLevel(15, [
        choices("Elementary school kids really learn fast don't you think?", [
          choice({ label: "You're right. It's impressive.", ok: true }),
          choice({ label: "That's not normal?" }),
          choice({ label: "It's because you teach so well.", correct: true }),
        ]),
        choices(
          "Should I change the training routine? Maybe they should be running more.",
          [
            choice({ label: "You shouldn't change it." }),
            choice({ label: "Maybe you should rethink it." }),
            choice({ label: "I trust whatever you decide Yuko.", fork: true }),
          ]
        ),
      ]),
      LinkLevel(22, [
        choices("Oh Makoto-Kun, why don't you give them some advice too?", [
          choice({ label: "You guys got this!", ok: true }),
          choice({ label: "Show some guts!", ok: true }),
        ]),
        choices(
          "Age difference really matters when you're as young as they are. Do you really think they can beat the sixth graders.",
          [
            choice({ label: "It's gonna be tough." }),
            choice({ label: "As long as we believe in them.", ok: true }),
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
          choice({ label: "Are you relieved?", ok: true }),
        ]),
        choices(
          "Maybe we should have a little party… you know, to celebrate our first attempt at coaching...",
          [
            choice({ label: "Let's do it.", correct: true }),
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
          choice({ label: "A boy.", ok: true }),
          choice({ label: "A girl.", ok: true }),
          choice({ label: "I don't care." }),
        ]),
      ]),
      LinkLevel(40, [
        choices(
          "All it did was make me more confused than I originally was. Guess I'll have to go ask again tomorrow.",
          [
            choice({ label: "You're so hardworking.", ok: true }),
            choice({ label: "Why go through all that trouble?" }),
          ]
        ),
        choices("Can you guess what it is?", [
          choice({ label: "A track and field star?", ok: true }),
          choice({ label: "An instructor?", correct: true }),
          choice({ label: "A nursery teacher?", ok: true }),
          choice({ label: "No idea..." }),
        ]),
        choices("I realized that I might've been relying too much on you.", [
          choice({ label: "I don't mind." }),
          choice({ label: "You can rely on me even more." }),
        ]),
        choices(
          "Are you like this... just with me? N-No, no, th-that can't be it, huh...",
          [
            choice({ label: "It's because I love you.", fork: true }),
            choice({ label: "It's because you're a close friend." }),
          ]
        ),
        choices("What's happening...? Is this a dream?", [
          choice({ label: "I love you, Yuko." }),
          choice({ label: "It's not a dream." }),
        ]),
      ]),
      LinkLevel(40, [
        choices(
          "I could've given this to you at school, but I wanted to talk somewhere quiet.",
          [
            choice({ label: "Is it important?", ok: true }),
            choice({ label: "What is it?", ok: true }),
          ]
        ),
        choices(
          "I know they were kind of a handful, but they also have an endearing side to them, don't you think?",
          [
            choice({ label: "Yeah.", ok: true }),
            choice({ label: "Not really." }),
          ]
        ),
        choices("Because today... Well, my parents aren't home, so...", [
          choice({ label: "I see." }),
          choice({ label: "What does that mean?", ok: true }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Aeon: {
    name: "Aeon",
    ...baseSocialLinkCalculation,
    levels: [
      ...aeonLevels,
      LinkLevel(0, [
        choices("January 31st...", [
          choice({ label: "You're right.", correct: true }),
          choice({ label: "I hadn't noticed..." }),
        ]),
        choices(
          "I love you so much... that I feel like I'm going to break down somehow...",
          [
            choice({ label: "I love you, too.", fork: true }),
            choice({ label: "Sorry, but I can't..." }),
          ]
        ),
      ]),
      LinkLevel(30, [
        choices(
          "There's something only I can say, because I am unable to die.",
          [
            choice({ label: "What is it?" }),
            choice({ label: "I don't get it." }),
          ]
        ),
        choices("Aigis is gazing at you intently...", [
          choice({ label: "Nod silently" }),
          choice({ label: "Hold her hand gently" }),
        ]),
      ]),
      LinkLevel(30, [
        choices("", [
          choice({ label: "" }),
          choice({ label: "" }),
          choice({ label: "" }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
    levelsRomance: [
      ...aeonLevels,
      LinkLevel(0, [
        choices("January 31st...", [
          choice({ label: "You're right.", correct: true }),
          choice({ label: "I hadn't noticed..." }),
        ]),
        choices(
          "I love you so much... that I feel like I'm going to break down somehow...",
          [
            choice({ label: "I love you, too.", fork: true }),
            choice({ label: "Sorry, but I can't..." }),
          ]
        ),
      ]),
      LinkLevel(30, [
        choices(
          "There's something only I can say, because I am unable to die.",
          [
            choice({ label: "What is it?" }),
            choice({ label: "I don't get it." }),
          ]
        ),
        choices("Aigis is gazing at you intently...", [
          choice({ label: "Nod silently" }),
          choice({ label: "Hold her hand gently" }),
        ]),
      ]),
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Link Maxed</h3>,
      },
    ],
  },
  Fool: {
    name: "Fool",
    ...baseSocialLinkCalculation,
    getlevel: function ({ level }) {
      if (level === 0) return this.levels[0];
      return this.levels[1];
    },
    calculate: function ({ level }) {
      return {
        [this.name]: {
          level: level + 1,
          romance: false,
          points: 0,
        },
      };
    },
    levels: [
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Create bond</h3>,
      },
      {
        points: 0,
        maxPoints: 0,
        element: () => <h3>Automatic</h3>,
      },
    ],
  },
};
