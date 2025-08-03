import { courses, users } from './mockData';
import { Course } from './mockDataTypes';

export function getCategories(): string[] {
  const categories: string[] = [];

  for (const course of courses) {
    if (!categories.includes(course.category)) {
      categories.push(course.category);
    }
  }

  return categories;
}

export function getInstructorName(id: string) {
  const user = users.find((user) => user._id === id);

  return user?.name;
}

export function getSingleInstructor(id: string) {
  return users.find((user) => user._id === id);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((course) => course.featured);
}

export function getSingleCourse(id: string): Course {
  return courses.find((course) => course._id === id)!;
}
