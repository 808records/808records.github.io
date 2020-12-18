# 808states
A collaborative interactive site that documents the extensive popularity of the Roland TR-808 drum machine

## Setup

This site runs on Jekyll, an opensource static site generating platform.

- Clone or download a zip of this project to your computer and navigate to the
  project directory in your terminal
  
- Make sure Ruby is installed, to check if it is, run:
  ```
  ruby -v
  ``` 
  For more information about installing Ruby, refer to the [Ruby installation ](https://www.ruby-lang.org/en/documentation/installation/).

- Install the Jekyll and bundler [gems](https://jekyllrb.com/docs/ruby-101/#gems) from the commandline:
  ```
  gem install jekyll bundler
  ```
  For more information about installing Jekyll, refer to the [Jekyll quickstart guide](https://jekyllrb.com/docs/quickstart/)


- Install Gem dependencies for the project by running:
  ```
  bundle install
  ```
  
- To run the server in your local environment run:
  ```
  bundle exec jekyll serve
  ```
  
- Go to http://localhost:8080/ in your browser

## Content and data

### Architecture
- [Tracks](_posts): Published tracks in the form of a post (uses posts directory feature of Jekyll)
- [Authors](_authors): Authors of posts (published tracks) - uses collection feature of Jekyll
- [Genres](_data/genres.yml): Genre of tracks (uses category feature of Jekyll in frontmatter and the [Jekyll data_page_generator](https://github.com/avillafiorita/jekyll-datapage_gen) plugin)
- [Years](_data/years.yml): Year of track release (Uses the [Jekyll data_page_generator](https://github.com/avillafiorita/jekyll-datapage_gen) plugin)

#### Track posts are grouped by:
- **Tracks:** In chronological order of publishing date, paginated
- **Genres:** Genres of tracks, each genre has it's own page with respective tracks
- **Years:** Year of released tracks, each year has it's own page with respective tracks
- **Artists:** Artist of tracks with their related tracks, alphabetically listed on a single page
- **Authors:** Authors of posts (published tracks), each author has their own profile page with respective tracks

#### External sources
- Images are pulled in from the Discogs api from a the discogs release ID related to the track
- Embeds are generated from whatever embedding method is available, either (in order of preference):
  - Spotify URI (`spotify_track_URI`)
  - Bandcamp track ID and album ID (`album_ID` `track_ID`)
  - Soundcloud track ID (`soundcloud_track_ID`)
  - Youtube video ID (`youtube_video_ID`)
  - Tidal track ID (`tidal_track_ID`)

## Licenses

### Underlying source code

Under the [GNU General Public License v3.0](LICENSE), you can adapt and use the source code of this site (but not it's content) for personal and commercial use, so long as you retain the same license for your own project. See a quick breakdown of what you can and cant do [here](https://tldrlegal.com/license/gnu-lesser-general-public-license-v3-(lgpl-3))

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)
