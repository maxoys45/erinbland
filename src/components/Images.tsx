import { Fragment, useState } from "react";
import clsx from "clsx";

import type { Image as ImageType, ImageGroup } from "../@types/context";

import Image from "./Image";

const Images = ({ images }: { images: ImageType[] }) => {
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Data is coming through as a list of images, but we really want to split these into multiple groups,
   * depending on if an image has a 'title' - this function achieves this.
   */
  function splitOnTitle(data: ImageType[]) {
    const groups: ImageGroup[] = [];
    let currentGroup: ImageType[] = [];

    for (const item of data) {
      if (item.title) {
        if (currentGroup.length) {
          groups.push(currentGroup);
        }

        currentGroup = [item];
      } else {
        currentGroup.push(item);
      }
    }

    if (currentGroup.length) {
      groups.push(currentGroup);
    }

    return groups;
  }

  return (
    <div className="mt-8 flex w-full flex-col items-center md:mt-10">
      {splitOnTitle(images).map((group, index) => (
        <div
          className="imggroup inline-block [&+.imggroup]:mt-8 [&+.imggroup]:md:mt-10"
          key={index}
        >
          {group.map((image, index) => (
            <Fragment key={index}>
              {image.title && (
                <h2 className="mb-2 text-sm font-bold whitespace-pre-line uppercase md:mb-4 md:text-base">
                  {image.title}
                </h2>
              )}

              <figure
                className={clsx(
                  "relative flex flex-col justify-center [&+figure]:mt-8 [&+figure]:md:mt-16",
                  loading ? "w-full grow" : ""
                )}
              >
                <Image
                  image={image}
                  loading={loading}
                  setLoading={setLoading}
                />

                {image.caption && (
                  <figcaption className="pt-3 whitespace-pre-line max-md:text-sm">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Images;
