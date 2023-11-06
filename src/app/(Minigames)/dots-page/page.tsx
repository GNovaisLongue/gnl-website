"use client";
import React from "react";
import "./style.css";

interface Point {
  x: number;
  y: number;
}

const ScreenDots = () => {
  const [points, setPoints] = React.useState<Point[]>([]);
  const [RedoPoints, setRedoPoints] = React.useState<Point[]>([]);
  console.log(points.length);

  const handlePin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /*
    clientX/Y: 0,0 is top left of the browser window (under the toolbar/bookmarks bar)
    offsetX/Y: 0,0 is top left of clicked element
    screenX/Y: 0,0 is top left of monitor/display
    pageX/Y: 0,0 is top left of page content, including scroll
  */
    // const click = {
    //   clientX: e.clientX,
    //   clientY: e.clientY,
    //   pageX: e.pageX,
    //   pageY: e.pageY,
    //   offsetX: e.target.offsetLeft,
    //   offsetY: e.target.offsetTop,
    // };

    const { pageX, pageY } = e;

    setPoints([
      ...points,
      {
        x: pageX,
        y: pageY,
      },
    ]);
  };

  const handleUndo = () => {
    const newRemovedPoints = [...points];
    if (newRemovedPoints.length === 0) return; //in case newPoints array isn't empty, can pop and add to states
    const removedPoint = newRemovedPoints.pop();
    if (removedPoint) {
      setRedoPoints([...RedoPoints, removedPoint]);
      setPoints(newRemovedPoints);
    }
  };

  const handleRedo = () => {
    const newRemovedPoints = [...RedoPoints];
    if (newRemovedPoints.length === 0) return; //in case newRemovedPoints array isn't empty, can pop and add to states
    const removedPoint = newRemovedPoints.pop();
    if (removedPoint) {
      setPoints([...points, removedPoint]);
      setRedoPoints(newRemovedPoints);
    }
  };

  return (
    <div className="App">
      <div className="button_group">
        <button
          onClick={handleUndo}
          disabled={points.length === 0 ? true : false}
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={RedoPoints.length === 0 ? true : false}
        >
          Redo
        </button>
      </div>
      <div
        className="Clicky"
        onClick={handlePin}
        style={{
          background: "lightgray",
        }}
      >
        {points.map((pin, index) => (
          <div
            key={index}
            className="pin"
            style={{
              background: "gray",
              left: pin.x - 5 + "px",
              top: pin.y - 5 + "px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ScreenDots;
