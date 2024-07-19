export async function signIn({
  data,
}: {
  data: { email: string; password: string };
}) {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/user/login/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const isResponseOk = response.ok;
    const result = await response.json();
    if (!isResponseOk) {
      throw new Error(result);
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signUp({
  data,
}: {
  data: { email: string; password: string; username: string };
}) {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/user/signup/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const isResponseOk = response.ok;
    const result = await response.json();
    if (!isResponseOk) {
      throw new Error(result);
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}
