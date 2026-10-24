# Yoga Timer

A guided yoga routine timer that runs on iPhone, iPad and desktop. Each asana gets a 15-second hold with an animated figure showing the pose, a countdown ring, and audio cues.

It installs to the Home Screen as a Progressive Web App (PWA), opens full screen, and works offline.

## Features

- **14 asanas in two routines:** Belly fat (5) and Hip fat (9), or both back to back
- **Animated pose guide:** a figure demonstrates each asana and moves with the breath
- **15-second countdown** with a progress ring and an optional get-ready gap between poses
- **Audio cues:** beeps for the last 3 seconds and on each pose change, and plays even with the iPhone in Silent mode
- **Rounds:** repeat the routine 1–3 times
- **Screen stays awake** while the timer runs
- **Responsive:** single column on phone, side-by-side timer and list on iPad
- **Light and dark mode** follow the device setting
- **Offline:** a service worker caches the app after the first visit

## Routines

| Belly fat | Hip fat |
|---|---|
| Sarvang Gati | Utkatasana |
| Ardha Navasana | Kaliasana |
| Santolanasana Variation | Virabhadrasana 1 |
| Vasisthasana (both sides) | Virabhadrasana 2 |
| Dhanurasana | Malasana |
| | Anjaneyasana |
| | Uttana Pristhasana |
| | Balasana |
| | Setu Bandhasana |

## Tech

Plain HTML, CSS and JavaScript, with no framework and no build step.

- Pose animations are drawn in SVG from joint keyframes and interpolated each frame
- Sounds use the Web Audio API
- The Screen Wake Lock API keeps the display on
- Installable through a web app manifest and a service worker

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Install on iPhone or iPad

1. Open the hosted link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.

## Credits

The routines follow two follow-along videos by Yoga With Naveen. Watch them for proper form:

- [5 Asanas To Reduce Belly Fat](https://www.youtube.com/watch?v=fJBdapexCkw)
- [8 Asanas to get rid of Hip Fat](https://www.youtube.com/watch?v=BfZQCjgtpDg)

This project is not affiliated with or endorsed by the creator. It is for general fitness only and is not medical advice. Skip any pose that causes pain.

## License

MIT
