import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { useState } from "react";
import Device from "../dropdowns/repairs";
import { IoClose } from "react-icons/io5";
import { useAddPhoneMutation } from "../../../../store/reducers/phonerepair";
import Axios from "axios";
export default function Repair({}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-[100] focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10  overflow-y-auto font-poppins bg-black/50 cursor-pointer">
            <div className="flex min-h-full items-center justify-center">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
                className=" "
              >
                <DialogPanel className=" flex justify-center sm:px-0  px-[4%]">
                  <div class="sm:w-[400px] px-[5%] w-full flex flex-col  gap-6  py-[6%] rounded-[16px] shadow bg-[#ffffff]">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-xl  font-semibold">Succesful</h3>
                      <IoClose onClick={close} className="text-[28px]" />
                    </div>
                    vvfvfvv
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
