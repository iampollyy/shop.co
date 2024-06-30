export function CloseEventHandler(buttonSelector:string, bannerSelector:string) {
    let closeBtn = document.querySelector(buttonSelector);
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            let banner = document.querySelector(bannerSelector) as HTMLElement;
            if (banner) {
                banner.style.display = "none";
            }
        });
    }
}
