"use server";
import * as z from "zod"
import { RegisterSchema } from "@/schemas";
import { db } from "@/utils/db";
import bcrypt from "bcrypt"
import { getUserByEmail } from "@/data/user";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
  //console.log(values);
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return {error: "Invalid fields"}
  };

  const {email, password, name} = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser){
    return {error: "Email already in use"}
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    }
  })

  return {success: "User created"}; 
};
