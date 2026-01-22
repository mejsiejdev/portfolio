import { AnimatedSection } from "@/components/animated-section";
import { Certificate } from "./certificate";

import { API_URL } from "@/lib/api";

const revalidate = 3600;

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  tags: string[];
  link: string;
}

export async function Certificates() {
  const data = await fetch(`${API_URL}/certificates`, {
    next: { revalidate },
  });
  const certificates = (await data.json()) as Certificate[];
  return (
    <AnimatedSection id="certificates">
      <h2>Certificates</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <Certificate
            key={certificate.name}
            index={index}
            certificate={certificate}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
