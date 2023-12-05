export async function signUp({ name, email, password, student }) {
    try {
        const url = 'https://attendancesystemcc1.azurewebsites.net/api/signUp';

        const requestBody = {
            name: name,
            email: email,
            password: password,
            student: student
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(requestBody)
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
        const url = 'https://attendancesystemcc1.azurewebsites.net/api/login';

        // Prepare the request body
        const requestBody = {
            email: email,
            password: password,
            student: student
        };

        const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
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


export async function addNewCourse({ course_code, course_name, prof_email }) {
    try {
        const url = 'https://attendancesystemcc1.azurewebsites.net/api/addNewCourse';

        // Prepare the request body
        const requestBody = {
            course_code: course_code,
            course_name: course_name,
            prof_email: prof_email
        };

        const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
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
        const url = 'https://attendancesystemcc1.azurewebsites.net/api/addNewStudent';

        // Prepare the request body
        const requestBody = {
            student_email: student_email,
            course_code: course_code
        };

        const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
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
        const url = 'https://attendancesystemcc1.azurewebsites.net/api/addAttendanceLog';

        // Prepare the request body
        const requestBody = {
            course_code: course_code
        };

        // Make the POST request
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other required headers here
            },
            body: JSON.stringify(requestBody)
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


export async function createCode() {
    try {
        const url = 'https://attendancesystemcc1.azurewebsites.net/api/createCode';

        // Make the GET request
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                // Add any required headers here
            }
        });

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Get the response text (code)
        const data = await response.text();

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

export async function verifyCode(studentInput) {
    try {
        const url = 'https://attendancesystemcc1.azurewebsites.net/api/verifyCode';

        // Prepare the request body
        const requestBody = {
            studentInput: studentInput
        };

        // Make the POST request
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other required headers here
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.text();

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

