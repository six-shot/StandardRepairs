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
import Axios from 'axios'
export default function Repair({}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };


 const [name, setName] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [brand, setBrand] = useState("");
 const [model, setModel] = useState("");
 const [fault, setFault] = useState("");
 const [city, setCity] = useState("");
 const [addPhone] = useAddPhoneMutation();
 const [imageSelected, setImageSelected] = useState("");

 const [isLoading, setIsLoading] = useState(false);
 const handleSubmit = async (e) => {
   e.preventDefault();
   setIsLoading(true);
   try {
     const imageFormData = new FormData();
     imageFormData.append("file", imageSelected);
     imageFormData.append("upload_preset", "standard");
     const imageResponse = await Axios.post(
       "https://api.cloudinary.com/v1_1/dnhdh9rub/image/upload",
       imageFormData
     );
     const imageUrl = imageResponse.data.secure_url;

   

     
     await addPhone({
       name,
       phoneNumber,
       brand,
       model,
       fault,
       city,
       photoImage: imageUrl,
     }).unwrap();

     setName("");
     setPhoneNumber("");
     setBrand("");
     setModel("");
     setFault("");
     setCity("");
     setImageSelected("");
     
     close();
   } catch (err) {
     console.error("Failed to save the collection: ", err);
   }
   setIsLoading(false);
 };



  return (
    <>
      <Button
        onClick={open}
        className="sm:bg-white bg-black sm:text-sm text-xs text-white sm:text-black px-4  py-2.5 rounded-md"
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
                      <h3 className="text-xl  font-semibold">Start a Repair</h3>
                      <IoClose onClick={close} className="text-[28px]" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label className="text-xs font-medium">Name</label>
                        <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] ">
                          <input
                            type="text"
                            className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <Device
                        selectedBrand={brand}
                        setSelectedBrand={setBrand}
                        selectedModel={model}
                        setSelectedModel={setModel}
                      />
                      <div className="mt-4">
                        <label className="text-xs font-medium">
                          Device Model
                        </label>
                        <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] mt-1">
                          <input
                            type="text"
                            className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                            placeholder="Enter Your Device Model"
                            value={model}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="text-xs font-medium">
                          Device Fault
                        </label>
                        <div className="w-full  bg-[#CFCFCF] rounded-[5px] mt-1">
                          <textarea
                            rows="4"
                            cols="0"
                            className="text-[#4F4F4F]   outline-none bg-transparent placeholder:text-xs p-3 resize-none"
                            placeholder="Describe your device fault"
                            value={fault}
                            onChange={(e) => setFault(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-xs font-medium">
                          Upload Images
                        </label>
                        <div className="w-full h-[40px] flex justify-center items-center cursor-pointer bg-[#CFCFCF] rounded-[5px] mt-1">
                          <input
                            onChange={(event) => {
                              setImageSelected(event.target.files[0]);
                            }}
                            type="file"
                            id="formupload"
                            name="image"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-xs font-medium">City</label>
                        <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] mt-1">
                          <input
                            type="text"
                            className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                            placeholder="Enter Your City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
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
                        {isLoading ? "Start a repair..." : "Start a repair"}
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
