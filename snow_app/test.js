// ดึง Element ต่างๆ จากหน้า HTML
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const nextTrackBtn = document.getElementById("nextTrackBtn");
const currentTrackName = document.getElementById("currentTrackName");

// รายการเพลง
const tracks = [
    "audio/Teletubbies.mp3",
    "audio/Sofia.mp3",
    "audio/Popular.mp3",
    "audio/Babyshark.mp3"
];

let currentTrackIndex = 0; // เพลงแรก

// ฟังก์ชันอัปเดตชื่อเพลง
function updateTrackName() {
    let trackFileName = tracks[currentTrackIndex].split("/").pop(); // ดึงชื่อไฟล์จาก path
    currentTrackName.textContent = "Now playing: " + trackFileName;
}

// โหลดเพลงแรกและอัปเดตชื่อเพลง
audioSource.src = tracks[currentTrackIndex];
audioPlayer.load();
audioPlayer.play();
updateTrackName();

// ฟังก์ชัน Play/Pause
playPauseBtn.addEventListener("click", function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.classList.remove("bi-play-fill");
        playPauseIcon.classList.add("bi-pause-fill");
    } else {
        audioPlayer.pause();
        playPauseIcon.classList.remove("bi-pause-fill");
        playPauseIcon.classList.add("bi-play-fill");
    }
});

// ฟังก์ชันเปลี่ยนเพลง (Next Track)
nextTrackBtn.addEventListener("click", function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audioSource.src = tracks[currentTrackIndex];
    audioPlayer.load();
    audioPlayer.play();
    updateTrackName();

    playPauseIcon.classList.remove("bi-play-fill");
    playPauseIcon.classList.add("bi-pause-fill");
});

// คำคมที่มีให้เลือก
const quotes = [
  "เห็นคุณลองทำสิ่งใหม่ ๆ แล้วรู้สึกอบอุ่นใจมาก ขอให้ก้าวต่อไปอย่างมั่นใจนะ!",
  "ความเฉย ๆ ไม่ใช่เรื่องแย่ แค่เป็นอีกมุมหนึ่งของการเรียนรู้",
  "ไม่เป็นไรนะ แค่คุณกล้าลองก็วิเศษมากแล้ว!",
  "ไม่มีอะไรสายเกินไป ถ้าวันหนึ่งคุณอยากลอง คุณยังมีโอกาสเสมอ 😊"
];

// ภารกิจที่มีให้เลือก
const challenges = [
  "bunnyhop/Front_Challenge_card.png",
  "bunnyhop/Front_Challenge_card1.png",  
  "bunnyhop/Front_Challenge_card2.png",
  "bunnyhop/Front_Challenge_card3.png"
];

// ดึง element จาก HTML ให้ตรงกับ ID ใหม่
const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn"); // ปุ่มสุ่มคำคม
const challengeImage = document.getElementById("challengeImage");
const newChallengeBtn = document.getElementById("newChallengeBtn"); // ปุ่มสุ่มภารกิจ

// ฟังก์ชันสุ่มคำคม
function getRandomQuote() {
  quoteText.classList.add("fade-out"); // เริ่มต้นทำให้จาง
  setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteText.textContent = `“${quotes[randomIndex]}”`;
      quoteText.classList.remove("fade-out");
      quoteText.classList.add("fade-in"); // ค่อยๆ ปรากฏ
  }, 300);
}

// ฟังก์ชันสุ่มภารกิจ
function getRandomChallenge() {
  challengeImage.classList.add("fade-out");
  setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      challengeImage.src = `${challenges[randomIndex]}?t=${new Date().getTime()}`;
      challengeImage.classList.remove("fade-out");
      challengeImage.classList.add("fade-in");
  }, 300);
}
// กดปุ่มแล้วสุ่มใหม่
newQuoteBtn.addEventListener("click", getRandomQuote);
newChallengeBtn.addEventListener("click", getRandomChallenge);

// สุ่มค่าเริ่มต้นเมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", function() {
  getRandomQuote();
  getRandomChallenge();
});

// ดึง Element ที่เกี่ยวข้องกับการโหวต
const reactionButtons = document.querySelectorAll(".reaction-btn");
const reactionCountText = document.getElementById("reactionCount");

let hasVoted = false; // เช็คว่าผู้ใช้กดโหวตแล้วหรือไม่

reactionButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (!hasVoted) {
            hasVoted = true; // ผู้ใช้กดแล้ว
            reactionCountText.textContent = `You have reacted!`;
        } else {
            
        }
    });
});

document.getElementById("shareQuoteBtn").addEventListener("click", function() {
  const text = quoteText.textContent;
  const shareURL = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(text);

  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${shareURL}&quote=${shareText}`;
  const twitterURL = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareURL}`;
  const lineURL = `https://social-plugins.line.me/lineit/share?url=${shareURL}&text=${shareText}`;

  // แสดงหน้าต่างแชร์แบบ Pop-up
  const shareOptions = `
      width=600,
      height=400,
      top=${(screen.height / 2) - 200},
      left=${(screen.width / 2) - 300}
  `;

  window.open(facebookURL, "_blank", shareOptions);
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("download-popup");
  const closeBtn = document.getElementById("close-popup");

  closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
  });

  // แสดง popup หลังจากโหลดหน้าเว็บ 3 วินาที
  setTimeout(() => {
      popup.style.display = "flex";
  }, 3000);
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function createSnowflake() {
    console.log("Creating snowflake..."); // ตรวจสอบว่าเรียกใช้ฟังก์ชันหรือไม่
    const snowflake = document.createElement("img");
    snowflake.classList.add("snowflake");

    const images = [
        "img/tooptp.png",
        "img/parntp.png",
        "img/nontp.png",
        "img/belltp.png",
        "img/deentp.png"
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    console.log("Snowflake image:", randomImage); // ตรวจสอบ path รูปภาพ
    
    snowflake.src = randomImage;
    document.body.appendChild(snowflake);

    const size = Math.random() * 30 + 10 + "px";
    const left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 2 + "s";

    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.position = "fixed";
    snowflake.style.zIndex = "999";
    snowflake.style.left = left;
    snowflake.style.top = "-10px";
    snowflake.style.animation = `fall ${duration} linear`;

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 1000); // ตั้งให้สร้างทุก 1 วินาที


