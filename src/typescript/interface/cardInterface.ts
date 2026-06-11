export interface Section2Cards {
    id: number
    img: string;
    heading: string;
    description: string;
    brief: Brief[];
}

interface Brief {
            type: string;
            about: string;
            location: string;
            price: string;
}
