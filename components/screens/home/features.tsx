import Center from "@/components/base/center";
import Heading from "@/components/base/heading/heading";
import FeatureCard from "@/components/cards/feature-card";
import { BoxSelect, SendToBack, ShieldCheck } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
/**
 * Renders a list of features with icons, titles, and descriptions.
 *
 * @return {JSX.Element} The rendered JSX element representing the list of features.
 */
const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Lightweight",
      description:
        "Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress.",
    },
    {
      icon: SendToBack,
      title: "Decentralization",
      description:
        "Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed by design.",
    },
    {
      icon: BoxSelect,
      title: "No subscription",
      description:
        "With Pay-as-you-go pricing, now you only pay for the resource you use without being charged a flat monthly fee even if you don’t use it up.",
    },
  ];
  return (
    <Center className="gap-20" id="features">
      {/* Title */}
      <Heading tag="h2" size="medium">
        Lightning fast. Better privacy. Fairer cost.
      </Heading>
      {/* Features List */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard {...feature} />
        ))}
      </div>
    </Center>
  );
};

export default Features;