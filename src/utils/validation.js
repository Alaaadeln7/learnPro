import * as yup from "yup";
export const registerSchema = yup.object().shape({
  fullName: yup.string().required("fullName required").min(2).max(50),
  email: yup.string().email().required("email required").min(2).max(50),
  password: yup.string().required("password required").min(2).max(50),
  role: yup.mixed().oneOf(["admin", "student", "instructor"], "Role must be one of admin, student, or instructor").required("Role is required."),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("email required").min(2).max(50),
  password: yup.string().required("password required").min(2).max(50),
});



const courseValidationSchema = yup.object({
  title: yup.string().required("Title is required"),
  thumbnail: yup.string().url("Invalid thumbnail URL").required("Thumbnail is required"),
  courseLevel: yup.string().oneOf(['beginner', 'intermediate', 'advanced'], "Invalid course level").required("Course level is required"),
  language: yup.string().oneOf(['english', 'spanish', 'french'], "Invalid language").required("Language is required"),
  timeZone: yup.string().required("Time zone is required"),
  startDate: yup.date().required("Start date is required").min(new Date(), "Start date cannot be in the past"),
  endDate: yup.date().required("End date is required").min(yup.ref('startDate'), "End date cannot be before the start date"),
  instructorBio: yup.string().required("Instructor bio is required"),
  description: yup.string().required("Description is required"),
  allowPersonliaze: yup.boolean(),
  allAssignmentMustBeSubmited: yup.boolean(),
  allowStudentAttachFiles: yup.boolean(),
  allowStudentsCreateDiscussions: yup.boolean(),
  allowStudentsEditOrDelete: yup.boolean(),
  allowStudentOrganize: yup.boolean(),
  hideTotalsInStudentGradesSummary: yup.boolean(),
  // modules: yup.array().of(
  //   yup.object({
  //     title: yup.string().required("Module title is required"),
  //     lessons: yup.array().of(
  //       yup.object({
  //         title: yup.string().required("Lesson title is required"),
  //         content: yup.string().required("Lesson content is required"),
  //       })
  //     ).required("At least one lesson is required in each module")
  //   })
  // ).required("Modules are required"),
  announcements: yup.array().of(
    yup.object({
      title: yup.string().required("Announcement title is required"),
      content: yup.array().of(
        yup.object({
          title: yup.string().required("Announcement content title is required"),
          message: yup.string().required("Announcement message is required"),
        })
      ).required("Content is required for each announcement")
    })
  ).required("At least one announcement is required"),
  assignments: yup.array().of(
    yup.object({
      id: yup.string().required("Assignment ID is required"),
      completed: yup.boolean().required("Completion status is required"),
      createdAt: yup.date().required("Creation date is required"),
      updatedAt: yup.date().required("Update date is required"),
      courseId: yup.number().required("Course ID is required"),
      quizs: yup.array().of(
        yup.object({
          id: yup.string().required("Quiz ID is required"),
          title: yup.string().required("Quiz title is required"),
          dueDate: yup.date().required("Due date is required"),
          timeLimit: yup.number().required("Time limit is required"),
          gradingMethod: yup.string().oneOf(['Percentage', 'Points'], "Invalid grading method").required("Grading method is required"),
          numberOfAttempts: yup.number().required("Number of attempts is required"),
          description: yup.string().required("Quiz description is required"),
          shuffleQuestions: yup.boolean().required("Shuffle questions setting is required"),
          shuffleAnswer: yup.boolean().required("Shuffle answers setting is required"),
          feedbackOptions: yup.boolean().required("Feedback options setting is required"),
        })
      ).required("At least one quiz is required for each assignment")
    })
  ).required("At least one assignment is required"),
  grades: yup.object().shape({
    student1: yup.object({
      percentage: yup.number().min(0).max(100).required("Percentage is required"),
      grade: yup.string().oneOf(["A", "B", "C", "D", "F"], "Invalid grade").required("Grade is required")
    }),
    student2: yup.object({
      percentage: yup.number().min(0).max(100).required("Percentage is required"),
      grade: yup.string().oneOf(["A", "B", "C", "D", "F"], "Invalid grade").required("Grade is required")
    })
  }).required("Grades are required"),
  // Rubrics: yup.array().of(
  //   yup.object({
  //     criteria: yup.string().required("Criteria is required"),
  //     points: yup.number().min(0).required("Points are required"),
  //     description: yup.string().required("Description is required"),
  //   })
  // ).required("Rubrics are required"),

});

export { courseValidationSchema };
