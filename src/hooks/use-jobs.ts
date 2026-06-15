import { useState, useEffect } from "react";
import { Job, DEFAULT_JOBS } from "@/data/jobs";

const STORAGE_KEY = "paarth_careers_jobs";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(DEFAULT_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setJobs(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse stored jobs", e);
        }
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_JOBS));
      }
      setLoading(false);
    }
  }, []);

  const saveJobs = (newJobs: Job[]) => {
    setJobs(newJobs);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newJobs));
    }
  };

  const addJob = (job: Omit<Job, "id" | "postedDate">) => {
    const newJob: Job = {
      ...job,
      id: Math.random().toString(36).substring(2, 9),
      postedDate: new Date().toISOString().split("T")[0],
    };
    saveJobs([newJob, ...jobs]);
    return newJob;
  };

  const editJob = (id: string, updatedFields: Partial<Omit<Job, "id" | "postedDate">>) => {
    const updated = jobs.map((job) =>
      job.id === id ? { ...job, ...updatedFields } : job
    );
    saveJobs(updated);
  };

  const deleteJob = (id: string) => {
    const filtered = jobs.filter((job) => job.id !== id);
    saveJobs(filtered);
  };

  return { jobs, loading, addJob, editJob, deleteJob };
}
