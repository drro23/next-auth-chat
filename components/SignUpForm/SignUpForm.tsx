import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, Lock } from "@material-ui/icons";
import AuthService from "../../services/userAuth";
import { useRouter } from "next/router";

export interface ISignUpFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email!").required("Email is required!"),
  password: yup.string().min(6, "Password must be at least 6 characters!").required("Password is required!"),
});

export default function SignUpForm() {
  const router = useRouter();
  const authService = new AuthService();
  const { register, errors, handleSubmit } = useForm<ISignUpFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ISignUpFormInput) => {
    authService.signUp(data);
    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="border-gray-400 dark:border-gray-400 focus-within:border-gray-600 dark-focus-within:border-gray-100 flex mb-2 border rounded p-2">
        <Mail className="text-gray-400 dark:text-gray-100" />
        <input
          className="ml-2 outline-none flex-1 bg-transparent dark:text-white"
          type="email"
          name="email"
          autoComplete="email"
          ref={register}
        />
      </div>
      <p className="mb-2 pl-2 text-sm text-red-600">{errors.email?.message}</p>
      <div className="flex mb-2 border border-gray-400 dark:border-gray-400 focus-within:border-gray-600 dark-focus-within:border-gray-100 rounded p-2">
        <Lock className="text-gray-400 dark:text-gray-100"/>
        <input
          className="ml-2 outline-none flex-1 bg-transparent dark:text-white"
          type="password"
          name="password"
          autoComplete="new-password"
          ref={register}
        />
      </div>
      <p className="mb-2 pl-2 text-sm text-red-600">{errors.password?.message}</p>
      <input className="rounded bg-blue-600 hover:bg-blue-500 cursor-pointer focus:outline-none text-white py-2" type="submit" value="Sign Up"/>
    </form>
  );
}
