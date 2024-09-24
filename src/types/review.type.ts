import { PageInfo } from "./common.type";

export interface ReviewGallery {
  label: string | null;
  large_url: string;
  preview_url: string;
  url: string;
  __typename: "ReviewGallery";
}

export interface RatingVotes {
  label: string;
  percent: number;
  __typename: "RatingVotes";
}

export interface Review {
  avatar: string;
  created_at: string;
  detail: string;
  gallery: ReviewGallery[];
  rating_votes: RatingVotes[];
  nickname: string;
  title: string;
  review_detail_id: number;
  likes_num: number;
  __typename: "Review";
}

export interface Reviews {
  total_count: number;
  items: Review[];
  __typename: "Reviews";
  page_info: PageInfo;
}

export interface ReviewsResponse {
  data: {
    reviews: Reviews;
  };
}
