import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/features/auth/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/features/auth/components/ui/field";
import { ZodUser, type User } from "@/features/auth/utils/types";
import Button from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Spinner } from "@/shared/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginWithGoogle } from "../hooks/use-login-with-google-auth";
import { useSignUp } from "../hooks/use-signup-auth";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

export function SignUpForm({ ...props }: React.ComponentProps<typeof Card>) {
  const {
    error: GoogleError,
    pending: isLoadingGoogle,
    googleSubmit,
  } = useLoginWithGoogle();
  const { submit, error, pending: isLoadingLocal } = useSignUp();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(ZodUser),
  });

  const onSubmit = async (data: User) => {
    const dataUser = {
      username: data.name,
      email: data.email,
      password: data.confirmPassword,
    };
    const user = await submit(dataUser);

    if (user) {
      navigate("/login");
    }
  };

  const onGoogleClickHandler = () => {
    googleSubmit();
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="John Son" {...field} />
                  </FormControl>
                  <FormDescription>
                    Must be at least 4 characters long.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="exmaple@gmail.ocm" {...field} />
                  </FormControl>
                  <FormDescription>
                    We&apos;ll use this to contact you. We will not share your
                    email with anyone else.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormDescription>
                    Must be at least 8 characters long.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormDescription>
                    Please confirm your password.
                  </FormDescription>
                  {error instanceof Error && (
                    <FormDescription className="text-red-500">
                      {error?.message}
                    </FormDescription>
                  )}
                  {GoogleError instanceof Error && (
                    <FormDescription className="text-red-500">
                      {GoogleError?.message}
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FieldGroup>
              <Field>
                <Button
                  disabled={isLoadingLocal || isLoadingGoogle}
                  type="submit"
                >
                  {isLoadingLocal && <Spinner />} Create Account
                </Button>
                <Button
                  onClick={onGoogleClickHandler}
                  disabled={isLoadingGoogle || isLoadingLocal}
                  variant="outline"
                  type="button"
                >
                  {isLoadingGoogle && <Spinner />}
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
