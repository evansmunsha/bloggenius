export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with BlogGenius!",
    price: "Free",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_28o00TbKDbuX34I6oo",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QLPKOJ3sF4bFVznvMhj1YwH"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "19.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_4gwdRJ15ZdD520E8wx",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QLPKOJ3sF4bFVznXX5WWhq4"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://bloggenius.vercel.app";
