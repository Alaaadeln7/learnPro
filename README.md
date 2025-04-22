# LearnPro

LearnPro is a modern web application built with [Next.js](https://nextjs.org/) and [Prisma](https://www.prisma.io/) ORM. It’s designed to help users explore educational content in a fast and responsive interface.

## 🚀 Live Demo

Check out the live version here:  
👉 [https://learn-pro-ten.vercel.app/](https://learn-pro-ten.vercel.app/)

## 📦 Tech Stack

- **Frontend**: Next.js (React Framework)
- **Backend**: API Routes in Next.js
- **Database**: PostgreSQL (via Prisma ORM)
- **Deployment**: Vercel

## 🛠️ Features

- ⚡ Fast server-side rendering and optimized performance with Next.js
- 🗂️ ORM with Prisma for type-safe database access
- 🔒 Secure environment with `.env` support
- 🌐 Deployed on Vercel for scalability and speed

## 📄 Getting Started

To run the project locally:

### 1. Clone the repo
```bash
git clone https://github.com/alaaadeln7/learnPro.git
cd learnPro

npm install
# or
yarn

DATABASE_URL="your_postgresql_connection_string"

npx prisma generate

npx prisma migrate dev

npm run dev
# or
yarn dev

