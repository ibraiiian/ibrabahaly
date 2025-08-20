"use client"

import { educations } from "@/lib/educationData"
import EducationCard from "./EducationCard"
import EducationTitle from "./EducationTitle"

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-[20] mt-24"
    >
      <EducationTitle />
      <div className="mb-24 grid w-[90%] grid-cols-1 gap-x-6 gap-y-8 lg:max-w-[1200px] lg:grid-cols-2">
        {educations.map((education, index) => (
          <EducationCard
            key={education.id}
            institution={education.institution}
            degree={education.degree}
            field={education.field}
            period={education.period}
            location={education.location}
            description={education.description}
            gpa={education.gpa}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}