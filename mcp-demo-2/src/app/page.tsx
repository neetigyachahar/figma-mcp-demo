import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategorySection from "@/components/CategorySection";
import Banner from "@/components/Banner";
import PopularSection from "@/components/PopularSection";
import SaleSection from "@/components/SaleSection";
import RoomSection from "@/components/RoomSection";
import BottomNavigation from "@/components/BottomNavigation";

export default function Home() {
  return (
    <div className="pb-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <SearchBar />
      <CategorySection />
      <Banner />
      <PopularSection />
      <SaleSection />
      <RoomSection />
      <BottomNavigation />
    </div>
  );
}
