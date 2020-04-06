let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let homeButton = document.querySelector("#home")

let students = [
  {
    profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor-1.gif?v=1585868277578",
    name: "Nicki",
    quote: "Dungeon Dragon ",
    superlative: "Queen of rap",
    },
  
  {
    profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor.gif?v=1585868314620",
    name: "Ari",
    quote: "Always keep an open mind",
    superlative: "Best Dancer",
    },
  
  {
    profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor-3.gif?v=1585868288624",
    name: "Roddy Ricch",
    quote: "Be humble",
    superlative: "The Hustler",
  },
  
  {
  profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor-4.gif?v=1585868293485",
  name: "A Boogie",
    quote: "Ball is life",
    superlative: "Most Likely To Succeed",
  },
  
  {
  profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor-5.gif?v=1585868297518",
    name: "Queen Naija",
    quote: "Stand for what you believe",
    superlative: "Most calm",
  },
  
  {
    profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor-7.gif?v=1585868309244",
    name: "Lauren London",
    quote: "New New",
    superlative: "Most Quiet",
  },
  
  {
    profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor-6.gif?v=1585868620462",
    name: "Leonardo Dicaprio",
    quote: "Go for what you love",
    superlative: "Most Successful",
  },
  
  {
    profileImage: "https://cdn.glitch.com/a1ba958a-f326-45ff-a3b5-b91da218699c%2Ftenor-10.gif?v=1585973261000",
    name: "Cardi",
    quote: "Do what you want who cares what people have to say",
    superlative: "Most Loud",
  },
  ]

let count = 0

nextButton.addEventListener("click",()=>{
  console.log("next")
  count ++
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  
})
  
backButton.addEventListener("click",()=>{
  console.log( 'back')
  count --
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  
})