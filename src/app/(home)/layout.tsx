import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1920px] mx-auto w-full">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
