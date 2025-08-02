import Footer from "../../components/Footer";

export default function MatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-3xl mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
} 