import { signIn } from "@/auth";

export type SignInProps = {};

export default function SignIn(props: SignInProps) {
  const {} = props;
  return (
    <div>
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
