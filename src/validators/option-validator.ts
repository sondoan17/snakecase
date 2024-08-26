//bg-blue-950 bg-blue-950
//bg-zinc-900 bg-zinc-900
//bg-rose-950 bg-rose-950
//bg-green-950 bg-green-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLOR = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Green", value: "green", tw: "green-950" },
] as const;

export const MODEL = {
  name: "models",
  options: [
    { label: "Iphone X/Xs", value: "iphone-x" },
    { label: "Iphone XR", value: "iphone-xr" },
    { label: "Iphone Xs Max", value: "iphone-xs-max" },
    { label: "Iphone 11/11 Pro", value: "iphone11" },
    { label: "Iphone 11 Pro Max", value: "iphone11-pro-max" },
    { label: "Iphone 12/12 Pro", value: "iphone12" },
    { label: "Iphone 12 Mini", value: "iphone12-mini" },
    { label: "Iphone 12 Pro Max", value: "iphone12-pro-max" },
    { label: "Iphone 13/13 Pro", value: "iphone13" },
    { label: "Iphone 13 Mini", value: "iphone13-mini" },
    { label: "Iphone 13 Pro Max", value: "iphone13-pro-max" },
    { label: "Iphone 14/14 Pro", value: "iphone14" },
    { label: "Iphone 14 Plus", value: "iphone14-plus" },
    { label: "Iphone 14 Pro Max", value: "iphone14-pro-max" },
    { label: "Iphone 15/15 Pro", value: "iphone15" },
    { label: "Iphone 15 Pro Max", value: "iphone15-pro-max" },
  ],
} as const;

export const MATERIAL = {
  name: "materials",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Polycarbonate",
      value: "polycarbonate",
      description: "Scratch resistant",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISH = {
  name: "finish",
  options: [
    {
      label: "Smooth",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
