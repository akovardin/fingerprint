import Fingerprint2 from 'fingerprintjs2';
import 'clientjs';
import '../imprintjs/dist/imprint';


document.querySelector("#button-fingerprint2").addEventListener("click", function () {
    Fingerprint2.get(function (components) {
        console.log(components);

        let values = components.map(function (component) {
            return component.value
        });
        let murmur = Fingerprint2.x64hash128(values.join(''), 31);
        document.querySelector("#fingerprint2").textContent = murmur;
    });

});

document.querySelector("#button-clientjs").addEventListener("click", function () {
    let client = new ClientJS();
    let fingerprint = client.getFingerprint();

    console.log(client.getFingerprint());

    document.querySelector("#clientjs").textContent = fingerprint;

});

document.querySelector("#button-imprintjs").addEventListener("click", function () {
    let browserTests = [
        "audio",
        "availableScreenResolution",
        "canvas",
        "colorDepth",
        "cookies",
        "cpuClass",
        "deviceDpi",
        "doNotTrack",
        "indexedDb",
        "installedFonts",
        "language",
        "localIp",
        "localStorage",
        "pixelRatio",
        "platform",
        "plugins",
        "processorCores",
        "screenResolution",
        "sessionStorage",
        "timezoneOffset",
        "touchSupport",
        "userAgent",
        "webGl"
    ];

    imprint.test(browserTests).then(function(result){
        let murmur = Fingerprint2.x64hash128(result, 31);

        console.log(murmur)

        document.querySelector("#imprintjs").textContent = murmur;
    });
});