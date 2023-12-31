export async function signUp({ name, email, password, student }) {
    try {
        // Encode each parameter separately
        const encodedName = encodeURIComponent(name);
        const encodedEmail = encodeURIComponent(email);
        const encodedPassword = encodeURIComponent(password);
        const encodedStudent = encodeURIComponent(student);

        // Construct the query string using the encoded parameters
        const queryParams = `name=${encodedName}&email=${encodedEmail}&password=${encodedPassword}&student=${encodedStudent}`;
        const url = `https://attendancesystemcc1.azurewebsites.net/api/signUp?${queryParams}`;

        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        return {
            status: 200,
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: `There was an error calling the Azure Function: ${error.message}`
            }
        };
    }
}

export async function login({ email, password, student }) {
    try {
        const queryParams = new URLSearchParams({ email, password, student }).toString();
        const url = `https://attendancesystemcc1.azurewebsites.net/api/login?${queryParams}`;

        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.successful === true) {
            // Only return data if 'successful' is true
            return {
                status: 200,
                body: data
            };
        } else {
            return {
                status: 200,
                body: {
                    error: "Login credentials are incorrect"
                }
            };
        }
    } catch (error) {
        return {
            status: 500,
            body: {
                error: `There was an error calling the Azure Function: ${error.message}`
            }
        };
    }
}



export async function addNewCourse({ course_code, course_name, prof_email }) {
    try {
        // Construct the URL with query parameters
        const queryParams = new URLSearchParams({ course_code, course_name, prof_email }).toString();
        const url = `https://attendancesystemcc1.azurewebsites.net/api/addNewCourse?${queryParams}`;

        const response = await fetch(url, {
            method: 'GET', // Change method to 'GET'
            // Remove the body
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        return {
            status: 200,
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: `There was an error calling the Azure Function: ${error.message}`
            }
        };
    }
}

export async function addNewStudent({ student_email, course_code }) {
    try {
        // Construct the URL with query parameters
        const queryParams = new URLSearchParams({ student_email, course_code }).toString();
        const url = `https://attendancesystemcc1.azurewebsites.net/api/addNewStudent?${queryParams}`;

        const response = await fetch(url, {
            method: 'GET', // Change method to 'GET'
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        return {
            status: 200,
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: `There was an error calling the Azure Function: ${error.message}`
            }
        };
    }
}


export async function addAttendanceLog(course_code) {
    try {
        // Construct the URL with query parameters
        const queryParams = new URLSearchParams({ course_code }).toString();
        const url = `https://attendancesystemcc1.azurewebsites.net/api/addAttendanceLog?${queryParams}`;

        // Make the POST request
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ course_code }) // Send the course_code in the request body
        });

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        return {
            status: 200,
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: `There was an error calling the Azure Function: ${error.message}`
            }
        };
    }
}



export async function verifyCode(studentInput, email, courseCode) {
    try {
        // Construct the URL with query parameters
        const queryParams = new URLSearchParams({
            student_input: studentInput,
            email: email,
            course_code: courseCode
        }).toString();
        const url = `https://attendancesystemcc1.azurewebsites.net/api/verifyCode?${queryParams}`;

        // Make the GET request
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON response

        return {
            status: 200,
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: `There was an error calling the Azure Function: ${error.message}`
            }
        };
    }
}



export async function sendCode(courseCode) {
    try {
        // Construct the URL with query parameters
        const queryParams = new URLSearchParams({ course_code: courseCode }).toString();
        const url = `https://attendancesystemcc1.azurewebsites.net/api/sendCode?${queryParams}`;

        // Make the GET request
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        return {
            status: 200,
            body: data
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: `There was an error calling the Azure Function: ${error.message}`
            }
        };
    }
}

