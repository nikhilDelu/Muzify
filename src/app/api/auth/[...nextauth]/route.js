// import { prismaClient } from "@/lib/db";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   secret: process.env.NEXTAUTH_SECRET || "secret",
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "your-google-client-id",
//       clientSecret:
//         process.env.GOOGLE_CLIENT_SECRET ?? "your-google-client-secret",
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       if (!user || !user.email) {
//         return false;
//       }

//       try {
//         // Check if user already exists in the database
//         let existingUser = await prismaClient.user.findUnique({
//           where: { email: user.email },
//         });

//         if (!existingUser) {
//           // If the user does not exist, create a new user in the database
//           existingUser = await prismaClient.user.create({
//             data: {
//               email: user.email,
//               provider: "Google",
//             },
//           });
//         }

//         // Attach the database user ID to the user object
//         user.id = existingUser.id;
//         return true;
//       } catch (error) {
//         console.error("Error during signIn callback:", error);
//         return false;
//       }
//     },
//     async jwt({ token, user }) {
//       // Persist the user's database ID to the token
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // Make the user's database ID available in the session
//       if (token?.id) {
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
