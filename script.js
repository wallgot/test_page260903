// c:\KIMJINGYU\01_html_copliot\script.js
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (button && answer) {
    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((faq) => {
        faq.classList.remove("active");
        const otherAnswer = faq.querySelector(".faq-answer");
        if (otherAnswer) {
          otherAnswer.style.maxHeight = null;
        }
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  }
});

const activeFaq = document.querySelector(".faq-item.active .faq-answer");
if (activeFaq) {
  activeFaq.style.maxHeight = activeFaq.scrollHeight + "px";
}

document.getElementById("year").textContent = new Date().getFullYear();
