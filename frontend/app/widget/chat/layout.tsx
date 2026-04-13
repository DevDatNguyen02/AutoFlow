export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-transparent antialiased">
      {children}
    </div>
  );
}
