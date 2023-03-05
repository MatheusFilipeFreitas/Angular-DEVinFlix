export interface ISerie {
  url: string,
  name: string,
  contentType: string,
  description: string,
  contentRating: string,
  genre: string,
  poster: string,
  formattedDuration: string,
  releasedDate: string,
  actors: string,
  director: string,
  creator: string,
  audio: string,
  subtitle: string,
  availableForOffline: string,
  numberOfSeasons: string,
  seasonStartDate: string,
  source: string,
  sourceLink: string,
  id: string,
  scrapedAt: string
}

export class Serie implements ISerie {
  url!: string;
  name!: string;
  contentType!: string;
  description!: string;
  contentRating!: string;
  genre!: string;
  poster!: string;
  formattedDuration!: string;
  releasedDate!: string;
  actors!: string;
  director!: string;
  creator!: string;
  audio!: string;
  subtitle!: string;
  availableForOffline!: string;
  numberOfSeasons!: string;
  seasonStartDate!: string;
  source!: string;
  sourceLink!: string;
  id!: string;
  scrapedAt!: string;
}
