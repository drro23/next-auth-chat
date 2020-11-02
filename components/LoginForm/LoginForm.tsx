import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, Lock } from "@material-ui/icons";
import { useRouter } from 'next/router';
import { auth } from '../../config/firebase';

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email!").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});

export default function LoginForm() {
  const { register, errors, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  async function login(data) {
    try {
      let res = await  auth.signInWithEmailAndPassword(data.email, data.password);
      console.log(res);
    } catch (e) {
      console.log(e)
    }
  }

  // router.push('/profile')
  
  const onSubmit = (data: IFormInput) => login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex mb-2 border border-gray-400 dark:border-gray-400 focus-within:border-gray-600 dark-focus-within:border-white rounded p-2">
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
      <div className="flex mb-2 border border-gray-400 dark:border-gray-400 focus-within:border-gray-600 dark-focus-within:border-white rounded p-2">
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
      <input className="rounded bg-blue-400 hover:bg-blue-600 cursor-pointer focus:outline-none text-white py-2" type="submit" value="Login" />
    </form>
  );
}
