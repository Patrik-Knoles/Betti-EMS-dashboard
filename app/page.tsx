import { DashboardHeader } from "@/components/dashboard-header";
import { AllergyBanner } from "@/components/allergy-banner";
import { HealthSnapshot } from "@/components/health-snapshot";
import { VitalsMicroTiles } from "@/components/vitals-micro-tiles";
import { EventFeed } from "@/components/event-feed";
import { OccupancyCard } from "@/components/occupancy-card";
import { MetricsGrid } from "@/components/metrics-grid";
import { MedicationAcknowledgment } from "@/components/medication-acknowledgment";
import { MentalHealthCard } from "@/components/mental-health-card";

export default function BettiDashboard() {
  return (
    <div className="min-h-screen">
      {/* Allergy Banner - Always visible */}
      <AllergyBanner />

      {/* Responsive container padding */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
        {/* Header Section */}
        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column - Health Snapshot & Vitals */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <HealthSnapshot />
            <VitalsMicroTiles />

            <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-top-4 duration-500 delay-300">
              <MedicationAcknowledgment />
              <MetricsGrid />
            </div>

            <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-top-4 duration-500 delay-300">
              <OccupancyCard />
              <MentalHealthCard />
            </div>
          </div>

          {/* Right Column - Event Feed */}
          {/* <div className="grid animate-in fade-in slide-in-from-top-4 duration-500 delay-300">
            <EventFeed />
          </div> */}
        </div>
        <EventFeed />
      </div>
    </div>
  );
}
