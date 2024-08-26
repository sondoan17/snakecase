"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React, { useState } from "react";
import NextImage from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/ui/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup } from "@headlessui/react";
import { COLOR, FINISH, MATERIAL, MODEL } from "@/validators/option-validator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, CheckIcon, ChevronDownIcon } from "lucide-react";
import { BASE_PRICE } from "@/config/products";

interface DesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  const [options, setOptions] = useState<{
    color: (typeof COLOR)[number];
    model: (typeof MODEL.options)[number];
    materials: (typeof MATERIAL.options)[number];
    finish: (typeof FINISH.options)[number];
    template: string;
  }>({
    color: COLOR[0],
    model: MODEL.options[0],
    materials: MATERIAL.options[0],
    finish: FINISH.options[0],
    template: MODEL.options[0].template,
  });
  return (
    <div className="relative mt-20 grid grid-cols-3 mb-20 pb-20">
      <div className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio
            ratio={896 / 1831}
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
          >
            <NextImage
              alt="phone img"
              src={options.template}
              className="pointer-events-none z-50 select-none"
              fill
            />
          </AspectRatio>
          <div className="absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] ",
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: imageDimensions.width / 4,
            height: imageDimensions.height / 4,
          }}
          className="absolute z-20 border-[3px] border-primary"
          // lockAspectRatio={true}
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <div className="relative w-full h-full">
            <NextImage
              alt="phone img"
              src={imageUrl}
              className="pointer-events-none"
              fill
            />
          </div>
        </Rnd>
      </div>
      <div className="h-[37.5rem] flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
          />
          <div className="px-8 pb-12 pt-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Customize your case
            </h2>
            <div className="w-full h-px bg-zinc-200 my-6" />
            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({ ...prev, color: val }));
                  }}
                >
                  <Label>Color: {options.color.label} </Label>
                  <div className="mt-3 flex items-center space-x-3">
                    {COLOR.map((color) => (
                      <RadioGroup.Option
                        key={color.label}
                        value={color}
                        className={({ active, checked }) =>
                          cn(
                            "relative -m-0.5 flex cursor-pointer rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                            { [`border-${color.tw}`]: active || checked }
                          )
                        }
                      >
                        <span
                          className={cn(
                            `bg-${color.tw}`,
                            "h-8 w-8 rounded-full border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>

                <div className="relative flex flex-col gap-3 w-full">
                  <Label>Model</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {options.model.label}
                        <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODEL.options.map((option) => (
                        <DropdownMenuItem
                          key={option.label}
                          className={cn(
                            "flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100",
                            { "bg-zinc-100": options.model === option }
                          )}
                          onClick={() => {
                            setOptions((prev) => ({
                              ...prev,
                              model: option,
                              template: option.template,
                            }));
                          }}
                        >
                          <CheckIcon
                            className={cn("h-4 w-4", {
                              "opacity-100": options.model === option,
                              "opacity-0": options.model !== option,
                            })}
                          />
                          {option.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {[MATERIAL, FINISH].map(
                  ({ name, options: selectableOption }) => (
                    <RadioGroup
                      key={name}
                      value={options[name]}
                      onChange={(val) => {
                        setOptions((prev) => ({ ...prev, [name]: val }));
                      }}
                    >
                      <Label>
                        {name.slice(0, 1).toUpperCase() + name.slice(1)}
                      </Label>
                      <div className="mt-3 space-y-4">
                        {selectableOption.map((option) => (
                          <RadioGroup.Option
                            key={option.label}
                            value={option}
                            className={({ active, checked }) =>
                              cn(
                                "relative flex cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none sm:justify-between",
                                {
                                  "border-primary": active || checked,
                                }
                              )
                            }
                          >
                            <div className="flex items-center">
                              <div className="flex flex-col">
                                <RadioGroup.Label
                                  as="span"
                                  className="text-sm font-medium text-gray-900"
                                >
                                  {option.label}
                                </RadioGroup.Label>
                                {option.description && (
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-1 text-sm text-gray-500"
                                  >
                                    {option.description}
                                  </RadioGroup.Description>
                                )}
                              </div>
                            </div>
                            <RadioGroup.Description
                              as="span"
                              className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                            >
                              <span className="font-medium text-gray-900">
                                {formatPrice(option.price / 100)}
                              </span>
                            </RadioGroup.Description>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  )
                )}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full px-8 h-16 bg-white">
          <div className="h-px w-full bg-zinc-200" />
          <div className="w-full h-full flex justify-between items-center">
            <p className="font-medium whitespace-nowrap mr-4">
              {formatPrice(
                (BASE_PRICE + options.finish.price + options.materials.price) /
                  100
              )}
            </p>
            <Button className="w-40" size="sm">
              Continue
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignConfigurator;
