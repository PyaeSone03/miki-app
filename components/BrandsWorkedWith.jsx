import FlowingMenu from "@/components/FlowingMenu";

const brandItems = [
  { text: "Brand 01", image: "/brands/width_200.webp", link: "/project-highlight" },
  { text: "Brand 02", image: "/brands/width_225.webp", link: "/project-highlight" },
  { text: "Brand 03", image: "/brands/width_225%20(1).webp", link: "/project-highlight" },
  { text: "Brand 04", image: "/brands/width_225%20(2).webp", link: "/project-highlight" },
  { text: "Brand 05", image: "/brands/width_373.webp", link: "/project-highlight" },
  { text: "Brand 06", image: "/brands/width_500.webp", link: "/project-highlight" },
  { text: "Brand 07", image: "/brands/width_517.webp", link: "/project-highlight" },
  { text: "Brand 08", image: "/brands/width_800.webp", link: "/project-highlight" },
  { text: "Brand 09", image: "/brands/width_800%20(1).webp", link: "/project-highlight" },
  { text: "Brand 10", image: "/brands/width_800%20(2).webp", link: "/project-highlight" },
  { text: "Brand 11", image: "/brands/width_800%20(3).webp", link: "/project-highlight" },
  { text: "Brand 12", image: "/brands/width_800%20(4).webp", link: "/project-highlight" },
  { text: "Brand 13", image: "/brands/width_900.jpg", link: "/project-highlight" },
];

export default function BrandsWorkedWith() {
  return (
    <section className="w-full text-white">
      <div className="mx-auto mb-4 w-full max-w-6xl px-6 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
          Brand I Worked With
        </p>
      </div>
      <div className="h-[150px] overflow-hidden border-y border-white/20 md:h-[170px]">
        <FlowingMenu
          items={brandItems}
          speed={16}
          hoverLabel="BRANDS I WORKED WITH"
          textColor="#f8f1ef"
        />
      </div>
    </section>
  );
}
