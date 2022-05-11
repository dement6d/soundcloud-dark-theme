try {
    document.querySelector('header[role="banner"]').classList.remove('peace-logo')

    if (document.URL.includes("soundcloud.com")) {
        setTimeout(() => {
            const popup = document.querySelector('#onetrust-consent-sdk');
            if (popup) popup.remove();
            return 0;
        }, 1000)
    }
}
catch {}