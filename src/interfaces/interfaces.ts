export interface IUser {
  email: string | null;
  token: string | null;
  id: string | null;
}

export interface IExercise {
  name: string;
  reps: number;
}

export interface IWorkout {
  id: number;
  title: string;
  url: string;
  exercises: IExercise[];
}

export interface ICourse {
  id: number;
  name: string;
  img: string;
  description: string;
  suitableFor: string[];
  focus: string[];
  workouts: IWorkout[];
}

export interface IFirebase {
  courses: ICourse[];
  userData: IUserData;
}

export interface IUserData {
  courses: ICourse[] | [];
}
