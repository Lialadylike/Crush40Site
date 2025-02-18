<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Crush 40 - Discography</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A list of Crush 40's entire discography!">
        <meta name="keywords" content="Crush 40, Johnny Gioeli, Jun Senoue, Sonic the Hedgehog, Crush 40 Live, Crush 40 Discography">

        <link href="css/site.css" rel="stylesheet">
        <link href="css/discography.css" rel="stylesheet">

        <!-- Crush 40 JavaScript -->
        <script src="js/loading-bar.js"></script>
        <script src="js/songList.js"></script>
        <script src="js/discography.js"></script>
        <script src="js/site.js"></script>
    </head>
    <body>
        <?php include('base/bodyStart.html') ?>

        <!-- Opening -->
        <div class="opening section">

            <div class="opening-intro">

                <!-- Logo -->
                <img src="img/logo/FanWebsiteLogo.svg" alt="Crush 40 Logo">

                <!-- Text -->
                <h2>Crush 40's entire discography, from their albums, to their songs, to their features - all right here!</h2>

                <div class="btnSet">
                    <a class="btnLink"><button class="filledButton btnAlbums btnWidthNormal">Albums <img src="img/icons/smallDownArrow.svg" alt="Down Arrow"></button></a>
                    <button class="emptyButton btnViewAll btnWidthNormal">Songs <img src="img/icons/smallDownArrow.svg" alt="Down Arrow"></button>
                </div>
            </div>
        </div>

        <!-- Albums -->
        <div class="albums-intro section" id="intro">
            <h1>Releases</h1>
            <p>Below is a list of all the albums/EPs the band has put out - be sure to explore them all to find out tons of in-depth trivia, booklet scans, and more!</p>
        </div>

        <ol class="albumList section">
            <li class="album albumLeft albumThrill">
                <div class="info">
                    <p class="yearIndicator">2000</p>
                    <h2 class="title">Thrill of the Feel</h2>
                    <p>This is where it all began; the first album put out by the band themselves! <i>Thrill Of The Feel</i> is comprised of all the songs recorded by a full band in the video game EA Sports NASCAR Arcade.</p>
                    <p>Interestingly, some songs on this album do not have any vocals, making this album the only one released by the band to feature instrumental tracks.</p>
                    <p>This album also includes the song "Open Your Heart" from <i>Sonic Adventure</i> as a bonus track, officially making the music made for this game series a part of the band's canon.</p>
                    <button data-action="panel" data-page-name="albumView?a=Thrill" class="emptyButton btnWidthWide" href="#">Explore this album</button>
                </div>
                <img data-action="zoom" class="img" src="img/content/discography/ThrillOfTheFeel.jpg" alt="'Thrill of the Feel' Album Cover">
            </div>
            <li class="album albumRight albumC40">
                <div class="info">
                    <p class="yearIndicator">2003</p>
                    <h2 class="title">Crush 40</h2>
                    <p>All of the vocal tracks from <i>Thrill of the Feel</i> are featured on this album, so this album could be considered a western release of Thrill of the Feel. However, the instrumental tracks are missing and in their place are "Live & Learn" from <i>Sonic Adventure 2</i> and two bonus tracks, both lacking singer Johnny Gioeli on vocals.</p>
                    <p>This album marks the first time the name "Crush 40" was used, and the name "Crush 40" would be carried over to the game <i>Sonic Heroes</i>, which would be released later in 2003.</p>
                    <button data-action="panel" data-page-name="albumView?a=crush40" class="emptyButton btnWidthWide" href="#">Explore this album</button>
                </div>
                <img data-action="zoom" class="img" src="img/content/discography/Crush40.jpg" alt="'Crush 40' Album Cover">
            </div>
            <li class="album albumLeft albumSSS">
                <div class="info">
                    <p class="yearIndicator">2009</p>
                    <h2 class="title">Super Sonic Songs</h2>
                    <p>This is the first compilation album released by Crush 40, encompassing a range of tracks from the band's near 10-year history at the time.</p>
                    <p>Some older tracks were remixed for this release, a few new covers were created, and a fully original song, "Is It You", was released for the first time here.</p>
                    <p>While the original CD release of <i>Super Sonic Songs</i> did not feature any bonus tracks, a few years after its release, the album was placed on digital platforms with 3 bonus tracks; these tracks were not new, however, and could be heard elsewhere.</p>
                    <button data-action="panel" data-page-name="albumView?a=sss" class="emptyButton btnWidthWide" href="#">Explore this album</button>
                </div>
                <img data-action="zoom" class="img" src="img/content/discography/SuperSonicSongs.png" alt="'Super Sonic Songs' Album Cover">
            </div>
            <li class="album albumRight albumRiseAgain">
                <div class="info">
                    <p class="yearIndicator">2012</p>
                    <h2 class="title">Rise Again</h2>
                    <p>Throughout 2011 and 2012, Crush 40 released four singles: "Rise Again", "Sonic Youth", "One of Those Days" and "Song of Hope". This EP is a compilation of these singles released by Crush 40 during that time.</p>
                    <p>There exists a variant of this EP which was available to be purchased at the Sonic Boom 2012 event that excluded the track "Song of Hope".</p>
                    <button data-action="panel" data-page-name="albumView?a=riseAgain" class="emptyButton btnWidthWide" href="#">Explore this EP</button>
                </div>
                <img data-action="zoom" class="img" src="img/content/discography/RiseAgain.jpg" alt="'Rise Again' Album Cover">
                <!--<div class="albumBackground"></div>-->
            </div>
            <li class="album albumLeft albumLive">
                <div class="info">
                    <p class="yearIndicator">2012</p>
                    <h2 class="title">Live!</h2>
                    <p><i>Live!</i> is Crush 40's first live album. Crush 40 performed two gigs at Live Stage Guilty in Tokyo, Japan on March 29th, 2012, and March 30th, 2012, and both shows were professionally recorded in full for this album. This was the very first time Crush 40 could be heard with a full band live outside of Japan.</p>
                    <p>All 24 songs performed at these shows were released, with the exception of a cover of Hardline's "Everything", which has not yet been released due to copyright concerns.</p>
                    <button data-action="panel" data-page-name="albumView?a=live" class="emptyButton btnWidthWide" href="#">Explore this album</button>
                </div>
                <img data-action="zoom" class="img" src="img/content/discography/LIVE!.png"  alt="'LIVE!' Album Cover">
            </div>
            <li class="album albumRight album2N2R">
                <div class="info">
                    <p class="yearIndicator">2015</p>
                    <h2 class="title">2 Nights 2 Remember</h2>
                    <p><i>2 Nights 2 Remember</i> is unique in that it is both a studio EP and a live album. The first four tracks on the album are brand-new studio songs created specifically for the EP, while the rest of the album features professionally-recorded audio of their <i>2 Nights 2 Remember</i> live performance, with their inclusion allowing the length of this album to be closer to others.</p>
                    <p>The <i>2 Nights 2 Remember</i> live performances was at Live Stage Guilty, on March 29th 2014 and March 30th 2014. Once again, both shows were professionally recorded and put on the CD in exactly the same manner as <i>Live!</i>. Unfortunately, only approximately half of the performance was featured on this CD and all subsequent digital releases, due to the limited size of the CD medium.</p>
                    <button data-action="panel" data-page-name="albumView?a=twoNights" class="emptyButton btnWidthWide" href="#">Explore this album</button>
                </div>
                <img data-action="zoom" class="img" src="img/content/discography/2N2R.png" alt="'2 Nights 2 Remember' Album Cover">
                <div class="back"></div>
            </div>
            <li class="album albumLeft albumDrivingThroughForever">
                <div class="info">
                    <p class="yearIndicator">2019</p>
                    <h2 class="title">Driving Through Forever</h2>
                    <p><i>Driving Through Forever</i> is Crush 40's most recent album. It is another compilation album in the vein of <i>Super Sonic Songs</i>, which aims to celebrate the past 20 years of Crush 40, containing tracks ranging from "Open Your Heart", written in 1998, to "Green Light Ride", written in 2018.</p>
                    <p>Like the previous compilation album, <i>Driving Through Forever</i> contains both a new mix on one of the songs, and a new song, "Call Me Crazy", which had only ever been performed live before the album was released, at the Japan Game Music Festival II:RE.</p>
                    <button data-action="panel" data-page-name="albumView?a=driving" class="emptyButton btnWidthWide" href="#">Explore this album</button>
                </div>
                <img data-action="zoom" class="img" src="img/content/discography/DrivingThroughForever.jpg" alt="'Driving Through Forever' Album Cover">
            </div>
        </ol>

        <div class="features section" id="features">
            <div class="featuresMain" id="featuresMain">
                <h1>Features</h1>
                <p>Given their presence in video games, Crush 40 has been featured in a number of releases/soundtracks over the years, this is a complete list of every non-Crush 40 album they're featured in.</p>
                <ul class="featureList" id="featureList"></ul>
            </div>

            <div class="featureInfo" id="featureInfo">
                <button title="Close" class="close iconButton" id="featureInfoClose"><img src="img/icons/smallCloseButtonWhite.svg" alt="Close Icon"></button>
                <h2 id="featureTitle"></h2>
                <p id="featureDescription"></p>

                <h3 class="featuredTracksTitle">Featured Tracks</h3>
                <ul class="generalList featuredTracks" id="featureTracks"></ul>
            </div>
        </div>

        <div class="songs section" id="songs">
            <div class="top">
                <h1>Songs</h1>
                <p>Every "Crush 40" (Johnny Gioeli + Jun Senoue) song created.</p>
                <input class="search" id="songsSearch" placeholder="Search"></input>
            </div>
            <div class="songListContainer">
                <ul class="generalList songList" id="songList"></ul>
            </div>
        </div>

        <?php include('base/bodyEnd.html') ?>
    </body>
</html>