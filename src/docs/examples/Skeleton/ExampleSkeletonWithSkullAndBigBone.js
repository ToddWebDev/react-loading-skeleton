import React from "react";
import Skeleton from "react-loading-skeleton/Skeleton";

/** Skeleton with skull and big bone header and bones */
export default function ExampleSkeletonWithSkullAndBigBone() {
  return <Skeleton  skull={true} amount={3} bigBone={true} />;
}
