const quotes = [
  {
    quoteText:
      "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    quoteAuthor: "Muhammad Waseem",
    quoteLink:
      "https://www.goodreads.com/quotes/841129-give-a-man-a-program-frustrate-him-for-a-day",
  },
  {
    quoteText:
      "I'm not a great programmer; I'm just a good programmer with great habits.",
    quoteAuthor: "Kent Beck",
    quoteLink:
      "https://www.goodreads.com/quotes/532211-i-m-not-a-great-programmer-i-m-just-a-good-programmer",
  },
];

exports.random = function random() {
  if (Math.random() <= 0.5) {
    return quotes[0];
  }
  return quotes[1];
};
