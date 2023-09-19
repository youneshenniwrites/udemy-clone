export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full bg-slate-600">{children}</div>;
}
