import React, { Dispatch, SetStateAction, useState } from "react";

const toggleDrawer =
  (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    // setState(open );
  };

export default function TemporaryDrawer({
  showDrawer,
  setShowDrawer,
}: {
  showDrawer: boolean;
  setShowDrawer: Dispatch<SetStateAction<boolean>>;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return <div>TempDrawer</div>;
}
