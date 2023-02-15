'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2bcc22c445553f85354c274ab7cf4ea9",
"assets/assets/images/1.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/11.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/12.png": "4019f727b53b5242bdab4e649adec0bd",
"assets/assets/images/121.jpg": "cad0fbf52f1c44143a08a285d248518c",
"assets/assets/images/122.jpg": "2083ffa3efdd7458a8cec59e5f823315",
"assets/assets/images/13.png": "0d1630c4ee0c9e3d6a459b2490a670bd",
"assets/assets/images/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/Logo.png": "4019f727b53b5242bdab4e649adec0bd",
"assets/assets/images/logoTransparente.png": "0d1630c4ee0c9e3d6a459b2490a670bd",
"assets/assets/images/twitter.png": "a318167e19cdc5bed78b0da150723cac",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-13_19-37-44.prproj": "de958a4a5ceccca6f6c7c2651fa7b9b6",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-13_19-59-19.prproj": "674fa3a99d6dbe054d572d6d618d0cec",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-13_23-08-08.prproj": "37b959fe7497ff4437486abe285e3b4c",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-13_23-52-10.prproj": "84d34f1d4352c5726c66abd9115d596d",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-14_00-17-26.prproj": "d94f5f8d5cfd4d3097830d56de10945e",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-14_13-53-23.prproj": "3ad40bd5aef45318e96dff9687c9859a",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-14_14-14-57.prproj": "2e2ea32a662fcf80913da89deb08ff5a",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-14_14-31-28.prproj": "25254149068faf790721543335120e91",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled-2023-02-14_21-44-11.prproj": "d0e27d4a243e0afff766d7cf361c94d4",
"assets/assets/projects/Adobe%2520Premiere%2520Pro%2520Auto-Save/Untitled.prproj": "2c86e2e115c363c13fe85caed8e9700f",
"assets/assets/projects/audio_reactive/description.txt": "75029f2fae6eabe9782619d2ec8cc5b2",
"assets/assets/projects/audio_reactive/hardware.txt": "336d5ebc5436534e61d16e63ddfca327",
"assets/assets/projects/audio_reactive/media/Audioreact%2520Video.mp4": "00b99d5e5259ab1607cb9b08889ce7d1",
"assets/assets/projects/audio_reactive/media/cube.mp4": "6746cb2a423c2a946167a6f95af7ac74",
"assets/assets/projects/audio_reactive/media/histo.mp4": "e3ccac05cf53472dbdcb102a4ac0df9b",
"assets/assets/projects/audio_reactive/media/muose.mp4": "7185c68252c9f08d4042f94d9c928165",
"assets/assets/projects/audio_reactive/media/no%2520audio.mp4": "21e76f7c3a11d7d3383e0950645394b3",
"assets/assets/projects/audio_reactive/media/Screenshot.png": "e3638bb6beacfc1623933162445deee3",
"assets/assets/projects/audio_reactive/software.txt": "27f789249eddf251662c839115237ab9",
"assets/assets/projects/audio_reactive/thumbnail.mp4": "8009d947c8a1b2868ae7cc218f227305",
"assets/assets/projects/av_tech/description.txt": "2f6e2a1a7148c3b1a7a89ab26baeceb2",
"assets/assets/projects/is_this_person_real/description.txt": "da9bf21be153fc05dad73d72817edabc",
"assets/assets/projects/is_this_person_real/hardware.txt": "336d5ebc5436534e61d16e63ddfca327",
"assets/assets/projects/is_this_person_real/media/Tutorial.mp4": "846ed1c5911d40f60925f04d6463342f",
"assets/assets/projects/is_this_person_real/software.txt": "be13aa5ac4818b8d0563e482b06513a5",
"assets/assets/projects/is_this_person_real/thumbnail.mp4": "8819f430b8e21aae736949e68608f913",
"assets/assets/projects/mapping_fender/description.txt": "ddfa8a3585a9ba3897202a6f9872875e",
"assets/assets/projects/mapping_fender/hardware.txt": "81c22a50e4c774ef046ee38c779de667",
"assets/assets/projects/mapping_fender/media/1.mp4": "022bcd346d9fe8c85efc6f75754554f8",
"assets/assets/projects/mapping_fender/media/2.mp4": "83cc786659dad73f22d6f7ad5ab203d7",
"assets/assets/projects/mapping_fender/media/3.mp4": "b7f18e88b442ec6338bbec3881c44d2e",
"assets/assets/projects/mapping_fender/media/4.mp4": "672ec6fb402e26cbb87ebbc8bbff26ae",
"assets/assets/projects/mapping_fender/media/5.mp4": "912275dcecf4a7529392e5576d95708b",
"assets/assets/projects/mapping_fender/software.txt": "644a51402c8087da67151c3b667561ae",
"assets/assets/projects/mapping_fender/thumbnail.19212.14280.m4v": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/mapping_fender/thumbnail.19212.14392.m4v": "943a9bae80ba976e6ab0b5a28937024d",
"assets/assets/projects/mapping_fender/thumbnail.19212.19000.m4v": "a1500542cb77b74d7799416fd1577dab",
"assets/assets/projects/mapping_fender/thumbnail.mp4": "91301399e1fb4f3d93dfb7292356db34",
"assets/assets/projects/mapping_pescantina/description.txt": "74f3164efc6ad9e2f2980fa7899c8d24",
"assets/assets/projects/mapping_pescantina/hardware.txt": "336d5ebc5436534e61d16e63ddfca327",
"assets/assets/projects/mapping_pescantina/software.txt": "019256049370fd1b6e4fff7dd5b490b6",
"assets/assets/projects/photo_organizer/description.txt": "19e67765040a0ed83cd000f80cbe37ee",
"assets/assets/projects/photo_organizer/hardware.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/photo_organizer/media/Tutorial.mp4": "dc8f2245fc63aa81c30efe1a944d11ed",
"assets/assets/projects/photo_organizer/software.txt": "a7f5f35426b927411fc9231b56382173",
"assets/assets/projects/qbk_info/corriente/1.jpg": "7b997363bca81a9a639eb1dbcf51556d",
"assets/assets/projects/qbk_info/corriente/2.jpg": "fa9f446e0ef79c8e846324adf4c08d19",
"assets/assets/projects/qbk_info/corriente/3.jpg": "d3f5e623335444c7a972959824e1d877",
"assets/assets/projects/qbk_info/corriente/4.jpg": "319081df1e4f68567f61911205eda37f",
"assets/assets/projects/qbk_info/corriente/5.jpg": "e5f7527970c90f069e1cabaf7d0c9eb8",
"assets/assets/projects/qbk_info/corriente2/1.jpg": "1b962e3627f5509d2b728b6dafc7cc75",
"assets/assets/projects/qbk_info/corriente2/2.jpg": "aebae16ee0e01df8666b008439f6a34b",
"assets/assets/projects/qbk_info/dmx/1.jpg": "85d67bbb9a139a29f72c27ebf91dc455",
"assets/assets/projects/qbk_info/dmx/2.jpg": "62ef2f66febec30296664ca697077157",
"assets/assets/projects/qbk_info/dmx/3.jpg": "77b5bc9e9e443e0a988a0bb990dad1ae",
"assets/assets/projects/qbk_info/dmx/4.jpg": "913ca110881fd8383c1849bcebd0ada2",
"assets/assets/projects/qbk_info/dmx/5.jpg": "eeab46e4ac25d669a44639e604aa7782",
"assets/assets/projects/qbk_info/dmx/6.jpg": "14b20e5c0335eb8ec97a31aa7aed3b77",
"assets/assets/projects/qbk_info/info/1.1.jpg": "3f8f32afb4f56b4962d7b471a1a8c889",
"assets/assets/projects/qbk_info/info/1.2.jpg": "3231a6400ab1cfe39e12db696e177d82",
"assets/assets/projects/qbk_info/info/2.1.jpg": "b907ad586f36aba73f952cca45993ebe",
"assets/assets/projects/qbk_info/info/2.2.jpg": "06581a6ee4dafa514c39ffeb7aaee86a",
"assets/assets/projects/qbk_info/info/3.1.jpg": "d309ab6603e1d52347552dfecb10e47a",
"assets/assets/projects/qbk_info/info/3.2.jpg": "9e1d1ceeac627104eae20f3d6a208673",
"assets/assets/projects/qbk_info/info/4.1.jpg": "e1196b1266d8d7450728f54d9e9e2581",
"assets/assets/projects/qbk_info/info/4.2.jpg": "90c800d633478968bdba7c9c50efd32d",
"assets/assets/projects/qbk_info/info/5.1.jpg": "f0734d7e8dc6f61629587127ce45d06e",
"assets/assets/projects/qbk_info/info/5.2.jpg": "b69ece9c4f8b7b0cc9a60bd546bf3866",
"assets/assets/projects/qbk_info/info/6.1.jpg": "0ffa962d1c4cd1e6909b7249902a5ff1",
"assets/assets/projects/qbk_info/info/6.2.jpg": "3d7b78e41f61bfdf83c21dc67ffad9f6",
"assets/assets/projects/qbk_info/info/6.3.jpg": "795a8b62f0b932597c3806a4feb6778e",
"assets/assets/projects/qbk_info/info/6.4.jpg": "e5074b27d28627b52342102084ab753f",
"assets/assets/projects/qbk_info/info/6.5.jpg": "dc5c48cd1f4b4c1c35eada7d9503ae89",
"assets/assets/projects/qbk_info/info/6.6.jpg": "086e0f27cf9f150639f6a05a84cace9a",
"assets/assets/projects/qbk_info/info/7.1.jpg": "7dfe11bc411bcd84350430ef7a0ed018",
"assets/assets/projects/qbk_info/info/7.2.jpg": "3adb98bbce97137d58a64a013e0037ea",
"assets/assets/projects/qbk_info/info/8.jpg": "0364afba0745c65c2a7bf4328e08edda",
"assets/assets/projects/qbk_info/info/Thumbs.db": "1dc9138803d046135c2aeaa8d652dbc9",
"assets/assets/projects/qbk_info/rf1/1.jpg": "7bb9eab742421418ba068643af571df6",
"assets/assets/projects/qbk_info/rf1/2.jpg": "29b1bfdb58ddfedda5c719143ca26ab6",
"assets/assets/projects/qbk_info/rf1/3.jpg": "0604d5e354c11f7b7ecec0816b552560",
"assets/assets/projects/qbk_info/rf1/4.jpg": "3a752ac79b39b6826f54932c16b199b3",
"assets/assets/projects/qbk_info/rf1/5.jpg": "29e6e52bbbae442f5be805e97338fb12",
"assets/assets/projects/qbk_info/rf2/1.jpg": "401c0810bec2e18b5528a30ed86c5a4d",
"assets/assets/projects/qbk_info/rf2/2.jpg": "8a7da285e3d6416322ba4c1d1a7e824c",
"assets/assets/projects/qbk_info/rf2/3.jpg": "9977649e286273f5ada4a72a82ed30ab",
"assets/assets/projects/qbk_info/rf2/4.jpg": "067964eae93d502c66372e1b494ba951",
"assets/assets/projects/qbk_info/rf2/5.jpg": "a9e7604a219a7943a61ebb9192284b32",
"assets/assets/projects/qbk_info/rf2/6.jpg": "c61a311741ceb3a40744521761d4761b",
"assets/assets/projects/qbk_info/rf3/1.jpg": "b1406ceb6cf51ef72fe2aae4d3ec9b57",
"assets/assets/projects/qbk_info/rf3/2.jpg": "3bb4fba290a0b0471d781d7e91257e5a",
"assets/assets/projects/qbk_info/rf3/3.jpg": "da1b8179e4c40966f5781ebe11acf905",
"assets/assets/projects/qbk_info/rf3/4.jpg": "7a420359461db71081918fc1266fcc99",
"assets/assets/projects/qbk_info/rf3/5.jpg": "81ba30f88d7e102a82dea7c9d08eea07",
"assets/assets/projects/qbk_info/rf4/1.jpg": "a0f2c29de0c484a0c0048d96d1137fee",
"assets/assets/projects/qbk_info/rf4/2.jpg": "8bc7bf5ca538590a7cfcc403de307063",
"assets/assets/projects/qbk_info/rf4/3.jpg": "38e29395e4e75289f884b686192c6a67",
"assets/assets/projects/qbk_info/rf4/4.jpg": "3ab2edc236688884ec668211c3d0d8fe",
"assets/assets/projects/qbk_info/rf4/5.jpg": "3454ea1387a98e4a0b1fea99db134956",
"assets/assets/projects/qbk_info/rf4/6.jpg": "8bddda94aa5700c5a95c4bf76466d83e",
"assets/assets/projects/qbk_info/rf4/7.jpg": "a3069f0e5f35c373330f4d6e75b11190",
"assets/assets/projects/qbk_info/router/1.jpg": "8fb4a0bc115c758d47f5712989afe8b4",
"assets/assets/projects/qbk_info/router/2.jpg": "f47cd211106fb28eb4a4bbb32b084d62",
"assets/assets/projects/qbk_info/router/3.jpg": "75471d2d70e0bfeee85d13ecf871ee45",
"assets/assets/projects/qbk_info/router/4.jpg": "b68d47b927440ad76e8f45c4882c61a3",
"assets/assets/projects/qbk_info/router/5.jpg": "1b8d1e3556029ce36f0823f7229a0e49",
"assets/assets/projects/qbk_info/router/6.jpg": "6144b856547b972c0063a76456f12966",
"assets/assets/projects/qbk_info/scan_network/1.jpg": "f8c63bbd5d213c14269abe7e70094b20",
"assets/assets/projects/qbk_info/scan_network/2.jpg": "50d91b26f51d9cb1f087f135b87e5bd9",
"assets/assets/projects/qbk_info/scan_network/3.jpg": "e18bb8c8133ca2ce843340a92a294db2",
"assets/assets/projects/qbk_rules/description.txt": "335fd136bd28003299c4f1a566511438",
"assets/assets/projects/qbk_rules/media/11.jpg": "b6924997c745e22c9618a72d7cda504c",
"assets/assets/projects/qbk_rules/media/12.jpg": "ad870b97600494617121eb095d914bd3",
"assets/assets/projects/qbk_rules/media/13.jpg": "9f8f5b1cb846e776bcaac8bc90ce9c58",
"assets/assets/projects/qbk_rules/media/16.jpg": "90fe2ba6cbcdf6d55dc871e16632ca9a",
"assets/assets/projects/qbk_rules/media/18.jpg": "c2151ee35b542a2b72ac71fd375693f2",
"assets/assets/projects/qbk_rules/media/19.jpg": "6ce7dadf41106a52a303f88eb8610b5e",
"assets/assets/projects/qbk_rules/media/25.jpg": "d35bfe0a959a1e1d2683c67d0bea707f",
"assets/assets/projects/qbk_rules/media/26.jpg": "7dc42313fc44bc850a94eceff56c55ab",
"assets/assets/projects/qbk_rules/media/27.jpg": "ac20b10b3f946d581bf9075de3b3d087",
"assets/assets/projects/qbk_rules/media/28.jpg": "75e8fa2f58aa211e8b412cb69225483f",
"assets/assets/projects/qbk_rules/media/29.jpg": "4fd573a2df6b36162e109570434e7de3",
"assets/assets/projects/qbk_rules/media/30.jpg": "b25be78b19b7db51d0ab7a5851d72905",
"assets/assets/projects/qbk_rules/media/33.jpg": "45828de9bd5dad0f7fd884dfb333d7a6",
"assets/assets/projects/qbk_rules/media/34.jpg": "0bbfbfb0e2280c7c7abae200cefcd685",
"assets/assets/projects/qbk_rules/media/36.jpg": "81e76bcfb0646e053179903daa0add30",
"assets/assets/projects/qbk_rules/media/37.jpg": "b8738c20b8e713c1d9a7472fd2279797",
"assets/assets/projects/qbk_rules/media/39.jpg": "2376c3eb4acc3de41bab098ec0df3f49",
"assets/assets/projects/qbk_rules/media/4.jpg": "f6c9b81304037d6590eb023dbc945a7c",
"assets/assets/projects/qbk_rules/media/43.jpg": "64281ddada2f2ccaf64efe8a2d0b2fc0",
"assets/assets/projects/qbk_rules/media/47.jpg": "b564b02b0bacd515d8e5352e93c74160",
"assets/assets/projects/qbk_rules/media/49.jpg": "3bc78d7d594deb69d47bc18a10b73355",
"assets/assets/projects/qbk_rules/media/5.jpg": "010004f7127b7bce8723ac4861e5fa1e",
"assets/assets/projects/qbk_rules/media/6.jpg": "9da9742633a50e12a77cd2036f1b7685",
"assets/assets/projects/qbk_rules/media/7.jpg": "4e6d9d5efc103e06d48c0cc619844539",
"assets/assets/projects/qbk_rules/media/9.jpg": "dcdc62f2eff3ecb991ec913f27ff3748",
"assets/assets/projects/qbk_rules/Thumbs.db": "4c969d530a367359ac587fcb651396a7",
"assets/assets/projects/Untitled.prproj": "2c86e2e115c363c13fe85caed8e9700f",
"assets/assets/projects/Untitled_1.prproj": "bb482db097765cca79070bd775f59387",
"assets/assets/videos/INTRO.mp4": "4e6c57c02d4a93ca1a07c06e28bdf5b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "28ce6a01a5900985258a6e3dc3800c35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5dbcc8c598171b0ded989b40d3e2326",
"/": "b5dbcc8c598171b0ded989b40d3e2326",
"main.dart.js": "b650ce8c1605a55288989318df6856fe",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
