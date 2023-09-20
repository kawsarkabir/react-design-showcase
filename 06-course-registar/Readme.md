# Course-Registration

### Here is a most interesting features in this project

- If you click on the select button,you will know how many credits in this course
- You can select any course name only once
- An alert will show when your course credits cannot go beyond 20

### Now, I discuss how to managed the state in my assignment project.

- Course Selection State:
I am  using the courseName state variable to store an array of selected courses. This array holds the courses that the user has chosen to add.
I update this state whenever a user clicks on a course to add it to their selection list.

- Remaining Reading Time State:
I have remainTime state variable to keep track of the remaining reading time available for the user. It is initialized to 0 and updated whenever a user adds a course. The calculation is done as 20 - newReadingTime, where newReadingTime is the sum of credit hours of the selected courses.

- Total Reading Time State:
I am using readingTime state variable to keep track of the total reading time based on the selected courses. This state is updated whenever a course is added or removed.
 
- Total Price State:
the total price of selected courses using the prevPrice state variable. It is updated whenever a new course is added.

- Handling Course Selection:
handleButtonClick function that adds courses to the courseName array. It also performs checks to ensure that the total reading time does not exceed 20 hours. If it does, a toast notification is shown.

- Displaying State in Components:
You pass the relevant state variables (courseName, readingTime, prevPrice, remainTime) as props to child components like CourseAside. This allows you to display this information in your UI.
 
