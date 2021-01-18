import React from "react";

export const withPermission = (permission: string) => {
  return (WarappedComponent: any) => {
    return <WarappedComponent />;
  };
};
