
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
