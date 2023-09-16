import { facebook, instagram, x,  youtube} from '../asset/icon'

export const movies = [
    {
        id: 1,
        title: 'Movie 1',
        posterUrl: '/path-to-poster-1.jpg',
        releaseDate: '2023-01-15',
    },
    {
        id: 2,
        title: 'Movie 2',
        posterUrl: '/path-to-poster-2.jpg',
        releaseDate: '2023-02-20',
    },
    {
        id: 3,
        title: 'Movie 3',
        posterUrl: '/path-to-poster-3.jpg',
        releaseDate: '2023-03-25',
    },
    {
        id: 4,
        title: 'Movie 4',
        posterUrl: '/path-to-poster-4.jpg',
        releaseDate: '2023-04-30',
    },
]

export const footerLinks = [
    {
        title: "Condition of Use",
        links: [
            { href: "#contact-us", label: "Contact Us" },
        ],
    },
    {
        title: "Privacy & Policy",
        links: [
            { href: "#contact-us", label: "Contact Us" },
        ],
    },
    {
        title: "Press Room",
        links: [
            { href: "#contact-us", label: "Contact Us" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: x, alt: "x logo" },
    { src: instagram, alt: "instagram logo" },
    { src: youtube, alt: "youtube logo" },
];