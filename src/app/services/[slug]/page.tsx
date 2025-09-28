import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// Dummy data (you can fetch from API or DB instead)
const services = {
  "web-development": {
    title: "Web Development",
    description: "We build fast, scalable, and modern web applications.",
  },
  "mobile-apps": {
    title: "Mobile Apps",
    description: "Custom mobile applications for iOS and Android.",
  },
  "ui-ux": {
    title: "UI/UX Design",
    description: "Beautiful, user-friendly interfaces for your products.",
  },
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return notFound();
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700">{service.description}</p>
    </section>
  );
}
