import SideBar from "@/component/side-bar";
import "./root.scss"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <SideBar/>
          {children}
        </>
    );
  }
  