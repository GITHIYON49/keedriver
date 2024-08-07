"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { updateUser } from "./action";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

const ProfileForm = ({user}:{user:any}) => {
  const { register, handleSubmit } = useForm(
    {
      defaultValues: {
        first_name: user.first_name,
        last_name: user.last_name,
        email:user.email,
        country:user.country,
      },
 // will get updated once values returns
    }
  ); 

  const onSubmit = async (data: any) => {
   await updateUser (data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full lg:w-full mx-5">
  <div className="flex flex-col md:flex-row md:space-x-4 ">
    <label className="w-full md:w-full">
      <span className="block mb-1 ">First Name:</span>
      <Input {...register("first_name")} className="w-full border rounded-md px-4 py-2" />
    </label>
    </div>

<div className="flex flex-col md:flex-row md:space-x-4">
    <label className="w-full md:w-full">
      <span className="block mb-1">Last Name:</span>
      <Input {...register("last_name")} className="w-full border rounded-md px-4 py-2" />
    </label>
  </div>

    <div className="flex flex-col md:flex-row md:space-x-4">
    <label className="w-full md:w-full">
      <span className="block mb-1">Email-id:</span>
      <Input {...register("email")} className="w-full border rounded-md px-4 py-2" />
    </label>
  </div>

  <div className="flex flex-col md:flex-row md:space-x-4">
    <label className="w-full md:w-full">
      <span className="block mb-1">Country:</span>
      <Input {...register("country")} className="w-full border rounded-md px-4 py-2" />
    </label>
  </div>

  {/* <Link
              href=""
              className={buttonVariants({
              })}
            >
              Update
            </Link> */}

  <Button type="submit">
    Update
  </Button>
</form>

  );
}

export default ProfileForm;