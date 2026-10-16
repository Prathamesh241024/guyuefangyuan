
// Add your Discord invite when you're ready.
const DISCORD_INVITE = "";

const discordButton = document.getElementById("discordBtn");

discordButton.addEventListener("click", () => {
  if (DISCORD_INVITE) {
    window.open(
      DISCORD_INVITE,
      "_blank",
      "noopener,noreferrer"
    );
  } else {
    alert("Discord invite will be added later.");
  }
});

// A real visitor count requires an analytics service.
document.getElementById("viewCount").textContent = "—";
// --- UPI Payment Logic ---
const upiBtn = document.getElementById("upiBtn");
const upiLink = "upi://pay?pa=prathameshvaishnav12@okaxis&pn=HELIX&cu=INR";

if (upiBtn) {
  upiBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Try to open the UPI app
    window.location.href = upiLink;

    // Fallback: If the app doesn't open within 2.5 seconds, show the UPI ID
    setTimeout(() => {
      alert("If your UPI app didn't open automatically, please manually send your payment to:\n\nprathameshvaishnav12@okaxis");
    }, 2500);
  });
}
