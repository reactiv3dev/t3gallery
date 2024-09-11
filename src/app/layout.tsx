import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "./_components/top-nav";
import Error from "./error"; 

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

 

export default function RootLayout({
  children,
  modal,
}: Readonly<{ 
  children: React.ReactNode,
  modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>

        <body className="flex w-full h-full flex-col">
       
          <TopNav/>
          {children}
          {modal}
          <div id="modal-root"></div> 
        </body>
      </html>
    </ClerkProvider>
    
  );
}
