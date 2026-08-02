tarteaucitron.services.goatcounter = {
    key: "goatcounter",
    type: "analytic",
    name: "GoatCounter",
    needConsent: true,
    cookies: [],

    js: function () {

        var script = document.createElement("script");

        script.async = true;

        script.src = "https://gc.zgo.at/count.js";

        script.dataset.goatcounter =
            "https://artsinternesperrosguirec.goatcounter.com/count";

        document.head.appendChild(script);
    },

    fallback: function () {

    }
};