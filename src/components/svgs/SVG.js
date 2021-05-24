import react from "react";
import HumbleD from "./humbleD";
import HumbleL from "./humbleL";
import ShounenD from "./shounenD";
import ShounenL from "./shounenL";
import CointrackerD from "./cointrackerD";
import CointrackerL from "./cointrackL";
import "../../CSS/project.css";
const SVGS = {
  HumbleD: <HumbleD className="svg" height="100%" width="100%" />,
  HumbleL: <HumbleL className="svg" />,
  ShounenD: <ShounenD className="svg" height="100%" width="100%" />,
  ShounenL: <ShounenL className="svg" height="100%" width="100%" />,
  CointrackerD: <CointrackerD className="svg" height="100%" width="100%" />,
  CointrackerL: <CointrackerL className="svg" height="100%" width="100%" />,
};
export default SVGS;
