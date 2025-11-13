export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* MDX Content with top padding for main header */}
      <main className="max-w-4xl mx-auto px-6 pt-[100px] pb-16">
        <article className="">{children}</article>
      </main>
    </div>
  );
}
