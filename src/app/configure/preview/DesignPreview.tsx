import { Phone } from "@/components/componentsIndex";
import { cn } from "@/lib/utils";
import { Configuration } from "@prisma/client";
import React from "react";
import { COLORS } from "@/validators/option-validator";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const { color } = configuration;
  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.tw;
  return (
    <>
      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            imgSrc={configuration.croppedImageUrl}
            className={cn(`bg-${tw}`)}
          />
        </div>
      </div>
    </>
  );
};

export default DesignPreview;
