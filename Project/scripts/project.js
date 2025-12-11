/* ------------------ Teaching Tips (Tabs + Image) ------------------ */

const tipsData = {
  pray: {
    title: "Teaching Children to Pray",
    body:
      "Show children how to pray by using simple steps: address Heavenly Father, express gratitude, ask for help, and close in Jesus Christ’s name. Practice together with short, joyful examples. Invite children to choose one sentence to say on their own, building confidence and trust.",
    img: "images/tip-prayer.jpg",
    alt: "Parent and child kneeling in prayer"
  },
  sacrament: {
    title: "Understanding the Sacrament",
    body:
      "Use a picture of Jesus to explain that the sacrament helps us remember Him. Keep it simple: 'The bread reminds us of His body, and the water reminds us of His love.' Ask children how they feel when they think of Jesus. Encourage reverence by focusing on gratitude and quiet reflection.",
    img: "images/tip-sacrament.jpg",
    alt: "Children looking at a picture of Jesus during the sacrament"
  },
  covenants: {
    title: "Teaching About Covenants",
    body:
      "Explain covenants using everyday promises. A covenant is a sacred promise we make with Heavenly Father: we choose to follow Jesus, and He promises to guide and bless us. Use simple object lessons, like two matching bracelets, to help children remember their commitment.",
    img: "images/tip-covenants.jpg",
    alt: "Hands holding matching bracelets as a symbol of covenants"
  },
  holyghost: {
    title: "Listening to the Holy Ghost (Cup Telephone Game)",
    body:
      "Make a cup-and-string telephone. One child represents the Holy Ghost and whispers a gentle message such as 'Choose the right' or 'Jesus loves you.' Another child listens quietly. Discuss how we must be calm and reverent to hear the Spirit’s gentle guidance. Invite children to share moments when they felt peace or comfort.",
    img: "images/tip-holy-ghost.jpg",
    alt: "Children playing a cup telephone game"
  },
  hymns: {
    title: "Learning Hymns with Joy",
    body:
      "Help children learn Primary songs through simple hand motions that match key words. Invite them to lead the class using the motions. You can also play the 'Song King' game: one child wears a small crown and guesses the missing word in a song. This builds reverence, confidence, and joyful participation.",
    img: "images/tip-hymns.jpg",
    alt: "Children joyfully singing with hand motions"
  },
  reverence: {
    title: "Maintaining Reverence (Reverence Thermometer)",
    body:
      "Use a simple thermometer visual to help children understand reverence. When the class is calm and ready, the thermometer rises. Celebrate small successes and encourage quiet voices, listening ears, and kind actions. Focus on positive reinforcement, not correction.",
    img: "images/tip-reverence.jpg",
    alt: "Reverence thermometer poster in a classroom"
  },
  goals: {
    title: "Helping Children Reach Their Personal Development Goals",
    body:
      "Guide children as they set simple goals in four areas: Spiritual, Social, Physical, and Intellectual. Invite them to choose small, achievable steps such as daily prayer, a kind action, a physical challenge, or reading a book. Use printable trackers or stickers to celebrate progress. Growth comes with consistency and love.",
    img: "images/tip-goals.jpg",
    alt: "Child placing stickers on a simple goal chart"
  }
};

const tipTabs = document.querySelectorAll(".tips-item");
const tipTitle = document.querySelector("#tip-title");
const tipBody = document.querySelector("#tip-body");
const tipImage = document.querySelector("#tip-image");

if (tipTabs.length && tipTitle && tipBody && tipImage) {
  function showTip(key) {
    const tip = tipsData[key];
    if (!tip) return;
    tipTitle.textContent = tip.title;
    tipBody.textContent = tip.body;
    tipImage.src = tip.img;
    tipImage.alt = tip.alt;
  }

  tipTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tipTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      showTip(tab.dataset.tip);
    });
  });

  // Estado inicial
  showTip("pray");
}
