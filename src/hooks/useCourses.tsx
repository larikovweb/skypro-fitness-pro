import { useSelector } from 'react-redux';
import { CourseState } from '../store/slices/courseSlice';

export const useCourses = () => {
  const { data, status, error } = useSelector((state: { courses: CourseState }) => state.courses);

  return {
    data,
    status,
    error,
  };
};
