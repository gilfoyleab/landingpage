import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ParticleMesh } from "@/components/ParticleMesh";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AuditPal | Decentralized AI Security",
    description: "The gold standard for AI smart contract auditing.",
    icons: {
        icon: "/favicon_final.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${instrumentSans.className} bg-black text-white antialiased overflow-x-hidden`} suppressHydrationWarning>
                <ParticleMesh />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
