import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Class XII</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Symbiosis Institute of Technology, Pune
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Contributor - GirlScript Summer of Code
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Contributor - Social Summer of Code
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
