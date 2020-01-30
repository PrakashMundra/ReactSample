export interface CampaignResponse {
    metadata: MetaData;
}

export interface MetaData {
    data: Campaign[];
}

export interface Campaign {
    name: string;
    description: string;
    image: Image;
}

export interface Image {
    url: string;
}
