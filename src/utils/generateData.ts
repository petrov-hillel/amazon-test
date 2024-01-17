type Account = {
    accountId: number;
    email: string;
    authToken: string;
    creationDate: string;
    profiles: Profile[];
};

type Profile = {
    profileId: number;
    country: string;
    marketplace: string;
    campaigns: Campaign[];
};

type Campaign = {
    campaignId: number;
    clicks: number;
    cost: number;
    date: string;
};

export const generateAccountsProfilesAndCampaigns = (
    accountCount: number,
    profilesPerAccount: number,
    campaignsPerProfile: number
): Account[] => {
    const accounts: Account[] = [];

    for (let accountId = 1; accountId <= accountCount; accountId++) {
        const account: Account = {
            accountId,
            email: `user${accountId}@example.com`,
            authToken: `token${accountId}`,
            creationDate: new Date().toISOString(),
            profiles: [],
        };

        for (let profileIndex = 1; profileIndex <= profilesPerAccount; profileIndex++) {
            const profileId = account.profiles.length + 1;
            const profile: Profile = {
                profileId,
                country: 'Country',
                marketplace: 'Marketplace',
                campaigns: [],
            };

            for (let campaignIndex = 1; campaignIndex <= campaignsPerProfile; campaignIndex++) {
                profile.campaigns.push({
                    campaignId: profile.campaigns.length + 1,
                    clicks: Math.floor(Math.random() * 100) + 1,
                    cost: Math.random() * 100,
                    date: new Date().toISOString(),
                });
            }

            account.profiles.push(profile);
        }

        accounts.push(account);
    }

    return accounts;
};
