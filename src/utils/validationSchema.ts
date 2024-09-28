import { z } from "zod";

export const createArticleSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title should be a string",
    })
    .min(2, {
      message:
        "The title must contain at least 2 characters and a maximum of 200 characters.",
    })
    .max(200, {
      message:
        "The title must contain at least 2 characters and a maximum of 200 characters.",
    }),
  description: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title should be a string",
    })
    .min(10, {
      message: "The description must contain at least 10 characters.",
    }),
});
