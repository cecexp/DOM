export const metadata = {
    title: 'DOM Prototype',
    description: 'Understanding the DOM structure with Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    );
}
