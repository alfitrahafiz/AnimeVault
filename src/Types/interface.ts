export interface Anime {
  mal_id: number;
  title: string;
  images: { jpg: { image_url: string } };
  score: number;
  rank: number;
  type: string;
  episodes: number | null;
  status: string;
  genres: { name: string }[];
  rating: string;
  members: number;
  synopsis: string;
}
