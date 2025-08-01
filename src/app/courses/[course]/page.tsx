export default async function Course({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  return (
    <div className='pt-20'>
      <h2 className='text-4xl'>{course}</h2>
    </div>
  );
}
