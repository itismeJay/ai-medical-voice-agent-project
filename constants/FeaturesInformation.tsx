import { LucideIcon, Mic } from "lucide-react";
import { NotepadText } from "lucide-react";
import { Zap } from "lucide-react";
import { Shield } from "lucide-react";

type Feature = {
  id: number;
  icon: LucideIcon;
  Header: string;
  Subheader: string;
};

const FeaturesInformation: Feature[] = [
  {
    id: 1,
    icon: Mic,
    Header: "Real-time Voice Transcription",
    Subheader:
      "Speak naturally and watch your symptoms get transcribed in real-time with high accuracy",
  },
  {
    id: 2,
    icon: NotepadText,
    Header: "Medical Report Generation",
    Subheader:
      "Get comprehensive AI-generated health reports based on your symptoms and history",
  },
  {
    id: 3,
    icon: Zap,
    Header: "Symptom Tracking",
    Subheader:
      "Track patterns, triggers, and progression of your symptoms over time automatically",
  },
  {
    id: 4,
    icon: Shield,
    Header: "AI-powered Suggestions",
    Subheader:
      "Receive intelligent recommendations and insights based on medical knowledge",
  },
];

export default FeaturesInformation;
