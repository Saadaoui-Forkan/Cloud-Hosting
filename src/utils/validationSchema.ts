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
      required_error: "Description is required",
      invalid_type_error: "Description should be a string",
    })
    .min(10, {
      message: "The description must contain at least 10 characters.",
    }),
});

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(2, {
      message:
        "The username must contain at least 2 characters and a maximum of 100 characters.",
    })
    .max(100, {
      message:
        "The username must contain at least 2 characters and a maximum of 100 characters.",
    }),

  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message:
        "The Password must contain at least 6 characters.",
    })
})

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),

  password: z
    .string({
      required_error: "Password is required",
    })
})
