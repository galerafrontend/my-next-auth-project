export const changePasswordHandler = async (passwordData) => {
  const response = await fetch("/api/user/changePassword", {
    method: "PATCH",
    body: JSON.stringify(passwordData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};
