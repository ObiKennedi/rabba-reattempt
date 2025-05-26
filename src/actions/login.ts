"use server";
import * as z from "zod"
import { LoginSchem } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchem>) => {
  console.log(values);
  const validateFields = LoginSchem.safeParse(values);
  if (!validateFields.success) {
    return {error: "Invalid fields"}
  } 

  return {success: "Login successful"}
};
