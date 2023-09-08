import { Badge, BadgeCounts, BadgeUser } from "types/types";


export function filterBadges(dbUsers: BadgeUser[]): {} | [] {

    let users = []

    for (const user of dbUsers) {
        const existingUser = users.find(u => u.name === user.name)
        if (!existingUser) users.push({ ...user._doc })
    }


    users = users.map(user => {
        const uniqueBadges: string[] = [];
        const badgeCounts: BadgeCounts = {};

        user.badges.forEach((badge: Badge) => {
            const badgeName: string = badge.badge;
            if (!uniqueBadges.includes(badgeName)) uniqueBadges.push(badgeName);
            if (!badgeCounts[badgeName]) badgeCounts[badgeName] = 0;
            badgeCounts[badgeName]++;
        });

        const updatedBadges = uniqueBadges.map(badgeName => ({
            badge: badgeName,
            count: badgeCounts[badgeName]
        }));

        return { ...user, badges: updatedBadges };
    });

    return users
}