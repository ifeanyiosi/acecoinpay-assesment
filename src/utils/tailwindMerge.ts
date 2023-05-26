import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** This is a utility function that takes in a list of tailwind classes and
 optimizes them by removing repeated classess and merging classess that can be merged
 for example: input: "px-2 py-2", output: p-2
 */
export default function classMerger(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
