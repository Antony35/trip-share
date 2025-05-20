import { formatDistance } from 'date-fns';

export default function formatRelativeTime(date) {
    return formatDistance(date, new Date(), {
        locale: {
            formatDistance: (token, count) => {
                const customFormat = {
                    lessThanXSeconds: `moins de ${count} secondes`,
                    xSeconds: `${count} secondes`,
                    halfAMinute: '30 secondes',
                    lessThanXMinutes: `moins de ${count} minutes`,
                    xMinutes: `${count} minutes`,
                    aboutXHours: `${count} heures`,
                    xHours: `${count} heures`,
                    xDays: `${count} jours`,
                    aboutXWeeks: `${count} semaines`,
                    xWeeks: `${count} semaines`,
                    aboutXMonths: `${count} mois`,
                    xMonths: `${count} mois`,
                    aboutXYears: `${count} ans`,
                    xYears: `${count} ans`,
                    overXYears: `plus de ${count} ans`,
                    almostXYears: `presque ${count} ans`,
                };
                return customFormat[token];
            },
        },
    });
}
