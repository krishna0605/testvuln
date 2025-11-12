"use client";

import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { ProjectsList } from "@/components/dashboard/ProjectsList";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ActionButtons } from "@/components/dashboard/ActionButtons";

export default function DashboardPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap justify-between items-start gap-6 mb-8">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight tracking-tight">Dashboard</h1>
          <p className="text-text-secondary text-base font-normal leading-normal">Welcome back, Alex. Here’s your security overview.</p>
        </div>
        <ActionButtons />
      </div>
      <SummaryCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <ProjectsList />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </main>
  );
}
