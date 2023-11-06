import React from "react";

export default function NotFound() {
  return (
    <React.Fragment>
      <div className="mx-auto max-w-2wl text-center space-y-4">
        <h2 className="text-lg font-bold">Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </React.Fragment>
  );
}
