import { QuestionsWrapper, Question, Answer } from "../../components/choices";
import { baseSocialLinkCalculation, mainCharName } from "./baseFunctions";
import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { createBondObject, LinkMaxedObject } from "./GenericCard";

export const Priestess: SocialLinkType = {
  ...baseSocialLinkCalculation,
  name: SocialLinkNames.Priestess,
  levels: {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question
            label={`Maybe I should give him some food. What do you think, ${mainCharName}-kun?`}
          >
            <Answer label="Sure." points={15} />
            <Answer label="Don't do it." />
          </Question>,
          <Question label="I don't want to put you in the hospital...">
            <Answer label="I can handle a bit." />
            <Answer label="Maybe we can use it in battle." />
          </Question>,
          <Question label="I don't think I can do this alone. Can I... count on you to help?">
            <Answer label="Sure thing." points={15} />
            <Answer label="Will it be good next time?" />
          </Question>,
        ],
      }),
    },
    2: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 0,
        element: [
          <Question
            label={`I still don't have a feel for how much salt to add. How do you do it, ${mainCharName}-kun?`}
          >
            <Answer label="Just a dash or two." points={15} />
            <Answer label="I don't add salt." />
            <Answer label="Just dump it a ton." points={5} />
          </Question>,
          <Question label="O-Oh, sorry. I know you're just trying to help me, and all I'm doing is being negative.">
            <Answer label="Just take it slow." points={15} />
            <Answer label="Don't get discouraged already." points={5} />
            <Answer label="Practice makes perfect." points={5} />
          </Question>,
          <Question label="Hmm... But in that case, I can't really read while cooking. I wouldn't want to get the pages dirty.">
            <Answer label="Go to the bookstore." />
            <Answer label="I'll help you find something." />
          </Question>,
        ],
      }),
    },
    3: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 15,
        element: [
          <Question label="But I couldn't really decide, and I wasn't sure how to use whatever I'd buy...">
            <Answer label="Do you really need one?" />
            <Answer label="Start with the basics first." />
          </Question>,
          <Question label="And it's not like I have any other redeeming qualities.">
            <Answer label="There's nothing you're good at?" />
            <Answer label="What about your Persona?" />
            <Answer label="You're a hard worker." points={5} />
          </Question>,
          <Question label="Not to mention that I'm kind of embarrassed about it all. I mean, it's not a very feminine hobby.">
            <Answer label="That's not true." points={15} />
            <Answer label="Maybe you're right." />
            <Answer label="Why do you think that?" points={5} />
          </Question>,
        ],
      }),
    },
    4: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 22,
        element: [
          <Question label="W-Well... How is it?">
            <Answer label="It's good." points={5} />
            <Answer label="You did a great job." points={15} />
          </Question>,
          <Question label="Because, I don't think I could have made it this far without you.">
            <Answer label="I'm glad I could help." points={5} />
            <Answer label="I didn't do anything." />
          </Question>,
          <Question label="That might be the reason why I made such good rice balls. Because I was thinking about who was going to eat them.">
            <Answer label="Thank you." points={5} />
            <Answer label="I think I get it." />
            <Answer label="Can you make more sometime?" points={15} />
          </Question>,
        ],
      }),
    },
    5: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="I promise I'm going to do the best I can. So can I count on you?">
            <Answer label="Of course." points={15} />
            <Answer label="You sure you're not overdoing it?" />
          </Question>,
          <Question label="I know I don't seem very reliable, but I want to make myself a useful member of the team.">
            <Answer label="That's the spirit." points={15} />
            <Answer label="Don't get too carried away." />
            <Answer label="You're already plenty useful." />
          </Question>,
        ],
      }),
    },
    6: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="......">
            <Answer label="What is it?" />
            <Answer label="Something wrong with that?" />
          </Question>,
          <Question label="I mentioned that I don't really like going to bookstores">
            <Answer label="Yeah, I remember." />
            <Answer label="But we were just in one..." />
          </Question>,
          <Question label="She even threatened to show my parents.">
            <Answer label="You did nothing wrong." />
            <Answer label="......" />
            <Answer label="That's messed up." points={5} />
          </Question>,
          <Question label="I'm sure it's because you're our leader. That's why I depend on you so much.">
            <Answer label="Is that the only reason?" />
            <Answer label="That's probably it." fork={true} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 30,
        element: [
          <Question label="......">
            <Answer label="What is it?" />
            <Answer label="Something wrong with that?" />
          </Question>,
          <Question label="I mentioned that I don't really like going to bookstores">
            <Answer label="Yeah, I remember." />
            <Answer label="But we were just in one..." />
          </Question>,
          <Question label="She even threatened to show my parents.">
            <Answer label="You did nothing wrong." />
            <Answer label="......" />
            <Answer label="That's messed up." points={5} />
          </Question>,
          <Question label="I'm sure it's because you're our leader. That's why I depend on you so much.">
            <Answer label="Is that the only reason?" />
            <Answer label="That's probably it." fork={true} />
          </Question>,
        ],
      }),
    },
    7: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question label="How are you able to tell yourself that everything will work out in the end?">
            <Answer label="I believe in myself." points={5} />
            <Answer label="It's just my personality." points={5} />
            <Answer label="I've never thought about it." points={5} />
          </Question>,
          <Question label="Will that be the end of us spending time together like this?">
            <Answer label="Not at all." />
            <Answer label="We'll see each other in the dorm." points={5} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 35,
        element: [
          <Question label="How are you able to tell yourself that everything will work out in the end?">
            <Answer label="I believe in myself." points={5} />
            <Answer label="It's just my personality." points={5} />
            <Answer label="I've never thought about it." points={5} />
          </Question>,
          <Question label="Will that be the end of us spending time together like this?">
            <Answer label="Not at all." />
            <Answer label="We'll see each other in the dorm." points={5} />
          </Question>,
        ],
      }),
    },
    8: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="She said, 'When you're friends, you don't keep score.'">
            <Answer label="She's right." />
            <Answer label="Ahaha! That's funny." />
          </Question>,
          <Question label="I want to be together with you, forever.">
            <Answer label="I feel the same way." />
            <Answer label="Me too." />
          </Question>,
          <Question label="......">
            <Answer label="I love you, Fuuka." points={15} />
            <Answer label="We'll always be friends." />
          </Question>,
          <Question label="...!?">
            <Answer label="We'll be together forever." />
            <Answer label="I'll treat you right." />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 40,
        element: [
          <Question label="She said, 'When you're friends, you don't keep score.'">
            <Answer label="She's right." />
            <Answer label="Ahaha! That's funny." />
          </Question>,
          <Question label="I want to be together with you, forever.">
            <Answer label="I feel the same way." />
            <Answer label="Me too." />
          </Question>,
          <Question label="......">
            <Answer label="I love you, Fuuka." points={15} />
            <Answer label="We'll always be friends." />
          </Question>,
          <Question label="...!?">
            <Answer label="We'll be together forever." />
            <Answer label="I'll treat you right." />
          </Question>,
        ],
      }),
    },
    9: {
      [Routes.Platonic]: QuestionsWrapper({
        points: 55,
        element: [
          <Question label="I thought it might be nice to add some texture, so I made sure there's plenty of vegetables mixed in.">
            <Answer label="How bold." />
            <Answer label="Is that safe?" />
            <Answer label="But I like meat..." />
          </Question>,
          <Question label="You just seem more at ease now. Or maybe it's more confidence? Don't you think so?">
            <Answer label="I agree." />
            <Answer label="You haven't seen anything just yet." />
          </Question>,
          <Question label="Remeber how I told you I was pretty good with machines? Well, how are they?">
            <Answer label="I love them!" points={15} />
            <Answer label="My mind is blown." points={5} />
          </Question>,
        ],
      }),
      [Routes.Romantic]: QuestionsWrapper({
        points: 55,
        element: [
          <Question label="I thought it might be nice to add some texture, so I made sure there's plenty of vegetables mixed in.">
            <Answer label="How bold." />
            <Answer label="Is that safe?" />
            <Answer label="But I like meat..." />
          </Question>,
          <Question label="You just seem more at ease now. Or maybe it's more confidence? Don't you think so?">
            <Answer label="I agree." />
            <Answer label="You haven't seen anything just yet." />
          </Question>,
          <Question label="Remeber how I told you I was pretty good with machines? Well, how are they?">
            <Answer label="I love them!" points={15} />
            <Answer label="My mind is blown." points={5} />
          </Question>,
        ],
      }),
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  },
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
