/**
 * Retrieves ids from a list of students.
 * @param {{
*   id: number,
*   firstName: string,
*   location: string
* }[]} students - The list of students.
* @returns {number[]} An array of student ids.
*/
export default function getListStudentIds(students) {
 if (Array.isArray(students)) {
   return students.map((student) => student.id);
 }
 return [];
}