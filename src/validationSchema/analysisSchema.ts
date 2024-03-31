import { z } from "zod";

export const analysisSchema = z.object({
  imageUrl: z.string().url().startsWith("https://www.tradingview.com", {
    message: "Must provide secure and tradingivew URL",
  }),
  description: z
    .string()
    .min(10, { message: "Must be 10 or more characters long" }),
  pair: z.string().min(5, {
    message: "Can't be less than 5 characters!",
  }),
});
