import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import GroupIcon from "@material-ui/icons/Group";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DateRangeIcon from "@material-ui/icons/DateRange";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        title="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Friends" Icon={GroupIcon} />
      <SidebarRow title="Groups" Icon={GroupAddIcon} />
      <SidebarRow title="MarketPlace" Icon={HomeIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Events" Icon={DateRangeIcon} />
      <SidebarRow title="Memories" Icon={AccessTimeIcon} />
      <SidebarRow title="Saved" Icon={BookmarkIcon} />
      <SidebarRow title="See more" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
