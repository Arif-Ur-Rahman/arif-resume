import { essays } from "../data";
import EssayClient from "./EssayClient";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.id }));
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  return <EssayClient slug={params.slug} />;
}
