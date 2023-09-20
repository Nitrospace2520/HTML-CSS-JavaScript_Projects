const reviewers = [
  {
    id: "1",
    author: "Natasha Romanoff",
    image: "./Images/natasha.bmp",
    job: "UX Designer",
    info: `This software works so well. It delightedly improves my football by a lot.
    My co-worker Mitchell has one of these. He says it looks dry.
    My neighbor Eller has one of these. She works as a butler and she says it looks smoky.
    one of my hobbies is skydiving. and when i'm skydiving this works great.
    This software works considerably well. It secretly improves my basketball by a lot.
    The box this comes in is 3 yard by 6 light-year and weights 11 megaton!!
    My co-worker Mohamed has one of these. He says it looks brown.
    heard about this on powerviolence radio, decided to give it a try.
    This software works certainly well. It energetically improves my golf by a lot.
    This software works too well. It buoyantly improves my football by a lot.
    talk about shame.`,
  },
  {
    id: "2",
    author: "Bruce Wayne",
    image: "./Images/bruce.bmp",
    job: "CEO",
    info: `This software works extremely well. It wetly improves my tennis by a lot.
    My co-worker Aurthur has one of these. He says it looks white.
    My neighbor Krista has one of these. She works as a salesman and she says it looks soapy.
    I tried to nab it but got salad all over it.
    My co-worker Aurthur has one of these. He says it looks white.
    I saw one of these in Comoros and I bought one.
    My neighbor Elisha has one of these. She works as a fortune teller and she says it looks floppy.
    This software works outstandingly well. It grudgingly improves my baseball by a lot.
    My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled.
    talk about fury.
    This software works quite well. It professionally improves my soccer by a lot.`,
  },
  {
    id: "3",
    author: "Tony Stark",
    image: "./Images/tony.bmp",
    job: "Cybersecurity Expert",
    info: `My terrier loves to play with it.
    I saw one of these in Comoros and I bought one.
    I tried to nail it but got strawberry all over it.
    It only works when I'm Heard Island and McDonald Islands.
    My co-worker Erick has one of these. He says it looks fluffy.
    My neighbor Julisa has one of these. She works as a bartender and she says it looks crooked.
    SoCal cockroaches are unwelcome, crafty, and tenacious. This software product keeps them away.
    This software product works quite well. It romantically improves my golf by a lot.
    It only works when I'm Juan de Nova Island.
    I tried to strangle it but got hazelnut all over it.`,
  },
  {
    id: "4",
    author: "Clark Kent",
    image: "./Images/clark.bmp",
    job: "Technical Manager",
    info: `This software product works extremely well. It wetly improves my tennis by a lot.
    this software product is hyper.
    I saw one of these in Comoros and I bought one.
    The box this comes in is 4 kilometer by 5 mile and weights 17 gram.
    this software product is dominant.
    heard about this on Kansas City jazz radio, decided to give it a try.
    The box this comes in is 5 foot by 6 inch and weights 17 pound!!!
    My neighbor Frona has one of these. She works as a gambler and she says it looks bearded.
    The box this comes in is 4 light-year by 5 inch and weights 11 megaton!!
    this software product is ratty.`,
  },
  {
    id: "5",
    author: "Diana Themyscira",
    image: "./Images/diana.bmp",
    job: "Teacher",
    info: `This software product works outstandingly well. It beautifully improves my basketball by a lot.
    this software product is complimentary.
    My neighbor Julisa has one of these. She works as a bartender and she says it looks crooked.
    I tried to annihilate it but got bonbon all over it.
    The box this comes in is 5 yard by 6 centimeter and weights 18 gram!!
    My co-worker Kazuo has one of these. He says it looks transparent.
    i use it until further notice when i'm in my nightclub.
    This software product works outstandingly well. It grudgingly improves my baseball by a lot.
    heard about this on powerviolence radio, decided to give it a try.`,
  },
];

const authorImage = document.getElementById("image-of-author");
const authorName = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prevKey = document.querySelector("#btn-prev");
const nextKey = document.querySelector("#btn-next");
const random = document.querySelector("#suprise-me");
let countIter = 0;
const setReview = (iteration) => {
  authorName.innerText = reviewers[iteration].author;
  job.innerText = reviewers[iteration].job;
  info.innerText = reviewers[iteration].info;
  authorImage.src = reviewers[iteration].image;
};
prevKey.addEventListener("click", (event) => {
  countIter = (countIter - 1) % reviewers.length;
  if (countIter < 0) {
    countIter = reviewers.length - 1;
  }
  setReview(countIter);
});
nextKey.addEventListener("click", (event) => {
  countIter = (countIter + 1) % reviewers.length;
  setReview(countIter);
});
random.addEventListener("click", (event) => {
  const randomIndex = Math.floor(Math.random() * reviewers.length);
  setReview(randomIndex);
});
