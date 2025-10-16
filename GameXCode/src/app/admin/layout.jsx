import AdminSide from "@/components/block/adminSide";
export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="fixed left-0 w-60 h-full">
        <AdminSide></AdminSide>
      </div>
      <div className="ml-64">{children}</div>
    </div>
  );
}
