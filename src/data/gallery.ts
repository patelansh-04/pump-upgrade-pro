import farm from "@/assets/hero-solar-field.jpg";
import install from "@/assets/hero-installation.jpg";
import factory from "@/assets/about-factory.jpg";
import subDc from "@/assets/product-submersible-dc.jpg";
import subAc from "@/assets/product-submersible-ac.jpg";
import surface from "@/assets/product-surface.jpg";
import controller from "@/assets/product-controller.jpg";
import agri from "@/assets/product-agriculture.jpg";
import domestic from "@/assets/product-domestic.jpg";
import industrial from "@/assets/product-industrial.jpg";

export type GalleryItem = {
  id: string;
  image: string;
  category: "Agriculture" | "Drinking Water" | "Industrial" | "Manufacturing" | "EPC";
  caption: string;
  alt: string;
};

export const GALLERY: GalleryItem[] = [
  { id: "g1", image: farm, category: "Agriculture", caption: "Solar pumping array, Gujarat", alt: "Solar panels next to green field" },
  { id: "g2", image: install, category: "Agriculture", caption: "Field installation, Rajasthan", alt: "Farmer at solar pump install" },
  { id: "g3", image: factory, category: "Manufacturing", caption: "Pump assembly line, Ahmedabad", alt: "Factory floor with workers" },
  { id: "g4", image: subDc, category: "EPC", caption: "PMSM submersibles ready for dispatch", alt: "Submersible pump" },
  { id: "g5", image: subAc, category: "Drinking Water", caption: "AC submersible for village water scheme", alt: "AC submersible" },
  { id: "g6", image: surface, category: "Agriculture", caption: "Surface pump for canal lift", alt: "Surface pump" },
  { id: "g7", image: controller, category: "EPC", caption: "MPPT controllers staged for project", alt: "Solar controller" },
  { id: "g8", image: agri, category: "Agriculture", caption: "Agriculture range — V4/V6/V8 line", alt: "Agriculture range pumps" },
  { id: "g9", image: domestic, category: "Drinking Water", caption: "Domestic monoset deployment", alt: "Domestic monoset" },
  { id: "g10", image: industrial, category: "Industrial", caption: "Industrial pump for plant water supply", alt: "Industrial pump" },
  { id: "g11", image: factory, category: "Manufacturing", caption: "Controller manufacturing unit", alt: "Controller factory" },
  { id: "g12", image: install, category: "EPC", caption: "PM-KUSUM EPC installation", alt: "EPC installation" },
];
