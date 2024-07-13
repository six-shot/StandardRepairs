import { useState } from "react";
import { Field, Label, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export default function Device() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");

 const options = [
   {
     label: "Macbook",
     value: "Macbook",
     models: [
       "MacBook Air (2020 M1)",
       "MacBook Pro 14-inch (2021 M1 Pro/M1 Max)",
       "MacBook Pro 16-inch (2021 M1 Pro/M1 Max)",
       "MacBook Air (2019, Retina display)",
       "MacBook Pro 13-inch (2020, M1)",
       "MacBook Pro 16-inch (2019)",
       "MacBook Air (2018, Retina display)",
       "MacBook Pro 15-inch (2019)",
       "MacBook (2017, Retina display)",
       "MacBook Pro 13-inch (2017)",
     ],
   },
   {
     label: "HP",
     value: "HP",
     models: [
       "HP Spectre x360",
       "HP Envy 13",
       "HP Elite Dragonfly",
       "HP Pavilion 15",
       "HP Omen 15",
       "HP ProBook 450 G8",
       "HP Chromebook x2",
       "HP ZBook Studio G7",
       "HP EliteBook 850 G7",
       "HP ENVY x360 15",
     ],
   },
   {
     label: "Samsung",
     value: "Samsung",
     models: [
       "Samsung Galaxy Book Pro 360",
       "Samsung Galaxy Book Flex",
       "Samsung Galaxy Book S",
       "Samsung Notebook 9 Pro",
       "Samsung Chromebook Plus",
       "Samsung Notebook Odyssey",
       "Samsung Galaxy Book Ion",
       "Samsung Galaxy Chromebook",
       "Samsung ATIV Book 9",
       "Samsung Chromebook 4",
     ],
   },
   {
     label: "Asus",
     value: "Asus",
     models: [
       "Asus ZenBook 13",
       "Asus ROG Zephyrus G14",
       "Asus VivoBook S15",
       "Asus TUF Gaming A15",
       "Asus ExpertBook B9",
       "Asus Chromebook Flip",
       "Asus ProArt StudioBook",
       "Asus ROG Strix Scar 15",
       "Asus ZenBook Pro Duo",
       "Asus VivoBook Flip 14",
     ],
   },
   {
     label: "Lenovo",
     value: "Lenovo",
     models: [
       "Lenovo ThinkPad X1 Carbon",
       "Lenovo Yoga 9i",
       "Lenovo Legion 5",
       "Lenovo IdeaPad Flex 5",
       "Lenovo ThinkBook 14s Yoga",
       "Lenovo Chromebook Duet",
       "Lenovo ThinkPad P1",
       "Lenovo ThinkPad L14",
       "Lenovo IdeaPad 3",
       "Lenovo Legion 7i",
     ],
   },
   {
     label: "Dell",
     value: "Dell",
     models: [
       "Dell XPS 13",
       "Dell Inspiron 15",
       "Dell Latitude 7420",
       "Dell Alienware m15",
       "Dell G5 15",
       "Dell Precision 5550",
       "Dell Vostro 14 5000",
       "Dell XPS 15",
       "Dell Latitude 9510",
       "Dell Inspiron 14 5000",
     ],
   },
   {
     label: "Acer",
     value: "Acer",
     models: [
       "Acer Aspire 5",
       "Acer Swift 3",
       "Acer Predator Helios 300",
       "Acer Spin 5",
       "Acer Chromebook Spin 713",
       "Acer Nitro 5",
       "Acer ConceptD 7",
       "Acer Enduro N3",
       "Acer TravelMate P6",
       "Acer Aspire 7",
     ],
   },
   {
     label: "Microsoft",
     value: "Microsoft",
     models: [
       "Microsoft Surface Laptop 4",
       "Microsoft Surface Pro 7",
       "Microsoft Surface Book 3",
       "Microsoft Surface Go 2",
       "Microsoft Surface Laptop Go",
       "Microsoft Surface Pro X",
       "Microsoft Surface Laptop 3",
       "Microsoft Surface Book 2",
       "Microsoft Surface Go",
       "Microsoft Surface Pro 6",
     ],
   },
   {
     label: "Razer",
     value: "Razer",
     models: [
       "Razer Blade 15",
       "Razer Blade Stealth 13",
       "Razer Blade Pro 17",
       "Razer Book 13",
       "Razer Blade 14",
       "Razer Blade 15 Studio Edition",
       "Razer Blade 13",
       "Razer Blade Stealth 12.5",
       "Razer Blade Pro 15",
       "Razer Blade 14 QHD",
     ],
   },
   {
     label: "MSI",
     value: "MSI",
     models: [
       "MSI GS66 Stealth",
       "MSI GE75 Raider",
       "MSI Prestige 14",
       "MSI Modern 14",
       "MSI Creator 15",
       "MSI GF65 Thin",
       "MSI GL65 Leopard",
       "MSI Alpha 15",
       "MSI WS66",
       "MSI Summit E15",
     ],
   },
   {
     label: "Mobile",
     value: "Mobile",
     models: [
       "iPhone 13",
       "iPhone 13 Pro",
       "iPhone 13 Pro Max",
       "iPhone 12",
       "iPhone 12 Pro",
       "iPhone 12 Pro Max",
       "Samsung Galaxy S21",
       "Samsung Galaxy S21+",
       "Samsung Galaxy S21 Ultra",
       "Samsung Galaxy Note 20",
       "Samsung Galaxy Note 20 Ultra",
       "Google Pixel 6",
       "Google Pixel 6 Pro",
       "OnePlus 9",
       "OnePlus 9 Pro",
       "OnePlus 8T",
       "Xiaomi Mi 11",
       "Xiaomi Mi 11 Ultra",
       "Huawei P40",
       "Huawei P40 Pro",
       "Sony Xperia 1 III",
       "Sony Xperia 5 II",
       "LG Wing",
       "LG Velvet",
       "Motorola Edge Plus",
       "Motorola Moto G Power",
       "Nokia 8.3 5G",
       "Asus ROG Phone 5",
       "Realme GT",
       "Oppo Find X3 Pro",
     ],
   },
 ];


  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedLga(""); // Reset LGA selection when state changes
  };

  const handleLgaChange = (e) => {
    setSelectedLga(e.target.value);
  };

  const stateOptions = options.map((state) => (
    <option key={state.value} value={state.value}>
      {state.label}
    </option>
  ));

  const lgaOptions =
    selectedState &&
    options
      .find((state) => state.value === selectedState)
      .models.map((lga) => (
        <option key={lga} value={lga}>
          {lga}
        </option>
      ));

  return (
    <div className="w-full max-w-[400px] mt-4">
      <Field>
        <label className="text-xs font-medium">Select Device</label>
        <div className="relative">
          <Select
            className={clsx(
              "block w-full appearance-none rounded-lg border-none bg-[#CFCFCF] h-[40px] px-3 text-xs text-[#4F4F4F]",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="" disabled>
              Select Device
            </option>
            {stateOptions}
          </Select>
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
            aria-hidden="true"
          />
        </div>
      </Field>
      {selectedState && (
        <Field className="mt-4">
          <label className="text-xs font-medium ">Select Model</label>
          <div className="relative ">
            <Select
              className={clsx(
                "block w-full appearance-none rounded-lg border-none bg-[#CFCFCF] h-[40px] px-3 text-xs text-[#4F4F4F]",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              value={selectedLga}
              onChange={handleLgaChange}
            >
              <option value="" disabled>
                Select Model
              </option>
              {lgaOptions}
            </Select>
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
              aria-hidden="true"
            />
          </div>
        </Field>
      )}
    </div>
  );
}
