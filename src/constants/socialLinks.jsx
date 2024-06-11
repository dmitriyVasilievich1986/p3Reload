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
  {
    points: 0,
    maxPoints: 0,
    element: () => null,
  },
  {
    points: 0,
    maxPoints: 30,
    element: () => (
      <div>
        <ChoicesEvent label="Maybe I should give him some food. What do you think, Makoto-kun?">
          <Choice label="Sure." correct />
          <Choice label="Don't do it." />
        </ChoicesEvent>
        <ChoicesEvent label="I don't want to put you in the hospital...">
          <Choice label="I can handle a bit." />
          <Choice label="Maybe we can use it in battle." />
        </ChoicesEvent>
        <ChoicesEvent label="I don't think I can do this alone. Can I... count on you to help?">
          <Choice label="Sure thing." correct />
          <Choice label="Will it be good next time?" />
        </ChoicesEvent>
      </div>
    ),
  },
  {
    points: 0,
    maxPoints: 30,
    element: () => (
      <div>
        <ChoicesEvent label="I still don't have a feel for how much salt to add. How do you do it, Makoto-kun?">
          <Choice label="Just a dash or two." correct />
          <Choice label="I don't add salt." />
          <Choice label="Just dump it a ton." ok />
        </ChoicesEvent>
        <ChoicesEvent label="O-Oh, sorry. I know you're just trying to help me, and all I'm doing is being negative.">
          <Choice label="Just take it slow." correct />
          <Choice label="Don't get discouraged already." ok />
          <Choice label="Practice makes perfect." ok />
        </ChoicesEvent>
        <ChoicesEvent label="Hmm... But in that case, I can't really read while cooking. I wouldn't want to get the pages dirty.">
          <Choice label="Go to the bookstore." />
          <Choice label="I'll help you find something." />
        </ChoicesEvent>
      </div>
    ),
  },
  {
    points: 15,
    maxPoints: 20,
    element: () => (
      <div>
        <ChoicesEvent label="But I couldn't really decide, and I wasn't sure how to use whatever I'd buy...">
          <Choice label="Do you really need one?" />
          <Choice label="Start with the basics first." />
        </ChoicesEvent>
        <ChoicesEvent label="And it's not like I have any other redeeming qualities.">
          <Choice label="There's nothing you're good at?" />
          <Choice label="What about your Persona?" />
          <Choice label="You're a hard worker." ok />
        </ChoicesEvent>
        <ChoicesEvent label="Not to mention that I'm kind of embarrassed about it all. I mean, it's not a very feminine hobby.">
          <Choice label="That's not true." correct />
          <Choice label="Maybe you're right." />
          <Choice label="Why do you think that?" />
        </ChoicesEvent>
      </div>
    ),
  },
  {
    points: 22,
    maxPoints: 35,
    element: () => (
      <div>
        <ChoicesEvent label="W-Well... How is it?">
          <Choice label="It's good." ok />
          <Choice label="You did a great job." correct />
        </ChoicesEvent>
        <ChoicesEvent label="Because I don't think I could have made it this far without you.">
          <Choice label="I'm glad I could help." ok />
          <Choice label="I didn't do anything." />
        </ChoicesEvent>
        <ChoicesEvent label="That might be the reason why I made such good rice balls. Because I was thinking about who was going to eat them.">
          <Choice label="Thank you." />
          <Choice label="I think I get it." />
          <Choice label="Can you make me more sometime?" correct />
        </ChoicesEvent>
      </div>
    ),
  },
  {
    points: 30,
    maxPoints: 30,
    element: () => (
      <div>
        <ChoicesEvent label="I promise I'm going to do the best I can. So can I count on you?">
          <Choice label="Of course." correct />
          <Choice label="You sure you're not overdoing it?" />
        </ChoicesEvent>
        <ChoicesEvent label="I know I don't seem very reliable, but I want to make myself a useful member of the team.">
          <Choice label="That's the spirit." correct />
          <Choice label="Don't get too carried away." />
          <Choice label="You're already plenty useful." />
        </ChoicesEvent>
      </div>
    ),
  },
];

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
        element: () => null,
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
  Priestess: {
    name: "Priestess",
    calculate: function ({ level, points, romance = false, multiplier = 1 }) {
      const name = romance ? "levelsRomance" : "levels";
      const isNewlevel =
        level < this[name].length && points >= this[name][level].points;
      return {
        Priestess: {
          level: isNewlevel ? level + 1 : level,
          romance: romance,
          points: isNewlevel
            ? this[name][level].maxPoints * multiplier
            : points + 10 * multiplier,
        },
      };
    },
    levels: [
      ...priestessLevels,
      {
        points: 30,
        maxPoints: 5,
        element: () => (
          <div>
            <ChoicesEvent label="......">
              <Choice label="What is it?" />
              <Choice label="Something wrong with that?" />
            </ChoicesEvent>
            <ChoicesEvent label="I mentioned that I don't really like going to bookstores">
              <Choice label="Yeah, I remember." />
              <Choice label="But we were just in one..." />
            </ChoicesEvent>
            <ChoicesEvent label="She even threatened to show my parents.">
              <Choice label="You did nothing wrong." />
              <Choice label="......" />
              <Choice label="That's messed up." ok />
            </ChoicesEvent>
            <ChoicesEvent label="I'm sure it's because you're our leader. That's why I depend on you so much.">
              <Choice label="Is that the only reason?" />
              <Choice label="That's probably it." fork />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 35,
        maxPoints: 10,
        element: () => (
          <div>
            <ChoicesEvent label="How are you able to tell yourself that everything will work out in the end?">
              <Choice label="I believe in myself." ok />
              <Choice label="It's just my personality." ok />
              <Choice label="I've never thought about it." ok />
            </ChoicesEvent>
            <ChoicesEvent label="Will that be the end of us spending time together like this?">
              <Choice label="Not at all." />
              <Choice label="We'll see each other in the dorm." ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 40,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="">
              <Choice label="" />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 55,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="I thought it might be nice to add some texture, so I made sure there's plenty of vegetables mixed in.">
              <Choice label="How bold." />
              <Choice label="Is that safe?" />
              <Choice label="But I like meat..." />
            </ChoicesEvent>
            <ChoicesEvent label="You just seem more at ease now. Or maybe it's more confidence? Don't you think so?">
              <Choice label="I agree." />
              <Choice label="You haven't seen anything just yet." />
            </ChoicesEvent>
            <ChoicesEvent label="Remeber how I told you I was pretty good with machines? Well, how are they?">
              <Choice label="I love them!" correct />
              <Choice label="My mind is blown." ok />
            </ChoicesEvent>
          </div>
        ),
      },
    ],
    levelsRomance: [
      ...priestessLevels,
      {
        points: 30,
        maxPoints: 5,
        element: () => (
          <div>
            <ChoicesEvent label="......">
              <Choice label="What is it?" />
              <Choice label="Something wrong with that?" />
            </ChoicesEvent>
            <ChoicesEvent label="I mentioned that I don't really like going to bookstores">
              <Choice label="Yeah, I remember." />
              <Choice label="But we were just in one..." />
            </ChoicesEvent>
            <ChoicesEvent label="She even threatened to show my parents.">
              <Choice label="You did nothing wrong." />
              <Choice label="......" />
              <Choice label="That's messed up." ok />
            </ChoicesEvent>
            <ChoicesEvent label="I'm sure it's because you're our leader. That's why I depend on you so much.">
              <Choice label="Is that the only reason?" fork />
              <Choice label="That's probably it." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 35,
        maxPoints: 10,
        element: () => (
          <div>
            <ChoicesEvent label="How are you able to tell yourself that everything will work out in the end?">
              <Choice label="I believe in myself." ok />
              <Choice label="It's just my personality." ok />
              <Choice label="I've never thought about it." ok />
            </ChoicesEvent>
            <ChoicesEvent label="Will that be the end of us spending time together like this?">
              <Choice label="Not at all." />
              <Choice label="We'll see each other in the dorm." ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 40,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="She said, ''When you're friends, you don't keep score.''">
              <Choice label="She's right." />
              <Choice label="Ahaha! That's funny." />
            </ChoicesEvent>
            <ChoicesEvent label="I want to be together with you, forever.">
              <Choice label="I feel the same way." />
              <Choice label="Me too." />
            </ChoicesEvent>
            <ChoicesEvent label="......">
              <Choice label="I love you, Fuuka." correct />
              <Choice label="We'll always be friends." />
            </ChoicesEvent>
            <ChoicesEvent label="...!?">
              <Choice label="We'll be together forever." />
              <Choice label="I'll treat you right." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 55,
        maxPoints: 30,
        element: () => (
          <div>
            <ChoicesEvent label="Sorry... I don't know what I'm saying... I'm acting weird, aren't I?">
              <Choice label="Are you nervous?" />
              <Choice label="You seem like yourself." />
            </ChoicesEvent>
            <ChoicesEvent label="As long as I have you... I don't think I'll lose my way.">
              <Choice label="Glad to hear it." ok />
              <Choice label="I'm always here for you." correct />
            </ChoicesEvent>
            <ChoicesEvent label="So... what do you think?">
              <Choice label="I love them!" correct />
              <Choice label="Your skills are impressive." ok />
            </ChoicesEvent>
          </div>
        ),
      },
    ],
  },
  Emperor: {
    name: "Emperor",
    calculate: function ({ level, points, multiplier = 1 }) {
      const isNewlevel =
        level < this.levels.length && points >= this.levels[level].points;
      return {
        Emperor: {
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
        element: () => null,
      },
      {
        points: 0,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Some students feel the school uniform should be abolished, and they’re recruiting supporters…">
              <Choice label="They've got a point." />
              <Choice label="Sounds like nonsense." correct />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 0,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="What!? You can't decide something like that without talking to the president first.">
              <Choice label="What happened?" ok />
              <Choice label="No need to fight." correct />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 0,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="This guy looks like he's about to hit Odagiri!">
              <Choice label="Knock it off!" />
              <Choice label="..........." />
            </ChoicesEvent>
            <ChoicesEvent label="What is it? Do you need something from me?">
              <Choice label="You went a little overboard." />
              <Choice label="Looks like you're hard at work." correct />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="...Bunch of neanderthals">
              <Choice label="They're the worst." correct />
              <Choice label="You shouldn't accuse everyone." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="It's nice not having those hyenas around.">
              <Choice label="You're not going home yet?" />
              <Choice label="It's nice?" />
            </ChoicesEvent>
            <ChoicesEvent label="So as you can see, we can't exactly hold a meeting right now. You can leave if you want.">
              <Choice label="But I just got here…" correct />
              <Choice label="I think I'll stick around." correct />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="About the smoker’s punishment, I mean.">
              <Choice label="It seems reasonable." />
              <Choice label="It seems too harsh." correct />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 15,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Um, did Odagiri-san do something?">
              <Choice label="What do you mean?" />
              <Choice label="Why? Is something wrong?" />
            </ChoicesEvent>
            <ChoicesEvent label="...So, you heard all that.">
              <Choice label="It wasn’t me." correct />
              <Choice label="You came to my defense?" ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 22,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="I rambled on about rules and fairness, but all I really proved was that I was desperate for power.">
              <Choice label="Don’t blame yourself." correct />
              <Choice label="Good thing you noticed." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 22,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="So, how did I do? What'd everyone think?">
              <Choice label="Not too shabby." correct />
              <Choice label="You were great." ok />
            </ChoicesEvent>
            <ChoicesEvent label="That's why you should be the one to have it.">
              <Choice label="I'll cherish it." correct />
              <Choice label="I guess I’ll take it." correct />
            </ChoicesEvent>
          </div>
        ),
      },
    ],
  },
  Hierophant: {
    name: "Hierophant",
    calculate: function ({ level, points, multiplier = 1 }) {
      const isNewlevel =
        level < this.levels.length && points >= this.levels[level].points;
      return {
        Hierophant: {
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
        element: () => null,
      },
      {
        points: 0,
        maxPoints: 20,
        element: () => (
          <div>
            <ChoicesEvent label="What was your name again?">
              <Choice label="Tell him your name." ok />
              <Choice label="..." />
            </ChoicesEvent>
            <ChoicesEvent label="Someone gave them to me, but I have more than enough. Go ahead and take it, Makoto-chan.">
              <Choice label="Thank you." correct />
              <Choice label="I'm okay, thanks." />
            </ChoicesEvent>
            <ChoicesEvent label="We have so many, my wife and I would take forever to finish them all.">
              <Choice label="I'd like that." />
              <Choice label="No, thank you." />
            </ChoicesEvent>
            <ChoicesEvent label="He should be here helping customers... Sorry about that, Makoto-chan.">
              <Choice label="Boy?" />
              <Choice label="No need to apologize." />
            </ChoicesEvent>
            <ChoicesEvent label="Oh, my dear, he's...">
              <Choice label="He's what?" />
              <Choice label="What's this about?" />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 0,
        maxPoints: 20,
        element: () => (
          <div>
            <ChoicesEvent label="I don't see it anywhere...">
              <Choice label="Looking for something?" ok />
              <Choice label="Cleaning the store?" />
            </ChoicesEvent>
            <ChoicesEvent label="I'm looking for my glasses-Er, not my glasses - my wallet! I can't seem to find it.">
              <Choice label="Best of luck." />
              <Choice label="Can I help?" correct />
            </ChoicesEvent>
            <ChoicesEvent label="I am one as well! I am a student at Gekkoukan!">
              <Choice label="Nice to meet you." />
              <Choice label="...Who are you?" />
            </ChoicesEvent>
            <ChoicesEvent label="But you can call me 'Bebe'! It's quite nice to meet you!">
              <Choice label="Nice to meet you." />
              <Choice label="......" />
            </ChoicesEvent>
            <ChoicesEvent label="Why must you get into a car...? Do you want me to end up all alone!?">
              <Choice label="What's this about a car?" />
              <Choice label="All alone?" />
            </ChoicesEvent>
            <ChoicesEvent label="On his way home from work, he got into an accident... He was hit by a dump truck driver who was drunk on the job...">
              <Choice label="I'm sorry to hear that." />
              <Choice label="That's terrible luck." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 20,
        maxPoints: 20,
        element: () => (
          <div>
            <ChoicesEvent label="My wife just headed out to Gekkoukan.">
              <Choice label="I should go too." correct />
              <Choice label="I'll wait here." ok />
            </ChoicesEvent>
            <ChoicesEvent label="The... The... The tree...">
              <Choice label="Ask what happened" />
              <Choice label="Remain silent" />
            </ChoicesEvent>
            <ChoicesEvent label="">
              <Choice label="Do you know anything about this, Makoto-chan?" />
              <Choice label="No, I don't." />
              <Choice label="I'm worried." ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 20,
        maxPoints: 10,
        element: () => (
          <div>
            <ChoicesEvent label="We've been feeling a bit guilty for troubling you about the persimmon tree...">
              <Choice label="I wouldn't worry about it." ok />
              <Choice label="What tree?" />
            </ChoicesEvent>
            <ChoicesEvent label="Why now? Why do they want to cut it down now...?">
              <Choice label="Cheer up." ok />
              <Choice label="It'll be okay." ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 20,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="If we lose that tree... it would be like losing our son all over again...">
              <Choice label="You're overthinking it." />
              <Choice label="Please don't fight." correct />
            </ChoicesEvent>
            <ChoicesEvent label="Unfortunately, that just reminded my dear the pain we felt the day our son died...">
              <Choice label="Cheer up." />
              <Choice label="I'm sure it'll be okay." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 20,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Ah...">
              <Choice label="What happened?" ok />
              <Choice label="Are you fighting again?" />
            </ChoicesEvent>
            <ChoicesEvent label="They say the tree is a memorial to their former teacher... They don't want it to be cut down.">
              <Choice label="The tree? A memorial?" />
              <Choice label="That's great." ok />
            </ChoicesEvent>
            <ChoicesEvent label="You must be the one who called on them for this, right, Makoto-chan?">
              <Choice label="No." ok />
              <Choice label="That's right." ok />
              <Choice label="What are you talking about?" ok />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 20,
        maxPoints: 20,
        element: () => (
          <div>
            <ChoicesEvent label="Who do you think it was? Here's a hint: 'signature.'">
              <Choice label="A petitioner?" />
              <Choice label="A fan of yours?" ok />
            </ChoicesEvent>
            <ChoicesEvent label="He's already gathered a number of signatures from students who were in our son's class.">
              <Choice label="That's great." />
              <Choice label="That's amazing." />
            </ChoicesEvent>
            <ChoicesEvent label="I have to tell my son the good news!">
              <Choice label="Sure, let's go." correct />
              <Choice label="Right now?" />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 5,
        maxPoints: 20,
        element: () => (
          <div>
            <ChoicesEvent label="What? is that surprising? I'm actually quite the net surfer, you know!">
              <Choice label="What does the letter say?" ok />
              <Choice label="Why a letter?" ok />
            </ChoicesEvent>
            <ChoicesEvent label="Are you curious about the letter? Excited, perhaps? Even exhilerated?">
              <Choice label="Excited." />
              <Choice label="Exhilerated." />
            </ChoicesEvent>
          </div>
        ),
      },
      {
        points: 30,
        maxPoints: 15,
        element: () => (
          <div>
            <ChoicesEvent label="Bunkichi is sleep talking. Looks like he's taking a nap.">
              <Choice label="Take a closer look." />
              <Choice label="Leave him alone." />
            </ChoicesEvent>
            <ChoicesEvent label="It's the middle of the day, but I feel awfully sleepy.">
              <Choice label="What matter?" />
              <Choice label="Why are you relieved?" />
            </ChoicesEvent>
            <ChoicesEvent label="We asked them to go ahead and cut the persimmon tree down.">
              <Choice label="But.. why?" correct />
              <Choice label="Oh well." />
            </ChoicesEvent>
            <ChoicesEvent label="He was a teacher after all.">
              <Choice label="That's true." />
              <Choice label="Are you really sure?" />
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