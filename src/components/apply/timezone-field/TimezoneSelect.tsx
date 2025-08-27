"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

const timezones = [
  "UTC-12:00",
  "UTC-11:00",
  "UTC-10:00",
  "UTC-09:00",
  "UTC-08:00",
  "UTC-07:00",
  "UTC-06:00",
  "UTC-05:00",
  "UTC-04:00",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC+00:00 (GMT)",
  "UTC+01:00",
  "UTC+02:00",
  "UTC+03:00",
  "UTC+03:30",
  "UTC+04:00",
  "UTC+04:30",
  "UTC+05:00",
  "UTC+05:30 (IST – Kolkata)",
  "UTC+05:45",
  "UTC+06:00",
  "UTC+06:30",
  "UTC+07:00",
  "UTC+08:00",
  "UTC+09:00",
  "UTC+09:30",
  "UTC+10:00",
  "UTC+11:00",
  "UTC+12:00",
  "UTC+13:00",
  "UTC+14:00",
];
type TimezoneSelectProps = {
  value?: string; // RHF may pass undefined initially
  onChange: (value: string) => void; // Radix passes selected value
};
export function TimezoneSelect({ value, onChange }: TimezoneSelectProps) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className="w-full text-p2 font-open-sans font-normal px-4 py-2 bg-transparent rounded-[999px] border border-[rgba(255,255,255,0.3)] focus:outline-none flex items-center justify-between"
        aria-label="Timezone"
      >
        <Select.Value placeholder="Select Time Zone" className="" />
        <Select.Icon>
          <ChevronDown className="h-4 w-4 text-white" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="w-full  relative mt-2 rounded-lg border border-[rgba(255,255,255,0.3)] bg-[#0E0E0E] text-white shadow-lg"
          position="popper"
          sideOffset={4}
        >
          <Select.ScrollUpButton className="p-1 text-xs text-center">↑</Select.ScrollUpButton>
          <Select.Viewport className="w-full p-1 max-h-[300px] overflow-auto">
            {timezones.map((tz) => (
              <Select.Item
                key={tz}
                value={tz}
                className={cn(
                  "relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm outline-none hover:bg-[#1F1F1F] data-[state=checked]:bg-[#333]"
                )}
              >
                <Select.ItemText>{tz}</Select.ItemText>
                <Select.ItemIndicator className="w-full absolute right-3">
                  <Check className="h-4 w-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="p-1 text-xs text-center">↓</Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
