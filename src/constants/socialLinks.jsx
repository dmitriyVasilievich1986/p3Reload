import React from "react";

export function Choice({ label, correct = false, ok = false }) {
  let color = "inherit";
  if (correct) color = "green";
  if (ok) color = "yellow";
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

export const socialLinks = {
  Magician: {
    name: "Magician",
    calculate: function ({ level, points, multiplier = 1 }) {
      const isNewlevel =
        level < this.levels.length && points >= this.levels[level].points;
      return {
        Magician: {
          level: isNewlevel ? level + 1 : level,
          points: isNewlevel
            ? this.levels[level].maxPoints * multiplier
            : points + 10 * multiplier,
        },
      };
    },
    levels: [
      {
        points: 0,
        maxPoints: 0,
        element: () => (
          <div>
            <h3 style={{ textAlign: "center" }}>Magician</h3>
            <h3>Create new bond</h3>
          </div>
        ),
      },
      {
        points: 0,
        maxPoints: 5,
        element: () => (
          <div>
            <ChoicesEvent label="Can you like, just waltz on into Takeba-san's room and stuff?">
              <Choice label="Of course." />
              <Choice label="No way." ok />
              <Choice label="That's a secret." ok />
            </ChoicesEvent>
            <ChoicesEvent label="I'm more into older women. How 'bout you?">
              <Choice label="I'm into older women, too." ok />
              <Choice label="I prefer girls my age." />
              <Choice label="I like them all." ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 0,
        maxPoints: 20,
        element: () => (
          <div>
            <ChoicesEvent label="Maaan... I'm so sick of this, dude.">
              <Choice label="What, of ramen?" />
              <Choice label="What, of school?" />
              <Choice label="What, life?" correct />
            </ChoicesEvent>
            <ChoicesEvent label="Okay, that settles it. I'm gonna get myself a girlfriend! Right now!">
              <Choice label="Sounds Impossible." />
              <Choice label="Good luck!" ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Hey, thanks for coming, man. You mind waiting here for a sec?">
              <Choice label="Sure." />
              <Choice label="Why?" />
            </ChoicesEvent>
            <ChoicesEvent label="I'm gonna go ask Ms. Kanou out! Like, right now!">
              <Choice label="Good luck!" correct />
              <Choice label="Don't do it." />
              <Choice label="Whatever, man." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Yeah, good-looking people just flock together, y'know?. It's like a law of attraction.">
              <Choice label="...Is that so?" />
              <Choice label="Okay..." correct />
              <Choice label="Good-looking, huh?" />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Sorry, man. I've gotta pass this time.">
              <Choice label="Just like that?" />
              <Choice label="Why?" />
            </ChoicesEvent>
            <ChoicesEvent label="I mean, getting into college is pretty important, don't you think? You think about the future too, right?">
              <Choice label="I've got plans already." correct />
              <Choice label="Yeah, more than you do." />
              <Choice label="Not even a little." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="I can't eat...">
              <Choice label="What happened." ok />
              <Choice label="I'll eat it for you." />
            </ChoicesEvent>
            <ChoicesEvent label="I saw a magazine in Emiri's room. Guess what it was called.">
              <Choice label="In Fashion?" />
              <Choice label="Occult Living?" />
              <Choice label="Bride-To-Be?" ok />
            </ChoicesEvent>
            <ChoicesEvent label="You think that's a good plan?">
              <Choice label="Congrats!" ok />
              <Choice label="You're rushing things." />
              <Choice label="Sure, whatever.	" />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 22,
        maxPoints: 20,
        element: () => (
          <div>
            <ChoicesEvent label="H-Hey, man. Sorry to make you come here. I, um... Ah, damn it...">
              <Choice label="Spit it out!" />
              <Choice label="Are you in trouble?" correct />
            </ChoicesEvent>
            <ChoicesEvent label="And now she's being transferred to a school in Kyushu. What do I do!?">
              <Choice label="You should go with her." ok />
              <Choice label="You two should talk it out." ok />
              <Choice label="Figure it out yourself." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 22,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="I was so excited about going with her that I...I...">
              <Choice label="Cheer up, man." />
              <Choice label="Let me handle this!" correct />
              <Choice label="Haha." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 22,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Ms. Kanou must be in Kyushu by now. I wonder if she had her wedding already.">
              <Choice label="......" ok />
              <Choice label="Maybe she did." />
              <Choice label="I'm stealing your egg!" />
            </ChoicesEvent>
            <ChoicesEvent label="Man, it's always a blast hanging out with you. That said... I still want a girlfriend!">
              <Choice label="You don't know when to give up..." />
              <Choice label="You've got this!" ok />
              <Choice label="Want me to find you a girl?" ok />
            </ChoicesEvent>
            <ChoicesEvent label="What I did figure out is... you're a true friend.">
              <Choice label="...Are we still talking about love?" />
              <Choice label="That's right! We're great friends." />
            </ChoicesEvent>
          </div>
        ),
      },
    ],
  },
};

const a = {
  points: 15,
  maxPoints: 15,
  element: () => (
    <div>
      <ChoicesEvent label="">
        <Choice label="" />
      </ChoicesEvent>
    </div>
  ),
};
