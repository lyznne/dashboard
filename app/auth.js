import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import { authConfig } from "./authconfig";
import bcrypt from "bcrypt";

const login = async (credentials) => {


  try {
    await connectToDB();

    const user = await User.findOne({ username: new RegExp(`^${credentials.username}$`, 'i') });

    console.log("user", user);

    if (!user) {
      throw new Error("Wrong credentials!");
    }
    const isPasswordCorrect  = await bcrypt.compare(credentials.password, user.password);

    // if (user.password !== credentials.password) {
    //   throw new Error("Wrong credentials !");
    // }

    if (!isPasswordCorrect) {
        throw new Error("Wrong credentials !")
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failled to log in ");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.username = token.username;
        session.img = token.img;
      }
      return session;
    },
  },
});
