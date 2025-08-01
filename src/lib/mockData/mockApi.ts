import { courses } from './mockData';

export function getCategories(): string[] {
  const categories: string[] = [];

  for (const course of courses) {
    if (!categories.includes(course.category)) {
      categories.push(course.category);
    }
  }

  return categories;
}
