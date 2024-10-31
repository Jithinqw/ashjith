export const getHotels = () => {
  fetch("https://ashjithserver.vercel.app/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((newUserData) => {
      console.log("New User Data:", newUserData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getDestinations = () => {
    fetch("https://ashjithserver.vercel.app/sites", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((newUserData) => {
      console.log("New User Data:", newUserData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}