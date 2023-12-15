const dayInput = document.querySelector('input[placeholder="DD"]');
const monthInput = document.querySelector('input[placeholder="MM"]');
const yearInput = document.querySelector('input[placeholder="YYYY"]');

const button = document.querySelector(".arrow-button");
button.addEventListener("click", calculateAge);

function calculateAge() {
  const inputDate = new Date(
    `${yearInput.value}-${monthInput.value}-${dayInput.value}`
  );

  const today = new Date();

  let ageDiff = today.getTime() - inputDate.getTime();
  let ageDate = new Date(ageDiff);
  let calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  let years = calculatedAge;
  let months = ageDate.getUTCMonth();
  let days = ageDate.getUTCDate() - 1;

  const yearSpan = document.querySelector(
    ".cool-text h1:nth-child(1) .dashdash"
  );
  yearSpan.textContent = years;

  const monthSpan = document.querySelector(
    ".cool-text h1:nth-child(2) .dashdash"
  );
  monthSpan.textContent = months;

  const daySpan = document.querySelector(
    ".cool-text h1:nth-child(3) .dashdash"
  );
  daySpan.textContent = days;
}
