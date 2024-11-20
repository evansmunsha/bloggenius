export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with BlogGenius!",
    price: "Free",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/4gwbMc4vZapP81y288",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QLPKOJ3sF4bFVznvMhj1YwH"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "30.00",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/5kA17yaUndC13Li4gh",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QLPKOJ3sF4bFVznXX5WWhq4"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://bloggenius-alpha.vercel.app";
