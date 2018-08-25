import React from "react";
import Skeleton from "react-loading-skeleton/Skeleton";

/** Skeleton with skull and bones with flex direction of 'row' */
export default function ExampleSkeletonWithSkullDirectionRow() {
  return <Skeleton  skull={true} amount={3} direction={'row'} />;
}
