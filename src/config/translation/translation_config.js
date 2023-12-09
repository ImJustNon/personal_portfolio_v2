import { navbarTranslation } from "./navbar/data";
import { homeTranslation } from "./home/data";
import { footerTranslation } from "./footer/data";
import { settingsTranslation } from "./settings/data";
import { socialsTranslation } from "./socials/data";
import { notfoundTranslation } from "./notfound/data";
import { activitiesTranslation } from "./activities/data";

export const resources = {
    en: {
        translation: {
            ...navbarTranslation.en,
            ...homeTranslation.en,
            ...footerTranslation.en,
            ...settingsTranslation.en,
            ...socialsTranslation.en,
            ...notfoundTranslation.en,
            ...activitiesTranslation.en,
        }
    },
    th: {
        translation: {
            ...navbarTranslation.th,
            ...homeTranslation.th,
            ...footerTranslation.th,
            ...settingsTranslation.th,
            ...socialsTranslation.th,
            ...notfoundTranslation.th,
            ...activitiesTranslation.th,
        }
    }
};
