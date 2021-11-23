function makeWebsite() {
  document.querySelector("title").innerHTML = "FOOD";

  const newHeader = document.createElement("header");
  const newHeading1 = document.createElement("h1");
  const newHeading1Text = document.createTextNode("My Favorite Foods: ");
  newHeader.appendChild(newHeading1).appendChild(newHeading1Text);

  document.body.appendChild(newHeader);

  let list1 = ["tacos", "bacon cheeseburgers", "chili", "salads"];
  const listed1 = document.createElement("li");
  const listed2 = document.createElement("li");
  const listed3 = document.createElement("li");
  const listed4 = document.createElement("li");
  const listFill1 = document.createTextNode(list1[0]);
  const listFill2 = document.createTextNode(list1[1]);
  const listFill3 = document.createTextNode(list1[2]);
  const listFill4 = document.createTextNode(list1[3]);

  const listOne = document.createElement("ul");
  const main = document.createElement("main");

  listOne.appendChild(listed1).appendChild(listFill1);
  listOne.appendChild(listed2).appendChild(listFill2);
  listOne.appendChild(listed3).appendChild(listFill3);
  listOne.appendChild(listed4).appendChild(listFill4);

  const heading2 = document.createElement("h3");
  const heading2Text = document.createTextNode(
    "My favorite casual grub joints:"
  );

  let list2 = ["Imo's Pizza", "Braum's", "Black Sheep", "Chipotle"];
  const listed21 = document.createElement("li");
  const listed22 = document.createElement("li");
  const listed23 = document.createElement("li");
  const listed24 = document.createElement("li");
  const listFill21 = document.createTextNode(list2[0]);
  const listFill22 = document.createTextNode(list2[1]);
  const listFill23 = document.createTextNode(list2[2]);
  const listFill24 = document.createTextNode(list2[3]);

  const listTwo = document.createElement("ul");

  listTwo.appendChild(listed21).appendChild(listFill21);
  listTwo.appendChild(listed22).appendChild(listFill22);
  listTwo.appendChild(listed23).appendChild(listFill23);
  listTwo.appendChild(listed24).appendChild(listFill24);

  const heading3 = document.createElement("h2");
  const heading3Text = document.createTextNode("Pickling and Fermentation!");
  heading3.setAttribute("class", "pHeading");

  const para1 = document.createElement("p");
  const paraText1 = document.createTextNode(
    "I recently purchased a couple of books about fermentation and pickling. In a year, I'll be on the path to becoming a pickling master!"
  );

  const heading4 = document.createElement("h4");
  heading4.textContent = "Helpful links to pickling and canning: ";
  heading4.setAttribute("class", "pHeading");

  const link1 = document.createElement("a");
  const link2 = document.createElement("a");
  link1.textContent = "USDA guide to home canning ";
  link2.textContent = "Oregon State pickling guide";
  link1.setAttribute("href", "https://nchfp.uga.edu/publications/publications_usda.html");
  link2.setAttribute("href", "https://catalog.extension.oregonstate.edu/pnw355");

  const linkBreak1 = document.createElement("br");
  const linkBreak2 = document.createElement("br");

  const pickle = document.createElement(`img`);
  pickle.setAttribute("src", "_pick.jpg");
  pickle.setAttribute("id", "pickle");

  main.appendChild(listOne);
  main.appendChild(heading2).appendChild(heading2Text);
  main.appendChild(listTwo);
  main.appendChild(heading3).appendChild(heading3Text);
  main.appendChild(para1).appendChild(paraText1);
  main.appendChild(heading4);
  main.appendChild(link1);
  main.appendChild(linkBreak1);
  main.appendChild(link2);
  main.appendChild(linkBreak2);
  main.appendChild(pickle);

  document.body.appendChild(main);

  



  
  
  
}

// HTML & JS homework set-up
// Add a "Week 4 Homework" folder to your homework repo
// Inside the folder, create index.html and index.js files
// Populate the index.html with boilerplate starter HTML
// Link your JS file to your HTML file with a <script> tag.
// Build an informational Website
// GOAL: Create a website that informs a visitor about something. The website should be readable and look nice: the website's basic appearance matters more than the particular content.

// You could create the beginnings of a professional portfolio website highlighting your career path and skills, or you could create a website that simply displays information about something you are interested in.

// Include the Following HTML
// Updated title tag
// Header, Main, and Footer sections
// 2+ lists
// 2+ headings
// 1+ paragraph
// 1+ image!
// 2+ links!
// Include the Following CSS
// utilize the CSS Box Model for padding, margin, and border
// utilize a color scheme (max. 4 colors)
// 1+ class selector
// 1+ ID selector
// 1+ complex selector
// Bonus Challenge
// GOAL: Use JavaScript DOM methods to populate some to "all" of your HTML from a .js file instead of "hard coding" your HTML into your index.html file.
