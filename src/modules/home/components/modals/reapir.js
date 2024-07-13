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

export default function Repair({}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Button
        onClick={open}
        className="bg-white text-sm text-black px-3 py-2 rounded-md"
      >
        Start a repair
      </Button>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-[100] focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10  overflow-y-auto font-poppins bg-black/50 cursor-pointer">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
                className=" "
              >
                <DialogPanel className=" flex justify-center">
                  <div class="sm:w-[400px] px-[5%] w-full flex flex-col  gap-6  py-[6%] rounded-[16px] shadow bg-[#ffffff]">
                    <div className="flex items-start justify-between w-full">
                      <h3 className="text-xl  font-semibold">Start a Repair</h3>
                    </div>
                    <form>
                      <div>
                        <label className="text-xs font-medium">Name</label>
                        <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] ">
                          <input
                            type="text"
                            className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                            placeholder="Enter Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-xs font-medium">
                          Phone Number
                        </label>
                        <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] mt-1">
                          <input
                            type="text"
                            className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                            placeholder="Enter Your Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <Device/>
                      <div>
                        <label className="text-xs font-medium">Title</label>
                        <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] mt-1">
                          <input
                            type="text"
                            className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                            placeholder="Enter party description"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-xs font-medium">Body</label>
                        <div className="w-full  bg-[#CFCFCF] rounded-[5px] mt-1">
                          <textarea
                            rows="4"
                            cols="50"
                            className="text-[#4F4F4F] w-full  outline-none bg-transparent placeholder:text-xs p-3 resize-none"
                            placeholder="Enter your body text"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className={`mt-6 bg-black w-full h-[40px] text-[13px] text-white font-medium rounded-[30px] ${
                          isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading ? "Start a repair..." : "Start a repaie"}
                      </button>
                    </form>
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
