import Fingerprint2 from 'fingerprintjs2';
import 'clientjs';


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