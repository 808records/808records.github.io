# 808states
A collaborative interactive site that documents the extensive popularity of the Roland TR-808 drum machine

## Setup

- Clone the project locally
- In terminal, make sure you have Ruby installed and you have run `gem install jekyll bundler`, for more information about installing Jekyll, refer to the [Jekyll website](https://jekyllrb.com/docs/quickstart/)
- Navigate into the project directory
- Install Gem dependencies in the by running `bundle install`
- To run the server in your local environment run `bundle exec jekyll serve` and go to [http://localhost:4000/](http://localhost:4000/) in your browser
- To compile a static build run `bundle exec jekyll build`

## Content and data

### Architecture
- [Tracks](_posts): Published tracks in the form of a post (uses posts directory feature of Jekyll)
- [Authors](_authors): Authors of posts (published tracks) - uses collection feature of Jekyll
- [Genres](_data/genres.yml): Genre of tracks (uses category feature of Jekyll in frontmatter and the [data_page_generator](https://github.com/avillafiorita/jekyll-datapage_gen) gem)
- [Years](_data/years.yml): Genre of tracks (uses category feature of Jekyll in frontmatter and the [data_page_generator](https://github.com/avillafiorita/jekyll-datapage_gen) gem)

#### Track posts are grouped by:
- **Tracks:** In chronological order of publishing date, paginated
- **Genres:** Genres of tracks, each genre has it's own page with respective tracks
- **Years:** Year of released tracks, each year has it's own page with respective tracks
- **Artists:** Artist of tracks with their related tracks, alphabetically listed on a single page
- **Authors:** Authors of posts (published tracks), each author has their own profile page with respective tracks

#### External sources
- Images are pulled in from the Discogs api from a the discogs release ID related to the track
- Embeds are generated from whatever embed is available, either (in order of preference):
  - Spotify URI (`spotify_track_URI`)
  - Bandcamp track ID and album ID (`album_ID` `track_ID`)
  - Soundcloud track ID (`soundcloud_track_ID`)
  - Tidal track ID (`tidal_track_ID`)
  - Youtube video ID (`youtube_video_ID`)

## Contributers
- [Matt Grey](himatt.com) - Design, UX, Jekyll templating (CSS, HTML, Liquid) and site architecture
- Alex Winter - Javascript
