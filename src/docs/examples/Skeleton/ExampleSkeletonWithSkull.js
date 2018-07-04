import React from "react";
import Skeleton from "react-loading-skeleton/Skeleton";

/** Skeleton with skull and bones */
export default function ExampleSkeletonWithSkull() {
  return <Skeleton  skull={true} amount={3} />;
}
