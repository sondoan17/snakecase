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
    {
      label: "Iphone 7/8 Plus",
      value: "iphone-8-plus",
      template: "/iphone-7-8-plus-template.png",
    },
    {
      label: "Iphone X/Xs",
      value: "iphone-x",
      template: "/iphone-x-template.png",
    },
    {
      label: "Iphone XR",
      value: "iphone-x",
      template: "/iphone-x-template.png",
    },
    {
      label: "Iphone Xs Max",
      value: "iphone-x",
      template: "/iphone-x-template.png",
    },
    {
      label: "Iphone 11/11 Pro",
      value: "iphone-11",
      template: "/iphone-11-template.png",
    },
    {
      label: "Iphone 11 Pro Max",
      value: "iphone-11",
      template: "/iphone-11-template.png",
    },
    {
      label: "Iphone 12/12 Pro",
      value: "iphone-12",
      template: "/iphone-12-template.png",
    },
    {
      label: "Iphone 12 Mini",
      value: "iphone-12-mini",
      template: "/iphone-12-mini-template.png",
    },
    {
      label: "Iphone 12 Pro Max",
      value: "iphone-12",
      template: "/iphone-12-template.png",
    },
    {
      label: "Iphone 13/13 Pro",
      value: "iphone-13",
      template: "/iphone-13-template.png",
    },
    {
      label: "Iphone 13 Mini",
      value: "iphone-13-mini",
      template: "/iphone-13-mini-template.png",
    },
    {
      label: "Iphone 13 Pro Max",
      value: "iphone-13",
      template: "/iphone-13-template.png",
    },
    {
      label: "Iphone 14/14 Pro",
      value: "iphone-14",
      template: "/iphone-14-template.png",
    },
    {
      label: "Iphone 14 Plus",
      value: "iphone-14",
      template: "/iphone-14-template.png",
    },
    {
      label: "Iphone 14 Pro Max",
      value: "iphone-14",
      template: "/iphone-14-template.png",
    },
    {
      label: "Iphone 15/15 Pro",
      value: "iphone-15",
      template: "/iphone-15-template.png",
    },
    {
      label: "Iphone 15 Pro Max",
      value: "iphone-15",
      template: "/iphone-15-template.png",
    },
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
