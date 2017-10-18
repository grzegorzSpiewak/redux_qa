const homepage = {
  header: {
    name: "Test<b><span class='orange__text'>RAIL<span></b>assistant 1.0",
    links: [
      {href: "/", anchor: "Home", title: "Home", currentPage: true},
    ]
  },
  informations: {
    header: "How to use test rail assistant?",
    items: [
      {name: "1. Open Charles and save logs from testing"},
      {name: "2. Crate Test rail"},
      {name: "3. Select test from options and press GO"},
      {name: "4. Search for required call in Charles and copy all content"},
      {name: "5. Paste results to text area input"},
      {name: "6. Click compare"},
      {name: "7. The result for test will be displayed"},
      {name: "8. Validate missing variables and present values"},
    ]
  },
  select: {
    suites: [
      {name: "Heartbeat 2 Video Start", value: "Heartbeat2VideoStart", next: "Heartbeat 2 Video Play", id: 1},
      {name: "Heartbeat 2 Video Play", value: "Heartbeat2VideoPlay", next: "Heartbeat 2 Video Pause", id: 2},
      {name: "Heartbeat 2 Video Pause", value: "Heartbeat2VideoPause", next: "Heartbeat 2 Video Seek", id: 3},
      {name: "Heartbeat 2 Video Seek", value: "Heartbeat2VideoSeek", next: "Heartbeat 2 Video Complete", id: 4 },
      {name: "Heartbeat 2 Video Complete", value: "Heartbeat2VideoComplete", next: "Heartbeat 2 Video Stall", id: 5},
      {name: "Heartbeat 2 Video Stall", value: "Heartbeat2VideoStall", next: "Heartbeat 2 Ad Start", id: 6},
      {name: "Heartbeat 2 Ad Start", value: "Heartbeat2AdStart", next: "Heartbeat 2 Ad Play", id: 7},
      {name: "Heartbeat 2 Ad Play", value: "Heartbeat2AdPlay", next: "Heartbeat 2 Ad Complete", id: 8},
      {name: "Heartbeat 2 Ad Complete", value: "Heartbeat2AdComplete", next: "Heartbeat 2 Video Start Live", id: 9},
      {name: "Heartbeat 2 Video Start Live", value: "Heartbeat2VideoStartLive", next: "Heartbeat 2 Video Play Live", id: 10},
      {name: "Heartbeat 2 Video Play Live", value: "Heartbeat2VideoPlayLive", next: "Heartbeat 2 Video Complete Live", id: 11},
      {name: "Heartbeat 2 Video Complete Live", value: "Heartbeat2VideoCompleteLive", next: "Heartbeat 2 Comscore", id: 12},
      {name: "Heartbeat 2 Comscore", value: "Heartbeat2Comscore", next: null , id: 13},
      {name: "Heartbeat Q3 Video Start", value: "HeartbeatQ3Video Start", next: "Heartbeat Q3 Video Play", id: 14},
      {name: "Heartbeat Q3 Video Play", value: "HeartbeatQ3Video Play", next: "Heartbeat Q3 Video Pause", id: 15},
      {name: "Heartbeat Q3 Video Pause", value: "HeartbeatQ3Video Pause", next: "Heartbeat Q3 Video Seek", id: 16},
      {name: "Heartbeat Q3 Video Seek", value: "HeartbeatQ3Video Seek", next: "Heartbeat Q3 Video Complete", id: 17},
      {name: "Heartbeat Q3 Video Complete", value: "HeartbeatQ3VideoComplete", next: "Heartbeat Q3 Video Stall", id: 18},
      {name: "Heartbeat Q3 Video Stall", value: "HeartbeatQ3VideoStall", next: "Heartbeat Q3 Ad Start", id: 19},
      {name: "Heartbeat Q3 Ad Start", value: "HeartbeatQ3AdStart", next: "Heartbeat Q3 Ad Play", id: 20},
      {name: "Heartbeat Q3 Ad Play", value: "HeartbeatQ3AdPlay", next: "Heartbeat Q3 Ad Complete", id: 21},
      {name: "Heartbeat Q3 Ad Complete", value: "HeartbeatQ3AdComplete", next: "Heartbeat Q3 Video Start Fx", id: 22},
      {name: "Heartbeat Q3 Video Start Fx", value: "HeartbeatQ3VideoStartFx", next: "Heartbeat Q3 Video Play Fx", id: 23},
      {name: "Heartbeat Q3 Video Play Fx", value: "HeartbeatQ3VideoPlayFx", next: "Heartbeat Q3 Video Start Fng", id: 24},
      {name: "Heartbeat Q3 Video Start Fng", value: "HeartbeatQ3VideoStartFng", next: "Heartbeat Q3 Video Play Fng", id: 25},
      {name: "Heartbeat Q3 Video Play Fng", value: "HeartbeatQ3VideoPlayFng", next: "Heartbeat Q3 Video Complete Fng", id: 26},
      {name: "Heartbeat Q3 Video Complete Fng", value: "HeartbeatQ3VideoCompleteFng", next: "Heartbeat Q3 Video Start FsGo", id: 27},
      {name: "Heartbeat Q3 Video Start FsGo", value: "HeartbeatQ3VideoStartFsGo", next: "Heartbeat Q3 Video Play FsGo", id: 28},
      {name: "Heartbeat Q3 Video Play FsGo", value: "HeartbeatQ3VideoPlayFsGo", next: "Heartbeat Q3 Video Complete FsGo", id: 29},
      {name: "Heartbeat Q3 Video Complete FsGo", value: "HeartbeatQ3VideoCompleteFsGo", nest: "Heartbeat Q3 Comscore", id: 30},
      {name: "Heartbeat Q3 Comscore", value: "HeartbeatQ3Comscore", next: null, id:31},
    ],
  },
}

export default homepage
