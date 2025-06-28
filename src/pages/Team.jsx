
const Team = () =>  {
  const members = [
    { name: "Ayo Ayodele", role: "Piano Instructor" },
    { name: "Adura Afe", role: "Guitar Coach" },
    { name: "Clara Adams", role: "Vocal Trainer" },
     { name: "Alice Smith", role: "Piano Instructor" },
    { name: "Bob Johnson", role: "Guitar Coach" },
    { name: "Clara Adams", role: "Vocal Trainer" },
     { name: "Alice Smith", role: "Piano Instructor" },
    { name: "Bob Johnson", role: "Guitar Coach" },
    { name: "Clara Adams", role: "Vocal Trainer" },
     { name: "Alice Smith", role: "Piano Instructor" },
    { name: "Bob Johnson", role: "Guitar Coach" },
    { name: "Clara Adams", role: "Vocal Trainer" },
  ];

  return (
    <section className="p-10 max-w-5xl bg-gray-200 mx-auto">
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((m) => (
          <div key={m.name} className="border p-4 rounded shadow-sm">
            <div className="h-40 bg-gray-200 rounded mb-4" />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;