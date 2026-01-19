export interface GeneralSurveyData {
  age_group: string;
  occupation: string;
  primary_location: string;
  education_level?: string; // Optional field
  primary_interest: string;
  topic_importance: string; // From your JSON, this is a select/string
  weekly_hours: number;
  usage_frequency: string;
  biggest_challenge: string;
  proposed_solution?: string; // Optional field
  discovery_source?: string; // Optional field
  additional_thoughts?: string; // Optional field
}