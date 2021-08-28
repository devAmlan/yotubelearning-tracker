const axios = require('axios');
const {addVideo} = require('./notion')
let YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

function getVideo(YOUTUBE_VIDEO_ID)
{
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${YOUTUBE_VIDEO_ID}&key=${YOUTUBE_API_KEY}`;
  var youtubedata = axios.get(url).then(response=>
{
    var videotitle = response.data.items[0].snippet.title;
    var channelTitle = response.data.items[0].snippet.channelTitle;
    addVideo({title:videotitle,channelname:channelTitle,status:false})
    }).catch(err=>{console.log(err)})
}

module.exports = {getVideo}
