export interface VehicleDescription {
    color: string;
    type: string;
    isCammer?: boolean;
}

export interface Scenario {
    id: string;
    title: string;
    videoUrl: string;
    votes: {
        cammer: number;
        other: number;
        both: number;
    };
    vehicles?: {
        cammer: VehicleDescription;
        other: VehicleDescription;
    };
}

export const SCENARIOS: Scenario[] = [
    {
        id: '1',
        title: 'Near miss today, hate when people do this',
        videoUrl: 'https://v.redd.it/mzqnskvodh0g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 2 },
        vehicles: {
            cammer: { color: 'Red', type: 'Sedan', isCammer: true },
            other: { color: 'Black', type: 'SUV', isCammer: false }
        }
    },
    {
        id: '2',
        title: 'Sheffield near miss today',
        videoUrl: 'https://v.redd.it/gm9b4g48qf0g1/CMAF_480.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Grey', type: 'Car', isCammer: true },
            other: { color: 'Blue', type: 'Hatchback', isCammer: false }
        }
    },
    {
        id: '3',
        title: 'Winter has arrived',
        videoUrl: 'https://v.redd.it/0g85r6cwu00g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Camera', isCammer: true },
            other: { color: 'Black', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '4',
        title: 'Flipped like a pancake, landed like a pro',
        videoUrl: 'https://v.redd.it/a4x6gf2hnmzf1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'White', type: 'Car', isCammer: true },
            other: { color: 'Grey', type: 'SUV', isCammer: false }
        }
    },
    {
        id: '5',
        title: 'Semi truck taking a u turn on state highway WA-18',
        videoUrl: 'https://v.redd.it/r8bzheifbfzf1/CMAF_360.mp4?source=fallback',
        votes: { cammer: 4, other: 0, both: 4 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '6',
        title: 'VA Hit and Run causes car to roll over',
        videoUrl: 'https://v.redd.it/ywr19dbno8zf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Silver', type: 'Sedan', isCammer: false }
        }
    },
    {
        id: '7',
        title: 'This is the closest call ever seen',
        videoUrl: 'https://v.redd.it/uwz124ex2bzf1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Silver', type: 'Car', isCammer: false }
        }
    },
    {
        id: '8',
        title: 'NC - Maintain proper following distance',
        videoUrl: 'https://v.redd.it/5rj3af9vf7zf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'White', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '9',
        title: 'OK Idiot trifecta',
        videoUrl: 'https://v.redd.it/pt1nly25eyyf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '10',
        title: 'Did not make it in time',
        videoUrl: 'https://v.redd.it/lpr6474c4nyf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Yellow', type: 'Train', isCammer: false }
        }
    },
    {
        id: '11',
        title: 'Van got brake fade going downhill',
        videoUrl: 'https://v.redd.it/bzun3mu1tgyf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'White', type: 'Van', isCammer: false }
        }
    },
    {
        id: '12',
        title: 'Lost control but music gave him skills',
        videoUrl: 'https://v.redd.it/l9pz43a4e8yf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Grey', type: 'Car', isCammer: false }
        }
    },
    {
        id: '13',
        title: 'First car crash',
        videoUrl: 'https://v.redd.it/pfnawe893yxf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Blue', type: 'Car', isCammer: false }
        }
    },
    {
        id: '14',
        title: 'Drove into cop cars',
        videoUrl: 'https://v.redd.it/egy6wkuq6xxf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'White', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '15',
        title: 'WA - SUV runs red light, slams into van',
        videoUrl: 'https://v.redd.it/y3grxao5fxxf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Camera', isCammer: true },
            other: { color: 'White', type: 'SUV', isCammer: false }
        }
    },
    {
        id: '16',
        title: 'That was scary',
        videoUrl: 'https://v.redd.it/of7ztncr9hxf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '17',
        title: 'Road rager wants a Darwin Award',
        videoUrl: 'https://v.redd.it/ykgsr60szcxf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'White', type: 'Van', isCammer: false }
        }
    },
    {
        id: '18',
        title: 'NYC Insurance Frauds at it again',
        videoUrl: 'https://v.redd.it/qlf9trxbf3xf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Silver', type: 'Sedan', isCammer: false }
        }
    },
    {
        id: '19',
        title: 'What NOT to do when passing a tractor',
        videoUrl: 'https://v.redd.it/iwo1pw6amwwf1/DASH_480.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Blue', type: 'Car', isCammer: false }
        }
    },
    {
        id: '20',
        title: 'Ford GT cuts off cam car on tail of dragon NC',
        videoUrl: 'https://v.redd.it/3i3ac8eypyvf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Grey', type: 'Coupe', isCammer: false }
        }
    },
    {
        id: '21',
        title: 'That must have been scary',
        videoUrl: 'https://v.redd.it/iaostjkznwvf1/DASH_270.mp4?source=fallback',
        votes: { cammer: 2, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '22',
        title: 'Road rage incident escalates quickly',
        videoUrl: 'https://v.redd.it/99v05fnxijvf1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '23',
        title: 'WA witnessed crash, gave video to cops',
        videoUrl: 'https://v.redd.it/vl1dljphibvf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 3 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '24',
        title: 'Dangerous merge onto highway',
        videoUrl: 'https://v.redd.it/cimc20ip4yvf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '25',
        title: 'Truck runs stop sign at intersection',
        videoUrl: 'https://v.redd.it/026u7antpn1g1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '26',
        title: 'Canada fault incident',
        videoUrl: 'https://v.redd.it/fdhcdbuhko2g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '27',
        title: 'Aggressive lane change causes near miss',
        videoUrl: 'https://v.redd.it/mzqnskvodh0g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '28',
        title: 'Running red light collision',
        videoUrl: 'https://v.redd.it/gm9b4g48qf0g1/CMAF_480.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '29',
        title: 'Icy road spinout',
        videoUrl: 'https://v.redd.it/0g85r6cwu00g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '30',
        title: 'Pedestrian crossing incident',
        videoUrl: 'https://v.redd.it/a6qiml6on20g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Pedestrian', isCammer: false }
        }
    },
    {
        id: '31',
        title: 'Rollover on highway',
        videoUrl: 'https://v.redd.it/a4x6gf2hnmzf1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '32',
        title: 'Illegal U-turn by semi truck',
        videoUrl: 'https://v.redd.it/r8bzheifbfzf1/CMAF_360.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '33',
        title: 'Tailgating leads to rear-end collision',
        videoUrl: 'https://v.redd.it/5rj3af9vf7zf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '34',
        title: 'Failed to beat the light',
        videoUrl: 'https://v.redd.it/lpr6474c4nyf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 2, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '35',
        title: 'Brake failure on steep descent',
        videoUrl: 'https://v.redd.it/bzun3mu1tgyf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '36',
        title: 'Red light runner causes T-bone',
        videoUrl: 'https://v.redd.it/irk4rczqxayf1/DASH_270.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '37',
        title: 'Epic save after losing control',
        videoUrl: 'https://v.redd.it/l9pz43a4e8yf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '38',
        title: 'Crashing into police cars',
        videoUrl: 'https://v.redd.it/egy6wkuq6xxf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 3 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '39',
        title: 'SUV blows through red light',
        videoUrl: 'https://v.redd.it/y3grxao5fxxf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'White', type: 'SUV', isCammer: false }
        }
    },
    {
        id: '40',
        title: 'Close call with oncoming traffic',
        videoUrl: 'https://v.redd.it/of7ztncr9hxf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '41',
        title: 'Extreme road rage behavior',
        videoUrl: 'https://v.redd.it/ykgsr60szcxf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '42',
        title: 'Insurance fraud attempt NYC',
        videoUrl: 'https://v.redd.it/qlf9trxbf3xf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '43',
        title: 'Dangerous tractor pass attempt',
        videoUrl: 'https://v.redd.it/iwo1pw6amwwf1/DASH_480.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '44',
        title: 'Supercar cuts off camera car',
        videoUrl: 'https://v.redd.it/3i3ac8eypyvf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '45',
        title: 'Terrifying near miss',
        videoUrl: 'https://v.redd.it/iaostjkznwvf1/DASH_270.mp4?source=fallback',
        votes: { cammer: 2, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '46',
        title: 'Intersection collision avoidance',
        videoUrl: 'https://v.redd.it/99v05fnxijvf1/DASH_480.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '47',
        title: 'Washington state highway crash',
        videoUrl: 'https://v.redd.it/vl1dljphibvf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '48',
        title: 'Merging without looking',
        videoUrl: 'https://v.redd.it/cimc20ip4yvf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '49',
        title: 'Stop sign violation',
        videoUrl: 'https://v.redd.it/026u7antpn1g1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '50',
        title: 'Canadian winter driving fail',
        videoUrl: 'https://v.redd.it/fdhcdbuhko2g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    }
,
    {
        id: '51',
        title: "Watching this unfold from my hotel in Paris has been riveting.",
        videoUrl: 'https://v.redd.it/l7mw9f1t3jxe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '52',
        title: "Hummer tries to insurance scam but I found R just in time. Be careful out there",
        videoUrl: 'https://v.redd.it/dn4d7ub9myme1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '53',
        title: "Let’s transport rebar hanging out the rear seat window![oc]",
        videoUrl: 'https://v.redd.it/xujug6emt7xe1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '54',
        title: "94 year old woman driving into incoming traffic",
        videoUrl: 'https://v.redd.it/3o6m1pcv0f3f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '55',
        title: "Happened to my wife on the way home.",
        videoUrl: 'https://v.redd.it/91crur3ufp4f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '56',
        title: "Poor decision and poor cop placement",
        videoUrl: 'https://v.redd.it/zwzipi0kgj3f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black/White', type: 'Police', isCammer: false }
        }
    },
    {
        id: '57',
        title: "Truck driver ignores two height restriction barriers (hanging plates) and crashes into ...",
        videoUrl: 'https://v.redd.it/998ar3jyn0ve1/DASH_360.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '58',
        title: "Of course this is the day after I lost my job [OC]",
        videoUrl: 'https://v.redd.it/la0mi59g2e2f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '59',
        title: "We had the unfortunate luck to be stuck behind these jerks",
        videoUrl: 'https://v.redd.it/k65v4047f8if1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '60',
        title: "Girlfriend and I's trip to Vegas nearly got cut short",
        videoUrl: 'https://v.redd.it/vrooukf0siyf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '61',
        title: "My Neighbor Is An Idiot [OC]",
        videoUrl: 'https://v.redd.it/dts03374jqsf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 4 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '62',
        title: "We locked eyes before she got in, maybe she was distracted",
        videoUrl: 'https://v.redd.it/cjlawc2hdk1f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 0, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '63',
        title: "Lightning McQueen.",
        videoUrl: 'https://v.redd.it/6l8hpfayewqe1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '64',
        title: "Too bad for him, I feel like being a petty asshole as well [OC]",
        videoUrl: 'https://v.redd.it/wchz78pozasf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '65',
        title: "Moron was worried about the Camry's poor driving skills only to ruin my day",
        videoUrl: 'https://v.redd.it/7dzbqwd29hue1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '66',
        title: "Idiot turns in front of me, and then coasts into a parked car. Hit and run [OC]",
        videoUrl: 'https://v.redd.it/jahuud76o61f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 4, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '67',
        title: "I'm sorry for not realizing cyclists do not have to stop at stop signs 😞 😭🤷‍♀️[oc] /...",
        videoUrl: 'https://v.redd.it/26oxwilzqg0f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '68',
        title: "Illegal u-turn leads to disaster.",
        videoUrl: 'https://v.redd.it/hcwgrwazny2f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 6, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '69',
        title: "I sold a car to someone yesterday who just assumed they knew how to drive",
        videoUrl: 'https://v.redd.it/ibfqdz63m8yf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '70',
        title: "I almost lost my girlfriend the other day",
        videoUrl: 'https://v.redd.it/5gvbb6wjqg6f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '71',
        title: "Elderly lady in front of me couldn’t figure out traffic cone pattern in a construction ...",
        videoUrl: 'https://v.redd.it/tfcq4f9n3dvf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '72',
        title: "I came in like a wrecking ball [OC]",
        videoUrl: 'https://v.redd.it/umyfih47eo6e1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '73',
        title: "Truck crosses 5 lanes, hits me head on, and speeds away [OC]",
        videoUrl: 'https://v.redd.it/prx5plyvf86e1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '74',
        title: "I did not see the giant puddle",
        videoUrl: 'https://v.redd.it/tkm4kuuwp6zf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '75',
        title: "A truck in LA started pouring cement on the highway",
        videoUrl: 'https://v.redd.it/mswskgly4vlf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '76',
        title: "To the person in the grey BMW… I hate you.",
        videoUrl: 'https://v.redd.it/tp0rd9tm5jdf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'BMW', isCammer: false }
        }
    },
    {
        id: '77',
        title: "My Dad's dashcam footage from him trying to make it to my wedding",
        videoUrl: 'https://v.redd.it/9osalz3014if1/DASH_360.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '78',
        title: "Ran into the same guy twice yesterday (DFW,TX) [oc]",
        videoUrl: 'https://v.redd.it/ixhjg52ibire1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '79',
        title: "I was almost turned into a statistic today. If anyone can make out the license plate pl...",
        videoUrl: 'https://v.redd.it/mn02l43m98kf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '80',
        title: "Why is zipper merging so frowned upon in America? Got a middle finger while doing this....",
        videoUrl: 'https://v.redd.it/d7kyg9n3vzye1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '81',
        title: "Uphill in reverse, why not",
        videoUrl: 'https://v.redd.it/oormcm92kwzf1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '82',
        title: "Same woman breaks the law every day, in multiple places. (NSFW for Bill's language)",
        videoUrl: 'https://v.redd.it/vv1g7qh89q3f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '83',
        title: "Altima doing a 360 on i80!!",
        videoUrl: 'https://v.redd.it/pyhd4airo68f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '84',
        title: "The dude never slowed down at all. NSFW due to language.",
        videoUrl: 'https://v.redd.it/0ffnsnbpsq6f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '85',
        title: "Guy crashes in to my tree [oc]",
        videoUrl: 'https://v.redd.it/du9y8ust3v2f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '86',
        title: "I’m speechless - happened in an empty parking lot",
        videoUrl: 'https://v.redd.it/0zwmnr3agmrf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '87',
        title: "Truck driver gets mad that I used the required turn lane",
        videoUrl: 'https://v.redd.it/lc1hyy7lsmpf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '88',
        title: "Pickup appeared out of nowhere and causes Tesla to crash. (Both drivers are safe) [OC]",
        videoUrl: 'https://v.redd.it/5qive3nld81g1/CMAF_480.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Tesla', isCammer: false }
        }
    },
    {
        id: '89',
        title: "Idiot in F-150 jumps median, hits me head on [oc]",
        videoUrl: 'https://v.redd.it/rxqg7wivc6de1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '90',
        title: "What happens to cars that jump through the plastic bollards on the express lane in Aust...",
        videoUrl: 'https://v.redd.it/gbou48djiqke1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '91',
        title: "from 40mph to a complete stop at a green light",
        videoUrl: 'https://v.redd.it/e5hit8rmqtxe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '92',
        title: "I still don’t know what she was thinking",
        videoUrl: 'https://v.redd.it/l5cog7u0d4ue1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '93',
        title: "A Lady Fully Asleep Behind the Wheel on the 405.",
        videoUrl: 'https://v.redd.it/yigz0ghdum5f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '94',
        title: "Impatient tractor driver gets instant karma after undertaking (he was banned for a year...",
        videoUrl: 'https://v.redd.it/2tdt2w9ezdkf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '95',
        title: "Is there anything I can do about this?",
        videoUrl: 'https://v.redd.it/6tuydcyajexf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '96',
        title: "Driver decides she doesn’t want to turn left anymore and pulls out in front of me as I ...",
        videoUrl: 'https://v.redd.it/px92aroa1kme1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '97',
        title: "When your gf says she’s home alone, and you’re about to miss the exit",
        videoUrl: 'https://v.redd.it/pvwugk67move1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '98',
        title: "I had the nerve to shake my head...and he took that personally.",
        videoUrl: 'https://v.redd.it/jxhrd9ihovse1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '99',
        title: "Who’s at fault? She put her turn signal on but pulled off on to the shoulder.[OC]",
        videoUrl: 'https://v.redd.it/qemeeewnrfze1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '100',
        title: "Couldn't figure out how I missed this SUV in my blind spot. Oh. That's how.",
        videoUrl: 'https://v.redd.it/f8hyt7b9sysf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'SUV', isCammer: false }
        }
    },
    {
        id: '101',
        title: "I stop before the intersection, lady didn’t see me.",
        videoUrl: 'https://v.redd.it/f0g2fwz6rsee1/DASH_720.mp4?source=fallback',
        votes: { cammer: 4, other: 0, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '102',
        title: "Driver PIT maneuvers another driver during road rage incident [oc]",
        videoUrl: 'https://v.redd.it/0ndfo6i2cnmf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 5, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '103',
        title: "When people treat the space in front of them at a red light like a reserved parking spot",
        videoUrl: 'https://v.redd.it/by1bqh3ii7hf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '104',
        title: "Hit-and-Run - Idiot came Back for His license plate [OC]",
        videoUrl: 'https://v.redd.it/fok3c3dm6azf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '105',
        title: "Quite possibly the worst towing set-up I’ve ever seen.",
        videoUrl: 'https://v.redd.it/vjzsx3pnxvef1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '106',
        title: "Someone needs to learn how to look both ways [OC]",
        videoUrl: 'https://v.redd.it/e011q208y5qf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '107',
        title: "Roid rage at its best [oc]",
        videoUrl: 'https://v.redd.it/v9h1qkzedese1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '108',
        title: "More stupidity from the Massachusetts tunnels [oc]",
        videoUrl: 'https://v.redd.it/w1hp073uo7we1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '109',
        title: "It’s their world, I’m just living in it",
        videoUrl: 'https://v.redd.it/fufs7norkiff1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '110',
        title: "Witnessed some incredible parking skills last night...",
        videoUrl: 'https://v.redd.it/mxltcp52u80g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '111',
        title: "Idiot literally can’t wait 20 seconds for the car in front of me to load their baby in ...",
        videoUrl: 'https://v.redd.it/7ulrhnelyp7f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '112',
        title: "need help identifying license plate. Hit and Run",
        videoUrl: 'https://v.redd.it/2xc6j95i8tze1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '113',
        title: "Suicide Lane Shenanigans",
        videoUrl: 'https://v.redd.it/ybxi5vsgppzf1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '114',
        title: "This happened to me just a bit ago. Seriously people need to learn to wait and not cros...",
        videoUrl: 'https://v.redd.it/4gsuz23tfoaf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '115',
        title: "NYC, Life lesson: Control your emotions — this accident could’ve been prevented.",
        videoUrl: 'https://v.redd.it/rp4iipti00ze1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '116',
        title: "School bus in the oncoming lane.",
        videoUrl: 'https://v.redd.it/glhfu8x4okrf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bus', isCammer: false }
        }
    },
    {
        id: '117',
        title: "When one idiot stops at a green light there might be a legit reason [OC]",
        videoUrl: 'https://v.redd.it/chqlmz80u56f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '118',
        title: "He did not Dodge. He Rammed. (language warning)",
        videoUrl: 'https://v.redd.it/zp5jibwurcdf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '119',
        title: "At a car meet in Scotland today",
        videoUrl: 'https://v.redd.it/zvka76ex9cme1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '120',
        title: "Another idiot almost missed her exit [oc]",
        videoUrl: 'https://v.redd.it/weh7n2tkra2g1/CMAF_480.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '121',
        title: "Lady yells at me in roundabout when she’s wrong",
        videoUrl: 'https://v.redd.it/bn372tqzqvff1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '122',
        title: "“wHy’D yOu BrAkE cHeCk Me???”",
        videoUrl: 'https://v.redd.it/hwx8md8b5ybf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '123',
        title: "\"I thought you were signalling for me to pass\"",
        videoUrl: 'https://v.redd.it/p5aplpnqeq0g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '124',
        title: "Car decides to turn on red in front of bus",
        videoUrl: 'https://v.redd.it/ed4xd2a7tq4e1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bus', isCammer: false }
        }
    },
    {
        id: '125',
        title: "Maybe the most egregious thing I’ve seen",
        videoUrl: 'https://v.redd.it/3rtt6klcippe1/DASH_270.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '126',
        title: "Gave up on his last-second attempt at a merge and was very upset at me for it...",
        videoUrl: 'https://v.redd.it/im2vhk5ksj1g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 4 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '127',
        title: "red light runner right in front of cop",
        videoUrl: 'https://v.redd.it/wjvqlllrpnqe1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black/White', type: 'Police', isCammer: false }
        }
    },
    {
        id: '128',
        title: "Idiot intentionally blocking anambulance",
        videoUrl: 'https://v.redd.it/7mgymoy9j99e1/DASH_360.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '129',
        title: "If I'm on my brakes for 5 seconds, you should probably apply yours, too",
        videoUrl: 'https://v.redd.it/6zqlng94dexe1/DASH_480.mp4?source=fallback',
        votes: { cammer: 5, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '130',
        title: "probably was worth the wait not to look like a compete idiot",
        videoUrl: 'https://v.redd.it/lxssf6m60qcf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 2, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '131',
        title: "This lady was sitting waiting to turn, but when the light turned red she just decided n...",
        videoUrl: 'https://v.redd.it/lszvf2ltnnyf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '132',
        title: "Got my reflexes tested this morning",
        videoUrl: 'https://v.redd.it/uw18eiiwlise1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '133',
        title: "Driver behind me thinks I brake-checked him when I was just slowing for a turning truck",
        videoUrl: 'https://v.redd.it/gfbjevi6au1g1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '134',
        title: "Uber driver tells me this was my fault. Language warning",
        videoUrl: 'https://v.redd.it/acmm7nan510g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '135',
        title: "Got rear ended and i really im out of words[oc]",
        videoUrl: 'https://v.redd.it/9h5c4b4hmm0f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '136',
        title: "Too privileged to unload groceries in parking spot",
        videoUrl: 'https://v.redd.it/bkf2qm6gseif1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '137',
        title: "Headed home this morning and narrowly stopped in time",
        videoUrl: 'https://v.redd.it/vel4igrofi8f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '138',
        title: "First crash caught on my dashcam... was into me! [Oc]",
        videoUrl: 'https://v.redd.it/ngmxjhh9ub4f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '139',
        title: "clean off your cars people!",
        videoUrl: 'https://v.redd.it/x9jkja7awbie1/DASH_720.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '140',
        title: "Smart driver races a traffic light with a 200 gallon tank full of pesticides [oc]",
        videoUrl: 'https://v.redd.it/hjfswwkkoxxf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '141',
        title: "Cuts in front of cop, followed by cop, then speeds in school zone.",
        videoUrl: 'https://v.redd.it/vo1jfuu0f12f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black/White', type: 'Police', isCammer: false }
        }
    },
    {
        id: '142',
        title: "Close one for a dummy on her phone.",
        videoUrl: 'https://v.redd.it/fhjaj4uyo3ae1/DASH_480.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '143',
        title: "Casually checking on the pets at home while at work. [OC]",
        videoUrl: 'https://v.redd.it/r8mr2kulc62f1/DASH_270.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '144',
        title: "guy was running from Georgia state patrol",
        videoUrl: 'https://v.redd.it/nevzzmgrhqse1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '145',
        title: "An unprotected left turn almost got me today",
        videoUrl: 'https://v.redd.it/yx06i3fd3jge1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '146',
        title: "Trucker flies through stale red and takes out three vehicles in New Jersey [OC]",
        videoUrl: 'https://v.redd.it/8bozdx6suc9f1/DASH_360.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '147',
        title: "Idiot in black car totals 3 cars [OC]",
        videoUrl: 'https://v.redd.it/ofv4y7hrtxae1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black', type: 'Car', isCammer: false }
        }
    },
    {
        id: '148',
        title: "Finally got a dash cam today and get into an accident a few hours later [OC]",
        videoUrl: 'https://v.redd.it/xg311ef5j1pf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '149',
        title: "Tesla pulls out in front of Jeep",
        videoUrl: 'https://v.redd.it/2e2qanxj4v7f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Tesla', isCammer: false }
        }
    },
    {
        id: '150',
        title: "Sprinter van in Rocky Mountain National Park 8/5/25",
        videoUrl: 'https://v.redd.it/i9hkgfhw2fhf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Van', isCammer: false }
        }
    },
    {
        id: '151',
        title: "she told me I had a yield sign.",
        videoUrl: 'https://v.redd.it/jvl84q018ihf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '152',
        title: "i’m a new driver and this scared the shit out of me [oc]",
        videoUrl: 'https://v.redd.it/7ye7vlci1fjf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '153',
        title: "Welp, there goes my pride and joy",
        videoUrl: 'https://v.redd.it/xopc05kte0nf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '154',
        title: "Finally got footage to share! My four month old car in a hit and run yesterday morning[OC]",
        videoUrl: 'https://v.redd.it/yr577ij9ux3f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '155',
        title: "Idiot reverses into the road and tries to sue ME (2 Years later, I win)",
        videoUrl: 'https://v.redd.it/ouq9ut0drsjf1/DASH_270.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '156',
        title: "I don’t think I’m going to buy a different car again after it stopped itself preventing...",
        videoUrl: 'https://v.redd.it/xpbscvqark1f1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '157',
        title: "Guy playing on phone at light goes nuts when he’s called out for it [OC]",
        videoUrl: 'https://v.redd.it/fxwrp45tryle1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '158',
        title: "Tallahassee, FL… Heading back to work from lunch",
        videoUrl: 'https://v.redd.it/a08ij679s9ef1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '159',
        title: "Cause waiting another 3 seconds to go behind me would be too hard [OC]",
        videoUrl: 'https://v.redd.it/xgas7ecy95pe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '160',
        title: "Why brake when you can use the car in front of you instead?",
        videoUrl: 'https://v.redd.it/qx6akimlntze1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '161',
        title: "He told the police he had the green light.",
        videoUrl: 'https://v.redd.it/cqkq1bugcwoe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black/White', type: 'Police', isCammer: false }
        }
    },
    {
        id: '162',
        title: "Bad drivers are bad [oc]",
        videoUrl: 'https://v.redd.it/gjj3g91ezvve1/DASH_720.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '163',
        title: "Slightly below average intelligence individual takes exit at 75mph trying to escape pol...",
        videoUrl: 'https://v.redd.it/en18pko0fgve1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '164',
        title: "Zipper Merge Blockade Strikes Again [oc]",
        videoUrl: 'https://v.redd.it/k6pv8jqt91pf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '165',
        title: "car turns right on red in front of the semi",
        videoUrl: 'https://v.redd.it/4l8tatvf2dtf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '166',
        title: "Idiot tries to drive on shoulder to cut line, learns lesson",
        videoUrl: 'https://v.redd.it/9vcelt50v8ue1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '167',
        title: "I was going 70 when I just see a car barreling at me from the opposite direction. It wa...",
        videoUrl: 'https://v.redd.it/o22sl9a4xtnf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '168',
        title: "Good thing I saw him out of my mirror last second. NSFW for language.",
        videoUrl: 'https://v.redd.it/lckp0bbx3p8e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '169',
        title: "She just parked like its her dads property. Then has the audacity to tell me i can easi...",
        videoUrl: 'https://v.redd.it/8hgl549autfe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '170',
        title: "Zipper Merging is Hard",
        videoUrl: 'https://v.redd.it/kmr92anxxjsf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '171',
        title: "Close call. Could've ended way worse [oc]",
        videoUrl: 'https://v.redd.it/akpzc1b9s7he1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '172',
        title: "Idiot passes on double yellow and almost causes head on collision [oc]",
        videoUrl: 'https://v.redd.it/1d5c23q5s6ye1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '173',
        title: "Idiot Cuts in Front of Me in Left Hand Turn Lane [OC]",
        videoUrl: 'https://v.redd.it/0f6s15ikb59f1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '174',
        title: "One of the slowest and silliest accidents I've seen in a long while",
        videoUrl: 'https://v.redd.it/bmmatx4xf65f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '175',
        title: "old man taps at his phone two-handed until he sways off the road",
        videoUrl: 'https://v.redd.it/ptvob52j1wkf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 5, other: 0, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '176',
        title: "Pulled out onto a 40mph road going 20, brake checked me because I had to hit my brakes ...",
        videoUrl: 'https://v.redd.it/vz5pih5c583f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '177',
        title: "Wrong way driver on Rt 303 Surprise, 6-13-25",
        videoUrl: 'https://v.redd.it/jyj0h6kpyy8f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '178',
        title: "Got hit by someone who decided to just drive off like nothing happened",
        videoUrl: 'https://v.redd.it/y5nwuqemmw3f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '179',
        title: "Trucker tries to run me off the road",
        videoUrl: 'https://v.redd.it/tykjw2b0p93e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '180',
        title: "Absolute clown (NSFW language)",
        videoUrl: 'https://v.redd.it/y1ssah3j2ktf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '181',
        title: "No light. No Stop. No Yield. No Merge. MOOOOVE, YOU IDIOT. [oc]",
        videoUrl: 'https://v.redd.it/c7i5exx4m4df1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '182',
        title: "Chick-fil-A road rage [oc]",
        videoUrl: 'https://v.redd.it/8rh4boj9y6af1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '183',
        title: "Welcome to the circus.",
        videoUrl: 'https://v.redd.it/o22mfngw54pe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '184',
        title: "\"But I had my blinker on! And you should have braked harder!\"",
        videoUrl: 'https://v.redd.it/yrjad4r2msye1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '185',
        title: "Stang thought he had it. Pulls in front of semi moving 35mph. Made me chuckle.",
        videoUrl: 'https://v.redd.it/0q7gb633a0ce1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '186',
        title: "When you are on your phone at a light and the car in front of you moves a bit.",
        videoUrl: 'https://v.redd.it/2347cucexuue1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '187',
        title: "dude came out of nowhere and didn’t give a fuck",
        videoUrl: 'https://v.redd.it/5u3gdlwr6obf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '188',
        title: "Finally got some use out of my new dashcam [oc]",
        videoUrl: 'https://v.redd.it/sgif8vw2x4qe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '189',
        title: "Moron does an illegal exit in front of a plainly visible patrol car",
        videoUrl: 'https://v.redd.it/10u81cz2ywre1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '190',
        title: "What not to do when you’re about to miss your exit [oc]",
        videoUrl: 'https://v.redd.it/tq6dmjw4lv8f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '191',
        title: "Registration expired. May not have insurance. We’re still sorting it out [OC]",
        videoUrl: 'https://v.redd.it/ylobnm4pkdoe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '192',
        title: "idiot was texting the store to tell them they were ready to pickup their order",
        videoUrl: 'https://v.redd.it/7h27lnf02elf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '193',
        title: "Would I be at fault if I was to hit this pedestrian?",
        videoUrl: 'https://v.redd.it/u904kpjzov9e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '194',
        title: "Stop pushing the gawd dam brake !!!",
        videoUrl: 'https://v.redd.it/zldbhg7brvyf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '195',
        title: "Car got hit while parked, Lady claims she tried avoiding a oncoming car.",
        videoUrl: 'https://v.redd.it/6lg07lphqvwe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '196',
        title: "Elderly woman driving like she's the only car on the road [oc]",
        videoUrl: 'https://v.redd.it/lij71rc4qdde1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '197',
        title: "My local idiot got instant justice the other day",
        videoUrl: 'https://v.redd.it/3y9cas3a1pcf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '198',
        title: "Person lost control merging on the highway. Probably on their phone.",
        videoUrl: 'https://v.redd.it/d14b0t5msgmf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '199',
        title: "Driver didn’t stay in his lane during a turn",
        videoUrl: 'https://v.redd.it/h43m1bkdypue1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '200',
        title: "Bro did NOT check his mirrors",
        videoUrl: 'https://v.redd.it/0v9fvjuigbzf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '201',
        title: "truck driver attempts forbidden move",
        videoUrl: 'https://v.redd.it/sv5ri1l3gjrf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '202',
        title: "Express lane toll was 50 cents",
        videoUrl: 'https://v.redd.it/5hq1k3c3z22f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '203',
        title: "Lifted truck with bald tires makes for a bad time in the rain.",
        videoUrl: 'https://v.redd.it/dr3jscsnlh7f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '204',
        title: "Guy doesn’t want me to merge in front of him",
        videoUrl: 'https://v.redd.it/9jrr3qisum3f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '205',
        title: "It’s never too late to get into the toll lane [OC]",
        videoUrl: 'https://v.redd.it/1flzb9afi01f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '206',
        title: "Managed to get in a wreck by himself [oc]",
        videoUrl: 'https://v.redd.it/zl1vuzodoq5f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '207',
        title: "And yes, she did blame me.",
        videoUrl: 'https://v.redd.it/zyyx0g5zirxf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '208',
        title: "White car hits pedestrian [OC]",
        videoUrl: 'https://v.redd.it/hg3fp5oj30tf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'White', type: 'Car', isCammer: false }
        }
    },
    {
        id: '209',
        title: "Tried to let guy in, rewarded with finger [OC]",
        videoUrl: 'https://v.redd.it/wpznk0klxx4f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '210',
        title: "Welcome to Houston, the city where everything is made up and laws don't matter",
        videoUrl: 'https://v.redd.it/qhkcol7im25e1/DASH_720.mp4?source=fallback',
        votes: { cammer: 5, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '211',
        title: "This Harley rider thought people would just move out of his way because he came in maki...",
        videoUrl: 'https://v.redd.it/gjfhra86x4re1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '212',
        title: "Aggressive Parking",
        videoUrl: 'https://v.redd.it/x8gqv9roug9f1/DASH_480.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '213',
        title: "Picked up my new car — got hit in a left-turn accident the next day [OC]",
        videoUrl: 'https://v.redd.it/fv5b7lylebye1/DASH_720.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '214',
        title: "Impatient lady hits fire truck",
        videoUrl: 'https://v.redd.it/ld1brr2dwv6e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '215',
        title: "Blind person tries to be a bully",
        videoUrl: 'https://v.redd.it/hhfvbymz03te1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '216',
        title: "You hate to see it. Those school buses just blend in so well.",
        videoUrl: 'https://v.redd.it/3vwp71cnm4uf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bus', isCammer: false }
        }
    },
    {
        id: '217',
        title: "Inattentive driver (didn't know what hit him) [OC]",
        videoUrl: 'https://v.redd.it/xo05b7bd60de1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '218',
        title: "Well, that was stupid [oc]",
        videoUrl: 'https://v.redd.it/2y5w90vzu09e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '219',
        title: "I love that they threw their hands up like it was my fault too.",
        videoUrl: 'https://v.redd.it/kfa5n4au30ue1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '220',
        title: "Uber drivers who do this… at least hazard lights or something man…",
        videoUrl: 'https://v.redd.it/5dsma32oaoxf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '221',
        title: "85mph to 20mph in 2 seconds. THANK YOU Hawk HPS 5.0 [OC]",
        videoUrl: 'https://v.redd.it/9iej6wfahvmf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '222',
        title: "Please stop flagging people to turn across two lanes of traffic",
        videoUrl: 'https://v.redd.it/o3lpzcggct4f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '223',
        title: "This poor kid in the driver's seat is getting some questionable driving lessons from dad.",
        videoUrl: 'https://v.redd.it/3uun188p0qvf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 0, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '224',
        title: "SUV gets mad at bikers for running a light",
        videoUrl: 'https://v.redd.it/fi1w0udrdsnf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 2, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'SUV', isCammer: false }
        }
    },
    {
        id: '225',
        title: "BMW driver learns instant lesson in patience",
        videoUrl: 'https://v.redd.it/osu71yhqjlqf1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'BMW', isCammer: false }
        }
    },
    {
        id: '226',
        title: "The person in the blue car should not have a license. [OC]",
        videoUrl: 'https://v.redd.it/lyyhr8gjmi3e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Blue', type: 'Car', isCammer: false }
        }
    },
    {
        id: '227',
        title: "reckless driver doing stupid things to a pedestrian recording him",
        videoUrl: 'https://v.redd.it/dv1sunx3uu5e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '228',
        title: "happened in front of me today.",
        videoUrl: 'https://v.redd.it/coy68ccfup9e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '229',
        title: "i don’t even know what to say [oc]",
        videoUrl: 'https://v.redd.it/u4hv5q224fte1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '230',
        title: "Hit and Reverse on my white rav4[OC]",
        videoUrl: 'https://v.redd.it/nh5fmmyts21f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '231',
        title: "had to slow down for a deer, person that had been tailgating me for miles decided to go...",
        videoUrl: 'https://v.redd.it/xlvk6hbiu4xf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '232',
        title: "Sideswiped by an inattentive driver merging NSFW",
        videoUrl: 'https://v.redd.it/f2600sd87r2f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '233',
        title: "Car in front stops on a highway to let a car turn that does not have right of way, idio...",
        videoUrl: 'https://v.redd.it/hworjow1vlue1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '234',
        title: "USPS driver demolished our mailbox",
        videoUrl: 'https://v.redd.it/amclgq3cm0fe1/DASH_360.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '235',
        title: "Carpark lot stealers",
        videoUrl: 'https://v.redd.it/frv7mhyytgae1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '236',
        title: "Illinois I-88 West [oc]",
        videoUrl: 'https://v.redd.it/hoshrzmdef3f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '237',
        title: "Was prepared to dodge before the silver car even came close",
        videoUrl: 'https://v.redd.it/xvwrmwen87ve1/DASH_480.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Silver', type: 'Car', isCammer: false }
        }
    },
    {
        id: '238',
        title: "When saving 2 minutes is more valuable than life",
        videoUrl: 'https://v.redd.it/13xk9xnx0m4f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '239',
        title: "I almost pooped myself, I thought he was going to stop",
        videoUrl: 'https://v.redd.it/wckrdix2ia7f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '240',
        title: "Why didn't they just accelerate? (I was towing a 24' trailer, total weight 16,000lb. A ...",
        videoUrl: 'https://v.redd.it/ipxk9j9b6hqe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 6, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '241',
        title: "Irish police deploy stinger spikes on M9 motorway to stop joyriders in stolen car.",
        videoUrl: 'https://v.redd.it/bp779dqpskwe1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black/White', type: 'Police', isCammer: false }
        }
    },
    {
        id: '242',
        title: "I had this vehicle for like 2 months from new. [oc]",
        videoUrl: 'https://v.redd.it/t7nhsna2sj5e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '243',
        title: "Double stereotype decides to tailgate a cop car",
        videoUrl: 'https://v.redd.it/g0950mawiwcf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black/White', type: 'Police', isCammer: false }
        }
    },
    {
        id: '244',
        title: "Got hit by uninsured idiot",
        videoUrl: 'https://v.redd.it/ij08br41tzie1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '245',
        title: "What the hell is going on? . . . Oh. [oc]",
        videoUrl: 'https://v.redd.it/jd71sj38serf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '246',
        title: "Tow driver was on his phone and ran a red",
        videoUrl: 'https://v.redd.it/ffwt4q67flof1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '247',
        title: "Idiot tries to prevent zippering... I HATE this, everyone is always doing this! You don...",
        videoUrl: 'https://v.redd.it/7b79gnawqkle1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '248',
        title: "Top 10 Ways to Die: Brake Checking Edition [OC]",
        videoUrl: 'https://v.redd.it/4wlzjqkyvyqe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '249',
        title: "Thank god the semi behind me was quick on the brakes! Need a rear dashcam",
        videoUrl: 'https://v.redd.it/d2ocwyckkuxe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '250',
        title: "Idiot runs through a pedestrian crosswalk, nearly hitting person helping his family cross.",
        videoUrl: 'https://v.redd.it/0e47u7bm5xdf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '251',
        title: "Thought I was getting cut off, but it turns out I was just crime adjacent instead.",
        videoUrl: 'https://v.redd.it/nkua6sjxmz5f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '252',
        title: "Tried to push me off the road or what? What's the point of doing this? Child is in the ...",
        videoUrl: 'https://v.redd.it/vvnq3oy1k14e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '253',
        title: "Moron runs me across 4 lanes and doesn’t look or hit the brakes even once.",
        videoUrl: 'https://v.redd.it/3q4gc1qkqaif1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '254',
        title: "No idea what I did to deserve that. I'm just trying to go home!",
        videoUrl: 'https://v.redd.it/6zslbo6jp5rf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '255',
        title: "This totaled my car..",
        videoUrl: 'https://v.redd.it/s4q2whn3tdoe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '256',
        title: "My fault I didn't see that he put his turn signal on [oc]",
        videoUrl: 'https://v.redd.it/1w1rzco4cfre1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '257',
        title: "Why these people have a driver license?",
        videoUrl: 'https://v.redd.it/gm1ioqz39rjf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '258',
        title: "Thankfully I had my eye on this jack@ss",
        videoUrl: 'https://v.redd.it/ir3s8vk82soe1/DASH_720.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '259',
        title: "just a slight bump and it’s over",
        videoUrl: 'https://v.redd.it/89xzds19v1cf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 3, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '260',
        title: "Impatient driver decides they want to go now.",
        videoUrl: 'https://v.redd.it/bi3mhqhq9ief1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '261',
        title: "Lady in a pickup brake checks me in Pleasant Hill, CA because I passed her. I passed he...",
        videoUrl: 'https://v.redd.it/o2k1dno5nmnf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '262',
        title: "Never have I been so pissed and relieved at the same time. [OC]",
        videoUrl: 'https://v.redd.it/xrzu8mdn1zcf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '263',
        title: "Masshole drivers at its finest",
        videoUrl: 'https://v.redd.it/nqrfkrfw1n3f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '264',
        title: "My dashcam catches a poor lady getting hit by an idiot looking at his phone during walk...",
        videoUrl: 'https://v.redd.it/33pu4jt6jc0f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '265',
        title: "Sipping coffee at roundabout. Jumps out and tells me it was my fault.",
        videoUrl: 'https://v.redd.it/u2n9vjnyumhf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '266',
        title: "tesla driver hits oncoming traffic head on",
        videoUrl: 'https://v.redd.it/d5vfactidoue1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Tesla', isCammer: false }
        }
    },
    {
        id: '267',
        title: "Free advertisement",
        videoUrl: 'https://v.redd.it/spbhqvzlwsle1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '268',
        title: "Who reverses in a round-about? [oc]",
        videoUrl: 'https://v.redd.it/88g3fgkxqi2e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '269',
        title: "Woman trying to insurance scam Amazon in a town near me.",
        videoUrl: 'https://v.redd.it/lc3lyd5qflbe1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '270',
        title: "Red lights and turn lanes are optional now [oc]",
        videoUrl: 'https://v.redd.it/fsinjo7hugde1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '271',
        title: "I think i caught some guy trying insurance fraud. first he abruptly stopped infront of ...",
        videoUrl: 'https://v.redd.it/vugd8o1eya0g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '272',
        title: "This Idiot Almost Got Me... [OC]",
        videoUrl: 'https://v.redd.it/fq1o3sylrqme1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '273',
        title: "Idiot in a truck",
        videoUrl: 'https://v.redd.it/j22ucnzqo03f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '274',
        title: "Probably best not to cut off a cop by making a left turn from the right lane",
        videoUrl: 'https://v.redd.it/bnieh1x89gze1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Black/White', type: 'Police', isCammer: false }
        }
    },
    {
        id: '275',
        title: "Some say inexperience...some say idiocy...",
        videoUrl: 'https://v.redd.it/0xiatcx756ge1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '276',
        title: "Please have a coffee before your morning commute",
        videoUrl: 'https://v.redd.it/fqgulvumvrre1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 5, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '277',
        title: "Why would they do that [OC]",
        videoUrl: 'https://v.redd.it/prnhsc41hcyf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 3, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '278',
        title: "School bus runs red light [oc]",
        videoUrl: 'https://v.redd.it/njg9501qfe2f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bus', isCammer: false }
        }
    },
    {
        id: '279',
        title: "Truck getting passed on the right by oversized load. Can’t see tire sitting in the road",
        videoUrl: 'https://v.redd.it/l86kmiqtkywe1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '280',
        title: "my dash cam saved me from a ticket",
        videoUrl: 'https://v.redd.it/pmq8yy9e43gf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '281',
        title: "Near miss",
        videoUrl: 'https://v.redd.it/p03exlvv161g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '282',
        title: "witness said I slammed on my brakes",
        videoUrl: 'https://v.redd.it/lt13as1al13f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '283',
        title: "Prius driver tries to run me off the road several times, also has a rear facing light b...",
        videoUrl: 'https://v.redd.it/c6okoujzndnf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '284',
        title: "I hit a deer in my nd miata",
        videoUrl: 'https://v.redd.it/ggiak5py4r5f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '285',
        title: "Rental totaled",
        videoUrl: 'https://v.redd.it/hgykv89sjl4f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '286',
        title: "My head hurt after this",
        videoUrl: 'https://v.redd.it/eeigf4rfwi8f1/DASH_360.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '287',
        title: "old man thinks he owns the road",
        videoUrl: 'https://v.redd.it/7i0w1gbi4xyf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '288',
        title: "She said she signaled. My dashcam said otherwise.",
        videoUrl: 'https://v.redd.it/26lhqe6y9nte1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '289',
        title: "she turned without notice then got mad at me for getting ahead",
        videoUrl: 'https://v.redd.it/k8i7n3rcxl6f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '290',
        title: "uBreakFix van breakchecks in East Hartford CT",
        videoUrl: 'https://v.redd.it/dc5aekag478f1/DASH_360.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Van', isCammer: false }
        }
    },
    {
        id: '291',
        title: "vehicle drove through a red light when I had a green light",
        videoUrl: 'https://v.redd.it/bxx8qe1mzk9e1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '292',
        title: "Dump truck driver not paying attention",
        videoUrl: 'https://v.redd.it/ol8tq0avkxlf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 7, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '293',
        title: "This is why you keep your dog on a leash or have an invisible fence. Unavoidable and tr...",
        videoUrl: 'https://v.redd.it/fw4rf09sozrf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '294',
        title: "Red light etiquette test: Would YOU take this free real estate?",
        videoUrl: 'https://v.redd.it/47x4m0m6k7hf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '295',
        title: "Who knew getting rear ended could turn into this?",
        videoUrl: 'https://v.redd.it/ygibhyowan0f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '296',
        title: "It was such a beautiful drive through the forest until....he just pulled out in front o...",
        videoUrl: 'https://v.redd.it/rccytpao00if1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '297',
        title: "Biker Hit Me.",
        videoUrl: 'https://v.redd.it/1tlzxa7zhi4f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 5, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bike', isCammer: false }
        }
    },
    {
        id: '298',
        title: "Everyone going the wrong way? Fine - I'll fix it myself",
        videoUrl: 'https://v.redd.it/1jkh8tygh3wf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '299',
        title: "Dodge duck dip dive and dodge",
        videoUrl: 'https://v.redd.it/2kryedqtk9xe1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '300',
        title: "To the person in the grey BMW…",
        videoUrl: 'https://v.redd.it/u991qmqunidf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'BMW', isCammer: false }
        }
    },
    {
        id: '301',
        title: "Car going speed limit in left lane took passing personally",
        videoUrl: 'https://v.redd.it/zagvqiluz6lf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '302',
        title: "a friend crashed my car.",
        videoUrl: 'https://v.redd.it/qq81kegao53f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '303',
        title: "After Driving over 2 hours to a job interview I get rear ended 5 mins from the place :/",
        videoUrl: 'https://v.redd.it/478jyvb5qp3f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '304',
        title: "[FL] Illegal U-turn by negligent truck driver in FL causes a car to crash into the load...",
        videoUrl: 'https://v.redd.it/8gww8zdsb9jf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '305',
        title: "Took an open spot at a red light. Fair game or foul?",
        videoUrl: 'https://v.redd.it/75mqbjjhj7hf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '306',
        title: "Bikers don’t like being passed",
        videoUrl: 'https://v.redd.it/n04xv9k3650f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 3, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bike', isCammer: false }
        }
    },
    {
        id: '307',
        title: "Mercedes drives through bicyclists in LA",
        videoUrl: 'https://v.redd.it/9w89sdgtz8be1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Mercedes', isCammer: false }
        }
    },
    {
        id: '308',
        title: "Easily avoidable accident causes rollover",
        videoUrl: 'https://v.redd.it/ki0z8d7k3sce1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 4, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '309',
        title: "Guy rear ended me so hard he ended up in front of me.",
        videoUrl: 'https://v.redd.it/pudbkg6r5vce1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '310',
        title: "[GA] Charger meets a truck trying to make a wide turn",
        videoUrl: 'https://v.redd.it/rzk7sztj2tgf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '311',
        title: "Crazy trucker tried to kill my mom and daughter.",
        videoUrl: 'https://v.redd.it/pyl8jmm8d2hf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 4, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '312',
        title: "5 people dead after pickup truck driver goes the wrong way down State Route 67 in Poway...",
        videoUrl: 'https://v.redd.it/hn7kml8qvhef1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '313',
        title: "[WA] this occurred in Auburn, WA yesterday",
        videoUrl: 'https://v.redd.it/qbliff78ukmf1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '314',
        title: "Van spins out in rainy weather",
        videoUrl: 'https://v.redd.it/3ilft5skxb1g1/CMAF_360.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Van', isCammer: false }
        }
    },
    {
        id: '315',
        title: "Taking out the trash",
        videoUrl: 'https://v.redd.it/wxtz6mafmtif1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '316',
        title: "Driver collides with tree, acts like it's no big thing.",
        videoUrl: 'https://v.redd.it/1040vg4hgjcf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '317',
        title: "Truck Driver vs. Height Barrier — Guess Who Wins",
        videoUrl: 'https://v.redd.it/9k42cw4ba7jf1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '318',
        title: "[WA] Stopped for a deer and her babies — this guy apparently didn’t think they were wor...",
        videoUrl: 'https://v.redd.it/oaiysclark5f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '319',
        title: "If the car doesn't scare him, the pistol will",
        videoUrl: 'https://v.redd.it/p0iuggy643yf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '320',
        title: "[VA] Dangerous Hit and Run Driver causes car to roll over multiple times",
        videoUrl: 'https://v.redd.it/ywr19dbno8zf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '321',
        title: "Red light runner hits a school bus!",
        videoUrl: 'https://v.redd.it/ubnfaca65m3f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bus', isCammer: false }
        }
    },
    {
        id: '322',
        title: "Jeep pulling out in front of semi truck hauling gravel causes a giant crash",
        videoUrl: 'https://v.redd.it/f8ghgir8lx9f1/DASH_720.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '323',
        title: "Lucky Close Call",
        videoUrl: 'https://v.redd.it/ab7cbgq2pb1f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '324',
        title: "Excuse me, I need to exit",
        videoUrl: 'https://v.redd.it/vgly28hlf8ye1/DASH_480.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '325',
        title: "Dodge charger crash resulting in one death, plus the arrest of the driver",
        videoUrl: 'https://v.redd.it/yo3nz3wigqsf1/DASH_360.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '326',
        title: "[NY] Bake check scammers",
        videoUrl: 'https://v.redd.it/7z2d3cfstb6e1/DASH_360.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '327',
        title: "Serious 240km/h crash in Beijing, no information on casualties yet.",
        videoUrl: 'https://v.redd.it/ogigd6lvzs0f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '328',
        title: "He didn't even pretend to hesitate for the yield sign at the roundabout. I'm pretty sur...",
        videoUrl: 'https://v.redd.it/3vm3widgrvee1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 4, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '329',
        title: "That escalated quickly..",
        videoUrl: 'https://v.redd.it/ejz1kh4o0xcf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 5, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '330',
        title: "Both Drivers in Right Turn Lanes. Guess Which One Doesn't Actually Turn",
        videoUrl: 'https://v.redd.it/aryko3qqkc8f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '331',
        title: "Cyclist runs red light and deals with the consequences.",
        videoUrl: 'https://v.redd.it/7l3qr6tj5l6f1/DASH_480.mp4?source=fallback',
        votes: { cammer: 3, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '332',
        title: "street crashing",
        videoUrl: 'https://v.redd.it/zw4os0dwosze1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'N/A', type: 'Witness', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '333',
        title: "How dare someone merge in front of this Chevy",
        videoUrl: 'https://v.redd.it/r57motxwfy6f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '334',
        title: "Just driving and singing until this happens!",
        videoUrl: 'https://v.redd.it/yddpp3w6qj0g1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '335',
        title: "[FL] BMW driver couldn't handle the power",
        videoUrl: 'https://v.redd.it/ov1m9i1w6lnf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'BMW', isCammer: false }
        }
    },
    {
        id: '336',
        title: "they tried to say I ran the light",
        videoUrl: 'https://v.redd.it/d4vq0bntcfgf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 6, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '337',
        title: "Road Sinkhole swallows moving car!",
        videoUrl: 'https://v.redd.it/yucnrvxonukf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 3, other: 1, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '338',
        title: "Why physics? WHY?",
        videoUrl: 'https://v.redd.it/endlz0thzyjf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 1, other: 0, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '339',
        title: "[NY] Clown tries to run me off the road for passing him. Best part is, his full name is...",
        videoUrl: 'https://v.redd.it/ox9ektf6z54f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 4, both: 3 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '340',
        title: "Los Angeles crest highway",
        videoUrl: 'https://v.redd.it/vvwp47yp32if1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '341',
        title: "Median gets Cyberstruck",
        videoUrl: 'https://v.redd.it/7s3r72pxwuve1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Truck', isCammer: false }
        }
    },
    {
        id: '342',
        title: "[VA] Captain Ego owns the road.",
        videoUrl: 'https://v.redd.it/d7fc68zcvsmf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '343',
        title: "[CA] The Biker isn't paying attention to the road.",
        videoUrl: 'https://v.redd.it/v053pjsfakdf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Bike', isCammer: false }
        }
    },
    {
        id: '344',
        title: "Wet HWY 50 in Sacramento.",
        videoUrl: 'https://v.redd.it/026u7antpn1g1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 1, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '345',
        title: "My first crash",
        videoUrl: 'https://v.redd.it/pfnawe893yxf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 3, both: 2 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '346',
        title: "People notice a tire in the middle of the road at night, one person states that someone...",
        videoUrl: 'https://v.redd.it/pk1tkphiffzf1/CMAF_720.mp4?source=fallback',
        votes: { cammer: 1, other: 3, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '347',
        title: "Whats the odds of being hit twice on the same side.",
        videoUrl: 'https://v.redd.it/kwghpvftnatf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 2, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '348',
        title: "Blew out her back window.",
        videoUrl: 'https://v.redd.it/j8ojekcwuz5f1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 1, other: 2, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '349',
        title: "Semi kills 3 in Ontario",
        videoUrl: 'https://v.redd.it/ubep4j1i9owf1/DASH_720.mp4?source=fallback',
        votes: { cammer: 0, other: 5, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Semi', isCammer: false }
        }
    },
    {
        id: '350',
        title: "Winter has arrived",
        videoUrl: 'https://v.redd.it/0g85r6cwu00g1/CMAF_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    },
    {
        id: '351',
        title: "Speeding vehicle goes airborne over car dealership in Indianapolis, Indiana (Two angles)",
        videoUrl: 'https://v.redd.it/pt4bvnzw0caf1/DASH_1080.mp4?source=fallback',
        votes: { cammer: 0, other: 1, both: 1 },
        vehicles: {
            cammer: { color: 'Unknown', type: 'Car', isCammer: true },
            other: { color: 'Unknown', type: 'Car', isCammer: false }
        }
    }
];
