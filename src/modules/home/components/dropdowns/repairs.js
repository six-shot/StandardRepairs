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
        "MacBook Pro 14-inch (2021 M1 Pro/M1 Max)",
       
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
