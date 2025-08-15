import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-3xl mx-auto flex flex-col min-h-screen p-4">
          <div className="flex-grow relative">
            {children}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
