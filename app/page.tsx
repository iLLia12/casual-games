import GHeader from "@/components/header";
import GBanner from "@/components/banner";
import GFooter from "@/components/footer";
import GGallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GHeader />
      <GBanner />
      <GGallery />
      <GFooter />
    </main>
  );
}
