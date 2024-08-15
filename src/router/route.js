const express = require("express");
const router = express.Router();
const Services = require("../controller/services");

router.get("/", (req, res) => {
    res.json({
        endpoint: {
            getHome: "/api/v1/home/:page",
            getOngoingAnime: "/api/v1/ongoing/:page",
            getCompletedAnime: "/api/v1/completed/:page",
            getAnimeSearch: "/api/v1/search/:q",
            getAnimeList: "/api/v1/anime-list",
            getAnimeDetail: "/api/v1/detail/:endpoint",
            getAnimeEpisode: "/api/v1/episode/:endpoint",
            getBatchLink: "/api/v1/batch/:endpoint",
            getGenreList: "/api/v1/genres",
            getGenrePage: "/api/v1/genres/:genre/:page"
        }
    });
});

// Get Home
router.get("/api/v1/home/:page", Services.getHome);
// Get Ongoing Anime
router.get("/api/v1/ongoing/:page", Services.getOngoingAnime);
// Get Completed Anime
router.get("/api/v1/completed/:page", Services.getCompletedAnime);
// Get Search Anime
router.get("/api/v1/search/:q", Services.getAnimeSearch);
// Get Anime List
router.get("/api/v1/anime-list", Services.getAnimeList);
// Get Anime Detail
router.get("/api/v1/detail/:endpoint", Services.getAnimeDetail);
// Get Anime Episode
router.get("/api/v1/episode/:endpoint", Services.getAnimeEpisode);
// Get Batch Link
router.get("/api/v1/batch/:endpoint", Services.getBatchLink);
// Get Genre List
router.get("/api/v1/genres", Services.getGenreList);
// Get Genre Page
router.get("/api/v1/genres/:genre/:page", Services.getGenrePage);
// Get Embed Streaming
router.get("/api/v1/streaming/:content", Services.getEmbedStreaming);

module.exports = router;
