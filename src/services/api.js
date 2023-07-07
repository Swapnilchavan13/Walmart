// Mock API functions
const api = {
    login: (username, password) => {
      // Simulating API call and response
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === "admin" && password === "password") {
            resolve({
              success: true,
              user: {
                name: "Admin User",
                email: "admin@example.com",
              },
            });
          } else {
            resolve({
              success: false,
              error: "Invalid username or password",
            });
          }
        }, 1000);
      });
    },
  };
  
  export default api;
  