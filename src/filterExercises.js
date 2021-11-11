import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort

export const getStudentsInCohort = (cohortInt) => {
  const copyOfStudents = [...students];
  let studentArray = copyOfStudents.filter((obj) => {
    return obj.cohort === cohortInt;
  });
  return studentArray;
};

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students

export const getFullTimeStudents = () => {
  let studentArray = students.filter((obj) => {
    return obj.fullTime;
  });
  console.log("studentArray is ", studentArray);
  return studentArray;
};

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor

export const getStudentsByInstructorId = (id) => {
  return students.filter((obj) => obj.intructorId === id);
};
console.log(getStudentsByInstructorId(1));

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned

export const getPolyglotStudents = (languageCount) => {
  let studentArray = students.filter(
    (obj) => obj.languages.length >= languageCount
  );
  return studentArray;
};

// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students

export const getAvailableInstructors = () => {
  let noStudents = [];
  let instrArray = [
    (instr1 = []),
    (instr2 = []),
    (instr3 = []),
    (instr4 = []),
    (instr5 = []),
    (instr6 = []),
    (other = []),
  ];
  students.filter((obj) => {
    switch (obj.instructorId) {
      case 1:
        instrArray[0].push(obj);
        break;
      case 2:
        instrArray[1].push(obj);
        break;
      case 3:
        instrArray[2].push(obj);
        break;
      case 4:
        instrArray[3].push(obj);
        break;
      case 5:
        instrArray[4].push(obj);
        break;
      case 6:
        instrArray[5].push(obj);
        break;
      default:
        instrArray[6].push(obj);
    }

    for (let i = 0; i < instrArray.length; i++) {
      if (instrArray[i].length === 0) {
        noStudents = instrArray[i];
      }
    }
  });
};

// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method

export const getStudentsByLanguage = (language) => {
  const checkSpeaks = (languages, language) => {
    let studentArray = languages.some((str) => str === language);
    return studentArray;
  };

  let studentArray = students.filter((obj) => {
    checkSpeaks(obj.languages, language);
  });
  return studentArray;
};

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
