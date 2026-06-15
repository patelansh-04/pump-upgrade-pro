import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useJobs } from "@/hooks/use-jobs";
import { Job, DEPARTMENTS, JOB_TYPES } from "@/data/jobs";
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Briefcase, 
  MapPin, 
  Clock, 
  Lock, 
  User, 
  Key, 
  Building,
  DollarSign,
  Layers,
  Search,
  Check,
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

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal — Paarth Solar Pumps" },
      { name: "description", content: "Management console for Paarth Solar Pumps website administrators." }
    ]
  }),
  component: AdminPortal,
});

function AdminPortal() {
  const { jobs, addJob, editJob, deleteJob } = useJobs();
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard state
  const [searchQuery, setSearchQuery] = useState("");
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null);
  const [editorJob, setEditorJob] = useState<Job | null>(null); // if null, adding. if Job, editing.
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Job Editor Form States
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState<string>(DEPARTMENTS[0]);
  const [jobType, setJobType] = useState<Job["type"]>("Full-time");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [requirementsText, setRequirementsText] = useState(""); // newline separated
  const [responsibilitiesText, setResponsibilitiesText] = useState(""); // newline separated

  // Persistent session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = sessionStorage.getItem("paarth_admin_auth") === "true";
      if (loggedIn) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please enter both username and password.");
      return;
    }

    setIsLoggingIn(true);

    // Simple mock credentials validation
    setTimeout(() => {
      if (username.toLowerCase() === "admin" && password === "admin123") {
        setIsAuthenticated(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("paarth_admin_auth", "true");
        }
        toast.success("Successfully logged in as administrator.");
      } else {
        toast.error("Invalid username or password. (Hint: admin / admin123)");
      }
      setIsLoggingIn(false);
    }, 800);
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("paarth_admin_auth");
    }
    toast.info("Logged out of administrator session.");
  };

  // Open Editor for Creating
  const handleOpenAddModal = () => {
    setEditorJob(null);
    setTitle("");
    setDepartment(DEPARTMENTS[0]);
    setJobType("Full-time");
    setLocation("Ahmedabad, Gujarat");
    setExperience("");
    setSalary("");
    setDescription("");
    setRequirementsText("");
    setResponsibilitiesText("");
    setIsEditorOpen(true);
  };

  // Open Editor for Editing
  const handleOpenEditModal = (job: Job) => {
    setEditorJob(job);
    setTitle(job.title);
    setDepartment(job.department);
    setJobType(job.type);
    setLocation(job.location);
    setExperience(job.experience);
    setSalary(job.salary || "");
    setDescription(job.description);
    setRequirementsText(job.requirements.join("\n"));
    setResponsibilitiesText(job.responsibilities.join("\n"));
    setIsEditorOpen(true);
  };

  // Save Job (Create or Edit)
  const handleSaveJob = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !location || !experience || !description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const requirements = requirementsText
      .split("\n")
      .map((r) => r.trim())
      .filter((r) => r.length > 0);
    
    const responsibilities = responsibilitiesText
      .split("\n")
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    const jobData = {
      title,
      department,
      type: jobType,
      location,
      experience,
      salary: salary || undefined,
      description,
      requirements,
      responsibilities,
    };

    if (editorJob) {
      // Edit mode
      editJob(editorJob.id, jobData);
      toast.success(`Job "${title}" updated successfully.`);
    } else {
      // Add mode
      addJob(jobData);
      toast.success(`Job "${title}" posted successfully.`);
    }

    setIsEditorOpen(false);
  };

  // Confirm Delete
  const handleDeleteConfirm = () => {
    if (jobToDelete) {
      deleteJob(jobToDelete.id);
      toast.success(`Job "${jobToDelete.title}" removed successfully.`);
      setJobToDelete(null);
    }
  };

  // Filtered jobs for search
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Statistics calculation
  const totalOpenings = jobs.length;
  const uniqueDepts = new Set(jobs.map((j) => j.department)).size;
  const fullTimeJobs = jobs.filter((j) => j.type === "Full-time").length;

  // LOGIN SCREEN RENDER
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-secondary/40 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-white rounded-xl border border-border shadow-xl overflow-hidden animate-fade-up">
          {/* Brand header */}
          <div className="bg-charcoal px-6 py-8 text-center text-white relative">
            <div className="diag-shape opacity-20" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="grid size-12 place-items-center rounded-md bg-primary mb-3">
                <span className="font-display text-2xl font-extrabold text-white">P</span>
              </div>
              <h1 className="font-display text-xl font-bold tracking-tight">PAARTH SOLAR PUMPS</h1>
              <p className="text-xs text-white/70 mt-1">Careers Administration Portal</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider flex items-center gap-1.5">
                  <User className="size-3.5 text-muted-foreground" /> Username
                </label>
                <input
                  type="text"
                  placeholder="Enter admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider flex items-center gap-1.5">
                  <Key className="size-3.5 text-muted-foreground" /> Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="btn-primary w-full py-3 mt-2 flex items-center justify-center gap-2"
              >
                <Lock className="size-4" />
                {isLoggingIn ? "Authenticating..." : "Login to Dashboard"}
              </button>
            </form>

            {/* Helper Alert */}
            <div className="mt-6 p-4 rounded-lg bg-secondary/80 border text-xs text-muted-foreground flex gap-2.5">
              <AlertCircle className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-charcoal block mb-0.5">Mock Authentication Credentials:</span>
                Username: <code className="bg-white px-1 border rounded font-semibold text-charcoal">admin</code> <br/>
                Password: <code className="bg-white px-1 border rounded font-semibold text-charcoal">admin123</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD RENDER
  return (
    <div className="min-h-screen bg-secondary/20 pt-28 pb-16">
      <div className="container-x">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border shadow-sm mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
              <span className="size-2 rounded-full bg-eco animate-pulse" />
              System Active
            </div>
            <h1 className="font-display text-2xl font-bold text-charcoal mt-1">
              Careers Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage Paarth Solar Pumps job postings and career opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={handleOpenAddModal}
              className="btn-primary px-5 py-2.5 text-xs flex items-center gap-1.5"
            >
              <Plus className="size-4" /> Add New Job
            </button>
            <button 
              onClick={handleLogout}
              className="btn-outline border-border text-charcoal hover:bg-secondary hover:text-charcoal px-4 py-2.5 text-xs flex items-center gap-1.5"
            >
              <LogOut className="size-4" /> Logout
            </button>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid gap-6 sm:grid-cols-3 mb-8">
          {[
            { label: "Total Openings", val: totalOpenings, sub: "Published jobs", icon: Briefcase },
            { label: "Active Departments", val: uniqueDepts, sub: "Hiring segments", icon: Building },
            { label: "Full-Time Roles", val: fullTimeJobs, sub: "Permanent hires", icon: Clock },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                  {stat.label}
                </span>
                <span className="font-display text-3xl font-extrabold text-charcoal mt-1 block">
                  {stat.val}
                </span>
                <span className="text-xs text-muted-foreground block mt-0.5">
                  {stat.sub}
                </span>
              </div>
              <div className="grid size-12 place-items-center rounded-lg bg-primary/5 text-primary">
                <stat.icon className="size-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Job Management Table Container */}
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          {/* Actions & Search */}
          <div className="p-5 border-b flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="font-display font-bold text-charcoal">
              Active Job Postings ({filteredJobs.length})
            </h2>
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 rounded-md border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Table */}
          {filteredJobs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b text-xs font-bold text-charcoal uppercase tracking-wider">
                    <th className="px-6 py-4">Role / Title</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Posted Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredJobs.map((job) => (
                    <tr key={job.id} className="hover:bg-secondary/10 transition">
                      <td className="px-6 py-4 font-semibold text-charcoal">
                        {job.title}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-primary/5 text-primary text-xs font-semibold px-2 py-0.5 rounded">
                          {job.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex items-center gap-1.5 mt-1.5 md:mt-0">
                        <MapPin className="size-3.5 text-primary shrink-0" />
                        {job.location}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-secondary text-charcoal/80 text-xs font-semibold px-2 py-0.5 rounded">
                          {job.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-xs">
                        {job.postedDate}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditModal(job)}
                            className="p-1.5 text-charcoal hover:text-primary hover:bg-secondary rounded transition"
                            title="Edit Job"
                          >
                            <Edit className="size-4" />
                          </button>
                          <button
                            onClick={() => setJobToDelete(job)}
                            className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded transition"
                            title="Delete Job"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-muted-foreground">
              <Briefcase className="size-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm font-semibold">No postings found.</p>
              <p className="text-xs mt-1">Try creating a job posting or adjusting your search keywords.</p>
            </div>
          )}
        </div>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <Dialog open={!!jobToDelete} onOpenChange={(open) => !open && setJobToDelete(null)}>
        <DialogContent className="max-w-sm">
          {jobToDelete && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-lg font-bold text-charcoal">
                  Delete Job Posting?
                </DialogTitle>
                <DialogDescription className="text-sm">
                  Are you sure you want to delete <span className="font-semibold text-charcoal">"{jobToDelete.title}"</span>? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setJobToDelete(null)}
                  className="px-4 py-2 border rounded-md text-xs font-semibold hover:bg-secondary transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-destructive text-white hover:bg-destructive/90 rounded-md text-xs font-semibold transition"
                >
                  Delete Posting
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ADD / EDIT JOB MODAL */}
      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold text-charcoal">
              {editorJob ? "Edit Job Posting" : "Add New Job Posting"}
            </DialogTitle>
            <DialogDescription>
              Fill in details below to publish this career listing.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveJob} className="mt-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Job Title */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal">Job Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Software Engineer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input"
                />
              </div>

              {/* Department */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal">Department *</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="input"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Job Type */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal">Job Type *</label>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value as Job["type"])}
                  className="input"
                >
                  {JOB_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal">Location *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmedabad, Gujarat"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input"
                />
              </div>

              {/* Experience */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal">Experience Range *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2-5 years / Freshers"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="input"
                />
              </div>

              {/* Salary */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-charcoal">Salary Range (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. ₹5,00,000 - ₹7,00,000 P.A. / Competitive"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="input"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-charcoal">Job Description *</label>
              <textarea
                required
                placeholder="Give a brief summary of the role, team, and company culture."
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input resize-none"
              />
            </div>

            {/* Key Requirements */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-charcoal">
                Requirements (one bullet point per line)
              </label>
              <textarea
                placeholder="- Bachelor's degree in engineering&#10;- Experience in motor design&#10;- Strong problem solving skills"
                rows={4}
                value={requirementsText}
                onChange={(e) => setRequirementsText(e.target.value)}
                className="input"
              />
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-charcoal">
                Responsibilities (one bullet point per line)
              </label>
              <textarea
                placeholder="- Create 3D models of submersibles&#10;- Conduct type tests on motors&#10;- Troubleshoot field failure reports"
                rows={4}
                value={responsibilitiesText}
                onChange={(e) => setResponsibilitiesText(e.target.value)}
                className="input"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 border-t pt-4">
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="px-4 py-2 border rounded-md text-xs font-semibold hover:bg-secondary transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary px-5 py-2 text-xs"
              >
                {editorJob ? "Update Posting" : "Publish Posting"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
