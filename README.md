This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

À CAU KENH KHOI TAO DU AN : npx create-next-app@latest mobile-app-admin --typescript --tailwind --eslint 3 CAI DAU TIEN CHON YES CAI CUOI CHỌN NO

cấu hình tailwind như trong shadc 

sau khi load xong dự án : npm install -D tailwindcss postcss autoprefixer chọn slate rồi chọn ----legacy-peer-deps(neu ko ho tro react 19)

tải supabase:
npm install @supabase/supabase-js @supabase/ssr
tài liệu : https://supabase.com/docs/guides/auth/server-side/nextjs

kết nối vs supabase: làm theo hướng dẫn ở trong tài liệu ở trên

det me phai tai supabase CLI trc moi sd duoc supabase login/logout
 roi go cai nay
 
 supabase gen types typescript --project-id dgxwulsaskeapldevwjp > src/supabase/types.ts

 form,button,input(trong shadc nhe) va cai nay nua npm i @hookform/resolvers react-hook-form zod

 ko dang nhap duoc o admin (key ở đây là đọc tài liệu hmu hmu ) : https://supabase.com/docs/guides/auth/server-side/nextjs

theme,sonner shadc: 

 Từ Next.js 15.3 trở đi, hàm cookies() và headers() đã chuyển từ đồng bộ sang bất đồng bộ (async).

 lỗi ko create đc category là do uid trong supabase

 npx supabase gen types typescript --project-id dgxwulsaskeapldevwjp --schema public > src/supabase/types.ts cập nhật type

 supabase ui bên kia là version 2.22.12

 npx supabase gen types typescript --project-id dgxwulsaskeapldevwjp --schema public > src/types/database.types.ts