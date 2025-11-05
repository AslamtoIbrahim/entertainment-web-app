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
import Button from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Spinner } from "@/shared/components/ui/spinner";
import { cn } from "@/shared/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/use-login-auth";
import { useLoginWithGoogle } from "../hooks/use-login-with-google-auth";
import { ZodLogin, type Login } from "../utils/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const { error, submit, pending: isLoadingLocal } = useLogin();
  const {
    error: GoogleError,
    pending: isLoadingGoogle,
    googleSubmit,
  } = useLoginWithGoogle();
  const form = useForm({
    resolver: zodResolver(ZodLogin),
  });

  const onSubmit = async (data: Login) => {
    const user = await submit(data);
    if (user) {
      navigate("/");
    }
  };

  const onGoogleClickHandler = () => {
    googleSubmit();
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="exmaple@gmail.ocm" {...field} />
                    </FormControl>
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
                    <FormMessage />
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
                  </FormItem>
                )}
              />
              <FieldGroup>
                <Field>
                  <Button
                    disabled={isLoadingGoogle || isLoadingLocal}
                    type="submit"
                  >
                    {isLoadingLocal && <Spinner />}
                    Login
                  </Button>
                  <Button
                    onClick={onGoogleClickHandler}
                    disabled={isLoadingGoogle || isLoadingLocal}
                    variant="outline"
                    type="button"
                  >
                    {isLoadingGoogle && <Spinner />}
                    Login with Google
                  </Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link to="/signup">Sign up</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
