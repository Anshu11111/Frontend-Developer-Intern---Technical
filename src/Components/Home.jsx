import React from "react";
import SmallBox from "./SmallBox";
import MidBox from "./MidBox";
import Rightbox from "./Rightbox";
import Downbox from "./Downbox";
import Rightdownbox from "./Rightdownbox";
import { IconPinFilled, IconPin, IconDots } from "@tabler/icons-react";
import img from "../assets/1gra.png";
import img1 from "../assets/im2.png";
import "./home.css";
function Home() {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="top-box">
        <div className="left">
          <div className="smallbox">
            <SmallBox
              position="Available Position"
              date="24"
              urgent="4 Urgently needed"
              color="#FFEFE7"
              color2="#FF5151"
            />
            <SmallBox
              position="Closed Position"
              date="15"
              urgent="No urgent requirement"
              color="#D4E6F1"
              color2="#3786F1"
            />
            <SmallBox
              position="Pending Approval"
              date="8"
              urgent="2 Urgently needed"
              color="#F9E79F"
              color2="#a4881c"
            />
          </div>
          <div className="midbox">
            <MidBox
              position="Total Employee"
              date="246"
              Men="190 Men"
              women="30 Women"
              img={img}
            />
            <MidBox
              position="Talent Request"
              date="15"
              Men="450 Men"
              women="20 Women"
              img={img1}
            />
          </div>
          <div className="bottom">
            <div className="up">
              <h3>Announcement</h3>
              <p>Today, 25 July 2024 </p>
            </div>
            <div>
              <Downbox
                name="Outing schedule for every department"
                date="5 min ago"
                icon={<IconPinFilled />}
                icon1={<IconDots />}
              />
              <Downbox
                name="Outing schedule for every department"
                date="5 min ago"
                icon={<IconPin />}
                icon1={<IconDots />}
              />
              <Downbox
                name="Outing schedule for every department"
                date="5 min ago"
                icon={<IconPin />}
                icon1={<IconDots />}
              />
              <hr />
              <div className="down">
                <h3>See All Announcement</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Rightbox />
          <div className="rightbottom">
            <div className="bottomrig">
              <h3>Upcoming Schedule</h3>
              <p>Today, 25 July 2024 </p>
            </div>
            <div className="pr">
              <p>Priority</p>
              <Rightdownbox
                name="Outing schedule for every department"
                date="5 min ago"
                icon={<IconPinFilled />}
                icon1={<IconDots />}
              />
              <p>Others</p>
              <Rightdownbox
                name="Outing schedule for every department"
                date="5 min ago"
                icon={<IconPin />}
                icon1={<IconDots />}
              />
              <Rightdownbox
                name="Outing schedule for every department"
                date="5 min ago"
                icon={<IconPin />}
                icon1={<IconDots />}
              />
              <hr />
              <div className="down">
                <h3>Creat a New Schedule</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
