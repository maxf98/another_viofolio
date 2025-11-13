import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        className="text-4xl font-bold leading-tight mb-6 mt-8"
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-3xl font-semibold leading-snug mb-4 mt-8"
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-2xl font-semibold leading-snug mb-3 mt-6"
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className="text-xl font-semibold leading-snug mb-2 mt-4"
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p
        className="text-base leading-relaxed mb-4"
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="underline underline-offset-2 hover:no-underline"
        style={{ color: "var(--accent)" }}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
    li: ({ children }) => (
      <li style={{ color: "var(--foreground)" }}>{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 pl-4 mb-4 italic"
        style={{
          borderColor: "var(--accent)",
          color: "var(--muted-foreground)",
        }}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code
        className="px-2 py-1 rounded text-sm font-mono"
        style={{
          backgroundColor: "var(--muted)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        className="p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm"
        style={{
          backgroundColor: "var(--muted)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table
          className="w-full border-collapse"
          style={{ borderColor: "var(--border)" }}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th
        className="border px-4 py-2 text-left font-semibold"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--muted)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className="border px-4 py-2"
        style={{
          borderColor: "var(--border)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </td>
    ),
    hr: () => (
      <hr
        className="my-8 border-0 border-t"
        style={{ borderColor: "var(--border)" }}
      />
    ),
    ...components,
  };
}
