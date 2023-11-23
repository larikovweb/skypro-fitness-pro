import { useSelector } from 'react-redux';
import { useCourses } from './useCourses';
import { UserCourseState } from '../store/slices/userCourseSlice';

export const useUserCourses = () => {
  const {
    data: ids,
    status,
    error,
  } = useSelector((state: { userCourses: UserCourseState }) => state.userCourses);

  const { data: courses } = useCourses();

  const data = courses.filter((course) => ids?.includes(course.id.toString()));

  return {
    data,
    status,
    error,
  };
};
