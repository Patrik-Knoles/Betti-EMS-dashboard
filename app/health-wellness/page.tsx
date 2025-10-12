import { AllergyBanner } from "@/components/allergy-banner"
import { HealthSnapshot } from "@/components/health-snapshot"
import { VitalsMicroTiles } from "@/components/vitals-micro-tiles"
import { MetricsGrid } from "@/components/metrics-grid"
import { MedicationAcknowledgment } from "@/components/medication-acknowledgment"

export default function HealthWellnessPage() {
  return (
    <div className="min-h-screen">
      <AllergyBanner />

      <div className="container mx-auto px-4 py-6 space-y-6">
        <div className="mb-6">
          <h1 className="text-3xl font-serif font-bold text-foreground">Health & Wellness</h1>
          <p className="text-muted-foreground mt-2">Comprehensive health monitoring and medication tracking</p>
        </div>

        <div className="space-y-6">
          <HealthSnapshot />
          <VitalsMicroTiles />
          <MedicationAcknowledgment />
          <MetricsGrid />
        </div>
      </div>
    </div>
  )
}
