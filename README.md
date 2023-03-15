# Minifig Project - Tivix recruitment task

## Setup

### Environment variables

Required env are defined in `.example.env`. In order to run project, first just `copy&pase` its content to `.env`. Hopefully this precious API key won't leak anywhere :D For convinience, here is `.env` content as well:
```bash
REBRICKABLE_API_URL=https://rebrickable.com/api/v3
REBRICKABLE_API_KEY=d2feb084ce715f2ffb71522fc56c507a
```

### Caveats

As I was not able to develop on Mac, this project is not set up for iOS devices. Please stick to Android, thanks! :)

### Installation

In order to run this project run

```bash
npm install
```

If android [emulator](https://reactnative.dev/docs/environment-setup) is set up or device is connected, run:

```bash
npm run start
```

This should initialize Metro CLI inside terminal. After initialization, press `a` button to open project on Android device.

### Tests

In order to run tests type `npm run test` in terminal.

### Troubleshooting

Just hit me up via email or create an issue. I will gladly help.

## Dev stories

### Design (re)implementation

I have tried my best to match provided design, while taking best practices into consideration. Below I will list changes made throught development process, that might slightly differ from original desings - good intentions tho :)

1. `Draw again button` moved up to colocate it visually with `Minifig Preview`. **Reasoning**: User will probably first try to find best fitting Minifig and then proceed to filling out `Shipping Form`. As the form has many fields original implementation forces user to scroll up and down while trying to draw next figures.

2. Wrapper for controlling `RebrickableAPI`. **Reasoning**: It turns out, original API does not expose `random` endpoint for drawing Minifig. Having that said, such endpoint is emulated with usage of `lego/minifigs?search=` endpoint, which responses are cached with `search` param as a key, then served by picking randomly one of the items. This implementation reduces number of requests made to the actual API, while still preserving its async nature (keep in mind that cached results may come so quickly that it won't be noticed - if you willing to change that, just add `Sleep` utility into random endpoint)

