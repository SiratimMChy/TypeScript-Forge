const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
validateAgeAsync(20)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

validateAgeAsync(15)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

  await validateAgeAsync(15);
  await validateAgeAsync(25);