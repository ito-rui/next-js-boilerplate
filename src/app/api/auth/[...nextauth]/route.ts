import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		DiscordProvider({
			clientId: process.env.GITHUB_CLIENT_ID ?? '',
			clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
		}),
	],
});

export { handler as GET, handler as POST };
