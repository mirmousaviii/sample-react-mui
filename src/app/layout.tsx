import type { Metadata } from "next";
import {ReactNode} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, CssBaseline} from "@mui/material";
import Header from "@/app/header";
import Footer from "@/app/footer";


export const metadata: Metadata = {
  title: 'Sample Company',
  description: 'A simple project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CssBaseline />
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
          <Header/>

          <Box sx={{p: 3}}>
            {children}
          </Box>

          <Footer/>
        </Box>
      </body>
    </html>
  );
}
