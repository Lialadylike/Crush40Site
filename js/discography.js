window.addEventListener('load', () => {
    UpdateNavbarPageSelection("navDiscography");

    InitFeatures();
    InitSongs();
});

// Features
let features = [
    { 
        title: "SONICTEAM \"PowerPlay\"",
        desc: "A compilation album of various Sonic Team games from the 90s, primilarly games developed for the Saturn.",
        img: "PowerPlay1998.jpg",
        tracks: [
            { id: "oyh", d: "This was featured as a <i>hidden track</i> on CD - as Sonic Adventure would not come out until another three weeks after." }
        ]
    },
    { 
        title: "SONIC ADVENTURE Songs With Attitude",
        desc: "The vocal tracks album for Sonic Adventure. It includes all vocal tracks from the game, including Open Your Heart.",
        img: "SongsWithAttitude.jpg",
        tracks: [
            { id: "oyh" }
        ]
    },
    { 
        title: "SONIC ADVENTURE Original Soundtrack",
        desc: "The SONIC ADVENTURE Original Soundtrack (Digi-LOG Conversation) is the original soundtrack of Sonic Adventure, featuring (almost) all the songs in the game.",
        img: "SonicAdventureDigiLog.jpg",
        tracks: [
            { t: "Introduction ...Featuring Open Your Heart", id: "oyh", d: "Included due to its inclusion in the game" },
            { id: "oyh"}
        ]
    },
    { 
        title: "SONIC THE HEDGEHOG 10th Anniversary",
        desc: "This CD came with the Sonic the Hedgehog 10th Anniversary Birthday pack. It features music from throughout the series.",
        img: "10thAnniversary.jpg",
        tracks: [
            { id: "oyh" },
            { id: "lal", d: "Included as part of the SA2 Vocal Trax medley" }
        ]
    },
    { 
        title: "Cuts Unleashed SA2 Vocal Collection",
        desc: "Cuts Unleashed is the vocal tracks album for Sonic Adventure 2 - featuring all character themes. Instrumental versions of the tracks are also included.",
        img: "SA2VocalCollection.jpg",
        tracks: [
            { id: "lal" },
            { id: "lal" , d: "An instrumental version of Live & Learn." }
        ]
    },
    {
        title: "SONIC ADVENTURE 2 Multi-Dimensional Soundtrack",
        desc: "Multi-dimensional is the original soundtrack of Sonic Adventure 2, featuring (almost) all songs in the game.",
        img: "MultiDimensionalSA2.jpg",
        tracks: [
            { id: "lal", d: "Being the main theme, this is included" },
        ]
    },
    {
        title: "SegaCon -The Best of Sega Game Music-",
        desc: "This 3-disc album is a compilation of music from various SEGA games.",
        img: "SegaCon.jpg",
        tracks: [
            { id: "oyh" },
        ]
    },
    {
        title: "Sonic Adventure 2 Official Soundtrack",
        desc: "This album is the US release of the Sonic Adventure 2 Soundtrack. It isn't nearly as complete as multi-dimensional, but it does feature Live & Learn.",
        img: "SonicAdventure2OfficialST.jpg",
        tracks: [
            { id: "lal" },
        ]
    },
    {
        title: "Sonic Adventure 2: Battle - Sampler",
        desc: "This CD was a promotional CD to promote <i>Sonic Adventure 2: Battle</i>, the updated GameCube port of Sonic Adventure 2.",
        img: "Sa2bsamplerdisc.jpg",
        tracks: [
            { id: "lal", d: "This CD includes short edits of vocal tracks, including Live & Learn." },
        ]
    },
    {
        title: "SONIC HEROES : TRIPLE THREAT - vocal trax",
        desc: "Triple Threat is the vocal tracks album of <i>Sonic Heroes</i>, including all of the vocal tracks of the game, plus all vocal tracks from Sonic Adventure as a bonus tracks.",
        img: "TripleThreatcoverart.jpg",
        tracks: [
            { id: "sh" },
            { id: "wimo" },
            { id: "oyh" }
        ]
    },
    {
        title: "SONIC HEROES : COMPLETE TRINITY - original soundtrax",
        desc: "Complete Trinity is the original soundtrack of <i>Sonic Heroes</i>, featuring all songs in the game, with the exception of the team themes.",
        img: "CompleteTrinitySonicHeroesOriginalSoundtrax.jpg",
        tracks: [
            { id: "sh", d: "The opening and title versions of Sonic Heroes are included on this CD." },
            { id: "wimo" },
        ]
    },
    {
        title: "Sonic Heroes Official Soundtrack",
        desc: "This album is the US release of the Sonic Heroes soundtrack.",
        img: "Sonicheroesost.jpg",
        tracks: [
            { id: "sh" },
            { id: "wimo" },
        ]
    },
    {
        title: "Shadow the Hedgehog Original Soundtrax",
        desc: "This album is the original soundtrack for <i>Shadow the Hedgehog</i>.",
        img: "ShadowtheHedgehogOriginalSoundtrack.jpg",
        tracks: [
            { id: "iam", d: "This album features the Opening and Final Doom versions of I Am... All Of Me" },
            { t: "I Am... The Story Is Over", id: "iam", d: "This album also features this track - which is most commonly known as the piano opening to 'Never Turn Back'" },
        ]
    },
    {
        title: "Shadow the Hedgehog Vocal Trax - Lost and Found",
        desc: "Lost and Found is the vocal tracks album of <i>Shadow the Hedgehog</i>.",
        img: "Lostfoundfront.jpg",
        tracks: [
            { id: "iam" },
            { id: "ntb" },
        ]
    },
    {
        title: "Sonic The Hedgehog Original Soundtrack",
        desc: "This album is the original soundtrack for 2006's <i>Sonic the Hedgehog</i>.",
        img: "sonicthehedgehog2006originalsoundtrack.jpg",
        tracks: [
            { id: "ahs", d: "This album features the Crush 40 version of 'All Hail Shadow'." },
        ]
    },
    {
        title: "Sonic The Hedgehog Vocal Traxx Several Wills",
        desc: "Several Wills is the vocal tracks album of 2006's Sonic the Hedgehog.",
        img: "SeveralWillsSonictheHedgehogVocalTrax.jpg",
        tracks: [
            { id: "ahs", d: "This album features the Crush 40 version of All Hail Shadow as Shadow's character theme." },
            { id: "hw", d: "This album features the Crush 40 version of His World as an extra track." },
        ]
    },
    {
        title: "True Blue - The Best of Sonic the Hedgehog",
        desc: "True Blue is a best-of compilation album consisting of various songs from the Sonic the Hedgehog series.",
        img: "TrueBluefrontcover.jpg",
        tracks: [
            { id: "sh" },
            { id: "oyh" },
            { id: "lal", d: "This album features a re-mixed version of Live & Learn." },
            { id: "wimo", d: "This album features a re-mixed version of What I'm Made Of...." },
            { id: "srih", d: "This album features a bonus track on this album." },
            { id: "oyh" , d: "This album also features the 'Crush 40 vs. Bentley Jones' remix of Open Your Heart." },
        ]
    },
    {
        title: "Face To Faith: Sonic and the Black Knight - Vocal Trax",
        desc: "Face To Faith is the vocal tracks album of Sonic and the Black Knight. It features all vocal tracks of the game, plus some extra tracks.",
        img: "FaceToFaithSonicandtheBlackKnightVocalTrax.jpg",
        tracks: [
            { id: "kotw" },
            { id: "ftk" },
            { id: "ttf" },
            { id: "ll" },
            { id: "wm", d: "Crush 40's version of With Me, 'With Me -Massive Power Mix- is included on this album.'" },
            { id: "ll" , d: "An instrumental version of Live Life is included on this album." },
            { id: "kotw" , d: "An instrumental version of Knight Of The Wind is included on this album." },
        ]
    },
    {
        title: "Tales of the Knighthood",
        desc: "'Tales of the Knighthood: Sonic and the Black Knight - Original Soundtrax' is the original soundtrack of Sonic and the Black Knight.",
        img: "TalesoftheKnighthood.jpg",
        tracks: [
            { id: "kotw", d: "This album includes the Title, TGS 2008, Original and 'Showdown With King Arthur' versions of this song." },
            { id: "ftk", d: "This album includes the strings mix of Fight the Knight." },
            { id: "ll", d: "This album includes an extremely short version of Live Life." },
            { id: "kotw", d: "In addition to the four versions above, an acoustic version of Knight of the Wind is also included." },
        ]
    },
    {
        title: "Sonic and the Black Knight Official Soundtrack vol.1",
        desc: "This album is the first volume of the digital release of the Sonic and the Black Knight soundtrack.",
        img: "SonicandtheBlackKnightOfficialSoundtrackvol.1.jpg",
        tracks: [
            { id: "kotw", d: "This album includes the Title, and full versions of this song." },
            { id: "ftk", d: "This album includes Fight the Knight, as well as its Strings Mix." },
            { id: "ttf" }
        ]
    },
    {
        title: "Sonic and the Black Knight Official Soundtrack vol.2",
        desc: "This album is the second volume of the digital release of the Sonic and the Black Knight soundtrack.",
        img: "SonicandtheBlackKnightOfficialSoundtrackvol.2.jpg",
        tracks: [
            { id: "kotw", d: "This album includes the TGS 2008 of this song." },
            { id: "ll" }
        ]
    },
    {
        title: "Sonic Free Riders Original Soundtrack - Break Free",
        desc: "Break Free is the original soundtrack of Sonic Free Riders.",
        img: "SonicFreeRidersOriginalSoundtrackBreakFree.jpg",
        tracks: [
            { id: "f", d: "The Crush 40 version of the song was featured as a bonus track on this album." },
        ]
    },
    {
        title: "Sonic Adventure Original Soundtrack 20th Anniversary Edition",
        desc: "This is the 20th Anniversary Edition of the Sonic Adventure Original Soundtrack.",
        img: "SonicAdventureOriginalSoundtrack20thAnniversaryEdition.jpg",
        tracks: [
            { id: "oyh" },
        ]
    },
    {
        title: "Sonic Adventure 2 Original Soundtrack 20th Anniversary Edition",
        desc: "This is the 20th Anniversary Edition of the Sonic Adventure 2 Original Soundtrack.",
        img: "Sonic Adventure2OriginalSoundtrack20thAnniversaryEdition.jpg",
        tracks: [
            { id: "lal"  },
        ]
    },
    {
        title: "Sonic Heroes Original Soundtrack 20th Anniversary Edition",
        desc: "This is the 20th Anniversary Edition of the Sonic Heroes Original Soundtrack. The tracklist is actually the same as the original US OST release, but the track lengths have been adjusted.",
        img: "SonicHeroesOriginalSoundtrack20thAnniversaryEdition.jpg",
        tracks: [
            { id: "sh" },
            { id: "wimo" }
        ]
    },
    {
        title: "Sonic the Hedgehog CD Original Soundtrack 20th Anniversary Edition",
        desc: "This is the original soundtrack of Sonic the Hedgehog CD, released for the 20th Anniversary of the series. It includes all music from the JP / PAL version of the game.",
        img: "SonictheHedgehogCDOriginalSoundtrack20thAnniversaryEdition.jpg",
        tracks: [
            { id: "sb", d: "The Crush 40 vs. Cash Cash version of Sonic Boom" },
        ]
    },
    {
        title: "Sonic Generations Original Soundtrack Blue Blur",
        desc: "Blue Blur is the original soundtrack of Sonic Generations.",
        img: "SonicGenerationsOriginalSoundtrackBlueBlur.jpg",
        tracks: [
            { id: "lal", d: "A short version of Live & Learn" },
            { id: "ahs", d: "A short version of All Hail Shadow" },
            { t: "Open Your Heart (Circuit Freq)", id: "oyh", d: "The 'Crush 40 vs. Circuit Freq' RMX of Open Your Heart." }
        ]
    },
    {
       
        title: "Sonic Generations Official Soundtrack Vol.1",
        desc: "This is the first volume of the digital release of the Sonic Generations soundtrack.",
        img: "SonicGenerationsOfficialSoundtrackVol.1.jpg",
        tracks: [
            { t: "Open Your Heart (Circuit Freq)", id: "oyh", d: "The 'Crush 40 vs. Circuit Freq' RMX of Open Your Heart, used for the Perfect Chaos Boss Battle." }
        ]
    },
    {
        title: "Shadow the Hedgehog Official Soundtrack",
        desc: "This is the digital release of the Shadow the Hedgehog soundtrack.",
        img: "ShadowtheHedgehogOfficialSoundtrack.jpg",
        tracks: [
            { id: "iam" },
            { id: "ntb" }
        ]
    },
    {
        title: "Sonic Adventure Original Soundtrack vol.2",
        desc: "This is the second volume of the digital release of the Sonic Adventure soundtack.",
        img: "SonicAdventureOriginalSoundtrackvol.2.jpg",
        tracks: [
            { id: "oyh" },
            { id: "oyh" }
        ]
    },
    {
        title: "Sonic Adventure 2 Original Soundtrack vol.2",
        desc: "This is the second volume of the digital release of the Sonic Adventure soundtack.",
        img: "SonicAdventure2OriginalSoundtrackvol.2.jpg",
        tracks: [
            { id: "lal" },
            { id: "lal" }
        ]
    },
    {
        title: "Sega Sound Selection 2",
        desc: "This digital album is the second part to a series of albums containing various songs from SEGA games.",
        img: "SegaSoundSelection2.jpg",
        tracks: [
            { id: "lal" }
        ]
    },
    {
        title: "The Works II",
        desc: "The Works is a series of albums by Jun Senoue, containing various tracks he's made throughout the years.",
        img: "TheWorksII.jpg",
        tracks: [
            { id: "dg" },
            { id: "itl" },
            { id: "fm" },
            { id: "atw" }
        ]
    },
    {
        title: "Sonic the Hedgehog 25th Anniversary Selection",
        desc: "This album is a selection of various Sonic the Hedgehog songs, made to celebrate the series' 25th anniversary.",
        img: "SonictheHedgehog25thAnniversarySelection.jpg",
        tracks: [
            { id: "oyh", d: "(Opening version)" },
            { id: "sh", d: "(Opening version)" },
            { id: "iam", d: "(Opening version)" },
            { id: "f", d: "(Opening version)" }
        ]
    },
    {
        title: "Sonic the Hedgehog Café Selection",
        desc: "This album is a selection of various Sonic the Hedgehog songs, made to celebrate the series' 25th anniversary.",
        img: "SonictheHedgehogCaféSelection.jpg",
        tracks: [
            { id: "ahs", d: "(Shortened version)" }
        ]
    },
    {
        title: "Sonic Forces Original Soundtrack [A Hero Will Rise]",
        desc: "his album contains songs that were played at the Sweets Paradise cafe during the 25th anniversary, it later saw a commercial release.",
        img: "SonicForcesOriginalSoundtrack[A Hero Will Rise].jpg",
        tracks: [
            { id: "ahs", d: "(Short edit)" }
        ]
    },
    {
        title: "Sonic Adventure Official Soundtrack Vinyl Edition",
        desc: "This album is the vinyl release of the Sonic Adventure soundtrack.",
        img: "SonicAdventureOfficialSoundtrackVinylEdition.jpg",
        tracks: [
            { id: "oyh" }
        ]
    },
    {
        title: "Sonic Adventure 2 Official Soundtrack Vinyl Edition",
        desc: "This album is the vinyl release of the Sonic Adventure 2 soundtrack.",
        img: "SonicAdventure2OfficialSoundtrackVinylEdition.jpg",
        tracks: [
            { id: "lal" }
        ]
    },
    {
        title: "Team Sonic Racing Trailer Selection",
        desc: "This album is the vinyl release of the Sonic Adventure 2 soundtrack.",
        img: "TeamSonicRacingTrailerSelection.jpg",
        tracks: [
            { id: "lal" }
        ]
    },
    {
        title: "Maximum Overdrive - Team Sonic Racing Original Soundtrack",
        desc: "Maximum Overdrive is the original soundtack of Team Sonic Racing.",
        img: "MaximumOverdriveTeamSonicRacingOriginalSoundtrack.jpg",
        tracks: [
            { id: "glr", d: "This CD features various versions: Full, opening ver. racing mix and the various short menu edits." },
            { id: "glr", d: "This CD features various remixes of Green Light Ride: Wall5, The Qemists and Tyler Smyth." },
            { t: "Team Ultimate: Shadow", id: "ahs", d: "A short version of 'All Hail Shadow'." }
        ]
    },
    {
        title: "Non-Stop Music Selection Vol.1",
        desc: "This album is the first of five 'Non-Stop' selections. 'Non-Stop' means there is no silence between songs, they all flow into each other.",
        img: "NonStopMusicSelectionVol.1.jpg",
        tracks: [
            { id: "lal" }
        ]
    },
    {
        title: "Non-Stop Music Selection Vol.4",
        desc: "This album is the fourth of five 'Non-Stop' selections. 'Non-Stop' means there is no silence between songs, they all flow into each other.",
        img: "NonStopMusicSelectionVol.4.jpg",
        tracks: [
            { id: "glr" }
        ]
    },
    {
        title: "GO SEGA - 60th ANNIVERSARY Album",
        desc: "This album released during SEGA's 60th anniversary, and contains a wide selection of songs from throughout the company's lifespan.",
        img: "GOSEGA60thANNIVERSARYAlbum.jpg",
        tracks: [
            { id: "oyh" },
            { id: "sh" }
        ]
    },
    {
        title: "Sonic 30th Anniversary Symphony",
        desc: "The Sonic 30th Anniversary Symphony was a digital concert held during the series' 30th anniversary. It is listed in the 'Shows' section.",
        img: "Sonic30thAnniversarySymphony.jpg",
        tracks: [
            { id: "oyh", d: "A 'live' performance of Open Your Heart." },
            { id: "sh", d: "A 'live' performance of Sonic Heroes." },
            { id: "glr", d: "A 'live' performance of Green Light Ride." },
            { id: "sb", d: "A 'live' performance of Sonic Boom." },
            { id: "iam", d: "A 'live' performance of I Am... All Of Me." },
            { id: "kotw", d: "A 'live' performance of Knight Of The Wind." },
            { id: "lal", d: "A 'live' performance of Live & Learn." },
        ]
    },
    {
        title: "Rock 'n' Sonic the Hedgehog: Sessions",
        desc: "Rock 'n' Sonic the Hedgehog: Sessions is an album containing various arrangements of Sonic the Hedgehog songs, by Jun Senoue.",
        img: "RocknSonictheHedgehogSessions.jpg",
        tracks: [
            { id: "lal", d: "An acoustic performance of Live & Learn." }
        ]
    }
];

let featuresSection;
let featureInfo;
let featureInfoTitle;
let featureInfoDescription;
let featureInfoTracks;
let featureMain;
let selectedFeatureItemTxt;

function InitFeatures()
{
    featuresSection = document.querySelector("#features");
    featureInfo = document.querySelector("#featureInfo");
    featureInfoTitle = document.querySelector("#featureTitle");
    featureInfoDescription = document.querySelector("#featureDescription");
    featureInfoTracks = document.querySelector("#featureTracks");
    featureMain = document.querySelector("#featuresMain");

    let featureList = document.querySelector("#featureList");

    for (let feature of features)
    {
        let newElem = document.createElement("li");
        newElem.classList.add("feature");

        let newElemImg = document.createElement("img");
        newElemImg.src = "img/content/discography/features/" + feature.img;
        newElem.appendChild(newElemImg);

        let newElemHover = document.createElement("div");
        newElemHover.classList.add("hover");

        // TODO: Add toggle closing!
        let newElemHoverTxt = document.createElement("p");
        newElemHoverTxt.innerText = "Expand";
        newElemHover.appendChild(newElemHoverTxt);

        newElem.appendChild(newElemHover);

        newElem.addEventListener('click', () => {

            // If it's already selected, close it.
            if (newElemHoverTxt == selectedFeatureItemTxt)
            {
                HideFeatureInfo();
                return;
            }

            // Deselect everyone
            DeselectFeatures();

            // Select this one
            selectedFeatureItemTxt = newElemHoverTxt;
            selectedFeatureItemTxt.innerText = "Close";
            newElem.classList.add("selected");

            // Display the details
            ViewFeatureDetails(feature);
        });

        document.querySelector("#featureInfoClose").addEventListener('click', HideFeatureInfo);

        featureList.appendChild(newElem);
    }
}

function DeselectFeatures()
{
    for (let itm of featureList.querySelectorAll("li"))
        itm.classList.remove("selected");

    if (selectedFeatureItemTxt)
        selectedFeatureItemTxt.innerText = "Expand";

    selectedFeatureItemTxt = null;
}

function ViewFeatureDetails(feature)
{
    ShowFeatureInfo();
    featureInfoTitle.innerText = feature.title;
    featureInfoDescription.innerHTML = feature.desc;
    
    featureInfoTracks.replaceChildren();
    for (let track of feature.tracks)
    {
        let newTrack = document.createElement("li");
        newTrack.classList.add("track");
        newTrack.addEventListener('click', () => UpdatePanelPage("songView?s=" + track.id));

        let trackTitle = document.createElement("h4");
        trackTitle.innerText = track.t ? track.t : Crush40Songs[track.id].t;
        newTrack.appendChild(trackTitle);

        if (track.d)
        {
            let trackDescription = document.createElement("p");
            trackDescription.innerHTML = track.d;
            newTrack.appendChild(trackDescription);
        }

        featureInfoTracks.appendChild(newTrack);
    }
}

function ShowFeatureInfo()
{
    featureInfo.style.visibility = 'visible';
    featuresSection.classList.add("featuresOpen");
}

function HideFeatureInfo()
{
    DeselectFeatures();

    featureInfo.style.visibility = 'collapse';
    featuresSection.classList.remove("featuresOpen");
}

// Song Viewer
let songsSearch;
let songsList;

function InitSongs()
{
    let songList = Object.keys(Crush40Songs).map(id => ({ id: id, data: Crush40Songs[id] }));

    songsSearch = document.querySelector("#songsSearch");
    songsList = document.querySelector("#songList");

    songsSearch.addEventListener('input', () => {
        let searchTerm = songsSearch.value.toLowerCase();

        if (searchTerm == "")
            songsSearch.classList.remove("active");
        else
            songsSearch.classList.add("active");

        let itms = songList.filter(x => 
            x.data.t.toLowerCase().includes(searchTerm) ||
            x.data.y.toString().toLowerCase().includes(searchTerm) ||
            x.data.g.toLowerCase().includes(searchTerm));
        UpdateSongs(itms, searchTerm);
    });

    UpdateSongs(songList, "");
}

function UpdateSongs(songs, searchTerm)
{
    songsList.replaceChildren();

    for (let itm of songs)
    {
        let newSongView = document.createElement("li");
        newSongView.classList.add("song");
        newSongView.addEventListener('click', () => UpdatePanelPage("songView?s=" + itm.id));
        
        let title = document.createElement("h2");
        title.innerHTML = CreateHTMLFor(itm.data.t, searchTerm);
        newSongView.appendChild(title);

        let year = document.createElement("p");
        year.classList.add("year");
        year.innerHTML = CreateHTMLFor(itm.data.y.toString(), searchTerm);
        newSongView.appendChild(year);

        let soundtrack = document.createElement("p");
        soundtrack.classList.add("soundtrack");
        soundtrack.innerHTML = CreateHTMLFor(itm.data.g, searchTerm);
        newSongView.appendChild(soundtrack);

        songsList.appendChild(newSongView);
    }
}

// Creates HTML with bold around the searched items
function CreateHTMLFor(itm, searchTerm)
{
    if (searchTerm == "") return itm;

    let lowerItm = itm.toLowerCase();
    let result = "";
    let currentPos = 0;
    while (true)
    {
        let newPos = lowerItm.indexOf(searchTerm, currentPos);
        if (newPos == -1) break;
        
        result += itm.substring(currentPos, newPos);
        currentPos = newPos;

        result += "<u>";
        result += itm.substring(currentPos, newPos + searchTerm.length);
        result += "</u>";

        currentPos += searchTerm.length;
    }

    result += itm.substring(currentPos, itm.length);
    return result;
}