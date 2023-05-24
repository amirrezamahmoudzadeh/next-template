import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Input
} from "@chakra-ui/react"
import React from "react"

import CloseButton from "./CloseButton"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const SearchDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody px={"10vw"} py={[10 ,10,20]} display={"flex"}>
          <Input
          _placeholder={{color:"#232e3a"}}
            placeholder="Type what you're looking for"
            variant={"flushed"}
            _focusVisible={{ borderBottomColor: "#232e3a" }}
            borderBottomWidth={2}
            borderBottomColor={"#232e3a"}
            className="pb-2 pr-10 !text-[16px] md:!text-[28px]"
          />
          <CloseButton
            isOpen={isOpen}
            onClick={() => onClose()}
            className="-translate-y-2 translate-x-[-2vw] cursor-pointer scale-50 md:scale-100 md:-translate-y-4"
            bgColor="rgba(0,0,0,.1)"
            lineColor="#232e3a"
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default SearchDrawer
