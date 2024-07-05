export async function getAllTracks() {
  try {
    const response = await fetch(
      "https://skypro-music-api.skyeng.tech/catalog/track/all/"
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

