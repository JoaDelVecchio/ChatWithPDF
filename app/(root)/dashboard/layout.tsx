import { ClerkLoaded } from "@clerk/nextjs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkLoaded>
      <div>
        {/* HEADER */}
        <h2>Layout</h2>
        {children}
      </div>
    </ClerkLoaded>
  );
};

export default Layout;
