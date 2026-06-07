import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicesContent } from "@/lib/services-content";

const service = servicesContent["air-conditioning"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function AirConditioningPage() {
  return <ServiceDetail service={service} />;
}
