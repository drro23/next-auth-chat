import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhotoCamera } from "@material-ui/icons";

interface IChangeInfoForm {
  name: string;
  bio: string;
  phone: string;
  email: string;
  password: string;
}

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string(),
  bio: yup.string(),
  phone: yup.string().matches(phoneRegex, {message: "Invalid Phone Number!", excludeEmptyString: true}),
  email: yup.string().email("Invalid email!"),
  password: yup.string(),
});

export default function ChangeInfoForm() {
  const { register, errors, handleSubmit } = useForm<IChangeInfoForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IChangeInfoForm) => console.log(data)

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center">
        <div className="relative w-12 h-12 flex items-center justify-center mt-2">
          <img
            src="/assets/images/portrait_placeholder.png"
            className="rounded-md"
            alt="portrait profile"
            width="48"
            height="40"
          />
          <PhotoCamera className="absolute left-0 right-0 mx-auto text-white hover:opacity-50" />
        </div>
        <p className="dark:text-white uppercase text-sm ml-4">Change Photo</p>
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="dark:text-white">
          Name
        </label>
        <input
          className="outline-none flex-1 bg-transparent block border-black dark:text-white border dark:border-gray-300 rounded-lg py-1 px-4"
          name="name"
          autoComplete="name"
          placeholder="Enter your name"
          ref={register}
        />
        <p className="mb-2 pl-2 text-sm text-red-600">{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="bio" className="dark:text-white">
          Bio
        </label>
        <input
          className="outline-none flex-1 bg-transparent block border-black dark:text-white border dark:border-gray-300 rounded-lg py-1 px-4"
          name="bio"
          placeholder="Enter your bio..."
          ref={register}
        />
        <p className="mb-2 pl-2 text-sm text-red-600">{errors.bio?.message}</p>
      </div>
      <div>
        <label htmlFor="phone" className="dark:text-white">
          Phone
        </label>
        <input
          className="outline-none flex-1 bg-transparent block border-black dark:text-white border dark:border-gray-300 rounded-lg py-1 px-4"
          name="phone"
          type="tel"
          placeholder="Enter your phone..."
          ref={register}
        />
        <p className="mb-2 pl-2 text-sm text-red-600">
          {errors.phone?.message}
        </p>
      </div>
      <div>
        <label htmlFor="email" className="dark:text-white">
          Email
        </label>
        <input
          className="outline-none flex-1 bg-transparent block border-black dark:text-white border dark:border-gray-300 rounded-lg py-1 px-4"
          name="email"
          type="email"
          placeholder="Enter your email..."
          ref={register}
        />
        <p className="mb-2 pl-2 text-sm text-red-600">
          {errors.email?.message}
        </p>
      </div>
      <div>
        <label htmlFor="password" className="dark:text-white">
          Password
        </label>
        <input
          className="outline-none flex-1 bg-transparent block border-black dark:text-white border dark:border-gray-300 rounded-lg py-1 px-4"
          name="password"
          type="password"
          placeholder="Enter your password..."
          ref={register}
        />
        <p className="mb-2 pl-2 text-sm text-red-600">
          {errors.password?.message}
        </p>
      </div>
      <input
        className="rounded bg-blue-400 hover:bg-blue-600 cursor-pointer focus:outline-none text-white py-1 px-4"
        type="submit"
        value="Save"
      />
    </form>
  );
}
