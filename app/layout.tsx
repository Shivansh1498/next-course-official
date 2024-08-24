import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export const metadata = {
  title: "NextJS Course",
  description: "Learning next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
