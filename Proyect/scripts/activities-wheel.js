// activities-wheel.js
// Handles "click an activity name → show its plan" for Activities Ideas page.

const activityIdeas = {
  // SPIRITUAL
  "little-missionaries": {
    title: "Little Missionaries",
    area: "Spiritual",
    time: "60–70 minutes",
    prep: "Low",
    summary:
      "Children practice sharing a simple testimony or truth about Jesus Christ as if they were tiny missionaries.",
    steps: [
      "Show a picture of missionaries and ask what they do.",
      "Explain that missionaries share what they know about Jesus in simple ways.",
      "Give each child a picture card (Jesus, prayer, scriptures, temple, etc.).",
      "Practice a one-sentence testimony together: “I know Jesus loves me,” “I know Heavenly Father hears my prayers,” etc.",
      "Let willing children stand and share their sentence with the group."
      
    ]
  },
  "sweet-memories": {
    title: "Sweet Memories",
    area: "Spiritual",
    time: "10–15 minutes",
    prep: "Medium (small wrapped candy or paper hearts)",
    summary:
      "Use a small treat or paper heart to help children remember a time they felt the Spirit or felt Heavenly Father's love.",
    steps: [
      "Give each child a candy or paper heart and explain that it represents a 'sweet memory' with Jesus.",
      "Invite them to quietly think of a time they felt loved, safe, or peaceful.",
      "Let a few children share if they would like.",
      "Bear testimony that these peaceful feelings are a gift from the Holy Ghost.",
      "Encourage them to notice those feelings during the week and tell their families."
    ]
  },
  "christmas-choir": {
    title: "Christmas Choir",
    area: "Spiritual",
    time: "20 minutes",
    prep: "Medium (simple song & maybe jingle bells)",
    summary:
      "Children form a small choir to sing a Christmas song about the Savior and share it with another class or their families.",
    steps: [
      "Choose a simple Christmas song that focuses on Jesus Christ.",
      "Teach the words with actions or pictures.",
      "Divide into two groups: melody and echo, or singers and simple instruments.",
      "Practice as a 'Primary choir'.",
      "If appropriate, perform for another class, the Primary presidency, or record a short video message for families."
    ]
  },
  "plan-of-salvation": {
    title: "Plan of Salvation Challenge",
    area: "Spiritual",
    time: "20 minutes",
    prep: "Medium (simple pictures or labels)",
    summary:
      "A quiet challenge where children put the pieces of the plan of salvation in order and explain each step in their own words.",
    steps: [
      "Prepare simple cards or pictures: Premortal Life, Earth Life, Spirit World, Resurrection, Kingdoms of Glory.",
      "Hide the cards around the room or place them face down on a table.",
      "Let the children find or choose cards and work together to place them in order.",
      "Ask them what they remember about each step and add short clarifications.",
      "Bear testimony that Heavenly Father has a loving plan for each child."
    ]
  },
  "first-covenant": {
    title: "My First Covenant",
    area: "Spiritual",
    time: "15–20 minutes",
    prep: "Low (paper, crayons)",
    summary:
      "Help children think about baptism and taking the sacrament as covenants they can keep every day.",
    steps: [
      "Briefly review what a covenant is and connect it to baptism and the sacrament.",
      "Ask children to list simple promises they can keep: be kind, pray, listen to parents, etc.",
      "Have them choose one promise and draw themselves keeping it.",
      "Invite a few to share their picture and how it helps them remember Jesus.",
      "Encourage them to think of that drawing during the sacrament."
    ]
  },

  // SOCIAL
  "friendship-chain": {
    title: "Friendship Chain",
    area: "Social",
    time: "15 minutes",
    prep: "Low (paper strips, tape)",
    summary:
      "Children write or draw ways they can be a good friend and connect them into a paper chain.",
    steps: [
      "Talk about how Jesus was a friend to others.",
      "Give each child one or two paper strips.",
      "Have them draw or write one way they can be a better friend.",
      "Link all the strips to make a long chain and hang it in the room.",
      "Encourage them to choose one 'link' to practice this week."
    ]
  },
  "kindness-bingo": {
    title: "Kindness Bingo",
    area: "Social",
    time: "15–20 minutes",
    prep: "Medium (simple bingo cards)",
    summary:
      "Use a simple bingo grid with acts of kindness the children can try at home or in Primary.",
    steps: [
      "Show a sample card with small, doable acts of kindness.",
      "Explain that they can work on the card during the week.",
      "Let children color or mark boxes as you discuss what each act might look like.",
      "Invite them to share which act of kindness they want to try first.",
      "Follow up another week and celebrate any completed rows."
    ]
  },
  "service-circle": {
    title: "Service Circle Time",
    area: "Social",
    time: "10–15 minutes",
    prep: "Low",
    summary:
      "Children sit in a circle and take turns suggesting someone they can serve and one thing they could do.",
    steps: [
      "Sit in a circle and pass a soft object (ball or beanbag).",
      "Whoever holds it says the name of someone they can serve and what they could do.",
      "Write a few ideas on the board where everyone can see them.",
      "Finish with a simple invitation to choose one person to serve this week."
    ]
  },

  // PHYSICAL
  "reverent-walk": {
    title: "Reverent Walk",
    area: "Physical",
    time: "10 minutes",
    prep: "Low",
    summary:
      "A slow, quiet walk where children practice reverence while noticing Primary pictures or scripture phrases.",
    steps: [
      "Place pictures or short verses around the room or in the hallway (get approval first).",
      "Explain that you will go on a 'reverent walk' like Jesus did when He visited the temple.",
      "Walk slowly together, stopping at each picture to whisper a short thought or question.",
      "End back in the classroom and ask what they noticed and felt."
    ]
  },
  "scripture-relay": {
    title: "Scripture Relay",
    area: "Physical",
    time: "15 minutes",
    prep: "Medium (scripture cards)",
    summary:
      "Children gently race to match scripture phrases with pictures or simple keywords.",
    steps: [
      "Prepare pairs of cards: one with a short phrase, one with a picture or keyword.",
      "Divide children into two or more small teams.",
      "One child from each team walks quickly (not running) to pick a card and match it.",
      "After all matches are made, review the phrases together.",
      "Bear testimony of one scripture that fits your lesson."
    ]
  },
  "temple-stretches": {
    title: "Temple Stretches",
    area: "Physical",
    time: "5–8 minutes",
    prep: "Low",
    summary:
      "Simple stretches connected to temple shapes to help children move while staying calm.",
    steps: [
      "Show a picture of the temple and talk briefly about it.",
      "Invite children to make 'temple shapes' with their arms (spires up, doors open, etc.).",
      "Lead them through slow stretches while quietly playing Primary music.",
      "End with folded arms and a deep breath to return to reverent mode."
    ]
  },

  // INTELLECTUAL
  "scripture-puzzle": {
    title: "Scripture Puzzle Hunt",
    area: "Intellectual",
    time: "15–20 minutes",
    prep: "Medium (puzzle pieces or strips)",
    summary:
      "Children work in small groups to put together scripture phrases and then read them aloud.",
    steps: [
      "Choose one or two short scriptures and print the words on strips or puzzle pieces.",
      "Hide the pieces or place them in mixed piles for each group.",
      "Let groups put their scripture in order.",
      "Invite each group to read their verse and say what it teaches.",
      "Connect the verses to your lesson topic."
    ]
  },
  "question-jar": {
    title: "Question Jar",
    area: "Intellectual",
    time: "5–10 minutes",
    prep: "Low (jar & slips of paper)",
    summary:
      "Children can anonymously place gospel questions in a jar for future lessons or at-home study.",
    steps: [
      "Explain that questions can help us learn and grow in the gospel.",
      "Show the jar and invite children to write or dictate a question.",
      "Place the slips in the jar without reading names aloud.",
      "Use one or two questions in a future lesson or send home for parents to discuss."
    ]
  },
  "article-of-faith-memory": {
    title: "Articles of Faith Memory Game",
    area: "Intellectual",
    time: "15 minutes",
    prep: "Medium (matching cards)",
    summary:
      "A simple matching game using key phrases from the Articles of Faith.",
    steps: [
      "Prepare pairs of cards with short, unique phrases from several Articles of Faith.",
      "Lay the cards face down and let children take turns flipping two at a time.",
      "When they find a match, read the phrase together.",
      "Briefly explain which Article of Faith it belongs to.",
      "Challenge them to memorize one phrase during the week."
    ]
  }
};

function initActivityIdeas() {
  const buttons = document.querySelectorAll(".activity-list button");
  if (!buttons.length) return;

  const titleEl = document.querySelector("#activity-detail-title");
  const metaEl = document.querySelector("#activity-detail-meta");
  const bodyEl = document.querySelector("#activity-detail-body");
  const stepsEl = document.querySelector("#activity-detail-steps");

  function showActivity(id) {
    const activity = activityIdeas[id];
    if (!activity) return;

    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.id === id);
    });

    titleEl.textContent = activity.title;
    metaEl.textContent = `${activity.area} · Time: ${activity.time} · Prep: ${activity.prep}`;
    bodyEl.textContent = activity.summary;

    stepsEl.innerHTML = "";
    activity.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsEl.appendChild(li);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showActivity(btn.dataset.id);
    });
  });

  // show the first spiritual activity by default
  showActivity("little-missionaries");
}

document.addEventListener("DOMContentLoaded", initActivityIdeas);
