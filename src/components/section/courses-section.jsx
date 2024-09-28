import Section from '@/components/ui/section'
import CourseCrousal from '@/components/other/course-crousal';

export default function CoursesSection({
    sectionClassName,
    className,
    h2,
    p,
    data,
}) {

    return (
        <Section sectionClassName={sectionClassName} className={className}>
            {h2 && (<h2>{h2}</h2>)}
            {p && (<p>{p}</p>)}

            <CourseCrousal datas={data} />
        </Section >
    )
}
