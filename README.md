# Ans:Here given Some project features in Course Registration:


- Course Selection: Users can select courses by clicking the "Select" button, which adds the chosen course to their enrollment list.
- The system tracks the user's remaining credit hours and ensures that they do not exceed a predefined credit limit (in this case, 20 credit hours).
- Total Credit Hours: Users can see the total credit hours of their selected courses for better academic planning.
- Real-time Feedback: To enhance user experience, the system leverages toast notifications. These notifications provide immediate, context-sensitive feedback to users, including notifications of successful course enrollments, warnings about credit limit breaches, and alerts for zero remaining credit balance.
- Cart Summary: A separate cart section displays a summary of the selected courses,remaining credit balance, and total price.

# Ans:Here given how i manage the state in my assignment project:


1. Course Data (courses): The project fetches course data from an API and stores it in the courses state using the useState hook.
2. Selected Courses (selectedCourses): To keep track of user-selected courses, the selectedCourses state is used. When a user clicks the "Select" button for a course, it is added to this array. This state provides a dynamic list of chosen courses.
3. Remaining Credits (remaining): The remaining state is essential for monitoring available credit hours. It is initially set to 20, which is the maximum allowed credit limit. When users select courses, this state is updated  the remaining credits.
4. Total Credits (totalCredit): This state calculates the total credit hours for all selected courses. It starts at 0 and increases as courses are added.
5. Total Price (totalPrice): The totalPrice state keeps track of the cumulative cost of the selected courses. It dynamically updates as user modify his selections.
