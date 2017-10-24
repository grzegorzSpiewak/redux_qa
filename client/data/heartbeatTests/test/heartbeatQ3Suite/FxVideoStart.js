const VideoStart = {
  header: "Expected variables in this call",
  items: [
    {name: "s:event:type"},
    {name: "s:asset:type"},
    {name: "s:sc:tracking_server"},
    {name: "s:sc:rsid"},
    {name: "l:asset:length"},
    {name: "s:asset:video_id"},
    {name: "s:sp:player_name"},
    {name: "l:event:playhead"},
    {name: "s:meta:video.contentsubscriptiontype"},
    {name: "s:meta:video.wpr"},
    {name: "s:meta:video.title"},
    {name: "s:meta:video.embeddedhost"},
    {name: "s:meta:video.playerid"},
    {name: "s:meta:video.lvs"},
    {name: "s:meta:video.closedcaptionoptions"},
    {name: "s:meta:video.episode"},
    {name: "s:meta:video.assettype"},
    {name: "s:meta:video.season"},
    {name: "s:meta:video.concattitle"},
    {name: "s:meta:video.show"},
    {name: "s:meta:video.rating"},
    {name: "s:meta:video.url"},
    {name: "s:meta:video.source"},
    {name: "s:meta:video.network"},
    {name: "s:meta:video.genre"},
    {name: "s:meta:video.mvpd"},
    {name: "s:meta:video.ugcclip"},
    {name: "s:meta:video.feedname"},
    {name: "s:meta:video.stationid"},
    {name: "s:meta:video.contentadtype"},
    {name: "s:meta:video.airdate"},
    {name: "s:meta:video.isResume"},
    {name: "s:meta:video.autoplay"},
    {name: "s:meta:video.sponsor"},
    {name: "s:meta:video.sportstype"},
    {name: "s:meta:video.isContinuous"},
    {name: "s:meta:video.screenLayout"},
    {name: "s:meta:video.isRestart"},
    {name: "s:meta:video.crossDevicePlay"},
    {name: "s:meta:video.castSource"},
    {name: "s:meta:video.authorizing_network"},
    {name: "s:meta:page.buildVersion"},
    {name: "s:meta:user.dcg_profile_id"},
    {name: "s:meta:user.network_entitlement_list"},,
  ],
  testName: "Heartbeat Q3 FX Video Start",
  testDetails: "Search for call with s:event:type <b>start</b> and s:asset:type <b>main</b>",
}

export default VideoStart
