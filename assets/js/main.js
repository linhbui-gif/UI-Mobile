window.onload = () => {
    navigationMobile.init();
};
let navigationMobile = {
    init: function () {
        this.showContent();
    }, showContent: function () {
        var tabLinks = document.querySelectorAll(".tablinks");
        var tabContent = document.querySelectorAll(".tabcontent");

        tabLinks.forEach(function (el) {
            el.addEventListener("click", openTabs);
        });
        function openTabs(el) {
            var btn = el.currentTarget;
            var electronic = btn.dataset.electronic;

            tabContent.forEach(function (el) {
                el.classList.remove("active");
            });

            tabLinks.forEach(function (el) {
                el.classList.remove("active");
            });

            document.querySelector("#" + electronic).classList.add("active");

            btn.classList.add("active");
        }
    }
}
