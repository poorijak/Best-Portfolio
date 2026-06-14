export interface EducationType {
    id: string
    university: string
    degree: string
    duration: string
    isCurrent: boolean
}

export const EDUCATION_DATA: EducationType[] = [
    {
        id: "1",
        university: "King Mongkut's University Of Technology Thonburi",
        degree: "B. Sc. In Applied Computer Science - Multimedia, Faculty Of Industrial Education And Technology",
        duration: "2023 - Present",
        isCurrent: true
    },
    {
        id: "2",
        university: "King Mongkut's University Of Technology Thonburi",
        degree: "B. Sc. In Applied Computer Science - Multimedia, Faculty Of Industrial Education And Technology",
        duration: "2023 - Present",
        isCurrent: true
    },

]




export interface ImageSetType {
    id: string
    src: string
}


export const IMAGESET_DATA: ImageSetType[] = [
    {
        id: "1",
        src: "image1"
    },
    {
        id: "2",
        src: "image2"
    },
    {
        id: "3",
        src: "image3"
    },
    {
        id: "4",
        src: "image4"
    },
    {
        id: "5",
        src: "image5"
    },
    {
        id: "6",
        src: "image6"
    },
    {
        id: "7",
        src: "image7"
    },
]


export const MYTECHSTACK_DATA_1: { id: string, icon: string }[] = [
    { id: "1", icon: "nextjs2" },
    { id: "2", icon: "figma" },
    { id: "3", icon: "azure" },
    { id: "4", icon: "python" },
    { id: "5", icon: "mysql" },
    { id: "6", icon: "expressjs" },
    { id: "7", icon: "docker" },
    { id: "8", icon: "firebase" },
    { id: "9", icon: "c++" },
    { id: "10", icon: "net" },
    { id: "11", icon: "hono" }
]

export const MYTECHSTACK_DATA_2: { id: string, icon: string }[] = [
    { id: "1", icon: "shadcnui" },
    { id: "2", icon: "flutter" },
    { id: "3", icon: "kotlin" },
    { id: "4", icon: "bunjs" },
    { id: "5", icon: "nodejs" },
    { id: "6", icon: "gsap" },
    { id: "7", icon: "framer" },
    { id: "8", icon: "postgresql" },
    { id: "9", icon: "npm" },
    { id: "10", icon: "vercel" },
    { id: "11", icon: "tailwindcss" }
]