## About the project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It is a simple video platform that allows users to upload videos, watch them, and comment on them.

Check it out here - https://s-code-challenge-phi.vercel.app/ but please be aware that a CORS violation is preventing video and comment submission. I think this is because api POST requests are no longer coming from localhost:3000.

## Tech Stack

- Cursor
- Next.js
- Galileo AI
- Tailwind CSS
- TypeScript
- React
- Node.js
- Vercel

## User Testing
1. User can view all videos on the home page.
2. User can watch a video at /watch/3HFR2MykfnsHlDDb8hvx.
3. User can submit new video at /create.
4. User can submit new comment at /watch/3HFR2MykfnsHlDDb8hvx.

## Possible Next Steps
functionality
- env for api endpoints and user id
- authentication
- trigger a refetch of comments after user submits a comment
- up vote / down vote of comments
- better validation for video and comments form
- tag videos and be ableto filter by tag
- sort videos by date added

styling
- apply a more cohesive design
- add more nuanced styling for different screensizes

code quality
- apply more user testing
- add unit tests

## My Process
I really enjoyed working on this challenge! I used Cursor for the first time on this challenge as well as Galileo.ai for generating mockups. I primarily focused on performance and scalabilty. For performance I took advantage of Next.js's dynamic rendering and static generation. Scalability-wise I tried my best to keep a clear separation between my api logic and UI views, set up an intuitive folder structure, and define types and interfaces whenever possible for components and functions. If I had more time I'd try to focus on some of the possible next steps I listed above.

## Design Steps

1. Gather requirements and create mockups (used Galileo.ai here)
   
![Screenshot 2025-03-24 at 9 16 46 PM](https://github.com/user-attachments/assets/3739d77d-c652-42f4-866b-dd44083ce621)




2. Map out UI Skeleton
   
![IMG_5304](https://github.com/user-attachments/assets/422b9d24-b7c7-474f-808a-ed0dce383389)



3. Implement core functionality + API infrustructure, build UI skeleton, add remaining styling.
   
![Screenshot 2025-03-24 at 9 07 34 PM](https://github.com/user-attachments/assets/8cce8e27-2892-458f-8f23-5c938de4ec43)


![Screenshot 2025-03-24 at 9 07 51 PM](https://github.com/user-attachments/assets/681129d2-cdde-418f-957d-bd718a713e3e)



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

