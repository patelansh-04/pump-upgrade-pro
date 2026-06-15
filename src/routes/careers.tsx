import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { useJobs } from "@/hooks/use-jobs";
import { Job, DEPARTMENTS, JOB_TYPES } from "@/data/jobs";
import factory from "@/assets/about-factory.jpg";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  Building, 
  Filter, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Upload,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Paarth Solar Pumps" },
      { name: "description", content: "Build the future of solar pumping in India. Explore active job openings in R&D, Engineering, Sales, and Support at Paarth Solar Pumps." },
    ]
  }),
  component: Careers,
});

function Careers() {
  const { jobs, loading } = useJobs();
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  
  // Modal states
  const [activeJobDetails, setActiveJobDetails] = useState<Job | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  
  // Application Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCover, setFormCover] = useState("");
  const [formResume, setFormResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter jobs based on search, department and type
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());
      
      const matchesDept = selectedDept === "All" || job.department === selectedDept;
      const matchesType = selectedType === "All" || job.type === selectedType;

      return matchesSearch && matchesDept && matchesType;
    });
  }, [jobs, search, selectedDept, selectedType]);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formPhone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Application for ${applyJob?.title} submitted successfully! Our HR team will get in touch soon.`);
      // Reset form
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setFormCover("");
      setFormResume(null);
      setApplyJob(null);
    }, 1200);
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <PageHero 
        eyebrow="Join Our Team" 
        title="Engineering a Sustainable Tomorrow"
        subtitle="Be a part of a 32-year legacy driving India's transition to clean solar-powered water irrigation."
        bgImage={factory}
      />

      {/* WHY JOIN US SECTION */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow">Life at Paarth</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal md:text-4xl">
              Why build your career with us?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We empower communities, enable agricultural prosperity, and build class-leading technologies. Here, your work directly impacts the lives of millions of farmers across India.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Impactful Work",
                desc: "Every pump we install reduces carbon emissions and helps a farmer achieve reliable irrigation. Join a purpose-driven mission.",
                icon: CheckCircle2,
              },
              {
                title: "Innovation-First",
                desc: "Work on cutting-edge permanent magnet synchronous motors (PMSM), IoT-based remote monitoring systems, and advanced solar controllers.",
                icon: Briefcase,
              },
              {
                title: "Legacy & Trust",
                desc: "With 32+ years in manufacturing and over 42,000 installations across the country, we offer stability, growth, and a supportive culture.",
                icon: Building,
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-secondary/30 p-8 hover:shadow-md transition duration-300">
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary mb-6">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE OPENINGS SECTION */}
      <section className="section-y alt-bg border-t">
        <div className="container-x">
          <div className="mb-12">
            <div className="eyebrow">Current Openings</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal">
              Explore job opportunities
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Find the perfect role to showcase your talent and grow your career.
            </p>
          </div>

          {/* FILTERS */}
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto] items-center mb-8 bg-white p-4 rounded-lg border shadow-sm">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search job title, location or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-2">
              <Building className="size-4 text-muted-foreground hidden sm:block" />
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-3 py-2.5 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="All">All Departments</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Job Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="size-4 text-muted-foreground hidden sm:block" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2.5 rounded-md border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="All">All Job Types</option>
                {JOB_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* JOBS LISTING */}
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin inline-block size-8 border-4 border-primary border-t-transparent rounded-full" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-4 text-muted-foreground font-medium">Fetching job openings...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="group bg-white p-6 md:p-8 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition duration-300 grid md:grid-cols-[1fr_auto] gap-6 items-center"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-primary/5 text-primary text-xs font-semibold px-2.5 py-1 rounded-md">
                        {job.department}
                      </span>
                      <span className="bg-secondary text-charcoal/80 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Clock className="size-3" /> {job.type}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-primary transition duration-200">
                      {job.title}
                    </h3>
                    
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {job.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="size-3.5 text-primary" />
                        Experience: {job.experience}
                      </div>
                      {job.salary && (
                        <div className="text-eco font-semibold">
                          {job.salary}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-row md:flex-col gap-3 shrink-0">
                    <button 
                      onClick={() => setActiveJobDetails(job)}
                      className="btn-outline px-5 py-2.5 text-xs w-full sm:w-auto text-center"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => setApplyJob(job)}
                      className="btn-primary px-5 py-2.5 text-xs w-full sm:w-auto text-center"
                    >
                      Apply Now <ArrowRight className="size-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border p-12 text-center max-w-xl mx-auto shadow-sm">
              <AlertCircle className="size-12 text-primary/40 mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-charcoal">No openings match your filters</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search keywords, department, or job type filters, or check back later for new opportunities.
              </p>
              <button 
                onClick={() => { setSearch(""); setSelectedDept("All"); setSelectedType("All"); }}
                className="btn-outline px-4 py-2 mt-5 text-xs"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* JOB DETAILS MODAL */}
      <Dialog open={!!activeJobDetails} onOpenChange={(open) => !open && setActiveJobDetails(null)}>
        <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
          {activeJobDetails && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-primary/5 text-primary text-xs font-semibold px-2.5 py-1 rounded-md">
                    {activeJobDetails.department}
                  </span>
                  <span className="bg-secondary text-charcoal/80 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Clock className="size-3" /> {activeJobDetails.type}
                  </span>
                </div>
                <DialogTitle className="font-display text-2xl font-bold text-charcoal">
                  {activeJobDetails.title}
                </DialogTitle>
                <DialogDescription className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground mt-1.5">
                  <span className="flex items-center gap-1"><MapPin className="size-3.5 text-primary" /> {activeJobDetails.location}</span>
                  <span className="flex items-center gap-1"><Briefcase className="size-3.5 text-primary" /> Exp: {activeJobDetails.experience}</span>
                  {activeJobDetails.salary && <span className="text-eco font-semibold">{activeJobDetails.salary}</span>}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider mb-2">
                    About the Role
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activeJobDetails.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider mb-2">
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
                    {activeJobDetails.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider mb-2">
                    Requirements & Qualifications
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
                    {activeJobDetails.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end gap-3 border-t pt-4">
                  <button 
                    onClick={() => setActiveJobDetails(null)}
                    className="px-5 py-2.5 border rounded-md text-sm font-medium hover:bg-secondary transition"
                  >
                    Close
                  </button>
                  <button 
                    onClick={() => {
                      setApplyJob(activeJobDetails);
                      setActiveJobDetails(null);
                    }}
                    className="btn-primary px-5 py-2.5 text-sm"
                  >
                    Apply for this Job
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* JOB APPLICATION FORM MODAL */}
      <Dialog open={!!applyJob} onOpenChange={(open) => !open && setApplyJob(null)}>
        <DialogContent className="max-w-md">
          {applyJob && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl font-bold text-charcoal">
                  Apply for {applyJob.title}
                </DialogTitle>
                <DialogDescription>
                  Please submit the details below to apply. Fields marked with * are required.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleApplySubmit} className="mt-4 space-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-charcoal flex items-center gap-1">
                    <User className="size-3.5 text-muted-foreground" /> Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="input"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-charcoal flex items-center gap-1">
                    <Mail className="size-3.5 text-muted-foreground" /> Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="input"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-charcoal flex items-center gap-1">
                    <Phone className="size-3.5 text-muted-foreground" /> Contact Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="input"
                  />
                </div>

                {/* Cover Letter */}
                <div className="space-y-1.5">
                  <label htmlFor="cover" className="text-xs font-semibold text-charcoal flex items-center gap-1">
                    <FileText className="size-3.5 text-muted-foreground" /> Cover Letter / Pitch
                  </label>
                  <textarea
                    id="cover"
                    placeholder="Why are you a good fit for this role?"
                    rows={3}
                    value={formCover}
                    onChange={(e) => setFormCover(e.target.value)}
                    className="input resize-none"
                  />
                </div>

                {/* Resume Upload (Mock) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-charcoal flex items-center gap-1">
                    <Upload className="size-3.5 text-muted-foreground" /> Resume / CV *
                  </label>
                  <div className="border border-dashed border-border hover:border-primary rounded-md p-4 bg-secondary/20 text-center transition cursor-pointer relative">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setFormResume(e.target.files[0]);
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <FileText className="size-8 text-muted-foreground mx-auto mb-2" />
                    {formResume ? (
                      <span className="text-xs font-semibold text-eco block truncate">
                        Selected: {formResume.name} ({(formResume.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    ) : (
                      <>
                        <span className="text-xs font-semibold text-charcoal block">
                          Click to upload resume
                        </span>
                        <span className="text-[10px] text-muted-foreground block mt-1">
                          PDF, DOC, DOCX up to 5MB
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 border-t pt-4">
                  <button 
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setApplyJob(null)}
                    className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-secondary transition disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary px-5 py-2 text-sm min-w-[120px]"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
