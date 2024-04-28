const secret = process.env.AUTH_SECRET;

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl?.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        // console.log(request.nextUrl);
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    }
  },
  session: {
    jwt: true, // Enable JWT for session management
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: secret, // Set the secret for JWT
    encryption: true,
  },
  trustHost: true
};