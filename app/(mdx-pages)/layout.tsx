export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* MDX Content with top padding for main header */}
      <main className="w-full pb-16">
        <article className="prose-mdx">{children}</article>
      </main>
    </div>
  );
}
