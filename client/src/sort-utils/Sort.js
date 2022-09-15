function compareArtist(a, b) {
    const artistA = a.artist.toUpperCase();
    const artistB = b.artist.toUpperCase();

    let comparison = 0;
    if (artistA > artistB) {
        comparison = 1;
    } else if (artistA < artistB) {
        comparison = -1;
    }
    return comparison;
}

function compareTitle(a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    let comparison = 0;
    if (titleA > titleB) {
        comparison = 1;
    } else if (titleA < titleB) {
        comparison = -1;
    }
    return comparison;
}

export {compareArtist, compareTitle}