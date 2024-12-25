export function Certifications() {
  const certs = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      year: "2023"
    },
    {
      title: "APIs and Microservices",
      issuer: "FreeCodeCamp",
      year: "2022"
    }
  ];

  return (
    <div className="space-y-4">
      {certs.map((cert, index) => (
        <div key={index} className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">{cert.title}</h4>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </div>
          <span className="text-sm text-muted-foreground">{cert.year}</span>
        </div>
      ))}
    </div>
  );
}