import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";



import { pageComponentProps } from "@/types/general";
import SearchDrawer from "@/components/SearchDrawer";



import Footer from "./Footer";
import MobileNav from "./MobileNav";
import TopNav from "./TopNav";
import { useDisclosure } from "@chakra-ui/react";


const Page: React.FC<pageComponentProps> = ({
  title,
  children,
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <div className="bg-[#232e3a]">
      {title && (
        <Head>
          <title>{title} | Userback</title>
        </Head>
      )}
      <SearchDrawer isOpen={isOpen} onClose={onClose} />
      <MobileNav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <motion.div
        // variants={variants}
        transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0] }}
        animate={{
          height: isMenuOpen ? "100vh" : "auto",
          scale: isMenuOpen ? 0.835 : 1,
          x: isMenuOpen ? "-73vw" : 0,
        }}
        className={`z-10 mx-auto flex min-h-screen flex-col overflow-hidden px-safe`}
      >
        <TopNav setIsMenuOpen={setIsMenuOpen} onOpen={onOpen} />
        <main className={`flex-1 ${className} pt-[80px]`}>{children}</main>
        <Footer />
      </motion.div>
    </div>
  )
}
export default Page