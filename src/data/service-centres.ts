export type ServiceCentre = {
  state: string;
  city: string;
  address: string;
  phone: string;
};

export const SERVICE_CENTRES: ServiceCentre[] = [
  { state: "Gujarat", city: "Ahmedabad", address: "23, Sanskar Industrial Hub-2, Bakrol-Bujrang", phone: "+91 75750 74156" },
  { state: "Gujarat", city: "Rajkot", address: "Plot 14, Aji GIDC Phase 2", phone: "+91 75750 74170" },
  { state: "Gujarat", city: "Surat", address: "Sachin GIDC, Road 4", phone: "+91 75750 74171" },
  { state: "Rajasthan", city: "Jaipur", address: "Sitapura Industrial Area, Sec 5", phone: "+91 75750 74180" },
  { state: "Rajasthan", city: "Jodhpur", address: "Boranada Industrial Estate", phone: "+91 75750 74181" },
  { state: "Madhya Pradesh", city: "Indore", address: "Pithampur Sector 2", phone: "+91 75750 74190" },
  { state: "Madhya Pradesh", city: "Bhopal", address: "Govindpura Industrial Area", phone: "+91 75750 74191" },
  { state: "Maharashtra", city: "Pune", address: "Bhosari MIDC", phone: "+91 75750 74200" },
  { state: "Maharashtra", city: "Nashik", address: "Satpur MIDC", phone: "+91 75750 74201" },
  { state: "Karnataka", city: "Bengaluru", address: "Peenya Industrial Area Phase 2", phone: "+91 75750 74210" },
  { state: "Karnataka", city: "Hubballi", address: "Tarihal Industrial Area", phone: "+91 75750 74211" },
  { state: "Telangana", city: "Hyderabad", address: "Balanagar Industrial Estate", phone: "+91 75750 74220" },
  { state: "Tamil Nadu", city: "Coimbatore", address: "SIDCO Industrial Estate, Kurichi", phone: "+91 75750 74230" },
  { state: "Tamil Nadu", city: "Chennai", address: "Ambattur Industrial Estate", phone: "+91 75750 74231" },
  { state: "Uttar Pradesh", city: "Lucknow", address: "Chinhat Industrial Area", phone: "+91 75750 74240" },
  { state: "Uttar Pradesh", city: "Kanpur", address: "Panki Industrial Area", phone: "+91 75750 74241" },
  { state: "Bihar", city: "Patna", address: "Patliputra Industrial Area", phone: "+91 75750 74250" },
  { state: "Andhra Pradesh", city: "Vijayawada", address: "Auto Nagar", phone: "+91 75750 74260" },
  { state: "Punjab", city: "Ludhiana", address: "Focal Point Phase 5", phone: "+91 75750 74270" },
  { state: "Haryana", city: "Karnal", address: "Sector 3 Industrial Estate", phone: "+91 75750 74280" },
];

export const COVERED_STATES = Array.from(new Set(SERVICE_CENTRES.map((s) => s.state)));
