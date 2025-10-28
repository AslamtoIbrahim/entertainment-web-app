import * as z from "zod";
export const ZodUser = z
  .object({
    name: z.string().min(4, "Name must be at least 4 character").nonempty(),
    email: z.email(),
    password: z.string().min(4, "Password too short!"),
    confirmPassword: z.string().min(4, "Confirm password too short!"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export type User = z.infer<typeof ZodUser>;

export const ZodLogin = z.object({
  email: z.email(),
  password: z.string(),
});


export type Login = z.infer<typeof ZodLogin>