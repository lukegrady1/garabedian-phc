import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicesContent } from "@/lib/services-content";

const service = servicesContent.heating;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function HeatingPage() {
  return <ServiceDetail service={service} />;
}
