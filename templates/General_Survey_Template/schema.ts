import { z } from "zod";

export const GeneralSurveySchema = z.object({
  age_group: z.enum(["Under 18", "18-24", "25-34", "35-44", "45-54", "55+"]),
  occupation: z.string().min(1, "Occupation is required"),
  primary_location: z.string().min(1, "Location is required"),
  education_level: z.string().optional(),
  primary_interest: z.enum(["Technology", "Business", "Arts & Design", "Science", "Healthcare", "Other"]),
  topic_importance: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
  weekly_hours: z.number().min(0, "Hours cannot be negative").max(168, "Max 168 hours per week"),
  usage_frequency: z.enum(["Daily", "Weekly", "Monthly", "Rarely", "Never"]),
  biggest_challenge: z.string().min(1, "Please describe your challenges"),
  proposed_solution: z.string().optional(),
  discovery_source: z.string().optional(),
  additional_thoughts: z.string().optional(),
});