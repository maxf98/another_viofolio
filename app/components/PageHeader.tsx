interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mt-8 mb-24 px-2 text-left">
      <h1 className="font-semibold">{title}</h1>
      {description && (
        <p className="text-white/80 mt-4" style={{ fontSize: "1.15rem" }}>
          {description}
        </p>
      )}
    </div>
  );
}
