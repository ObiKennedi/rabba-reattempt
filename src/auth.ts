import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./utils/db";

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        /*async signIn({user}){
            const existingUser = await getUserById(user.id)

            if (!existingUser || !existingUser.emailVerified){
                return false
            }

            return true
        },*/

        async session({token, session}){
            if (token.sub && session.user){
                session.user.id = token.sub
            }
            
            return session
        },
        async jwt({token}){
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            return token 
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig
})