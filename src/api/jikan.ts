import axios from 'axios';
import { Anime } from '../Types/interface';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});

type GetTopAnimeParams = {
  page?: number;
  limit?: number;
  filter?: string;
};

export const getTopAnime = async (params?: GetTopAnimeParams) => {
  const { data } = await api.get<{
    data: Anime[];
    pagination: {
      has_next_page: boolean;
      last_visible_page: number;
      current_page: number;
    };
  }>('/top/anime', { params });

  return {
    data: data.data,
    hasNext: data.pagination.has_next_page,
    currentPage: data.pagination.current_page,
    lastPage: data.pagination.last_visible_page,
  };
};
