import { FaSearch, FaLightbulb } from "react-icons/fa";
import { TbRadarFilled } from "react-icons/tb";

import { FaRobot } from "react-icons/fa";
import Card from "./Card";

const ATSOptimization = () => {
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-purple-500/30 p-2 rounded-full">
          <FaRobot className="text-xl" />
        </div>
        <p className="text-lg">ATS Optimization</p>
      </div>
      <div className="flex flex-col gap-4">
        <Card styles={"bg-purple-500/10 border border-purple-500/30"}>
          <div className="flex items-center gap-1">
            <p className="font-semibold">What is ATS?</p>
          </div>
          <div className="flex flex-col">
            Applicant Tracking Systems (ATS)are software tools used by 75%+ of
            employers to automatically screen resumes before human review. These
            systems scan for keywords, proper formatting, and relevant
            qualifications to rank candidates. If your resume isn't
            ATS-Friendly, it may never reach a human recruiter.
          </div>
        </Card>
        <Card styles={"bg-purple-500/10 border border-purple-500/30"}>
          <div className="flex items-center gap-1">
            <FaRobot className="text-xl"  />
            <p className="font-semibold">ATS Compatibility Checklist</p>
          </div>
          <div className="flex flex-col">text</div>
        </Card>
      </div>
    </Card>
  );
};

export default ATSOptimization;
