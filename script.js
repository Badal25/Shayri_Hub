// Add any JavaScript functionality here if needed.
console.log("JavaScript is connected!");


document.addEventListener("DOMContentLoaded", () => {
    const quoteText = "This is the content you want to share"; // Replace with your content
    const pageUrl = window.location.href;

    document.querySelector(".wa").addEventListener("click", () => {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText)} ${encodeURIComponent(pageUrl)}`;
        window.open(whatsappUrl, "_blank");
    });

    document.querySelector(".fb").addEventListener("click", () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
        window.open(facebookUrl, "_blank");
    });

    document.querySelector(".tw").addEventListener("click", () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}&url=${encodeURIComponent(pageUrl)}`;
        window.open(twitterUrl, "_blank");
    });

    document.querySelector(".cp").addEventListener("click", () => {
        navigator.clipboard.writeText(`${quoteText} ${pageUrl}`).then(() => {
            alert("Content copied to clipboard!");
        }).catch(err => {
            alert("Failed to copy content: " + err);
        });
    });
});
document.addEventListener('scroll', () => {
    const reels = document.querySelectorAll('.reel');
    reels.forEach((reel) => {
        const rect = reel.getBoundingClientRect();
        const video = reel.querySelector('video');

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            video.play();
        } else {
            video.pause();
        }
    });
});



