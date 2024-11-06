export enum UserGender {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export enum Interests {
  MEN = "Men",
  WOMEN = "Women",
  BOTH = "Both",
}

export enum OnBoarding {
  BASIC = "Basic",
  LOCATION = "Location",
  PHOTOS = "Photos",
  INTRDUCTION = "Introduction",
  INTERESTS = "Interests",
  HOBBIES = "Hobbies",
  COMPLETED = "Completed",
}

export interface User {
  id: string;
  active: boolean;
  created_by: number;
  updated_by: number;
  deleted_by: number;
  role: "Admin" | "User";
  uid: string;
  provider: string;
  interest: Interests;
  google_id: string;
  facebook_id: string;
  firebase_id: string;
  apple_id: string;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  profileBio: string;
  phone_code: string;
  phone: string;
  enable_2fa: boolean;
  send_email: boolean;
  send_sms: boolean;
  send_push: boolean;
  last_login_at: string;
  heritageCountry: string;
  heritageState: string;
  dob: string;
  njid: number;
  onBoarding: OnBoarding;
  on_boarding: OnBoarding;
  gender: UserGender;
  location: Location;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
