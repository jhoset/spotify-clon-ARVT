import { colors } from "./colors";

export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export const playlists: Playlist[] = [
    {
        id: '1',
        albumId: 1,
        title: "Trance & Others",
        color: colors.yellow,
        cover:
            "https://i.scdn.co/image/ab67706f000000029dab68973bc338db60e06d51",
        artists: ["ASOT", "Armin Van Burren"],
    },
    {
        id: '2',
        albumId: 2,
        title: "Lo-Fi Chill Session",
        color: colors.green,
        cover:
            "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
        artists: ["Various Artists"],
    },
    {
        id: '3',
        albumId: 3,
        title: "Study Session",
        color: colors.rose,
        cover:
            "https://f4.bcbits.com/img/a1435058381_65.jpg",
        artists: ["Tenno", "xander", "Team Astro"],
    },
    {
        id: '4',
        albumId: 4,
        title: "Blue Note Study Time",
        color: colors.blue,
        cover:
            "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Raimu", "Yasumu"],
    },
    {
        id: '5',
        albumId: 5,
        title: "Chau Saura Session",
        color: colors.purple,
        cover:
            "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["Chau Saura", "amies", "kyu"],
    },
    {
        id: '6',
        albumId: 6,
        title: "Like a Necessity",
        color: colors.orange,
        cover:
            "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
    },
];

export const morePlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
}))

export const allPlaylists = [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists,
]

export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [
    {
        "id": 1,
        "albumId": 1,
        "title": "Destination",
        "image": `https://i.scdn.co/image/ab67616d0000b2735f026f7ce67ef161d31e9d0c`,
        "artists": ["Armin Van Buuren", "Ferry Corsten", "Rank 1", "Ruben de Ronde"],
        "album": "Trance & Others",
        "duration": "3:24"
    },
    {
        "id": 2,
        "albumId": 1,
        "title": "Belong (Official Audio Radio Edit)",
        "image": `https://geo-media.beatport.com/image_size/500x500/e6f4a4e5-272a-4c8c-81c6-934a7684f648.jpg`,
        "artists": ["Axwell & Shapov"],
        "album": "Trance & Others",
        "duration": "3:24"
    },
    {
        "id": 3,
        "albumId": 1,
        "title": "Zombie",
        "image": `https://i1.sndcdn.com/artworks-pauX4Kn1DzkN-0-t500x500.png`,
        "artists": ["Bassjackers Remix"],
        "album": "Trance & Others",
        "duration": "3:31"
    },
    {
        "id": 4,
        "albumId": 1,
        "title": "The Island - Pt. I (Dawn)",
        "image": `https://i.scdn.co/image/ab67616d0000b27330f8e0f777376780c4077507`,
        "artists": ["Pendulum"],
        "album": "Trance & Others",
        "duration": "3:48"
    },
    {
        "id": 5,
        "albumId": 1,
        "title": "Sleep When We're Dead",
        "image": `https://i1.sndcdn.com/artworks-000390125688-smuc18-t500x500.jpg`,
        "artists": ["Italo-Brothers"],
        "album": "Trance & Others",
        "duration": "3:06"
    },
    {
        "id": 1,
        "albumId": 2,
        "title": "Silent Rain",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 2,
        "title": "Lost Pages",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 2,
        "title": "Midnight Tales",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 2,
        "title": "City Lights",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 2,
        "title": "Night Drive",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "4:20"
    },
    {
        "id": 1,
        "albumId": 3,
        "title": "Lunar",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 3,
        "title": "Go go go!",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 3,
        "title": "Keep focus!",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 4,
        "albumId": 3,
        "title": "JavaScript is the way",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 5,
        "albumId": 3,
        "title": "No more TypeScript for me",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 4,
        "title": "Lunar",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 4,
        "title": "Go go go!",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 4,
        "title": "Keep focus!",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 4,
        "albumId": 4,
        "title": "JavaScript is the way",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 5,
        "albumId": 4,
        "title": "No more TypeScript for me",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 5,
        "title": "Moonlit Walk",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:12"
    },
    {
        "id": 2,
        "albumId": 5,
        "title": "Coffee Daze",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:07"
    },
    {
        "id": 3,
        "albumId": 5,
        "title": "Skyline Serenade",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 5,
        "title": "Urban Echoes",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 5,
        "title": "Night's End",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:20"
    },
]