const fetch = require('node-fetch');
const express = require('express')
const app = express()
const cookie = '';
app.get("/", function(req, res) {
  fetch("https://www.facebook.com/api/graphql/", {"credentials":"include","headers":{cookie, "accept":"*/*","accept-language":"id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,pt;q=0.6","content-type":"application/x-www-form-urlencoded","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","viewport-width":"1325"},"referrer":"https://www.facebook.com/gaming/streamer/leaderboard/?page=121977218740327","referrerPolicy":"origin-when-cross-origin","body":"av=100001528034752&__user=100001528034752&__a=1&__dyn=7xe6Fo4OQ1PyWzEsBWo5O12wAxu13wqojyUW3q327Eiw8OdwJx61MwdK4o3Bw5VCwjE3awbG783pwKwEwt81sbAy85-0DE4i2W2l0FG7o4y0YobEaojwaO2W681mE5a2W2K&__csr=&__req=2&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__rev=1001998448&__s=5xczep%3A4j1951%3Aikgft0&__hsi=6816555580934591739-0&__comet_req=0&fb_dtsg=AQFQxrC_Wlhr%3AAQGiWmnMcZVu&jazoest=22261&__spin_r=1001998448&__spin_b=trunk&__spin_t=1587021944&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=GamesVideoStreamerDashboardProfileQuery&variables=%7B%22profileID%22%3A%22121977218740327%22%7D&doc_id=2771000026354347","method":"POST","mode":"cors"})
    .then(res => res.json())
    .then((body) => {
      let leaderboard = body.data.profile.games_video_leaderboards;
      if(!leaderboard) return {success: 0}
      return {success: 1, leaderboard};
    })
    .then((leaderboard) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.json(leaderboard);
    })
    .catch((err) => {
      console.log(err);
    })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on " + port);
 });

