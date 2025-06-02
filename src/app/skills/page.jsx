import styles from "./skills.module.css";

import { Container, Row, Col } from "react-bootstrap";

import programing from "@/api/fetchSkills.js"; // Import all data arrays
import {graphic, videoEditing, microsoft, googleWorkspace, digitalMarketing} from "@/api/fetchSkills.js";

import Accordion from "@/components/accordion/Accordion";
import SectionTitle from "@/components/buttons/section-title/SectionTitle";
import SkillTitle from "@/components/buttons/skills-title/SkillTitle";


export const metadata = {
  title: "ayoubgharts | Skills",
  description: "Web Developer Engineer",
};

export default function Skills() {
  return (
    <main className={styles.skills}>
      <Container>
        <SectionTitle textContent={"Our Skills"} />
        <div className="programing">
          <SkillTitle textContent={"Programing"} />
          <Accordion title={'all programing skills'} data={programing} />
          <SkillTitle textContent={"Graphic Design"} />
          <Accordion title={'Graphic Design skills'} data={graphic} />
          <SkillTitle textContent={"Video Editing"} />
          <Accordion title={'video editing skills'} data={videoEditing} />
          <SkillTitle textContent={"microsoft"} />
          <Accordion title={'Microsoft Office skills'} data={microsoft} />
          <SkillTitle textContent={"google"} />
          <Accordion title={'google Workspace skills'} data={googleWorkspace} />
          <SkillTitle textContent={"digital Marketing"} />
          <Accordion title={'digital Marketing skills'} data={digitalMarketing} />
        </div>
      </Container>
    </main>
  );
}
