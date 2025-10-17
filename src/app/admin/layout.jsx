import AdminSide from "@/components/block/adminSide";
export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50">
      <div className="fixed left-0 w-60 h-full">
        <AdminSide></AdminSide>
      </div>
      <div className="ml-64">{children}</div>
    </div>
  );
}
