import React from "react";

declare module "react" {
  interface CSSProperties {
    "--offset"?: string;
    "--items"?: number;
    "--size"?: string;
  }
}
