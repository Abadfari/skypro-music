export async function getAllTracks() {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all"
    );
    const isResponseOk = response.ok;
    const result = await response.json();
    if (!isResponseOk) {
      throw new Error(result);
    }
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getFavoriteTracks({ token }: { token: string }) {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/favorite/all",
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    const isResponseOk = response.ok;
    const result = await response.json();
    if (!isResponseOk) {
      throw new Error(result);
    }
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCategoryTracks({ id }: { id: string }) {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/" + id
    );
    const isResponseOk = response.ok;
    const result = await response.json();
    if (!isResponseOk) {
      throw new Error(result);
    }
    return { items: result.data.items, name: result.data.name };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function likeTrack({
  trackId,
  access,
}: {
  trackId: number;
  access: string;
  refresh: string;
}) {
  try {
    const response = await fetch(
      `https://webdev-music-003b5b991590.herokuapp.com/catalog/track/${trackId}/favorite`,
      {
        method: "POST",
        headers: {
          authorization: "Bearer " + access,
        },
      }
    );
    const isResponseOk = response.ok;
    const result = await response.json();
    if (!isResponseOk) {
      throw new Error(result);
    }
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function dislikeTrack({
  trackId,
  access,
  refresh,
}: {
  trackId: number;
  access: string;
  refresh: string;
}) {
  try {
    const response = await fetch(
      `https://webdev-music-003b5b991590.herokuapp.com/catalog/track/${trackId}/favorite`,
      {
        method: "DELETE",
        headers: {
          authorization: "Bearer " + access,
        },
      }
    );
    const isResponseOk = response.ok;
    const result = await response.json();
    if (!isResponseOk) {
      throw new Error(result);
    }
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
