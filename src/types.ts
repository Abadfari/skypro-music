export type TrackType = {
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: null;
  track_file: string;
  stared_user: StaredUser[];
};

type StaredUser = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};
