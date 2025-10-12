import { DashboardHeader } from "@/components/dashboard-header"
import { AllergyBanner } from "@/components/allergy-banner"
import { HealthSnapshot } from "@/components/health-snapshot"
import { VitalsMicroTiles } from "@/components/vitals-micro-tiles"
import { EventFeed } from "@/components/event-feed"
import { MetricsGrid } from "@/components/metrics-grid"
import { MedicationAcknowledgment } from "@/components/medication-acknowledgment"

export default function BettiDashboard() {
  return (
    <div className="min-h-screen">
      {/* Allergy Banner - Always visible */}
      <AllergyBanner />

      {/* Responsive container padding */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
        {/* Header Section */}
        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column - Health Snapshot & Vitals */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <HealthSnapshot />
            <VitalsMicroTiles />
            <MedicationAcknowledgment />
            <MetricsGrid />
          </div>

          {/* Right Column - Event Feed */}
          <div className="lg:col-span-1">
            <EventFeed />
          </div>
        </div>
      </div>
    </div>
  )
}
