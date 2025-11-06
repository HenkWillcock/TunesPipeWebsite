import { Card } from "./ui/card";
import { Shield, Users, Code } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Shield,
    title: "Privacy First",
    description: "No tracking, no data collection, no user profiles. Your listening habits are yours alone. Experience premium music streaming without giving away your personal information."
  },
  {
    id: 2,
    icon: Users,
    title: "Competition Matters",
    description: "Big players like Spotify need real competition to stay honest. When one company dominates, services degrade and users lose. We're here to keep the ecosystem healthy."
  },
  {
    id: 3,
    icon: Code,
    title: "Open Source Spirit",
    description: "Built on the NewPipeExtractor, we embrace transparency and community-driven development. No black boxes, no hidden agendas—just honest software."
  }
];

export function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Why tunes pipe?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium features without the premium surveillance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.id}
                className="bg-gray-950 border-gray-800 p-8 hover:border-blue-900 transition-all"
              >
                <div className="w-14 h-14 bg-blue-950 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-white text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
