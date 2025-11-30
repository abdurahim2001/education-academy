import "./globals.css";

export const metadata = {
    title: "AGAI Academy",
    description: "Online IT Academy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
