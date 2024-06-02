import { AppLinks } from "@/types/app-links"
import { RiGithubFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Acceuil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Codeurs Monkeys",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formation",
        baseUrl: "https://www.youtube.com/watch?v=7Xu90Fg9Z94&t=1254s",
        type: "external"
    }
];
const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal"
    }
];
const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    }
];
export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Youtuve",
        baseUrl: "https://www.youtube.com/watch?v=7Xu90Fg9Z94&t=1254s",
        type: "external",
        icon: RiYoutubeFill
    },
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/in/guarneri-anthony/",
        type: "external",
        icon: RiLinkedinFill
    },
    {
        label: "GitHub",
        baseUrl: "https://github.com/guarneriAnthony",
        type: "external",
        icon: RiGithubFill
    }
];

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks
    },
    {
        label: "Informations",
        links: footerInformationLinks
    },
    {
        label: "Reseaux",
        links: footerSocialNetworksLinks
    }
]
    
