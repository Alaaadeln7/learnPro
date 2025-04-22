export interface UserCredentials {
  email: string;
  password: string;
}
export interface CourseData {
  id: number;
  title: string;
  rating: number;
  lastUpdates: string;
  StudentsEnrolled: number;
  image: string;
}

export interface DecodedToken {
  userId: number;
  email: string;
  iat?: number;
  exp?: number;
}
