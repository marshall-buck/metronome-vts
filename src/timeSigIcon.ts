import { X_OFFSET } from "./helpers";

function createTimeSigIcon(parent: SVGElement) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("id", "time-signature");

  group.setAttribute("pointer-events", "all");

  const timeBg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  timeBg.setAttribute("cx", "24");
  timeBg.setAttribute("cy", "24");
  timeBg.setAttribute("r", "24");

  const timeSymbol = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  timeSymbol.setAttribute("id", "time-symbol");
  timeSymbol.setAttribute(
    "d",
    "M25.276,11.935c1.504,0 2.936,0.312 4.296,0.936c1.36,0.624 2.472,1.472 3.336,2.544c0.864,1.072 1.296,2.28 1.296,3.624c0,1.184 -0.4,2.2 -1.2,3.048c-0.8,0.848 -1.808,1.272 -3.024,1.272c-1.088,0 -1.984,-0.312 -2.688,-0.936c-0.704,-0.624 -1.056,-1.48 -1.056,-2.568c0,-0.832 0.24,-1.536 0.72,-2.112c0.48,-0.576 1.056,-1.024 1.728,-1.344c0.352,-0.16 0.784,-0.296 1.296,-0.408c0.512,-0.112 0.768,-0.264 0.768,-0.456c0,-0.512 -0.448,-0.992 -1.344,-1.44c-0.896,-0.448 -1.856,-0.672 -2.88,-0.672c-1.312,0 -2.432,0.304 -3.36,0.912c-0.928,0.608 -1.624,1.648 -2.088,3.12c-0.464,1.472 -0.696,3.52 -0.696,6.144l0,3.744c0,1.184 0.184,2.344 0.552,3.48c0.368,1.136 0.984,2.072 1.848,2.808c0.864,0.736 2,1.104 3.408,1.104c1.6,0 3.056,-0.72 4.368,-2.16c1.312,-1.44 2.16,-3.376 2.544,-5.808l1.296,0c-0.128,1.856 -0.608,3.512 -1.44,4.968c-0.832,1.456 -1.952,2.6 -3.36,3.432c-1.408,0.832 -3.024,1.248 -4.848,1.248c-2.016,0 -3.824,-0.584 -5.424,-1.752c-1.6,-1.168 -2.864,-2.728 -3.792,-4.68c-0.928,-1.952 -1.392,-4.128 -1.392,-6.528c0,-1.536 0.296,-2.992 0.888,-4.368c0.592,-1.376 1.4,-2.6 2.424,-3.672c1.024,-1.072 2.208,-1.92 3.552,-2.544c1.344,-0.624 2.768,-0.936 4.272,-0.936Z"
  );
  timeSymbol.setAttribute("fill", "white");

  const bg = document.querySelector("#bg-circle");

  const coords = bg?.getBoundingClientRect() as DOMRect;
  const x = coords.x + X_OFFSET;
  const y = coords.top + coords.height / 2 - X_OFFSET;

  group.setAttributeNS(null, "transform", `translate(${x},${y})`);

  group.append(timeBg);
  group.append(timeSymbol);
  parent.append(group);
}

export { createTimeSigIcon };
