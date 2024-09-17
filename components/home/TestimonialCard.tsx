"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  title,
  description,
  rating,
}: TestimonialProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-xl">
        <CardHeader className="p-6 bg-gradient-to-b from-accent to-[#03045e]">
          <motion.h2
            className="text-2xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-sm text-purple-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.p>
        </CardHeader>
        <CardContent className="p-6">
          <motion.p
            className="mb-4 text-white/60"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                } ${isHovered ? "animate-pulse" : ""}`}
                fill={index < rating ? "currentColor" : "none"}
              />
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
