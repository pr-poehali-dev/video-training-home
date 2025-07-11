import Hero from "@/components/Hero";
import WorkoutProgram from "@/components/WorkoutProgram";
import Benefits from "@/components/Benefits";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import ApplicationForm from "@/components/ApplicationForm";
import TelegramWidget from "@/components/TelegramWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WorkoutProgram />
      <Benefits />
      <PricingPlans />
      <Testimonials />
      <ApplicationForm />
      <TelegramWidget />
    </div>
  );
};

export default Index;
