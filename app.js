const tripStart = new Date("2026-09-20T00:00:00-04:00");
const tripEnd = new Date("2026-09-28T23:59:59-07:00");
const now = new Date();
const countdown = document.querySelector("#countdown");
const todayButton = document.querySelector("#today-button");

if (countdown) {
  if (now < tripStart) {
    const days = Math.ceil((tripStart - now) / 86_400_000);
    countdown.textContent = `${days} day${days === 1 ? "" : "s"} until the trip`;
  } else if (now <= tripEnd) {
    countdown.textContent = "We’re on the road";
  } else {
    countdown.textContent = "September 20–28, 2026";
  }
}

const dateKey = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(now);
const todayCard = document.querySelector(`[data-date="${dateKey}"]`);

if (todayCard) {
  todayCard.classList.add("is-today");
}

todayButton?.addEventListener("click", () => {
  (todayCard || document.querySelector("#itinerary"))?.scrollIntoView({ behavior: "smooth" });
});
