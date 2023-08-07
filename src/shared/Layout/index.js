import Navbar from "@/components/Navbar";
import Modal from "@/modals";

export default function Layout({ children }) {
  return (
    <LayoutContent>
      <Modal />
      <Navbar />
      {children}
    </LayoutContent>
  );
}

const LayoutContent = ({ children }) => {
  return (
    <div className="w-full h-full min-h-full flex flex-col items-center justify-start">
      {children}
    </div>
  );
};
