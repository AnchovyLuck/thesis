import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compareSync } from 'bcryptjs'
import db from './db'
// import { UserRole } from '@prisma/client'
export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jb@gmail.com' },
        password: { label: 'Mật khẩu', type: 'password' }
      },
      async authorize (credentials) {
        try {
          console.log('Authorize function recieved credentials:', credentials)
          // Check if user credentials are they are Not empty
          if (!credentials?.email || !credentials?.password) {
            throw { error: 'No Inputs Found', status: 401 }
          }
          console.log('Passed Check 1 ')
          //Check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
            include: {
              userProfile: true
            }
          })
          if (!existingUser) {
            console.log('No user found')
            throw { error: 'No user found', status: 401 }
          }

          console.log('Passed Check 2')

          //Check if Password is correct
          const passwordMatch = await compareSync(
            credentials.password,
            existingUser.password
          )
          if (!passwordMatch) {
            console.log('Password incorrect')
            throw { error: 'Password Incorrect', status: 401 }
          }
          console.log('Pass 3 Checked')
          const user = {
            id: existingUser.id,
            userName: existingUser.userName,
            email: existingUser.email,
            role: existingUser.role,
            image: existingUser.image,
            emailVerified: existingUser.emailVerified,
            userProfile: existingUser.userProfile
          }
          //
          console.log('User Compiled')
          return user
        } catch (error) {
          console.log('aLL Failed')
          console.log(error)
          throw { error: 'Something went wrong', status: 401 }
        }
      }
    })
  ],
  callbacks: {
    async session ({ session, token }) {
      if (token) {
        console.log(`token:${token} in session`)
        session.user.id = token.id
        session.user.userName = token.userName
        session.user.email = token.email
        session.user.role = token.role
        session.user.image = token.picture
        session.user.emailVerified = token.emailVerified
        session.user.userProfile = token.userProfile
      }
      console.log(`session:${session.user}`)
      return session
    },
    async jwt ({ token, user }) {
      if (user) {
        token.id = user.id
        token.userName = user.userName
        token.email = user.email
        token.role = user.role
        token.image = user.picture
        token.emailVerified = user.emailVerified
        token.userProfile = user.userProfile
      }
      console.log(`token:${token}`)
      return token
    }
  }
}
