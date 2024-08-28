//bg-blue-950 bg-blue-950
//bg-zinc-900 bg-zinc-900
//bg-rose-950 bg-rose-950
//bg-green-950 bg-green-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
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
      value: "iphone78plus",
      template: "/iphone-7-8-plus-template.png",
    },
    {
      label: "Iphone X/Xs",
      value: "iphonex",
      template: "/iphone-x-template.png",
    },
    {
      label: "Iphone XR",
      value: "iphonexr",
      template: "/iphone-x-template.png",
    },
    {
      label: "Iphone Xs Max",
      value: "iphonexsmax",
      template: "/iphone-x-template.png",
    },
    {
      label: "Iphone 11/11 Pro",
      value: "iphone11",
      template: "/iphone-11-template.png",
    },
    {
      label: "Iphone 11 Pro Max",
      value: "iphone11promax",
      template: "/iphone-11-template.png",
    },
    {
      label: "Iphone 12/12 Pro",
      value: "iphone12",
      template: "/iphone-12-template.png",
    },
    {
      label: "Iphone 12 Mini",
      value: "iphone12mini",
      template: "/iphone-12-mini-template.png",
    },
    {
      label: "Iphone 12 Pro Max",
      value: "iphone12promax",
      template: "/iphone-12-template.png",
    },
    {
      label: "Iphone 13/13 Pro",
      value: "iphone13",
      template: "/iphone-13-template.png",
    },
    {
      label: "Iphone 13 Mini",
      value: "iphone13mini",
      template: "/iphone-13-mini-template.png",
    },
    {
      label: "Iphone 13 Pro Max",
      value: "iphone13promax",
      template: "/iphone-13-template.png",
    },
    {
      label: "Iphone 14/14 Pro",
      value: "iphone14",
      template: "/iphone-14-template.png",
    },
    {
      label: "Iphone 14 Plus",
      value: "iphone14plus",
      template: "/iphone-14-template.png",
    },
    {
      label: "Iphone 14 Pro Max",
      value: "iphone14promax",
      template: "/iphone-14-template.png",
    },
    {
      label: "Iphone 15/15 Pro",
      value: "iphone15",
      template: "/iphone-15-template.png",
    },
    {
      label: "Iphone 15 Pro Max",
      value: "iphone15promax",
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
