export default function CourseIdPage({
  params,
}: {
  params: { courseId: string };
}) {
  return <div>Course Id: {params.courseId}</div>;
}
