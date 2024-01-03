export default function Experience() {
  const data = [
    {
      year: "2023",
      role: "Role",
      company: "Google",
      img: "logo5.png",
    },
    {
      year: "2020",
      role: "Role",
      company: "Microsoft",
      img: "logo4.png",
    },
    {
      year: "2018",
      role: "Role",
      company: "Facebook",
      img: "logo3.png",
    },
    {
      year: "2012",
      role: "Role",
      company: "Pizza",
      img: "logo2.png",
    },
    {
      year: "2011",
      role: "Role",
      company: "Banana",
      img: "logo1.png",
    },
  ];
  return (
    <section className="experience py-4">
      {data.map((job, index) => {
        return (
          <div
            key={job.company}
            className="grid py-2 lg:grid-cols-12 border-b border-black"
          >
            <div className="lg:col-span-2">{job.year}</div>
            <div className="lg:col-span-6 font-semibold text-black">
              {job.role}
            </div>
            <div className="lg:col-span-4 justify-self-end">{job.company}</div>
          </div>
        );
      })}
    </section>
  );
}
