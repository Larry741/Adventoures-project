import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { connectDatabase } from "../../../lib/db";
import { verifyPasword } from "../../../lib/passwordEncrypt";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectDatabase();

        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("invalid username or password");
        }

        const passwordIsValid = await verifyPasword(
          credentials.password,
          user.password
        );

        if (!passwordIsValid) {
          client.close();
          throw new Error("invalid username or password");
        }

        client.close();
        return { email: user.email };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRETS,
    }),
  ],
  jwt: {
    encryption: true,
  },
  // callbacks: {
  //   async jwt(token, account) {
  //     if (account?.accessToken) {
  //       token.accessToken = account.accessToken;
  //     }
  //     return token;
  //   },
  //   redirect: async (url, baseUrl) => {
  //     if (url ===  '/profile') {
  //       return Promise.resolve('/');
  //     }
  //     return Promise.resolve("/");
  //   }
  // }
});
