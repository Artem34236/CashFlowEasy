import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1920px] mx-auto w-full">{children}</div>
      </body>
    </html>
  );
}
